<template>
  <div class="extend" v-if="isVisible === true">
    <div class="header">
      <h3 class="title">结 果 展 示</h3>
    </div>
    <div class="container">
      占位符
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailExtend',
  props: ['isVisible', 'link', 'comment'],
  watch: {
    link: function () {
      console.log('link:' + this.link)
      // 发送数据，接收数据，根据数据画图
    },
    comment: function () {
      console.log('comment:' + this.comment)
      // 发送数据，接收数据，根据数据画图
    }
  }
}
</script>

<style scoped lang="less">
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
