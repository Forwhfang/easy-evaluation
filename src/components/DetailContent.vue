<template>
  <div class="content">
    <div class="content-left">
      <img :src="`${publicPath}xiaoxiong.PNG`"/>
    </div>
    <div class="content-right">
      <div class="link">
        <input class="link-input" v-model="link" placeholder="请输入商品链接">
        <button class="link-submit" v-on:click="onSubmitLink">提 交</button>
      </div>
      <div class="comment">
        <textarea class="comment-input" v-model="comment" placeholder="请输入商品评论"></textarea>
        <button class="comment-submit" v-on:click="onSubmitComment">提 交</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailContent',
  data: function () {
    return {
      publicPath: process.env.BASE_URL,
      link: '',
      comment: ''
    }
  },
  methods: {
    onSubmitLink: function () {
      this.$emit('submitLink', this.link)
    },
    onSubmitComment: function () {
      this.$emit('submitComment', this.comment)
    }
  }
}
</script>

<style scoped lang="less">
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
  background: white;
}

.content-right {
  display: flex;
  flex-direction: column;
  margin-left: -80px;
}

.link {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
}

.link-input {
  width: 750px;
  height: 50px;
  margin-bottom: 20px;
  border-radius: 10px;
  background: LightCyan;
  opacity: 0.5;
  font-size: 20px;
  padding-left: 20px;
  padding-right: 20px;
}

.link-submit {
  width: 80px;
  height: 50px;
  margin-left: 30px;
  margin-bottom: 25px;
  border-radius: 10px;
  color: white;
  background: RGB(140,210,210);
  opacity: 0.5;
  font-size: 20px;
}

.comment {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
}

.comment-input {
  width: 750px;
  height: 250px;
  margin-top: 20px;
  padding: 2px;
  border-radius: 15px;
  background: LightCyan;
  opacity: 0.5;
  font-size: 20px;
  padding: 20px;
}

.comment-submit {
  width: 80px;
  height: 50px;
  margin-left: 30px;
  margin-bottom: 5px;
  border-radius: 10px;
  color: white;
  background: RGB(140,210,210);
  opacity: 0.5;
  font-size: 20px;
}
</style>
