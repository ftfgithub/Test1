import { reqGetSearchInfo } from "@/api"
// search模块小仓库
const state = {
    // 仓库初始数据
    searchList:{}
}
const mutations = {
    GETSEARCHLIST(STATE,searchList){
        state.searchList = searchList
    }
}
const actions = {
    // 获取search模块数据
    async getSearchList({commit},params={}){
        // reqGetSearchInfo这个函数在调用获取服务器数据的时候至少传递一个参数（空对象）
        // params形参：是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
        let result = await reqGetSearchInfo(params)
      if(result.code == 200){
          commit("GETSEARCHLIST", result.data)
      }
    }
}
// 计算属性，在项目当中，为了简化数据而生
// 可以把我们将来组建当中需要用的数据简化一下【将来组件获取数据就方便了】
// 当前形参的state是当前仓库中的state，并非大仓库的state
const getters = {
    goodsList(state){
        // 如果服务器的数据回来了是个数组
        // 假如没有网络|网络不给力 返回的是undefined
        // 新的计算属性的属性值至少是个数组
        return state.searchList.goodsList
    },
    trademarkList(state){
        return state.searchList.trademarkList
    },
    attrsList(state){
        return state.searchList.attrsList
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}