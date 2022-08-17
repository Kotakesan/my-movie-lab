<template>
  <div>
    <LabelTitle class="pt-8" title="Collection" />
    <div class="content-collection__img pa-8">
      <ImageMovie
        :title="collection.name"
        :image-source="collection.poster_path"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    collection: { type: Object, default: () => ({}) },
  },
}
</script>

<style lang="scss">
.content-collection__img {
  width: 50%;
  .image-movie__title-wrapper {
    cursor: default !important;
  }
}
</style>
