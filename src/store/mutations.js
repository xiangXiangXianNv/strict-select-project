import {
  RECEIVE_HEADERLIST,
  RECEIVE_SLIDESHOW,
  RECEIVE_POLICY,
  RECEIVE_SORTLIST,
  RECEIVE_ACTIVITYMODULE,
  RECEIVE_CATEGORYHOTSELL
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
}
