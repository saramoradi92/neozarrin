<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 20.0033C14.9314 20.0036 17.6284 18.4012 19.0299 15.8266" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M20.0033 12C20.0033 7.57989 16.4201 3.99667 12 3.99667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.9999 3.99667C9.06851 3.99643 6.37154 5.5988 4.96997 8.17341" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3.99658 12C3.99658 16.4201 7.5798 20.0033 11.9999 20.0033" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4.96997 8.17341C6.71944 4.95839 10.427 3.33988 13.9741 4.24276C17.5212 5.14564 20.0038 8.33981 20.0032 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3.99658 12C3.99602 15.6602 6.4786 18.8544 10.0257 19.7572C13.5728 20.6601 17.2804 19.0416 19.0298 15.8266" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.04526 8.1734H4.50879V4.63593" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.9546 15.8266H19.4911V19.3641" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>

</template>
<script>
export default {
  name: 'IconRefresh',

  props: {
    size: {
      type: [Number, String],
      default: '1em'
    }
  }
}
</script>
