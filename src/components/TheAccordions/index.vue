<template>
  <ul class="flex flex-col w-full">
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'TheAccordions',
}
</script>

<script setup>
import { provide } from 'vue'

const props = defineProps({
  iconHandler: {
    type: String,
    default: 'chevron',
    validator(value) {
      return ['chevron', 'plus'].includes(value)
    }
  }
})

provide('providedData', {
  iconHandler: props.iconHandler,
})
</script>
