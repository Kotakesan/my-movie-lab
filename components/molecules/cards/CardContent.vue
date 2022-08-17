<template>
  <v-card-text class="card-content__text pa-8">{{ content }}</v-card-text>
</template>

<script>
export default {
  props: {
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
