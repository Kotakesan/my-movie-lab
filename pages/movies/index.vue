<template>
  <div>
    <ListMovies title="Popular Movies" :movies="movies" @click="onClick" />
    <ModalMovieDetail v-model="modal" :movie="selectedMovie" />
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    const movies = await app.$_api.movies.popular.list()

    return {
      movies,
    }
  },
  data() {
    return {
      movies: [],
      selectedMovie: {},
      modal: false,
    }
  },
  methods: {
    onClick(movie) {
      this.$router.push(`/movies/${movie.id}`)
    },
  },
}
</script>

<style lang="scss" scoped></style>
