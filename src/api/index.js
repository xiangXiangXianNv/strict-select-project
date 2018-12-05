/*
* 包含n个接口函数的模块,专门去调用ajax发送请求
* 返回值是一个promise对象
* */
import ajax from "./ajax"
//请求头部列表
export const reqHeaderList = () => {
  return ajax('/headerList')
};
//请求轮播数据
export const reqSlideShow = () => {
  return ajax('/slideshow')
};
//请求轮哦
export const reqPolicyDescList = () => {
  return ajax('/policyDescList')
};
//请求分类数据
export const reqSortList = () => {
  return ajax('/sortList')
};
//请求特价数据
export const reqActivityModule = () => {
  return ajax('/activityModule')
};
//请求特价数据
export const reqCategoryHotSell = () => {
  return ajax('/categoryHotSell')
};



