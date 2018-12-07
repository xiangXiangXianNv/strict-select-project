import {
  RECEIVE_HEADERLIST,
  RECEIVE_SLIDESHOW,
  RECEIVE_POLICY,
  RECEIVE_SORTLIST,
  RECEIVE_ACTIVITYMODULE,
  RECEIVE_CATEGORYHOTSELL,
  RECEIVE_CATEGORYLIST,
  RECEIVE_FIndRecommend,
  RECEIVE_USER
} from "./mutation-types"
import {
  reqHeaderList,
  reqSlideShow,
  reqPolicyDescList,
  reqSortList,
  reqActivityModule,
  reqCategoryHotSell,
  reqCategoryList,
  reqFindRecommend
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
  saveUser({commit},user){
    commit(RECEIVE_USER,{user})
  },
}
