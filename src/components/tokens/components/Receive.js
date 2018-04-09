import React from 'react';
import {Card, Input} from 'antd';
import QRCode from 'qrcode.react';
import copy from 'copy-to-clipboard';
import intl from 'react-intl-universal';
import Notification from 'Loopr/Notification'
import {getEstimatedAllocatedAllowance, getFrozenLrcFee} from 'Loopring/relay/utils'
import {toBig} from "Loopring/common/formatter";

const Search = Input.Search;
export default class Receive extends React.Component {

  state = {
    symbol: null,
    amount: 0
  };

  componentDidMount() {
    const {modal} = this.props;
    const {symbol} = modal;
    if (symbol) {
      const _this = this;
      const owner = window.WALLET.getAddress();
      getEstimatedAllocatedAllowance(owner, symbol.toUpperCase()).then(res => {
        if (!res.error) {
          const token = window.CONFIG.getTokenBySymbol(symbol);
          const orderAmount = res.result;
          if (symbol.toUpperCase() === "LRC") {
            getFrozenLrcFee(owner).then(response => {
              if (!response.error) {
                const lrcFee = response.result;
                const amount = toBig(orderAmount).plus(toBig(lrcFee)).div('1e' + token.digits).toFixed(token.precision);
                _this.setState({symbol, amount});
              } else {
                const amount = toBig(orderAmount).div('1e' + token.digits).toFixed(token.precision);
                _this.setState({symbol, amount});
              }
            })
          } else {
            const amount = toBig(orderAmount).div('1e' + token.digits).toFixed(token.precision);
            _this.setState({symbol, amount});
          }
        }
      });
    }
  }

  render() {
    const address = window.WALLET.getAddress();
    const {symbol,amount} = this.state;
    const copyToClipboard = (value) => {
      copy(value) ? Notification.open({
        message: intl.get('navbar.subs.copy_success'),
        type: 'success', size: 'small'
      }) : Notification.open({message: intl.get('navbar.subs.copy_failed'), type: "error", size: 'small'})
    };
    return (
      <Card title={intl.get('token.ethereum_address')}>
        <div className='text-center'>
          <div className='pt30 pb30 pr20 pl20'>
            <QRCode value={address} size={240}/>
            {symbol && <div className='fs3 color-black-1 mt10'>
              {intl.get('token.recommended_value')} {amount} {symbol.toUpperCase()}
            </div>}
          </div>
          <Search enterButton={intl.get('token.copy')} value={address} disabled onSearch={copyToClipboard}/>
        </div>
      </Card>

    );
  }
}



