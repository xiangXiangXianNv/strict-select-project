import {
  RECEIVE_HEADERLIST,
  RECEIVE_SLIDESHOW,
  RECEIVE_POLICY,
  RECEIVE_SORTLIST,
  RECEIVE_ACTIVITYMODULE,
  RECEIVE_CATEGORYHOTSELL,
  RECEIVE_CATEGORYLIST,
  RECEIVE_FIndRecommend,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_NAVLIST,
  RECEIVE_RECOMMEND,
  RECEIVE_DAREN,
  RECEIVE_SEARCHLIST,
  RECEIVE_SHOPLIST,
  RECEIVE_TABLIST,
  RESET_SHIWULIST
} from "./mutation-types"
import {
  reqHeaderList,
  reqSlideShow,
  reqPolicyDescList,
  reqSortList,
  reqActivityModule,
  reqCategoryHotSell,
  reqCategoryList,
  reqFindRecommend,
  getUser,
  resetUser,
  reqNavList,
  reqRecommend,
  reqDaRen,
  reqSearchList,
  reqShopList,
} from "../api"
export default {
  async getCateList({commit},fn){
    const result = await reqHeaderList();
    const cateList = result.data;
    if(result.code===0){
      commit(RECEIVE_HEADERLIST,{cateList});
      typeof fn ==='function' && fn();
    }
  },
  async getSlideShow({commit},fn){
    const result = await reqSlideShow();
    const slideShow = result.data;
    if(result.code===0){
      commit(RECEIVE_SLIDESHOW,{slideShow});
      typeof fn ==='function' && fn();
    }
  },
  async getPolicy({commit},fn){
    const result = await reqPolicyDescList();
    const policys = result.data;
    if(result.code===0){
      commit(RECEIVE_POLICY,{policys});
      typeof fn ==='function' && fn();
    }
  },
  async getSortList({commit},fn){
    const result = await reqSortList();
    const sortList = result.data;
    if(result.code===0){
      commit(RECEIVE_SORTLIST,{sortList});
      typeof fn ==='function' && fn();
    }
  },
  async getActivity({commit},fn){
    const result = await reqActivityModule();
    const activityModule = result.data;
    if(result.code===0){
      commit(RECEIVE_ACTIVITYMODULE,{activityModule});
      typeof fn ==='function' && fn();
    }
  },
  async getCategoryHotSell({commit},fn){
    const result = await reqCategoryHotSell();
    const categoryHotSell = result.data;
    if(result.code===0){
      commit(RECEIVE_CATEGORYHOTSELL,{categoryHotSell});
      typeof fn ==='function' && fn();
    }
  },
  async getCategoryList({commit},fn){
    const result = await reqCategoryList();
    const categoryList = result.data;
    if(result.code===0){
      commit(RECEIVE_CATEGORYLIST,{categoryList});
      typeof fn ==='function' && fn();
    }
  },
  async getFindRecommend({commit},fn){
    const result = await reqFindRecommend();
    const findRecommend = result.data;
    if(result.code===0){
      commit(RECEIVE_FIndRecommend,{findRecommend});
      typeof fn ==='function' && fn();
    }
  },
  //保存用户
  saveUser({commit},user){
    commit(RECEIVE_USER,{user})
  },
  //自动登录
  async getUser({commit}){
    const result  = await getUser();
    const user = result.data;
    if(result.code===0) {
      commit(RECEIVE_USER, {user});
    }
  },
  //用户登出
  async logout({commit}){
    const result = await resetUser();
    if(result.code===0){
      commit(RESET_USER)
    }
  },
  //请求导航列表
  async getNavList({commit},fn){
    const result = await reqNavList();
    const navList = result.data;
    if(result.code==="200"){
      commit(RECEIVE_NAVLIST,{navList});
      typeof fn === 'function' && fn();
    }
  },
  async getSearchList({commit},{url,keywordPrefix}){
    const result = await reqSearchList({url,keywordPrefix});
    const searchList = result.data;
    if(result.code==='200'){
      commit(RECEIVE_SEARCHLIST,{searchList});
    }
  },
  async getShopList({commit},{url}){
    const result = await reqShopList({url});
    const shopList = result.data;
    if(result.code==='200'){
      commit(RECEIVE_SHOPLIST,{shopList});
    }
  },
  async getRecommend({commit},{url,page,cb}){
    const result = await reqRecommend({url,page});
    if(result.code==='200'){
      const recommend = result.data.result;
      commit(RECEIVE_TABLIST,{data:recommend});
      typeof cb ==="function"&&cb();
    }
  },
  async getDaRen({commit},{index,url,page,cb}){
    const result = await reqDaRen({index,url,page});
    if(result.code==='200'){
      const daren = result.data.result;
      commit(RECEIVE_TABLIST,{data:daren});
      typeof cb ==="function"&&cb();
    }
  },
  async getTabList({commit},{index,url,page}){
    const result = await reqDaRen({index,url,page});
    if(result.code==='200'){
      const daren = result.data.result;
      commit(RECEIVE_DAREN,{daren})
    }
  },
  async resetShiWuList({commit}){
    commit(RESET_SHIWULIST);
  },
}
