<template>
  <v-form @submit.prevent="$emit('search')">
    <v-text-field
      class="input-search__text-field"
      :value="value"
      :background-color="backgroundColor"
      :placeholder="placeholder"
      prepend-inner-icon="mdi-magnify"
      color="white"
      clearable
      @input="$emit('input', $event)"
      @click:prepend-inner="$emit('search')"
    />
  </v-form>
</template>

<script>
export default {
  props: {
    value: { type: String, default: undefined },
    placeholder: { type: String, default: undefined },
    backgroundColor: { type: String, default: '#fff' },
  },
}
</script>

<style lang="scss">
.input-search__text-field .v-input__append-inner .mdi-close::before {
  font-size: 18px;
}
</style>
