<template>
  <div>
    <LabelTitle class="pt-8" :title="title" />
    <CardContent :content="content" />
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
