<template>
  <v-pagination
    :value="value"
    class="paginate"
    :length="length"
    :total-visible="7"
    dark
    prev-icon="mdi-arrow-left"
    next-icon="mdi-arrow-right"
    @input="$emit('input', $event)"
  />
</template>

<script>
export default {
  props: {
    value: { type: Number, default: 0 },
    length: { type: Number, default: 0 },
  },
}
</script>

<style lang="scss">
.paginate > .v-pagination.theme--dark > li button:hover {
  background-color: #616161 !important;
}
</style>
