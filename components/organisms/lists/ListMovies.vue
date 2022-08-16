<template>
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
</template>

<script>
export default {
  props: { movies: { type: Array, default: () => [] } },
}
</script>

<style></style>
