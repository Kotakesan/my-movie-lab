<template>
  <div>
    <LabelTitle class="pt-4" title="Collection" />
    <div class="content-collection__img pa-8">
      <ImageMovie
        v-if="collection.id"
        :title="collection.name"
        :image-source="collection.poster_path"
        max-width="50%"
      />
      <div v-else class="content-collection__no-information">
        No information provided.
      </div>
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
.content-collection__no-information {
  font-size: 18px;
}
</style>
