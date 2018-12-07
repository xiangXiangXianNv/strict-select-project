/*
* 包含n个接口函数的模块,专门去调用ajax发送请求
* 返回值是一个promise对象
* */
import ajax from "./ajax"
const BASE = "/api";
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
//请求热销数据
export const reqCategoryHotSell = () => {
  return ajax('/categoryHotSell')
};
//请求分类列表
export const reqCategoryList = () => {
  return ajax('/categoryList')
};
//请求findRecommend列表
export const reqFindRecommend = () => {
  return ajax('/findRecommend')
};

//请求findRecommend列表
export const reqSendCode = (phone)=>{
  return ajax(BASE+'/sendcode',{phone})
};
// 手机号验证码登陆
export const reqSmsLogin = (phone,code)=>{
  return ajax(BASE+'/login_sms',{phone,code},"POST")
};
// 用户名密码登陆
export const reqLoginPwd = (name,pwd,captcha)=>{
  return ajax(BASE+'/login_pwd',{name,pwd,captcha},"POST")
};
//实现自动登陆
export const getUser = ()=>{
  return ajax(BASE+'/userinfo')
};
//用户退出操作
export const resetUser = ()=>{
  return ajax(BASE+'/logout')
};
//请求识物组件中的导航列表
const BASE2='/you';
export const reqNavList = ()=>{
  return ajax(BASE2+'/topic/v1/find/getTabs.json')
};
//请求识物组件中的内容推荐列表数据
export const reqRecommend = ({url})=>{
  return ajax(BASE2+url);
};
//请求识物组件中的内容达人列表数据
export const reqDaRen = ({index,url,page})=>{
  let path = '';
  if(!index){
    path = ''
  }else{
    path = `?tabId=${index}&page=${page}`;
  }
  return ajax(BASE2+url+path);
};
//请求识物组件中的内容推荐列表数据
export const reqSearchList = ({keywordPrefix,url})=>{
  return ajax(BASE2+url,{keywordPrefix:keywordPrefix},"POST");
};


