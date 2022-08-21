<template>
  <div>
    <LabelTitle class="pt-4" :title="title" />
    <v-row class="mt-4 ml-8">
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
