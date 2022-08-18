<template>
  <div>
    <template v-if="movies.length">
      <ListMovies title="Favorite Movies" :movies="movies" @click="onClick" />
    </template>
    <template v-else>
      <LabelTitle class="pt-4" :title="noMovies" />
      <div class="pa-8">
        <v-btn class="mr-8" elevation="0" @click="$router.push('/movies')">
          Go favor them!
        </v-btn>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      noMovies: 'Oops... No favorite movies.',
      selectedMovie: {},
      modal: false,
    }
  },
  computed: {
    ...mapGetters('favorite', ['movies']),
  },
  methods: {
    onClick(movie) {
      this.$router.push(`/movies/${movie.id}`)
    },
  },
}
</script>
