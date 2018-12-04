### day01
 1. rem适配
 2. swiper没有引入样式导致轮播错误
 3. 设置背景图片时必须把background-size写在background后面,因为background是一个简写形式,会把background-size覆盖
 4. 父容器的高度不够,子元素的高度大于父元素的高度,底部有一个固定定位,最大的包含块设置了margin-bottom,可能还是会导致
 有一部分内容会被底部挡住,因为父容器的高度不够,就会导致整个包含块的高度不够高
