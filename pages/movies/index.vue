<template>
  <div>
    <ListMovies :title="title" :movies="movies" @click="onClick" />
    <div v-if="searchText && !movies.length" class="pa-8 movies__not-found">
      No movies found.
    </div>
    <!-- <ModalMovieDetail v-model="modal" :movie="selectedMovie" /> -->
  </div>
</template>

<script>
export default {
  async asyncData({ app, query }) {
    const searchText = query.query
    const movies = searchText
      ? await app.$_api.search.movie.list(query)
      : await app.$_api.movies.popular.list()

    return {
      movies,
      searchText,
    }
  },
  data() {
    return {
      selectedMovie: {},
      modal: false,
    }
  },
  computed: {
    title() {
      return this.searchText ? 'Search Movies' : 'Popular Movies'
    },
  },
  watch: {
    async $route({ query }) {
      this.searchText = query.query
      this.searchText
        ? await this.onSearch(this.searchText)
        : await this.getMovies()
    },
  },
  methods: {
    onClick(movie) {
      this.$router.push(`/movies/${movie.id}`)
    },
    async onSearch(searchText) {
      this.movies = await this.$_api.search.movie.list({ query: searchText })
    },
    async getMovies() {
      this.movies = await this.$_api.movies.popular.list()
    },
  },
}
</script>

<style lang="scss" scoped>
.movies__not-found {
  font-size: 18px;
}
</style>
