<template>
  <div class="detail">
    <div class="content">
      <div class="content-left">
        <router-link to="./">
          <img class="image" :src="`${publicPath}xiaoxiong.PNG`" />
          <p style="color:grey; font-size:14px;text-decoration:none; float:center;">点击图片返回主页</p>
        </router-link>
      </div>
      <div class="content-right">
        <div class="link">
          <input class="link-input" v-model="link" placeholder="请输入商品链接" />
          <button class="link-submit" v-on:click="onSubmitLink">提 交</button>
        </div>
        <div class="comment">
          <textarea class="comment-input" v-model="comment" placeholder="请输入商品评论"></textarea>
          <button class="comment-submit" v-on:click="onSubmitComment">提 交</button>
        </div>
      </div>
    </div>
    <div class="result-for-link" v-if="isLink === true">
      <div class="header">
        <h3 class="title">结 果 展 示</h3>
      </div>
      <div class="container">
        <p>占位符</p>
      </div>
    </div>
    <div class="result-for-comment" v-if="isComment === true">
      <div class="header">
        <h3 class="title">结 果 展 示</h3>
      </div>
      <div class="container">
        <p class='polarity'>{{ commentResult }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'detail',
  data: function () {
    return {
      publicPath: process.env.BASE_URL,
      isLink: false,
      isComment: false,
      link: '',
      comment: '',
      commentResult: ''
    }
  },
  methods: {
    onSubmitLink: function () {
      this.isComment = false
      this.isLink = true
      console.log(this.link)
    },
    onSubmitComment: function () {
      this.isLink = false
      this.isComment = true
      console.log(this.comment)
      let that = this
      let formData = {
          'comment': this.comment
      }
      axios({
        url: 'http://47.107.123.141/api/analyze',
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(formData)
      }).then(function (res) {
        console.log(res)
        if (res.data.code === 'success') {
          if (res.data.message === 'positive') {
            that.commentResult = '该 评 论 是 一 条 正 面 评 论 哦 ！'
          } else {
            that.commentResult = '该 评 论 是 一 条 负 面 评 论 哦 ！'
          }
        } else {
          that.commentResult = '对 不 起，请 求 失 败，请 重 试！'
        }
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped lang="less">
.detail {
  height: 100%;
  width: 100%;
  margin: 50px 0;
  background: cornflowerblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content {
  width: 90%;
  height: 500px;
  margin-top: 50px;
  margin-bottom: 50px;
  border: 1px solid white;
  border-radius: 20px;
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.8);
}

.content-left {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.image {
  width: 100%;
  height: 100%;
}

.content-right {
  height: 90%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 2;
  margin-left: -5%;
}

.link {
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-right: 2%;
  margin-bottom: 3%;
}

.link-input {
  width: 90%;
  height: 90%;
  border-radius: 10px;
  background: LightCyan;
  opacity: 0.5;
  font-size: 100%;
  font-weight: 500;
  padding-left: 2%;
  padding-right: 2%;
  flex: 7;
  margin-right: 2%;
}

.link-submit {
  width: 50%;
  height: 80%;
  border-radius: 10px;
  color: white;
  background: RGB(140,210,210);
  opacity: 0.5;
  font-weight: 700;
  font-size: 100%;
  flex: 1;
}

.comment {
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  margin-right: 2%;
  margin-top: 3%;
}

.comment-input {
  width: 90%;
  height: 90%;
  padding: 2px;
  border-radius: 15px;
  background: LightCyan;
  opacity: 0.5;
  font-size: 120%;
  font-weight: 500;
  padding: 2%;
  flex: 7;
  margin-right: 2%;
}

.comment-submit {
  width: 50%;
  height: 16%;
  border-radius: 10px;
  color: white;
  background: RGB(140,210,210);
  opacity: 0.5;
  font-weight: 700;
  font-size: 100%;
  flex: 1;
}

.result-for-link {
  width: 90%;
  height: 1000px;
  margin-bottom: 50px;
  border: 1px solid white;
  border-radius: 20px;
  background: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.8);
}

.result-for-comment {
  width: 90%;
  height: 400px;
  margin-bottom: 50px;
  border: 1px solid white;
  border-radius: 20px;
  background: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.8);
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.title {
  font-size: 50px;
}

.container {
  display: flex;
  flex-direction: column;
}

.polarity {
  font-size: 30px;
}
</style>
