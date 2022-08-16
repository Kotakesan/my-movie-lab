<template>
  <v-card class="card-movie-image">
    <v-img
      :src="`${imageBaseUrl}` + imageSource"
      :alt="title"
      :max-width="maxWidth"
      contain
    />
    <div
      v-if="!noHover"
      class="card-movie-image__title-wrapper"
      @click="$emit('click')"
    >
      <div class="card-movie-image__title pt-16 text-center font-weight-bold">
        {{ title }}
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    imageSource: { type: String, default: '' },
    maxWidth: { type: [String, Number], default: '100%' },
    noHover: { type: Boolean, default: true },
  },
  data() {
    return {
      imageBaseUrl: 'https://image.tmdb.org/t/p/w500',
    }
  },
}
</script>

<style lang="scss" scoped>
.card-movie-image {
  position: relative;
}
.card-movie-image .card-movie-image__title {
  color: #fff;
  font-size: 110%;
}
.card-movie-image .card-movie-image__title-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.1s ease-in;
  cursor: pointer;
}
.card-movie-image:hover .card-movie-image__title-wrapper {
  opacity: 1;
}
</style>
