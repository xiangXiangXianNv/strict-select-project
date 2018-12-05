import Mock from "mockjs"
import msite from './msite.json'
Mock.mock('/headerList',{
  code:0,
  data:msite.cateList
});
Mock.mock('/slideshow',{
  code:0,
  data:msite.focusList
});
Mock.mock('/policyDescList',{
  code:0,
  data:msite.policyDescList
});
Mock.mock('/sortList',{
  code:0,
  data:msite.kingKongModule.kingKongList
});
Mock.mock('/activityModule',{
  code:0,
  data:msite.indexActivityModule
});
Mock.mock('/categoryHotSell',{
  code:0,
  data:msite.categoryHotSellModule
});

