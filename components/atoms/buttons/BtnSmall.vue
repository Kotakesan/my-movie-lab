<template>
  <v-btn
    class="elevation-0"
    :disabled="disabled"
    :outlined="outlined"
    icon
    @click="$emit('click')"
  >
    <v-icon :size="size">
      <slot />
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    disabled: { type: Boolean, default: false },
    outlined: { type: Boolean, default: false },
    size: { type: String, default: '' },
  },
}
</script>
