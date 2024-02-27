<template>
  <button :type="type" class="flex flex-nowrap items-center gap-x-2" :class="[variant, size]">
    <IconRefresh v-if="isLoading" size="24" class="animate-reverse-spin" />
    <slot/>
    <IconArrow v-if="hasArrow" size="24" />
  </button>
</template>

<script>
import IconArrow from "@/components/Icons/Arrow/index.vue";
import IconRefresh from "@/components/Icons/Refresh/index.vue";

export default {
  name: 'TheButton',
  components: {IconRefresh, IconArrow},
  
  props: {
    type: {
      type: String,
      default: 'button',
      validator(value) {
        return ['button', 'submit', 'reset'].includes(value)
      }
    },
    variant: {
      type: String,
      default: 'primary',
      validator(value) {
        return ['primary', 'cont'].includes(value)
      },
    },
    size: {
      type: String,
      default: 'md',
      validator(value) {
        return ['lg', 'md', 'sm'].includes(value)
      }
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    hasArrow: {
      type: Boolean,
      default: false,
    },
  }
}
</script>

<style scoped>
button {
  @apply rounded-full;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  
  &.sm {
    @apply h-10 px-4;
  }
  
  &.lg {
    @apply h-16 px-10;
  }
  
  &.md {
    @apply py-3 px-4;
  }
  
  &.primary {
    @apply bg-primary-default text-white;
    
    &:hover {
      @apply bg-primary-hover;
    }
    
    &:active {
      @apply bg-primary-pressed;
    }
  }
  
  &.cont {
    @apply bg-cont-default;
    
    &:hover {
      @apply bg-cont-hover;
    }
    
    &:active {
      @apply bg-cont-pressed;
    }
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

.animate-reverse-spin {
  animation: spin 1s linear infinite;
}
</style>
