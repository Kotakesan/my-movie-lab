<template>
  <v-app-bar flat clipped-left fixed app>
    <v-toolbar-title>
      <div>
        <div class="d-flex align-center">
          <div class="header-default__title">
            <div class="d-flex" @click="onClickTitle">
              <v-icon class="mr-4">mdi-movie-open-star</v-icon>
              <div>
                {{ title }}
              </div>
            </div>
          </div>
          <InputSearch
            v-model="searchText"
            class="mt-5 ml-8"
            placeholder="search..."
            background-color="transparent"
            @search="onSearch"
          />
        </div>
      </div>
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items class="align-center">
      <BtnSmall size="32px" @click="$router.push('/movies/favorites')">
        mdi-star-circle
      </BtnSmall>
      <BtnSmall size="32px" @click="$emit('click:sidebar')">
        mdi-account-circle
      </BtnSmall>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      title: 'My Movie Lab',
      searchText: '',
    }
  },
  methods: {
    onClickTitle() {
      this.searchText = ''
      this.$router.push('/movies')
    },
    onSearch() {
      this.$router.push({
        path: '/movies',
        query: { query: this.searchText || undefined },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.header-default__title {
  cursor: pointer;
}
</style>
