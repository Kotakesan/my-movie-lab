import MoviesApi from './api/movies'

export default ({ $axios }, inject) => {
  const api = {
    movies: new MoviesApi($axios),
  }

  inject('_api', api)
}
