<template>
  <svg :width="size" :height="size" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 20.0237H10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M20 30.0234V10.0234" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>

</template>
<script>
export default {
  name: 'IconPlus',

  props: {
    size: {
      type: [Number, String],
      default: '1em'
    },
  },
}
</script>
