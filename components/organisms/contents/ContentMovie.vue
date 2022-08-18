<template>
  <div>
    <LabelTitle class="pt-4" :title="title" />
    <div class="card-content__text pa-8">{{ content }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    content: { type: String, default: '' },
  },
}
</script>

<style lang="scss" scoped>
.card-content__text {
  font-size: 18px;
  line-height: 2;
}
</style>
