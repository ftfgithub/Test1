import { reqGoodsInfo,reqAddOrUpdateShopCart } from "@/api"
// 封装游客身份模块uuid--生成随机字符串（不能再变）
import {getUUID} from '@/utils/uuid_token'
const state ={
    goodInfo:{},
    // 游客临时身份
    uuid_token:getUUID()
}
const mutations={
    GETGOODINFO(state,goodInfo){
        state.goodInfo = goodInfo
    }
}
const actions={
    // 获取产品信息action
    async getGoodInfo({commit},skuId){
        let result = await reqGoodsInfo(skuId)
        if(result.code==200){
            commit('GETGOODINFO',result.data)
        }
    },
    // 将产品添加到购物车中
   async addOrUpdateShopCart({commit},{skuId,skuNum}){
    //    加入购物车返回的结构
    // 加入购物车之后（）发请求，前台将参数带给服务器
    // 服务器写入数据成功，并没有返回其他数据，只是返回code==200，代表这次操作是成功的
    // 因为服务器没有返回其余数据，因此仓库中不需要三连环存储数据
    let result = await reqAddOrUpdateShopCart(skuId,skuNum)
    // 当前的函数如果执行返回promise
    // 代表加入购物车成功
    if(result.code==200){
        return "ok"
    }else{
        // 加入购物车失败
        return Promise.reject(new Error('faile'))
    }
    }
}
const getters = {
    // 简化数据
   

    categoryView(state){
        // state.goodInfo初始状态为空，空对象的categoryName属性值undefined
        // 当前计算的categoryView属性至少是一个空对象，就不会爆红
        return state.goodInfo.categoryView || {}
    },
     // 简化产品信息的数据
    skuInfo(state){
        return state.goodInfo.skuInfo || {}
    },
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList||[]
    }
}
export default{
    state,
    actions,
    mutations,
    getters
}