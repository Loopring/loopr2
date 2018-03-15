import request from '../common/request'
import Response from '../common/response'
import code from "../common/code"
import {generateAbiData, solSHA3} from '../ethereum/abi'
import validator from './validator'
import Transaction from '../ethereum/transaction'
import {toBN, toNumber, toHex, toBuffer, addHexPrefix} from "../common/formatter";
import {hashPersonalMessage, ecsign} from "ethereumjs-util"

let headers = {
  'Content-Type': 'application/json'
}

export async function getOrders(filter) {
  try {
    await validator.validate({value: filter.contractVersion, type: 'STRING'})
    await validator.validate({value: filter.pageIndex, type: 'OPTION_NUMBER'})
    await filter.market && validator.validate({value: filter.market, type: 'STRING'})
    await filter.owner && validator.validate({value: filter.owner, type: 'STRING'})
    await filter.orderHash && validator.validate({value: filter.orderHash, type: 'STRING'})
    await filter.pageSize && validator.validate({value: filter.pageSize, type: 'OPTION_NUMBER'})
  } catch (e) {
    console.error(e)
    return new Response(code.PARAM_INVALID.code, code.PARAM_INVALID.msg)
  }
  let body = {}
  body.method = 'loopring_getOrders'
  body.params = [filter]
  return request({
    method: 'post',
    headers,
    body,
  })
}

export async function getCutoff(address, contractVersion) {
  try {
    await validator.validate({value: address, type: 'STRING'})
    await validator.validate({value: contractVersion, type: 'STRING'})
  } catch (e) {
    console.error(e)
    return new Response(code.PARAM_INVALID.code, code.PARAM_INVALID.msg)
  }
  let body = {}
  body.method = 'loopring_getCutoff'
  body.params = [address, contractVersion, "latest"]
  return request({
    method: 'post',
    headers,
    body,
  })
}

export function generateCancelOrderTx({order, protocolAddress, gasPrice, gasLimit, nonce, chainId}) {

  validator.validate({value: order, type: "ORDER"});
  const tx = {};
  tx.to = protocolAddress;
  tx.value = "0x0";
  tx.data = generateAbiData({method: "cancelOrder", order});

  if (gasPrice) {
    tx.gasPrice = gasPrice
  }
  if (gasLimit) {
    tx.gasLimit = gasLimit
  }
  if (nonce) {
    tx.nonce = nonce
  }
  if (chainId) {
    tx.chainId = chainId
  }

  return tx
}

export function generateCancelAllOrdresTx({protocolAddress, timestamp, gasPrice, gasLimit, nonce, chainId}) {
  const tx = {};
  tx.to = protocolAddress;
  tx.value = "0x0";
  tx.data = generateAbiData({method: "cancelAllOrders", timestamp});

  if (gasPrice) {
    tx.gasPrice = gasPrice
  }
  if (gasLimit) {
    tx.gasLimit = gasLimit
  }
  if (nonce) {
    tx.nonce = nonce
  }
  if (chainId) {
    tx.chainId = chainId
  }

  return tx
}

export function generateCancelOrdersByTokenPairTx({timestamp, tokenA, tokenB, protocolAddress, gasPrice, gasLimit, nonce, chainId}) {
  const tx = {};
  tx.to = protocolAddress;
  tx.value = "0x0";
  tx.data = generateAbiData({method: "cancelOrdersByTokenPairs", timestamp, tokenA, tokenB});

  if (gasPrice) {
    tx.gasPrice = gasPrice
  }
  if (gasLimit) {
    tx.gasLimit = gasLimit
  }
  if (nonce) {
    tx.nonce = nonce
  }
  if (chainId) {
    tx.chainId = chainId
  }

  return tx
}

export function cancelOrder({order, privateKey, protocolAddress, gasPrice, gasLimit, nonce, chainId, walletType, dapth}) {
  const tx = generateCancelOrderTx({order, privateKey, protocolAddress, gasPrice, gasLimit, nonce, chainId})
  const transaction = new Transaction(tx);
  return transaction.send({privateKey, walletType, dapth})
}

export function cancelOrdersByTokenPair({privateKey, timestamp, tokenA, tokenB, protocolAddress, gasPrice, gasLimit, nonce, chainId, walletType, path}) {
 const tx = generateCancelOrdersByTokenPairTx({timestamp, tokenA, tokenB, protocolAddress, gasPrice, gasLimit, nonce, chainId})
  const transaction = new Transaction(tx);
  return transaction.send({privateKey, walletType, path})
}

export function cancelAllOrders({privateKey, protocolAddress, timestamp, gasPrice, gasLimit, nonce, chainId, walletType, path}) {
 const tx = generateCancelAllOrdresTx({protocolAddress, timestamp, gasPrice, gasLimit, nonce, chainId});
  const transaction = new Transaction(tx);
  return transaction.send({privateKey, walletType, path})
}

export async function placeOrder(order) {

  validator.validate({value: order, type: "Order"});
  let body = {};
  body.method = 'loopring_submitOrder';
  body.params = [order];
  return request({
    method: 'post',
    body,
  })
}

export function sign(order, privateKey) {
  validator.validate({value: privateKey, type: 'PRIVATE_KEY'});
  try {
    if (typeof privateKey === 'string') {
      validator.validate({value: privateKey, type: 'PRIVATE_KEY'});
      privateKey = toBuffer(addHexPrefix(privateKey))
    } else {
      validator.validate({value: privateKey, type: 'PRIVATE_KEY_BUFFER'});
    }
  } catch (e) {
    throw new Error('Invalid private key')
  }
  //TODO mock
  const newOrder = {}
  newOrder.amountB = "0x1bc16d674ec80000"
  newOrder.amountS = "0x1bc16d674ec80000"
  newOrder.authAddr = "0xa73090ae54e6ae22c40b5f0b4969febd2c9797fb"
  newOrder.authPrivateKey = "016680d107a3a30bd2488b6d9c2cb1843b7038dc8dfebf99bac6d8652caa2094"
  newOrder.buyNoMoreThanAmountB = false
  newOrder.lrcFee = "0xaf375e923aba500000"
  newOrder.marginSplitPercentage = 50
  newOrder.owner = "0xee0e807969e118b033dab40050618ee17f730a2b"
  newOrder.protocol = "0x6870830c79210e0fff6751d382938f4018b23f01"
  newOrder.tokenB = "0x2956356cD2a2bf3202F771F50D3D14A367b48070"
  newOrder.tokenS = "0xEF68e7C694F40c8202821eDF525dE3782458639f"
  newOrder.validSince = "0x5aaa33e1"
  newOrder.validUntil = "0x5ad1c0e1"
  newOrder.walletId = "0x1"


  const hash = getOrderHash(newOrder);
  console.log("hash hex:", toHex(hash))
  const signature = ecsign(hash, privateKey);
  const v = toNumber(signature.v);
  const r = toHex(signature.r);
  const s = toHex(signature.s);
  console.log("result:", {v, r, s})
  return {
    ...order, v, r, s
  }
}


export function getOrderHash(order) {

  validator.validate({value: order, type: 'RAW_Order'});
  const orderTypes = [
    'address',
    'address',
    'address',
    'address',
    'address',
    'uint',
    'uint',
    'uint',
    'uint',
    'uint',
    'bool',
    'uint',
    'uint8'
  ];
  const orderData = [
    order.protocol,
    order.owner,
    order.tokenS,
    order.tokenB,
    order.authAddr,
    toBN(order.amountS),
    toBN(order.amountB),
    toBN(order.validSince),
    toBN(order.validUntil),
    toBN(order.lrcFee),
    order.buyNoMoreThanAmountB,
    toBN(order.walletId),
    order.marginSplitPercentage
  ];
  const hash = solSHA3(orderTypes, orderData);
  console.log("nnnnnnnnnnn:", toHex(hash))
  const h = hashPersonalMessage(hash);
  //return hash
  console.log("mmmmmmmmmmm:", toHex(h))
  return h;
}
