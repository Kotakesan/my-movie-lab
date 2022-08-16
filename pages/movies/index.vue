<template>
  <div>
    <LabelTitle title="Popular Movies" />
    <ListMovies :movies="movies" />
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
    }
  },
  methods: {
    onClick(id) {
      this.$router.push(`/movies/${id}`)
    },
  },
}
</script>

<style lang="scss" scoped></style>
