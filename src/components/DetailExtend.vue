<template>
  <div class="extend" v-if="isVisible === true">In extend</div>
</template>

<script>
export default {
  name: 'DetailExtend',
  data: function () {
    return {
      isVisible: false
    }
  }
}
</script>

<style scoped lang="less">
.extend {
  background: white;
}
</style>
