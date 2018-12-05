import {
  RECEIVE_HEADERLIST,
  RECEIVE_SLIDESHOW,
  RECEIVE_POLICY,
  RECEIVE_SORTLIST,
  RECEIVE_ACTIVITYMODULE,
  RECEIVE_CATEGORYHOTSELL
} from "./mutation-types"
import {
  reqHeaderList,
  reqSlideShow,
  reqPolicyDescList,
  reqSortList,
  reqActivityModule,
  reqCategoryHotSell
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
}
