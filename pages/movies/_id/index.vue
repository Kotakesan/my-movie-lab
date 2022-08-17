<template>
  <div>
    <LabelMovie :movie="movie" />
    <ContentMovie title="Overview" :content="movie.overview" />
    <ContentCollection
      v-if="movie.belongs_to_collection"
      class="movie-content mr-4"
      :collection="movie.belongs_to_collection"
    />
    <!-- TODO: recommended movies -->
    <!-- <ListMovies
        v-if="recommendations"
        class="movie-content"
        title="Recommended Movies"
        :movies="recommendations"
        image-max-width="200%"
        @click="onClick"
      /> -->
  </div>
</template>

<script>
export default {
  async asyncData({ app, params }) {
    const movieId = params.id
    const movie = await app.$_api.movies.get(movieId)
    const recommendations = await app.$_api.movies.recommendations.list(
      movie.id
    )
    return {
      movieId,
      movie,
      recommendations,
    }
  },
  methods: {
    // TODO: recommended movies
    // onClick(movie) {
    //   this.$router.push(`/movies/${movie.id}`)
    // },
  },
}
</script>

<style lang="scss" scoped>
.movie-content {
  width: 50vw;
}
</style>
