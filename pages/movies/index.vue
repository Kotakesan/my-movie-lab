<template>
  <div>
    <LabelTitle title="Popular Movies" />
    <v-row class="mt-4" justify="center">
      <v-col
        v-for="(movie, index) in movies"
        :key="index"
        class="mx-2 mb-4"
        cols="2"
      >
        <CardMovieImage
          :title="movie.title"
          :image-source="movie.poster_path"
          :no-hover="false"
          @click="onClick(movie.id)"
        />
      </v-col>
    </v-row>
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
