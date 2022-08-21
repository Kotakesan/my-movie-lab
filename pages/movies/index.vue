<template>
  <div>
    <ListMovies :title="title" :movies="movies" @click="onClick" />
    <div v-if="searchText && !movies.length" class="pa-8 movies__not-found">
      No movies found.
    </div>
    <Paginate :value="page" :length="length" @input="onChangePage" />
  </div>
</template>

<script>
export default {
  async asyncData({ app, query }) {
    const searchText = query.query
    const page = 1

    const { movies, totalPages } = searchText
      ? await app.$_api.search.movie.list({ query: searchText, page })
      : await app.$_api.movies.popular.list()

    return {
      searchText,
      page,
      movies,
      totalPages,
    }
  },
  computed: {
    title() {
      return this.searchText ? 'Search Movies' : 'Popular Movies'
    },
    length() {
      // NOTE: Page query must be less than or equal to 500
      return this.totalPages >= 500 ? 500 : this.totalPages
    },
  },
  watch: {
    async $route({ query }) {
      this.page = 1
      this.searchText = query.query
      this.searchText ? await this.onSearch() : await this.getMovies()
    },
  },
  methods: {
    onClick(movie) {
      this.$router.push(`/movies/${movie.id}`)
    },
    async onChangePage(page) {
      this.page = page
      this.searchText ? await this.onSearch() : await this.getMovies()
    },
    async onSearch() {
      const { movies, totalPages } = await this.$_api.search.movie.list({
        query: this.searchText,
        page: this.page,
      })
      this.movies = movies
      this.totalPages = totalPages
    },
    async getMovies() {
      const { movies, totalPages } = await this.$_api.movies.popular.list({
        page: this.page,
      })
      this.movies = movies
      this.totalPages = totalPages
    },
  },
}
</script>

<style lang="scss" scoped>
.movies__not-found {
  font-size: 18px;
}
</style>
