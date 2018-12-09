### day01
 1. rem适配
 2. swiper没有引入样式导致轮播错误
 3. 设置背景图片时必须把background-size写在background后面,因为background是一个简写形式,会把background-size覆盖
 4. 父容器的高度不够,子元素的高度大于父元素的高度,底部有一个固定定位,最大的包含块设置了margin-bottom,可能还是会导致
有一部分内容会被底部挡住,因为父容器的高度不够,就会导致整个包含块的高度不够高
### day02
 1. 没有设置meta标签中的user-scalable=no属性,导致双击放大后出现布局有点乱.
 2. 中间有元素出现了margin-right的溢出,然后导致整个页面出现了水平滚动条.解决 : 去除最右侧的margin-right
### day03
 1. 如果加入混合,一定要把混合写在样式的第一行,因为如果写在后面的话很有可能覆盖之前的样式,例如:混合中是相对定位,而我
本身元素是需要固定定位.那么固定定位就会被覆盖掉
 2. commit的时候一定要注意 mutations-type一定不要写错了!!!!
## day04
 1. 判断返回数据的时候使用了typeof去判断一个对象和数组是否是object是非常严重的错误!!!!!因为数组的类型也是一个对象 

 2. v-for的优先级比v-if的优先级高

 3. axios发送post请求,如果是form-data数据的话,必须使用一个包将其转换成form-data数据

  - ```
    axios.post(url,qs .stringify({jobNumber: '430525', password: '123'}), {headers: {'Content-Type':'application/x-www-form-urlencoded'}});
    ```
## day05
  1. 在实现自动登陆的时候,如果session_id中返回拿不到对应的user,又没有进行判断的时候就会出现把状态中的
  user赋值为了undefined 
