<template>
  <v-navigation-drawer
    :value="value"
    right
    temporary
    fixed
    @input="$emit('input', $event)"
  >
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
        @click:outside="$emit('input', false)"
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    value: { type: Boolean, default: false },
  },
  data() {
    return {
      items: [
        {
          icon: 'mdi-star',
          title: 'Favorite Movies',
          to: '/movies/favorites',
        },
      ],
    }
  },
}
</script>

<style></style>
