<template>
  <div>
    <LabelMovie
      :movie="movie"
      :is-favored="isFavored"
      @click:favorite="onClickFavorite"
    />
    <ContentMovie
      title="Overview"
      :overview="movie.overview"
      :credit="credit"
    />
    <div class="d-flex">
      <ContentCollection
        class="movie-detail mr-2"
        :collection="movie.belongs_to_collection || undefined"
      />
      <ListMovies
        class="movie-detail ml-2"
        title="Recommended Movies"
        :movies="recommendations"
        @click="onClick"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ app, params }) {
    const movieId = params.id
    const movie = await app.$_api.movies.get(movieId)
    const recommendations = await app.$_api.movies.recommendations.list(
      movie.id
    )
    const credit = await app.$_api.movies.credit.list(movie.id)
    return {
      movieId,
      movie,
      recommendations,
      credit,
    }
  },
  computed: {
    isFavored() {
      return this.movies.some(({ id }) => id === Number(this.movieId))
    },
    ...mapGetters('favorite', ['movies']),
  },
  methods: {
    onClick(movie) {
      this.$router.push(`/movies/${movie.id}`)
    },
    onClickFavorite(movie) {
      this.$store.commit('favorite/favor', movie)
    },
  },
}
</script>

<style lang="scss" scoped>
.movie-detail {
  width: 50%;
}
</style>
