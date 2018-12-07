<template>
    <div class="profile">
      <FindHeader>
        <div class="img-wrap header-center">
        </div>
      </FindHeader>
      <div class="personalContent" v-if="flag===0">
        <div class="logoWrap">
          <div class="logo">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
          </div>
          <div class="btn">
            <div class="phoneLogin" @click="toLogin(1)">
              <i class="iconfont icon-shouji"></i>
              <span>手机号码登录</span>
            </div>
            <div class="emailLogin" @click="toLogin(2)">
              <i class="iconfont icon-yonghuming"></i>
              <span>用户名密码登录</span>
            </div>
            <div class="register">
              <span class="text">手机号快捷注册</span>
              <i class="iconfont icon-jiantouarrow487"></i>
            </div>
          </div>
        </div>
        <div class="thirdWrap">
          <div class="wx item">
            <i class="iconfont icon-weixin"></i>
            <span>微信</span>
          </div>
          <div class="qq item">
            <i class="iconfont icon-qq"></i>
            <span>QQ</span>
          </div>
          <div class="wb item">
            <i class="iconfont icon-weibo"></i>
            <span>微博</span>
          </div>
        </div>
      </div>
      <div class="login-view" v-else>
        <div class="login_content">
          <div class="logoWrap">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
          </div>
          <form>
            <div :class="{on:flag===1}" v-show="flag===1">
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
                <button  :disabled="!isRightPhone || remainingTime > 0"
                         class="get_verification"
                         @click.prevent="sendCode"
                         :class="{switchColor:isRightPhone}">
                  {{remainingTime>0?`已发送 ${remainingTime} s`:'获取验证码'}}
                </button>
              </section>
              <section class="login_verification">
                <input type="tel" maxlength="8" placeholder="验证码">
              </section>
            </div>
            <div :class="{on:flag===2}" v-show="flag===2">
              <section>
                <section class="login_message">
                  <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
                </section>
                <section class="login_verification">
                  <input :type="isShowPwd?'tel':'password'" maxlength="8" placeholder="密码" v-model="pwd">
                  <div class="switch_button" :class="isShowPwd?'on':'off'" @click="isShowPwd=!isShowPwd">
                    <div class="switch_circle" :class="{on:isShowPwd}"></div>
                    <span class="switch_text" v-show="isShowPwd">123</span>
                  </div>
                </section>
                <section class="login_message">
                  <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                  <img ref="captcha" class="get_verification" src="http://localhost:5000/captcha" alt="captcha" @click="switchCaptcha">
                </section>
              </section>
            </div>
            <button class="login_submit" @click.prevent="login">登录</button>
          </form>
            <button class="other-login" @click="flag=0">其他登录方式</button>
        </div>
      </div>
    </div>
</template>

<script>
    import FindHeader from '../Find/FindHeader/FindHeader'
    import {Toast,MessageBox} from "mint-ui"
    import {reqSendCode,reqSmsLogin,reqLoginPwd} from '../../api'
    export default {
        name: "profile",
        components:{
          FindHeader
        },
        data(){
          return {
            flag : 0,   //用来标识显示短信登陆界面还是密码登陆界面 1标识短信登陆界面, 2标识密码登陆界面
            remainingTime : 0,//用来标识剩余时间,如果时间为0则代表未发送消息,如果大于0则代表正在发送消息
            isShowPwd:false,//用来标识是否显示密码
            phone:"", //短信注册手机号
            code:"",//短信注册验证码
            name:"",//用户名密码注册,用户名
            pwd:"",//用户名密码注册,密码
            captcha:""//用户名密码注册,图片验证码
          }
        },
        computed:{
          //用来判断手机号是否正确
          isRightPhone(){
            return /^1\d{10}$/.test(this.phone)
          }
        },
        methods:{
            toLogin(flag){
              this.flag=flag;
            },
            async sendCode(){
              this.remainingTime=30;
              const id = setInterval(()=>{
                this.remainingTime--;
                if(this.remainingTime<=0){
                  this.remainingTime=0;
                  clearInterval(id);
                }
              },1000);
              //发送请求让后台请求容联发送验证码
              const result = await reqSendCode(this.phone);
              if(result.code===0){  //发送成功,提示文本信息发送信息成功
                Toast('请注意查看手机验证码');
              }else{ //发送失败,警告验证码发送失败
                MessageBox.alert('发送验证码失败');
                this.remainingTime=0
              }
            },
            async login(){
              const {flag,isRightPhone,phone,code,name,pwd,captcha,} = this;
              let result;
              //1. 进行前台验证  / 分为短信登陆和用户名密码登陆
              if(flag===1){  //短信登陆
                if(!isRightPhone){
                  MessageBox.alert('请输入正确的手机号码');
                }else if(code.length!==6){
                  MessageBox.alert('请输入正确的短信验证码');
                }
                /*2. 发送登陆请求*/
                result = await reqSmsLogin(phone,code);
                if(result.code!==0){
                  /*登陆失败*/
                  this.remainingTime=0;
                  MessageBox.alert(result.msg);
                }
              }
              else{  //用户名密码登陆
                if(!name){
                  MessageBox.alert('请输入正确的用户名');
                }else if(!pwd){
                  MessageBox.alert('请输入密码');
                }else if(captcha.length!==4){
                  MessageBox.alert('请输入正确的图形验证码');
                }
                /*2. 发送登陆请求*/
                result = await reqLoginPwd(name,pwd,captcha);
                if(result.code!==0){
                  /*登陆失败*/
                  /*重新刷新验证码图片*/
                  this.switchCaptcha();
                  MessageBox.alert(result.msg);
                }
              if(result.code===0){
                /*登陆成功后将返回的用户信息保存在状态中*/
                const user = result.data;
                console.log(user);
                this.$store.dispatch("saveUser",user);
                //跳转到个人中心界面
                this.$router.replace("/home")
              }
            }
            },
            switchCaptcha(){
              this.$refs.captcha.src = "http://localhost:5000/captcha?time="+Date.now();
            }
          },
        //在进入该组件之前进行控制路由
        beforeRouteEnter(to,from,next){
          next((component)=>{
            if(component.$store.state.user._id){
              next('/user');
            }else{
              next();
            }
          });
        }
    }
</script>

<style scoped lang="stylus">
  .profile
    .personalContent
      background-color #F2F5F4
      height 12.46rem
      margin-top 1rem
      .logoWrap
        height 7rem
        .logo
          height .88rem
          padding 1.6rem 0
          text-align center
          img
            width 2.66rem
            height .9rem
        .btn
          width 6.7rem
          padding 0 .4rem
          height 2.9rem
          margin-bottom 2.05rem
          .phoneLogin,.emailLogin
            background-color #b4282d
            width 6.66rem
            height 0.88rem
            line-height .88rem
            text-align center
            margin-bottom .32rem
            color #fff
            .iconfont
              font-size .35rem
              margin-right .16rem
              vertical-align middle
            span
              font-size .27rem
          .eLogin
            border .02rem #b4282d solid
            background-color #F2F5F4
            color  #b4282d
        .register
          text-align center
      .thirdWrap
        width 100%
        position absolute
        bottom 0.7rem
        left 0
        text-align center
        display flex
        justify-content center
        .item
          width 1rem
          height .4rem
          padding 0 .4rem
          color #7F7F7F
          &.wx,&.qq
            border-right .02rem #7F7F7F solid
            font-size 0.12rem
    .login-view
      .login_content
        width 90%
        margin auto
        .logoWrap
          height .88rem
          padding 1.4rem 0
          text-align center
          img
            width 1.9rem
            height .7rem
        >form
          >div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid #02a774
            .login_message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
                &.switchColor
                  color black
            .login_verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch_button
                font-size 12px
                border 1px solid #ddd
                border-radius 8px
                transition background-color .3s,border-color .3s
                padding 0 6px
                width 30px
                height 16px
                line-height 16px
                color #fff
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background #02a774
                >.switch_circle
                  position absolute
                  top -1px
                  left -1px
                  width 16px
                  height 16px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                  transition transform .3s
                  &.on
                    transform translateX(27px)
          .login_submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background rgb(180,40,45)
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .other-login
          display block
          width 100%
          height 42px
          margin-top 30px
          border-radius 4px
          color rgb(180,40,45)
          text-align center
          font-size 16px
          line-height 42px
          border 1px rgb(180,40,45) solid
          background-color white
</style>
