<template>
  <div>
    <div
      class="label-movie"
      :style="{ backgroundImage: `url(${bgImagePath})` }"
    >
      <div class="label-movie__label d-flex align-center">
        <div>
          <ImageMovie
            :title="movie.title"
            :image-source="movie.poster_path"
            max-width="30%"
            no-hover
          />
        </div>
        <div class="flex-grow-1">
          <FormatTitle :title="movie.title" :tagline="movie.tagline" />
        </div>
        <div class="mt-6 pl-8">
          <div class="text-right">
            <div class="mb-1">
              {{ formatGenres }}
            </div>
            <BtnSmall @click="$emit('click:favorite', movie)">
              {{ favorite }}
            </BtnSmall>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: { type: Object, default: () => ({}) },
    isFavored: { type: Boolean, default: false },
  },
  data() {
    return {
      imageBaseUrl: 'https://image.tmdb.org/t/p/w1280',
    }
  },
  computed: {
    bgImagePath() {
      return this.imageBaseUrl + this.movie.backdrop_path
    },
    formatGenres() {
      return this.movie.genres.map(({ name }) => name).join(', ')
    },
    favorite() {
      return this.isFavored ? 'mdi-star' : 'mdi-star-outline'
    },
  },
}
</script>

<style lang="scss" scoped>
.label-movie {
  height: 30vh;
  width: 100%;
  background-size: cover;
  background-position-y: center;
  .label-movie__label {
    height: 100%;
    background-image: radial-gradient(
      farthest-side at 20% 70%,
      transparent,
      rgb(18, 18, 18)
    );
  }
}
</style>
