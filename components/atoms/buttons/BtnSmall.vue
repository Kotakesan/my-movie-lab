<template>
  <v-btn
    class="elevation-0"
    :type="type"
    :disabled="disabled"
    :outlined="outlined"
    icon
    @click="$emit('click')"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  props: {
    type: { type: String, default: 'submit' },
    disabled: { type: Boolean, default: false },
    outlined: { type: Boolean, default: false },
  },
}
</script>
