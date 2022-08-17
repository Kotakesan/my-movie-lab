<template>
  <div>
    <LabelTitle class="pt-8" title="Popular Movies" />
    <v-row class="mt-4" justify="center">
      <v-col
        v-for="(movie, index) in movies"
        :key="index"
        class="mx-2 mb-4"
        cols="2"
      >
        <ImageMovie
          :title="movie.title"
          :image-source="movie.poster_path"
          @click="$emit('click', movie)"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    movies: { type: Array, default: () => [] },
  },
}
</script>

<style></style>
