<template>
  <div class="image-movie">
    <v-img
      class="mx-auto"
      :src="img"
      :alt="title"
      :max-width="maxWidth"
      contain
    />
    <div v-if="!imageSource" class="no-img">
      <v-icon> mdi-circle-off-outline </v-icon>
    </div>
    <div
      v-if="!noHover"
      class="image-movie__title-wrapper"
      @click="$emit('click')"
    >
      <div
        class="image-movie__title pt-16 text-center font-weight-bold"
        :title="title"
      >
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    imageSource: { type: String, default: '' },
    maxWidth: { type: [String, Number], default: '100%' },
    noHover: { type: Boolean, default: false },
  },
  data() {
    return {
      imageBaseUrl: 'https://image.tmdb.org/t/p/w500',
    }
  },
  computed: {
    img() {
      return this.imageBaseUrl + this.imageSource
    },
  },
}
</script>

<style lang="scss" scoped>
.image-movie {
  position: relative;
  min-height: 100%;
  .no-img {
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 1;
    color: #fff;
  }
}
.image-movie .image-movie__title {
  color: #fff;
  font-size: 150%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.image-movie .image-movie__title-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  background-color: rgba(18, 18, 18, 0.4);
  transition: all 0.1s ease-in;
  cursor: pointer;
}
.image-movie:hover .image-movie__title-wrapper {
  opacity: 1;
}
</style>
