<template>
    <div class="home">
      <!--***************************************首页上半部分********************************-->
      <div id="header">
        <div id="logo" style="text-align:center;width:20%;padding-bottom:10px;">
          <img alt="Vue logo" src="../assets/logo.png" style="width:20%;height:20%;"/>
          <span style="font-size:50px">易评</span>
        </div>
        <div id="menu">
          <a href="#">首页</a>
          <router-link to="./Detail">评价分析</router-link>
          <a href="#">联系我们</a>
          <a style="float: right; cursor:pointer" @click="showDiv('forSignUp')">注册</a>
          <a style="float: right; cursor:pointer" @click="showDiv('forSignIn')">登录</a>                   
        </div>
      </div>
      <!--***************************************首页下半部分********************************-->
      <div id="content">      
        <div id="contact">
          <div class="row">
            <div>
              <img style=" height:520px;text-indent: 20px;" src="https://raw.githubusercontent.com/WindyZYY/myPicSource/master/timg.jpg">
            </div>
            <div id="bugForm">
              <div style="text-align: center;line-height: 1;">
                <h2>联系我们</h2>
                <h4>Contact With Us</h4>
                <p style="font-weight: bold;">请填写信息:</p> <br>
              </div>
              <form>
                <label for="bug">问题反馈</label><br>
                <input type="text" id="Bug" placeholder="请描述你的问题"><br>
                <label for="phone">联系邮箱</label><br>
                <input type="text" id="mailbox" placeholder="请输入你的邮箱"><br>
                <input type="submit" value="提交">
              </form>
            </div>
          </div>
        </div>
      </div>
      <!--***************************************注册登录部分********************************-->
      <div id="bg_div" class="bg_shadow" @click="hideDiv()"></div>
      <div id="forSignIn" class="div_content" style="line-height:1;width:auto;height:auto;">
        <div style="text-align:center;font-size:28px; line-height:20%;">
          <p>登录</p>
          <p style="font-family:monospace;font-style:italic;">Sign In</p> 
        </div>
        <input type="text" name="user_id" placeholder="用户名/邮箱"><br>
        <input type="password" name="pwd" placeholder="密码"><br><br>
        <input type="checkbox" id="remInfo" style="float:left;" v-model="remember">
        <label for="remInfo" style="float:left;">记住密码</label>
        <label for="autoSignIn" style="float:right;">自动登录</label>
        <input type="checkbox" id="autoSignIn" v-model="autoS" style="float:right;"><br>
        <button style="font-size:24px;">登录</button><br><br>
        <span style="float: left;color:blue;font-weight:800;cursor:pointer;" @click="changeView('forSignIn','forSignUp')">新用户注册</span>
        <span style="float: right;color:rgb(161, 159, 159);cursor:pointer;">忘记密码</span>
      </div>
      <div id="forSignUp" class="div_content">
        <div style="text-align:center;font-size:28px; line-height:20%;">
          <p>注册</p>
          <p style="font-family:monospace;font-style:italic;">Sign Up</p> 
        </div>
        <input type="text" name="user_name" placeholder="用户名"><br>
        <input type="password" name="pwd" placeholder="密码"><br>
        <input type="password" name="ensurePwd" placeholder="确认密码"><br>
        <input type="text" name="emailAdd" placeholder="邮箱地址"><br><br>
        <span style="float: left;color:blue;font-size:20px;font-weight:800;cursor:pointer;" @click="changeView('forSignUp','forSignIn')">直接登录</span>
        <span><button style="width:40%;margin:0;float: right;">注册</button></span>
      </div>
      
    </div>
</template>
  
<script>  
  export default {
    name: 'home',
    data:{
      remember:false,
      autoS:false,
      uesrID:'',
      ueserPwd:'',
      rePWD:'',
      mailbox:'',
    },
    methods:{
      showDiv:function(show_div){
        document.getElementById(show_div).style.display = 'block';
        document.getElementById('bg_div').style.display = 'block';
        var bgDiv=document.getElementById('bg_div');
        bgDiv.style.width=document.body.scrollWidth;
        $("#"+bg_div).height($(document).height());
      },
      hideDiv:function(){
        document.getElementById('forSignIn').style.display = "none";
        document.getElementById('forSignUp').style.display = "none";
        document.getElementById('bg_div').style.display = "none";
      },
      changeView:function(oldDiv,newDiv){
        document.getElementById(oldDiv).style.display = "none";
        document.getElementById(newDiv).style.display = "block";
      }
    }
  }
</script>

<style>
  #header{
    top:0;
    position:sticky;
  }
  #logo{
    display: block;
    margin:auto;
    width:40%;
  }
  #menu{
    width:100%;
    margin:10px;
    display: inline-block;
    background-color: cornflowerblue;
    box-shadow:0 1px 1px #ccc;
    border-radius: 2px;
  }
  #menu a{
    display: block;
    padding:18px 30px;
    float:left;
    color:#fff;
    font-weight: bold;
    font-size:20px;
    text-decoration: none !important;
    line-height: 1;
  }
  .bg_shadow{
    display: none;
    position:absolute;
    top:0;left:0;
    width:100%;height:100%;
    background-color: rgba(255, 255, 255, 0.808);
    z-index:1001;
  }
  .div_content{
    display: none;
    position:absolute;
    margin:auto;
    padding: 10px 40px 20px;
    border:3px solid rgb(80, 80, 248);
    border-radius: 20px;
    top:50%;left:50%;
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);                
    z-index:1002;
  }
  input[type=text], input[type=password],select{
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
<!--***************************************style for contact****************************-->
  .row{
    -webkit-column-count: 2; /* Chrome, Safari, Opera */
    -moz-column-count: 2; /* Firefox */
    column-count: 2;
    padding:20px;
  }
  #bugForm{
    border:3px solid cornflowerblue;
    border-radius:10px;
    padding:30px;
    font-size:20px;
  }
  #bugForm input[type=text], textarea {
    width:90%;
    height:40px;
    padding: 6px;
    border: 1px solid #ccc;
    margin-top: 8px;
    margin-bottom: 16px;
    resize: vertical;
  }
  input[type=submit] {
    background-color: rgb(128, 167, 240);
    color: white;
    padding: 12px 20px;
    border: none;
    cursor: pointer;
  }
  input[type=submit]:hover {
    background-color:cornflowerblue;
  }
</style>