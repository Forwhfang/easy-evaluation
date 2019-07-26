<template>
  <div class="detail">
    <div class="content">
      <div class="content-left">
        <img class="image" :src="`${publicPath}xiaoxiong.PNG`" />
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
    <div class="extend" v-if="isVisible === true">
      <div class="header">
        <h3 class="title">结 果 展 示</h3>
      </div>
      <div class="container">占位符</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data: function () {
    return {
      publicPath: process.env.BASE_URL,
      isVisible: false,
      link: '',
      comment: ''
    }
  },
  methods: {
    onSubmitLink: function () {
      this.isVisible = true
      console.log(this.link)
    },
    onSubmitComment: function () {
      this.isVisible = true
      console.log(this.comment)
    }
  }
}
</script>

<style scoped lang="less">
.detail {
  height: 100%;
  width: 100%;
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

.extend {
  width: 90%;
  height: 500px;
  margin-bottom: 50px;
  border: 1px solid white;
  border-radius: 20px;
  background: white;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 30px;
}

.title {
  font-size: 50px;
}

.container {

}
</style>
