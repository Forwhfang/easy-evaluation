<template>
  <div class="detail">
    <div class="content">
      <DetailContent />
    </div>
    <div class="extend">
      <DetailExtend />
    </div>
  </div>
</template>

<script>
import DetailContent from '@/components/DetailContent.vue'
import DetailExtend from '@/components/DetailExtend.vue'

export default {
  name: 'detail',
  components: {
    DetailContent,
    DetailExtend
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
}

.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.extend {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
