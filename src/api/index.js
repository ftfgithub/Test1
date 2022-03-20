// 当期的模块：API进行统一管理
import requests from "./request";
import mockRequests from './mockAjax'
// 三级联动的接口
// /api/product/getBaseCategoryList  get请求 无参数

// 发请求:axios发请求结果为promise对象
export const reqCatgoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })

// 获取banner（Home首页轮播图接口）
export const reqGetBannerList = ()=>mockRequests.get('/banner')

// 获取floor数据
export const reqFloorList = ()=>mockRequests.get('/floor')
   
// 获取搜索模块数据 :地址/api/list  请求方式post  需要带参数
// 当前的接口，给服务器传params至少是个空对象
export const reqGetSearchInfo = (params) => requests({ url:'/list',method:'post',data:params})

// 获取产品详情数据 URL:api/item/{skuId} 请求方式 get
export const reqGoodsInfo = (skuId) => requests({url:`/item/${skuId}`,method:'get'})

//将产品添加到购物车，或者更改有关产品的数量
///api/cart/addToCart/{ skuId }/{ skuNum }  POST
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post"})

// 获取购物车列表的数据接口
// URL：/api/cart/cartlist methods:get
export const reqCartList = () => requests({ url:'/cart/cartList',method:'get'})

// 删除购物车商品数据接口
// URL /cart/deleteCart/{skuId}  method:'delete'
export const reqDeleteCartById = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete'})

//修改产品状态接口 
// URL：/cart/checkCart/{skuId}/{isChecked}
export const reqUpdateCheckedByid = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' });

// 获取验证码 ---/api/user/passport/sendCode/{phone} get
export const reqGetCode = (phone) => requests({ url:`user/passport/sendCode/${phone} `,method:'get'})

// 用户注册 -----api/user/passport/register   post    phon,code,password
export const reqUserRegister = (data) => requests({ url: '/user/passport/register', data, method: 'post' })

// 登录接口 ------api/user/passport/login    post   phone password
export const reqUserLogin = (data) => requests({ url: '/user/passport/login', data, method: 'post' });

// 获取用户信息带着token向服务器要用户信息/user/passport/auth/getUserInfo
export const reqUserInfo = () => requests({ url: '/user/passport/auth/getUserInfo', method: 'get' });

// 退出登录/user/passport/logout
export const reqLogout = () => requests({ url: '/user/passport/logout', method: 'get' });

// 获取用户地址信息接口
export const reqAddressInfo = ()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'})

//交易页面获取订单购物车信息
export const reqOrderInfo = () => requests({ url: '/order/auth/trade', method: 'get' });


// 提交订单接口
// url: /api/order/auth/submitOrder?tradeNo={tradeNo}  method:post
export const reqSubmitOrder = (tradeNo, data) => requests({ url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})

// 获取支付信息
export  const reqPayInfo=(orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'})

// 获取支付订单状态
export const reqPayStatus = (orderId) => requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'})

// 获取个人中心
// /order/auth/{page}/{limit}   get
export const reqMyOrderList = (page, limit) => requests({ url: `/order/auth/${page}/${limit}`, method: 'get' });