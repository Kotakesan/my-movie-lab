<template>
  <div>
    <div class="format-title__title">
      {{ title }}
    </div>
    <div v-if="tagline" class="format-title__text">
      {{ tagline }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    tagline: { type: String, default: '' },
  },
}
</script>

<style lang="scss" scoped>
.format-title__title {
  font-size: 36px;
}
.format-title__text {
  font-size: 20px;
}
</style>
