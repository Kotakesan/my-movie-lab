<template>
  <v-app-bar fixed app>
    <v-toolbar-title
      class="header"
      @click="$router.push('/movies')"
      v-text="title"
    />
    <v-spacer />
    <v-btn icon @click.stop="$emit('click')">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
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
.header {
  cursor: pointer;
}
</style>
