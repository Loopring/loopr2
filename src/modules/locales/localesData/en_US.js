export default {
  global: {
    all: 'All',
    market: 'Market',
    options: 'Options',
    amount: "{amount,number}",
    no_data:"No data",
    comingsoon:"Coming soon",
    wallet:"Wallet",
    yes:"Yes",
    no:"No",
    price:'Price',
    amount_label:'Amount',
    total:'Total',
    time:'Time',
  },
  version:{
    label:'Beta2',
    title:'Beta2',
    description:'LOOPRING.IO (Loopr2) is an open-sourced reference implementeation of a web-based non-custodial Ethereum wallet that enable users to trade ERC20 tokens using the Loopring Protocol. Before proceed, you should review the codebase. Loopr2 is not for for-profit product and the Loopring Foundation will not take responsiblity for any loss of your crypto-assets.',
    feedback:'Feedback',
    feedback_submit:'Report an issue',
    roadmap_label:'More Info',
    roadmap_title:'Wallet development roadmap',
    version:'Current Version',
    update_time:'Last Update',
  },
  feedback:{
    email_to:"help@loopring.org",
    email_subject:"Loopr Wallet Feedback",
    email_body:`
## ISSUES \n
Select Topics: Unlock Wallet | Generate Wallet | Bind Airdrop Addresses | Send/Receive | Trading | History Data | Others \n
Browser: Chrome | Safari | Internet Explorer | Others (please specify)\n
Operation System:\n
Your Ethereum address: (if applicable)\n
I've found some issues:
\n
\n
## SUGGESTIONS:\n
I got this great idea:
\n
\n
`,
  },
  navbar: {
    home: "Home",
    trade: "MARKETS",
    wallet: "WALLET",
    dex: "DEX",
    settings: "Settings",
    portfolio: "Portfolio",
    account: "Account",
    subs: {
      copy: 'Copy',
      copy_success: 'Copied successfully.',
      copy_failed: 'Failed to copy!',
      unlock: 'Unlock A Wallet',
      generate: 'Generate A Wallet',
      export: "Export Keystore",
      help: 'Help',
      tools: 'Tools',
      qrcode: 'QR Code',
      receive: 'Receive',
      send: 'Send',
      trade: 'Trade',
      airdrop: 'Airdrop',
      quit: 'Quit',
      address: 'Address',
      feedback: 'Feedback',
    },
    refresh_page_tip_title:"Why do u have to unlock wallet again after refreshing/closing the page?",
    refresh_page_tip_description:"Under the consideration of asset safety, Loopr shall not keep any of your wallet information.",
  },
  order: {
    buy: 'Buy',
    sell: 'Sell',
    receive: 'Receive',
    convert: "Convert",
    buying: "You are buying",
    selling: "You are selling",
    lrcfee: "LRC Fee",
    margin: "Margin Split",
    since: "Valid Since",
    till: "Valid Until",
    raw: "Raw Order",
    sign: "Sign",
    signed: "Signed Order",
    place_tip: "Order submission is free and does not cost Ether",
    placing_order: "Placing order",
    place_success: "Order placed successfully.",
    place_success_tip: 'Good job. Your order has been submitted for ring-matching.',
    place_warn: "Your order can not be fully filled.",
    balance_not_enough: 'In order for your order to be fully filled, {amount} more {token} is required.',
    submit: "Submit Order",
    confirm_cancel_order: "Do you want to cancel this order?",
    confirm_cancel_all: "This operation will cancel all the {pair} orders. Do you want to proceed?",
    cancel_order_success: "Your order has been cancelled.",
    cancel_order_failed: "Woops, order cancellation somehow failed.",
    cancel_all_success: "All your {pair} orders have been cancelled.",
    cancel_all_failed: "Woops, order cancellation somehow failed.",
    yes: "Confirm",
    no: "Cancel",
    cancel_all: "Cancel All",
    refresh: "Refresh",
    buy_token:"Buy {token}",
    receive_token:"Receive {token}",
    convert_token:"Convert {token}"
  },
  ticker: {
    last: 'Last Price',
    change: 'Change',
    low: 'Low',
    high: 'High',
    vol: 'Volume',
    market: 'Market',
    favorites: 'Favorites',
  },
  exchanges: {
    loopr: 'Loopring DEX Price',
    binance: 'Binance Price',
    okex: 'OKEx Price',
    huobi: 'Huobi Price',
  },
  home: {
    title: 'Loopr',
    subtitle: 'A non-custodial Ethereum wallet and Loopring DEX.',
    beta_notification_title:'Can\'t wait to trade with Loopring?',
    beta_notifycation_content: 'Loopr wallet is still in its beta. Test with great caution!'
  },
  buttons: {
    unlock_wallet: 'Unlock a Wallet',
    generate_wallet: 'Generate a Wallet',
    try_demo: 'Demo (Watch-Only)',
  },
  tabs: {
    my_open_orders: 'Open Orders',
    my_recent_trades: 'Recent Trades',
    my_portfolio: 'Portfolio',
    my_assets: 'Assets',
    my_orders: 'Orders',
    my_trades: 'Trades',
  },
  txs: {
    title: 'Transactions',
    status: 'Status',
    status_pending: 'Pending',
    status_success: 'Succeeded',
    status_failed: 'Failed',
    type: 'Type',
    type_transfer: 'Send',
    type_convert: 'Convert',
    buy: "Buy",
    type_convert_title_eth: 'Convert to WETH',
    type_convert_title_weth: 'Convert to ETH',
    type_receive: 'Receive',
    type_enable: 'Enable',
    type_enable_title: "Enabled {symbol} to Trade",
    type_transfer_title: "Sent {symbol}",
    type_receive_title: "Received {symbol}",
    cancel_order: 'Canceled Order',
    cancel_all: 'Canceled All Orders',
    cancel_pair_order: "Canceled All {pair} Orders",
    others: "Others",
    balance_not_enough: "Your balance is insufficient!",
    value: "Value",
    tx_hash: "Tx Hash",
    block_num: "Block#",
    to: "To",
    confirm_time: "Confirm Time",
    tx_detail: "Transaction Details",
    success: "Succeeded",
    failed: "Failed",
    pending: "Pending",
    no_txs:'No data',
    resend:"Resend",
    resend_tips:"Increase gas price and resend this tx if you want it to be confirmed earlier. Only one of the two transactions will be confirmed, and only one transaction will be charged.",
    not_resend_tips:"Tx has already been confirmed, it doesn't need to be resent. ",
    resend_success:"Resent Successfully",
    resend_failed:"Resent Failed",
    can_not_resend:"Can't not resend",
    not_detail:"Can't get detail information of this tx.",
    resend_title:"The tx has not been confirmed for a long time."
  },
  orders: {
    order: "Order",
    time: "Time",
    market: 'Market',
    status: 'Status',
    status_opened: 'Open',
    status_completed: 'Completed',
    status_canceled: 'Cancelled',
    status_expired: 'Expired',
    side: 'Side',
    side_sell: 'Sell',
    side_buy: 'Buy',
    create_time: 'Created',
    update_time: 'Updated',
    amount: 'Amount',
    price: 'Price',
    total: 'Total',
    LrcFee: 'Trading Fee',
    LrcReward:'Trading Reward',
    filled: 'Filled',
    options: "Options",
    balance_not_enough: "Your {token} balance is insufficient!",
    balance: "Balance",
    required: "Required",
    lacked: "Lacked",
    receive: "Receive {token}",
    buy: "Buy {token}",
    convert: "Convert to WETH",
    token_not_enough: "Your token balance is insufficient!",
    sell_amount: 'Sell Amount',
    buy_amount: 'Buy Amount',
    order_detail: "Order Details",
    basic_detail:"Basic Details",
    fill_detail:"Fill Details"
  },
  settings: {
    preference: "Preferences",
    trade: "Trading",
    relay: "Relays",
    language: "Language",
    currency: "Currency",
    timezone: "Timezone",
    reset: "Reset",
    contract: "Protocol Version",
    ttl: "Order Time-To-Live",
    ttl_tip: "Please provide an integer value",
    lrcfee: "Trading Fee (LRC)",
    margin: "Default Margin Split",
    gasPrice: "Default Gas Price",
    slow: "Slower",
    fast: "Faster",
    edit: "Edit",
    save: "Save",
    delete: "Delete",
    addRelay: "Add Custom Relay",
    editRelay: "Edit Relay",
    chooseRelay: "Choose a relay",
    relayName: "Relay Name",
    relayUrl: "Relay URL",
    select: "Select"
  },
  trade: {
    orderForm: "Order Form",
    sell: "Sell",
    buy: "Buy",
    order_book:'Order Book',
    trade_history:'Trade History',
    balance: "Balance",
    price: "Price",
    price_verification_message: "Please input a valid price",
    amount: "Amount",
    amount_verification_message: "Please input a valid amount",
    available_amount: "Available Amount",
    available: "available",
    total: "Total",
    advanced: "Advanced",
    time_to_live: "Expire in",
    more: "More",
    popular_option: "Less",
    integer_verification_message: "Please input an integer value",
    second: "Second",
    minute: "Minute",
    hour: "Hour",
    day: "Day",
    week: "Week",
    month: "Month",
    lrc_fee: "Trading Fee",
    margin_split: "Margin Split",
    place_order: "Place Order",
    unlock_your_wallet: "Unlock a Wallet",
    to_trade: "Trade",
    lrcFee_increased: "We need to increase your order's trading fee from {userSet}LRC to a minimum of {increased}LRC. Do you want to continue?",
    notice: "Please notice",
    placing_order: 'Placing Order',
    place_order_failed: "Woops, order submission somehow failed!",
    not_inWhiteList:"Woops, your account has not been whitelisted for this action!",
    not_allow:"LOOPRING.IO (Loopr2) is still in its beta, please come back later when it's ready for more people to use.",
    you_should_do_things: "You should do things followed",
    failed_reasons: "Causes of failure:",
    why: "Why",
    balance_not_enough: 'Balance insufficient. At leaset {required} {token} is required.',
    receive: 'Receive',
    to_buy: 'Buy',
    time_to_live_input_place_holder: 'We recommend to set it between 1 hour and 1 day.',
    ring: "Ring",
    tips_time_to_live: "Your order is valid for a specified period known as Time-To-Live (TTL) and will expire automatically. Use this value to avoid canceling orders explicitly to save yourself some Ether. We recommend using amount between one hour and one day.",
    tips_lrc_fee: "The total fee in LRC to pay ring-miners to find counterparty orders that your order can trade with. The higher the fee is, the more likely and quicker your order will be matched and filled.",
    tips_margin_split: "If your account does not have enough LRC to pay miners, you can choose margin split to pay LRC Fee.</br>You can only choose either Margin Split or LRC Fee to pay the miners, so do not worry about double spending.</br>We do not recommend you modify this value unless you have fully understood its mechanism.",
    confirm_warn_ledger: "Please confirm transaction on your Ledger device, then come back to continue",
    confirm_warn_trezor: "Please confirm transaction on your Trezor device , then come back to continue",
    confirm_warn_metamask: "Please confirm transaction on your MetaMask browser extension, then come back to continue",
    place_order_trezor_unsupport: 'Could Not Place Order',
    place_order_trezor_unsupport_tips: 'When you place order we will send your order to relay with signature, but Trezor temporarily does not support sign messages, so when you unlock with Trezor is unable to place an order, but wallet operations(transfer, etc.) is not affected',
    place_order_watch_only_tips: 'You unlocked wallet with address only that could not sign orders, you could use other way to unlock and place order',
    custom_option_fee:'Set option for This Order',
    custom_lrc_fee_title:'Adjust Trading Fee',
    custom_time_to_live_title:'Adjust Order Time-To-Live',
    send_failed: 'Place Order Failed !',
    failed_fetch_data:'Failed fetch data from server, you could wait a moment and come back later',
    eth_is_required:'ETH is required to pay Ethereun transaction fees, calculated with your current order cost that need to send Ethereum transactions, totally required {required} ETH.',
    lrcfee_is_required:'LRC is required to pay trade fees, added on your history orders need LRC, totally required {required} LRC.',
    not_supported_token_to_trade_title:'{token} Is Not Supported To Trade Now',
    not_supported_token_to_trade_content:'Please look forward to opening more markets',
    not_allowed_place_order_worth_title: 'Order Amount Is Too Small',
    not_allowed_place_order_worth_content: 'Due to your total worth less than {worth}, you could not place this order',
    not_supported_market_title: "Not Supported Market",
    not_supported_market_content: "{market} is not supported market",
    current_lrc_fee_ratio:'LRC Fee Ratio',
    current_lrc_fee: 'LRC Fee'
  },
  trades: {
    side: 'Side',
    side_sell: 'Sell',
    side_buy: 'Buy',
  },
  token: {
    convert_title: "Convert",
    amount: "Amount",
    amount_verification_message: "Please input valid amount",
    convert_max: "Convert Max",
    min_gas_remain_warn: "0.1 ETH is reserved as gas so that you can send additional transactions.",
    no_eth_balance_warn: "You do not or will not have sufficient ETH as gas for sending transactions.",
    convert_confirm: "Yes, Convert Now!",
    send_title: "Send",
    result_failed: "Your have failed {do} {amount} {token} - {reason}",
    completed: "Succeeded",
    result_success: "You have successfully {do} {amount} {token}",
    result_convert_success: "You have successfully convert {amount} {token}",
    result_transfer_success: "You have successfully send {amount} {token}",
    view_transaction: 'View Transaction on Etherscan.io',
    send_again: 'Send Again',
    convert_again: 'Convert Again',
    ethereum_address: "My Ethereum Address",
    copy: "Copy",
    copy_success: "Copy Successfully",
    copy_failed: "Copy Failed",
    send: "Send",
    recipient: "Recipient",
    eth_address_verification_message: "Invalid Ethereum address",
    send_max: "Send Max",
    transaction_fee: "Gas Fee",
    advanced: "Advanced",
    data: "Data",
    gas_limit: "Gas Limit",
    gas_price: "Gas Price",
    continue: "Continue",
    slow: "Slower",
    fast: "Faster",
    transfer_preview_title: "You are about to send",
    from: "From",
    to: "To",
    gas: "Gas",
    transfer_cancel: "No, Cancel It",
    transfer_send: "Yes, Send Now",
    to_confirm_title: "Waiting For Your Confirmation",
    to_confirm_ledger_content: "Please confirm transaction on your Ledger device",
    select_token: "Token",
    token_selector_placeholder: 'Select Token',
    token_select_verification_message: "Please select token to send",
    transfer_result_title: "Care about the result?",
    transfer_result_etherscan: "View transaction on Etherscan.io",
    transfer_again_title: "Want to do it again?",
    transfer_again_send: "Send Again",
    transfer_again_convert: "Convert Again",
    add_custom_token_tip:"Please input a valid address ",
    send_failed: 'Sending Failed!',
    convert_failed: 'Convertion Failed',
    recommended_value:"Recommended value:",
    convert_succ_notification_title: 'Convertion Succeeded!',
    transfer_succ_notification_title: 'Transfer Succeeded!',
    custum_gas_title:'Adjust Gas',
    custum_gas_content:'we advice you to set {gas}',
    custum_gas_advance_content:'we advice you to set GasLimit to {gasLimit}, set GasPrice to {gasPrice}',
    token_convert:'Convert {from} to {to}',
    gas_fast_setting: 'Fast Settings',
    gas_custom_setting: 'Custom Settings'
  },
  airdrop:{
    cost_eth_gas:"Binding address takes one Ethereum transaction.",
    goback:"Back",
    watch_only_not_allowed:"Watch-only mode cannot bind addresses.",
  },
  wallet: {
    bind_tip: "Airdrop Binding",
    cu_bind_address: "Current Bound Address",
    airdrop: "Airdrop",
    binding: "Address Bound successfully!",
    bind_type: "Type",
    type_tip: "Select Token to Bind",
    address_tip: "{project} address",
    get_address:"Where to get a {project} account",
    go_to:"Visit {project}",
    address: "Address",
    bind_address: "Bind",
    bound_address:"Bound {token} Address",
    no_bound:"No bound address found",
    to_bind_address: "Bind",
    to_edit: "Edit",
    bind_type_address: "Bind {type} Address",
    bind_address_confirm: "Bind your {project} address: {address} to your wallet?",
    bind_success:"Bind Successfully",
    bind_failed:"Bind Failed",
    loopring_on: "Loopring token on  {project}",
    neo: "NEO",
    qtum: "QTUM",
    unlock_tip: "How would you like to access your wallet",
    metamask: "MetaMask Wallet",
    trezor: "TREZOR",
    ledger: "Ledger Wallet",
    keystore: "Keystore",
    privateKey: "PrivateKey",
    mnemonic: "Mnemonic",
    no_wallet: "Don't have a wallet? Let's",
    generate_one: "generate one",
    error_title: "Error",
    failed_connect_ledger_title: 'Failed to connect with Ledger Wallet!',
    content_ledger_unlock_require_https: "Unlocking a Ledger hardware wallet is only possible on pages served over HTTPS",
    content_ledger_connect_failed: "Failed to connect with your Ledger device, you could follow these advices and have a try later. 1、Make sure your Ledger device has connected with your computer and unlocked. 2、Set this to 'yes': Settings->Browser support 3、Enter into Ethereum app",
    content_leder_locked: "Your Ledger seems to be locked",
    recommended: "Recommended",
    recommend_way: "This is a recommended way to access your wallet.",
    connect_to_ledger: "Connect to Ledger",
    failed_connect_metamask_title: 'Failed To Connect With MetaMask',
    content_metamask_mainnet: "We only support Ethereum mainnet when using MetaMask",
    title_metamask_logout: "Logout From MetaMask",
    content_metamask_logout: "We detected you have logged out from MetaMask, for your assets safety we have relocked your wallet",
    content_metamask_unlock_again: "We detected your computer or MetaMask network has changed, for your assets safety we have relocked your wallet, you should make sure your MetaMask is using MainNetwork and unlock your wallet again",
    content_metamask_install: "Your may need to install MetaMask extension to your browser first, please reload our page after installed",
    content_metamask_locked: "Failed to connect with MetaMask, please unlock and use",
    content_metamask_install_title:'You should install MetaMask first',
    content_metamask_locked_title:'You should unlock your MetaMask first',
    get_metamask: "Get MetaMask {browser} extension",
    get_metamask_visit: 'Visit MetaMask website',
    connect_to_metamask: "Connect To MetaMask",
    connect_to_metamask_not_supported_browser: "Your Browser do not support MetaMask, try Chrome instead",
    download_chrome: "Download Chrome",
    metamask_to_unlock: 'To Unlock MetaMask',
    metamask_to_install: 'To Install MetaMask',
    metamask_unlock_steps_title:'Steps You Should Do',
    metamask_unlock_refresh_button: 'All Done? Refresh Loopr',
    metamask_unlock_cancel_button: 'Cancel',
    metamask_unlock_step_install_title:'Install MetaMask',
    metamask_unlock_step_install_content:'Install MetaMask extension for your browser',
    metamask_unlock_step_unlock_title:'Unlock MetaMask',
    metamask_unlock_step_unlock_content:'To create an account or unlock with MetaMask',
    metamask_unlock_step_refresh_title:'Refresh Loopr',
    metamask_unlock_step_refresh_content:'Refresh Loopr wallet to enable MetaMask',
    recommend_tip: "This is a recommended way to access your wallet.",
    not_recommended: "Not Recommended",
    not_recommended_tip: "This is a NOT recommended way to access your wallet.",
    select_keystore: "Paste your keystore or select your keystore file",
    select_json: "Select JSON File",
    unlock: "Unlock",
    password: "Password",
    password_strength:"Password Strength",
    weak:"weak",
    average:"average",
    strong:"strong",
    connect_trezor: "Connect To Trezor",
    paste_mnemonic: "Paste Your Mnemonic Here",
    select_wallet: "Select Your Wallet Type",
    optional: "Optional",
    mnemonic_tip: "Please input valid phrase",
    paste_privatekey: "Paste Your PrivateKey Here",
    invalid_privateKey: "Invalid Private Key",
    select_account: "Select Your Account",
    custom_path:"Your custom path",
    select_address:"Select your address",
    no_address:"There aren't legal addresses",
    pre_page: "Previous Page",
    next_page: "Next Page",
    import:"Import",
    confirm: "Confirm",
    cancel: "Cancel",
    generate_wallet: "Generate Wallet",
    generate: "Generate Now",
    have_one: "Already have a wallet",
    to_unlock: "Unlock a Wallet",
    set_password: "Set a strong password",
    parse_failed:"Parse Keystore Failed",
    decrypt_failed:"Decrypt Keystore Failed",
    backup: {
      backup_wallet: "Backup Wallet",
      keystore: "Keystore",
      privatekey: "PrivateKey",
      mnemonic: "Mnemonic",
      not_lose: "Don't lose It",
      not_share: "Do not share it",
      not_recover: 'It cannot be recovered if you lose it',
      stolen: "Your funds will be stolen if you use this file on a malicious/phishing site.",
      backup: "Make a backup",
      backup_tip: 'Loopr doesn\'t keep a copy of your privatekey, keystore file, or mnemonic words. Make sure you back up these information immediately.',
      secure: "Secure it like the millions of dollars it may one day be worth.",
      download: "I understand, download the wallet file.",
      copy_mnemonic: "I understand, copy the mnemonic phrases.",
      copy_privatekey: "I understand, copy the privatekey.",
      wrong_password: "Wrong password~",
      input_password: "Please provide your password.",
      get_keystore: "Get Keystore",
      download_keystore: "Download Keystore File",
      copy_keystore: "Copy Keystore",
      enter_wallet_password: "Enter the wallet password",
      enter_password: "Enter a password to protect your wallet.",
      file_keystore: "File Keystore",
      text_keystore: "Text Keystore",
      qr_keystore: "Qrcode Keystore",
      leave_backup_page:"Go To My Wallet",
      confirm_to_leave_backup_page:"Are you certain not to back up the generated wallet?"
    },
    token: "Token",
    title_metamask_account_change: "Account changed in MetaMask",
    content_metamask_account_change: "Loopr detected your address in MetaMask has just changed. The old one is closed and the new one will be used instead.",
    old_weth_detect: "We detected you have some outdated WETH token, we strongly suggest you to convert them back to Ether",
    to_convert: "Convert",
    instruction_trezor: '',
    instruction_ledger: '',
    instruction_metamask: '',
    instruction_keystore: 'Unlocking keystore files in web pages can be dangerous. Proceed with caution.',
    instruction_mnemonic: 'Revealing your mnemonic phrases on web sites is highly dangerous. If the site is compromised or you accidentally visit a phishing website, your assets in all associated addresses can be stolen.',
    instruction_privatekey: 'Revealing your private key on web sites is highly dangerous. If the site is compromised or you accidentally visit a phishing website, your assets can be stolen.',
    instruction_address: 'If you simply want to check balances, transaction and trading histories, use this watch-only mode to avoid all potential security risks',
    nonce: 'Nonce',
    watch_only: 'Watch-Only',
    address_input_placeholder: 'Your address',
    unlock_by_address: 'Unlock with your address',
    invalid_eth_address: 'Invalid Ethereum address',
    unlocked_notification_title: 'Your wallet has been unlocked successfully.',
    unlocked_notification_content: 'Good job. Now you can experience the Loopr wallet. Be sure to let us know your feedback.',
    unlocked_by:'{type} Wallet',
    type_address:'Watch-Only',
    type_metamask:'MetaMask',
    type_trezor:'TREZOR',
    type_ledger:'Ledger Wallet',
    type_keystore:'KeyStore',
    type_mnemonic:'Mnemonic',
    type_privatekey:'PrivateKey',
    type_demo:'Demo Wallet',
    type_lock:'Locked Wallet',
    in_watch_only_mode_title:'Switched to Watch-only Mode',
    unlock_by_cookie_address_notification:'Loopr has switched your account to the watch-only mode, and your private-key is no longer available to the browser.  You\'ll need to unlock your wallet again to perform some operations.',
    in_watch_only_mode_content: 'Your account is still in the watch-only mode. To perform this operation, you need to unlock your wallet again.',
    in_demo_account_mode_content: 'You are now using demo account. To perform this operation, you need to unlock your wallet again.',
    continue_watch:'Continue Watch-Only',
  },
  demo:{
    badge_title:'Demo Wallet',
    badge_tip:'You are using a demo wallet in the watch-only mode',
    confirm_title: 'Try Loopr with a demo wallet',
    confirm_instruction: '❗️This demo wallet is a watch-only wallet; <br />🚫This demo wallet cannot bind airdrop addresses;<br />🚫This demo wallet cannot sign and send transactions;<br />🚫This demo wallet cannot trade.',
    confirm_btn: "Confirm",
    airdrop_not_allowed: "Demo wallet can not bind address for airdrop",
  },
  tokens: {
    hide_small_balances: " Hide tokens with small balance",
    only_show_favorites: "Only show my favorites",
    options: "Options",
    options_transfer: "Send",
    options_receive: "Receive",
    options_convert: "Convert",
    options_trade: "Trade",
    options_edit: "Edit",
    add_token: " Add Custom ERC20 Token",
    token_address: "Token Contract Address",
    token_name: "Token Name",
    token_symbol: "Token Symbol",
    token_digits: "Token Digits",
    confirm_save: "Save",
    save_successfully: "Token added successfully",
    supportToken: "This token has alredy been added.",
    add_token_failed: "Failed to read the token's information from Ethereum blockchain.",
    already_add: "This token has alredy been added."
  },
  portfolio: {
    total_value: "Total Value",
    asset_currency_ratio: "Ratio"
  },
  ring: {
    ring_info:"Ring Information",
    ring_detail:'Ring Details',
    ring_hash:"Ring Hash",
    ring_index:"Ring Index",
    miner:"Miner",
    total_lrc_fee:"Trading Fee (LRC)",
    total_split_fee:"Trading Fee (Margin-Split)",
    time:'Time',
    trade_amount:"Filled Amount",
    fee_recipient:"Fee Recipient",
    ring_more_info:"To learn more details about this ring, pleae visit https://ringinfo.io",
    no_ring:"No Such Ring"
  }
}
