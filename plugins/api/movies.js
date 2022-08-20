/* eslint-disable camelcase */
const resource = 'https://api.themoviedb.org/3/movie'

export default class {
  constructor(axios) {
    this.axios = axios
  }

  get(id) {
    return this.axios
      .get(`${resource}/${id}?api_key=42f0a504684fbdc1c5af56bc8d909ceb`)
      .then(({ data }) => data)
  }

  popular = {
    list: (params) => {
      return this.axios
        .get(`${resource}/popular?api_key=42f0a504684fbdc1c5af56bc8d909ceb`, {
          params,
        })
        .then(({ data }) => {
          return { movies: data.results, totalPages: data.total_pages }
        })
    },
  }

  recommendations = {
    list: (id) => {
      return this.axios
        .get(
          `${resource}/${id}/recommendations?api_key=42f0a504684fbdc1c5af56bc8d909ceb`
        )
        .then(({ data }) => data.results)
    },
  }

  credit = {
    list: (id) => {
      return this.axios
        .get(
          `${resource}/${id}/credits?api_key=42f0a504684fbdc1c5af56bc8d909ceb`
        )
        .then(({ data }) => data)
    },
  }
}
/* eslint-enable camelcase */
