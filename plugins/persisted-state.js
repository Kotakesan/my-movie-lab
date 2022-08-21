import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'my_movie_lab',
    paths: ['favorite'],
    storage: window.localStorage,
  })(store)
}
