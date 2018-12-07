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
export default {
  [RECEIVE_HEADERLIST](state,{cateList}){
    state.cateList = cateList;
  },
  [RECEIVE_SLIDESHOW](state,{slideShow}){
    state.slideShow = slideShow;
  },
  [RECEIVE_POLICY](state,{policys}){
    state.policys = policys;
  },
  [RECEIVE_SORTLIST](state,{sortList}){
    state.sortList = sortList;
  },
  [RECEIVE_ACTIVITYMODULE](state,{activityModule}){
    state.activityModule = activityModule;
  },
  [RECEIVE_CATEGORYHOTSELL](state,{categoryHotSell}){
    state.categoryHotSell = categoryHotSell;
  },
  [RECEIVE_CATEGORYLIST](state,{categoryList}){
    state.categoryList = categoryList;
  },
  [RECEIVE_FIndRecommend](state,{findRecommend}){
    state.findRecommend = findRecommend;
  },
  [RECEIVE_USER](state,{user}){
    state.findRecommend = user;
  },
}
