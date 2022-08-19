<template>
  <v-app-bar fixed app>
    <v-toolbar-title class="header-default mr-8 pr-2">
      <div @click="$router.push('/movies')">
        <div class="d-flex">
          <v-icon class="mr-4">mdi-movie-open-star</v-icon>
          <div>
            {{ title }}
          </div>
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
    }
  },
}
</script>

<style lang="scss" scoped>
.header-default {
  cursor: pointer;
}
</style>
