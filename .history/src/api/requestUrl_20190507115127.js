import { mainApi } from './api'

export default {
    getToken : `${ mainApi }WXInterface/GetAccessToken`,
    getIndexData : `${ mainApi }BaseInfo/GetPHomeinfo`,
    goodLists : `${ mainApi }MerchantInfo/GetMchInfoList`,
    MerchantInfo : `${ mainApi }MerchantInfo/GetMchInfo`,
    getRechargeRule : `${ mainApi }MemCard/MemCard_GetInfoElastic`,
    cardMessage : `${ mainApi }MemCard/MemCard_GetInfoBase`,
    payMent : `${ mainApi }Bury/Bury`,
    GetProductClass : `${ mainApi }MerchantInfo/GetProductClass`,
    memUserInfo : `${ mainApi }MemCard/MemUserInfo`,
    memberList : `${ mainApi }MemCard/memberList`,
    memberCostRecord : `${ mainApi }MemCard/memberCostRecord`,
    MemCard_Recharge : `${ mainApi }MemCard/MemCard_Recharge`,
    getwxUserInfo : `${ mainApi }MemCard/getwxUserInfo`,
    MerchantAuth : `${ mainApi }MerchantInfo/MerchantAuth`,
    GetProductByClass : `${ mainApi }MerchantInfo/GetProductByClass`,
    getProductDetails : `${ mainApi }MerchantInfo/GetProductDetails`,
    getProductSKU : `${ mainApi }MerchantInfo/GetProductSKU`,
    downOrder : `${ mainApi }Order/Order`,
    orderList : `${ mainApi }Order/OrderList`,
    merchantFunction : `${ mainApi }MerchantInfo/merchantFunction`,
    orderDetails : `${ mainApi }Order/orderDetail`,
    getMerchantCode : `${ mainApi }MerchantInfo/getMerchantCode`,
    getDistributionMoney : `${ mainApi }takeOut/getDistributionMoney`,
    updateFormid : `${ mainApi }MemCard/updateFormid`
}