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
    list: () => {
      return this.axios
        .get(`${resource}/popular?api_key=42f0a504684fbdc1c5af56bc8d909ceb`)
        .then(({ data }) => data.results)
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
}
