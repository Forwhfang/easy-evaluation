<template>
  <div class="detail">
    <div class="content">
      <DetailContent v-on="{submitLink:onSubmitLink,submitComment:onSubmitComment}" />
    </div>
    <div class="extend">
      <DetailExtend v-bind="{isVisible:isVisible, link:link, comment:comment}" />
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
  },
  data: function () {
    return {
      isVisible: false,
      link: '',
      comment: ''
    }
  },
  methods: {
    onSubmitLink: function (msg) {
      this.isVisible = true
      this.link = msg
    },
    onSubmitComment: function (msg) {
      this.isVisible = true
      this.comment = msg
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
