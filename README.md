### day01
 1. rem适配
 2. swiper没有引入样式导致轮播错误
 3. 设置背景图片时必须把background-size写在background后面,因为background是一个简写形式,会把background-size覆盖
 4. 父容器的高度不够,子元素的高度大于父元素的高度,底部有一个固定定位,最大的包含块设置了margin-bottom,可能还是会导致
 有一部分内容会被底部挡住,因为父容器的高度不够,就会导致整个包含块的高度不够高
### day02
 1. 没有设置meta标签中的user-scalable=no属性,导致双击放大后出现布局有点乱.
 2. 中间有元素出现了margin-right的溢出,然后导致整个页面出现了水平滚动条.解决 : 去除最右侧的margin-right
