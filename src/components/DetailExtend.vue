<template>
  <div class="extend" v-if="isVisible === true">
    <p>{{ isVisible }}</p>
    <p>{{ link }}</p>
    <p>{{ comment }}</p>
  </div>
</template>

<script>
export default {
  name: 'DetailExtend',
  props: ['isVisible', 'link', 'comment']
}
</script>

<style scoped lang="less">
.extend {
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
</style>
