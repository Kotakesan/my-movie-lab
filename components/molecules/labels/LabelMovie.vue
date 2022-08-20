<template>
  <div>
    <div
      class="label-movie"
      :style="{ backgroundImage: `url(${bgImagePath})` }"
    >
      <div class="label-movie__label d-flex align-center">
        <div class="label-movie__image">
          <ImageMovie
            :title="movie.title"
            :image-source="movie.poster_path"
            max-width="30%"
            no-hover
          />
        </div>
        <div class="label-movie__title">
          <FormatTitle :title="movie.title" :tagline="movie.tagline" />
          <BtnSmall
            class="mt-2"
            size="32px"
            @click="$emit('click:favorite', movie)"
          >
            {{ favorite }}
          </BtnSmall>
        </div>
        <div class="label-movie__genre pl-8">
          <div>
            {{ formatGenres }}
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
      return this.isFavored ? 'mdi-star' : 'mdi-star-plus-outline'
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
  .label-movie__title {
    width: 50%;
  }
  .label-movie__genre {
    width: 20%;
  }
}
</style>
