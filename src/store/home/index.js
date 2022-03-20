// 
import { reqCatgoryList,reqGetBannerList,reqFloorList} from "@/api"
// homeh模块小仓库
const state = {
    // state中数据默认初始值别瞎写，服务器返回的是对象，起始值就是对象，返回值是数组，起始值就是数组
    categoryList:[],
    // 轮播图的数据
    bannerList:[],
    // floor组件的数据
    floorList:[]
}
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList.slice(0, 15)
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
    GETFLOORLIST(state,floorList){
        state.floorList = floorList
    },
}
const actions = {
    // 通过api里面的接口函数调用，向服务器发请求，获取服务器数据
   async categoryList({commit}){
        let result= await reqCatgoryList()
        if(result.code == 200){
            commit('CATEGORYLIST',result.data)
        }
    },
    // 获取首页轮播图数据
    async getBannerList({commit}){
       let result = await reqGetBannerList()
        if(result.code == 200){
            commit('GETBANNERLIST',result.data)
        }
    },
    // 获取floor数据
    async getFloorList({commit}){
       let result= await reqFloorList()
       if(result.code==200){
        //    提交mutation
           commit('GETFLOORLIST',result.data)
       }
    },
}
// 计算属性
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}