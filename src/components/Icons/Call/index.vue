<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.856 13.144C9.68599 11.974 8.80399 10.664 8.21799 9.335C8.09399 9.054 8.16699 8.725 8.38399 8.508L9.20299 7.69C9.87399 7.019 9.87399 6.07 9.28799 5.484L8.11399 4.31C7.33299 3.529 6.06699 3.529 5.28599 4.31L4.63399 4.962C3.89299 5.703 3.58399 6.772 3.78399 7.832C4.27799 10.445 5.79599 13.306 8.24499 15.755C10.694 18.204 13.555 19.722 16.168 20.216C17.228 20.416 18.297 20.107 19.038 19.366L19.689 18.715C20.47 17.934 20.47 16.668 19.689 15.887L18.516 14.714C17.93 14.128 16.98 14.128 16.395 14.714L15.492 15.618C15.275 15.835 14.946 15.908 14.665 15.784C13.336 15.197 12.026 14.314 10.856 13.144Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script>
export default {
  name: 'IconCall',

  props: {
    size: {
      type: [Number, String],
      default: '1em'
    }
  }
}
</script>
