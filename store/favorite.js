export const state = () => ({
  movies: [],
})

export const getters = {
  movies: (state) => state.movies,
}

export const mutations = {
  favor(state, movie) {
    if (state.movies.some(({ id }) => id === movie.id)) {
      state.movies = state.movies.filter(({ id }) => id !== movie.id)
    } else {
      state.movies.push(movie)
    }
  },
  clearFavorite(state) {
    state.movies = []
  },
}
