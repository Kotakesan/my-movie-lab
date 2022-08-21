<template>
  <v-app>
    <HeaderDefault @click:sidebar="sidebar = !sidebar" />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <SidebarDefault v-model="sidebar" />
    <v-footer absolute app>
      <span>{{ new Date().getFullYear() }} Kotaro Takenaka</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      sidebar: false,
    }
  },
}
</script>
