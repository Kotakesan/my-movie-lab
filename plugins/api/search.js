/* eslint-disable camelcase */
const resource = 'https://api.themoviedb.org/3/search'

export default class {
  constructor(axios) {
    this.axios = axios
  }

  movie = {
    list: (params) => {
      return this.axios
        .get(`${resource}/movie?api_key=42f0a504684fbdc1c5af56bc8d909ceb`, {
          params,
        })
        .then(({ data }) => {
          return { movies: data.results, totalPages: data.total_pages }
        })
    },
  }
}
/* eslint-enable camelcase */
