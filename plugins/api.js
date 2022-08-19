import MoviesApi from './api/movies'
import SearchApi from './api/search'

export default ({ $axios }, inject) => {
  const api = {
    movies: new MoviesApi($axios),
    search: new SearchApi($axios),
  }

  inject('_api', api)
}
