<template>
    <div class="home">
     <!--***************************************首页上半部分********************************-->
      <div id="header">
        <div id="logo" style="text-align:center;width:20%;padding:15px;">
          <img alt="Vue logo" src="../assets/logo.png" style="width:20%;height:14%;"/>
          <span style="font-size:60px">易评</span>
        </div>
        <div id="menu">
          <a href="#homeContent">首页</a>
          <router-link to="./Detail">评价分析</router-link>
          <router-link to="./Contact">联系我们</router-link>
          <a id="signup" style="float: right; cursor:pointer" @click="showDiv('forSignUp')">注册</a>
          <a id="login" style="float: right; cursor:pointer" @click="showDiv('forSignIn')">登录</a>
          <a id="logout" style="float: right; cursor:pointer; display:none;" @click="logOut()">退出</a>
        </div>
      </div>
     <!--***************************************首页下半部分********************************-->    
      <div id="homeContent">
        <div class="picShow">
          <img src="https://raw.githubusercontent.com/WindyZYY/myPicSource/master/timgHKUKEOA9.jpg">
          <img src="https://raw.githubusercontent.com/WindyZYY/myPicSource/master/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190801174003.png">
          <img src="https://raw.githubusercontent.com/WindyZYY/myPicSource/master/%E7%9A%AE%E5%8D%A1%E4%B8%98.jpg">
        </div>
        <p>移动支付的广泛应用使得电商在最近几年已经成为很多用户购物的首选，
        用户在进行网购的时候大多会有查看评价区的习惯，以判断商品是否值得购买。</p>
        <p>但在面对<b>繁多</b>的用户评价时，用户需要一条一条的查看后作出判断显然不是很方便。</p>
        <p>因此，我们这款软件将对每一条评论进行<b>情感分析</b>后判断是好评还是差评，
        然后将统计结果进行<b>可视化展出</b>，那么将给用户的选择带来很大的便利。</p>
        <p>另外提供对评论区的<b>自动标签提取功能</b>，针对某件的商品的评论自动提取商品标签（如合身、舒适、尺码偏大等等），然后对商品的评论区按标签进行分类展示，如此用户就可以方便地选择相应的评论进行查看。</p>
        <p style="color:cornflowerblue">用户只需要登录账号，输入批量商品评论或商品链接，等待一定时间，即可看到智能分析结果。</p>   
      </div>
     <!--***************************************注册登录部分********************************-->
      <div id="bg_div" class="bg_shadow" @click="hideDiv()"></div>
      <div id="forSignIn" class="div_content" style="line-height:1;width:auto;height:auto;">
        <div style="text-align:center;font-size:28px; line-height:20%;">
          <p>登录</p>
          <p style="font-family:monospace;font-style:italic;">Sign In</p>
        </div>
        <input type="text" name="user_id" placeholder="用户名" v-model="userID" required><br>
        <input type="password" name="pwd" placeholder="密码" v-model="rePWD" required><br><br>
        <input type="checkbox" id="remInfo" style="float:left;" v-model="remember">
        <label for="remInfo" style="float:left;">记住密码</label>
        <label for="autoSignIn" style="float:right;">自动登录</label>
        <input type="checkbox" id="autoSignIn" v-model="autoS" style="float:right;"><br>
        <button style="font-size:24px;" @click="signIn()" @keyup.enter="signIn()">登录</button><br><br>
        <span style="float: left;color:blue;font-weight:800;cursor:pointer;" @click="changeView('forSignIn','forSignUp')">新用户注册</span>
        <span style="float: right;color:rgb(161, 159, 159);cursor:pointer;">忘记密码</span>
      </div>
      <div id="forSignUp" class="div_content">
        <div style="text-align:center;font-size:28px; line-height:20%;">
          <p>注册</p>
          <p style="font-family:monospace;font-style:italic;">Sign Up</p>
        </div>
        <input type="text" name="user_name" placeholder="用户名" v-model="userID" required><br>
        <input type="password" name="pwd" placeholder="密码" v-model="userPwd" required><br>
        <input type="password" name="ensurePwd" placeholder="确认密码" v-model="rePWD" required><br>
        <input type="email" name="emailAdd" placeholder="邮箱地址" v-model="mailbox" required><br>
        <input type="text" name="confirm_code" placeholder="验证码" v-model="confirmcode" style="width:50%;" required>
        <span><button style="width:25%; margin-left:12px;padding:5px;" @click="verify">获取</button></span><br><br>
        <span style="color:blue;font-size:20px;font-weight:800;cursor:pointer;" @click="changeView('forSignUp','forSignIn')">直接登录</span>
        <span><button style="width:40%;margin-left:20px;" @click="signUp" @keyup.enter="signUp()">注册</button></span>
      </div>
     <!--*****************************************弹窗显示提示信息************************************-->
      <div id="msgShow">
        <div id="msg"></div>
        <span @click="">确定</span>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'home',
  data: function () {
    return {
      remember: false,
      autoS: false,
      ifLogIn: false,
      userID: '',
      userPwd: '',
      rePWD: '',
      mailbox: '',
      confirmcode: ''
    }
  },
  watch: {
    userID: function (val) {
      this.userID = val
    },
    userPwd: function (val) {
      this.userPwd = val
    },
    rePWD: function (val) {
      this.rePWD = val
    },
    mailbox: function (val) {
      this.mailbox = val
    },
    confirmcode: function (val) {
      this.confirmcode = val
    }
  },
  methods: {
    showDiv: function (show_div) {
      document.getElementById(show_div).style.display = 'block'
      document.getElementById('bg_div').style.display = 'block'
      var bgDiv = document.getElementById('bg_div')
      bgDiv.style.width = document.body.scrollWidth
    },
    hideDiv: function () {
      document.getElementById('forSignIn').style.display = 'none'
      document.getElementById('forSignUp').style.display = 'none'
      document.getElementById('bg_div').style.display = 'none'
    },
    changeView: function (oldDiv, newDiv) {
      document.getElementById(oldDiv).style.display = 'none'
      document.getElementById(newDiv).style.display = 'block'
    },
    signIn: function () {
      console.log(this.userID)
      console.log(this.rePWD)
      let formData = {
        'username': this.userID,
        'password': this.rePWD
      }
      var self = this
      axios({
        url: 'http://47.107.123.141/api/login',
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(formData)
      }).then(function (res) {
        console.log(res.data)
        self.ifLogIn = true
        alert(res.data.message)
        if(self.ifLogIn) {
          self.$options.methods.hideDiv()
          document.getElementById('login').style.display = 'none'
          document.getElementById('signup').style.display = 'none'
          document.getElementById('logout').style.display = 'block'
        }
      }).catch(function (err) {
        console.log(err)
        alert(err)
      })
    },
    verify: function () {
      let formData = {
        'email': this.mailbox
      }
      axios({
        url: 'http://47.107.123.141/api/verify',
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(formData)
      }).then(function (res) {
        console.log(res.data.code)
      }).catch(function (err) {
        console.log(err)
      })
    },
    signUp: function () {
      console.log(this.userID)
      console.log(this.userPwd)
      console.log(this.rePWD)
      console.log(this.mailbox)
      console.log(this.confirmcode)
      let formData = {
        'username': this.userID,
        'password': this.userPwd,
        'password2': this.rePWD,
        'email': this.mailbox,
        'confirmcode': this.confirmcode
      }
      axios({
        url: 'http://47.107.123.141/api/register',
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(formData)
      }).then(function (res) {
        console.log(res.data)
        alert(res.data.message)
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
}
</script>

<style>
<!--首页导航栏-->
  #header{
    top:0;
    position:sticky;
    background-color:white;
    z-index:900;
  }
  #logo{
    display: block;
    margin:auto;
    width:40%;
  }
  #menu{
    width:100%;
    display: inline-block;
    background-color: cornflowerblue;
    box-shadow:0 1px 1px #ccc;
    border-radius: 2px;
  }
  #menu a{
    display:block;
    padding:18px 30px;
    float:left;
    color:#fff;
    font-weight: bold;
    font-size:20px;
    text-decoration: none !important;
    line-height: 1;
  }
  #menu a:hover{
    background-color:rgb(56, 120, 238);
  }
  .bg_shadow{
    display: none;
    position:absolute;
    top:0;left:0;
    width:100%;height:100%;
    background-color: rgba(255, 255, 255, 0.95);
    z-index:1001;
  }
  .div_content{
    display: none;
    position:absolute;
    margin:auto;
    border:3px solid rgb(80, 80, 248);
    border-radius: 20px;
    top:50%;left:50%;
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    z-index:1002;
  }
  #forSignIn{
    padding: 10px 40px 20px;
  }
  #forSignUp{
    padding: 15px;
  }
  input[type=text], input[type=password],input[type=email],select{
    padding:12px 20px;
    margin:16px 0 0px;
    display: inline-block;
    border:1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  .div_content button{
    padding:5px 10px;
    margin:8px 0;
    width:100%;
    border:1px ridge cornflowerblue;
    border-radius: 4px;
    background:cornflowerblue;
    box-sizing: border-box;
  }
<!--***************************************style for content****************************-->
  div.picShow{
    margin:8px;
    border:1px solid #ccc;
    float:left;
    width:400px;
  }
  div.picShow img{
    width:400px;
    height:auto;
  }
  #homeContent{
    line-height:0.8;
  }
</style>
