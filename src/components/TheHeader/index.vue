<template>
  <header class="flex border-b sticky top-0 z-1 bg-white">
    <div class="mx-auto w-full max-w-screen-2xl py-3 px-4 flex justify-between">
      <router-link :to="{ name: 'home' }">
        <img src="@/assets/images/neozarin_logo.svg" alt="نئوزرین" />
      </router-link>
      <div class="flex gap-x-5">
        <button
          v-if="isInHomePage"
          class="font-bold"
          :class="{ 'hidden lg:block': isInHomePage }"
        >
          <router-link
            :to="{ name: 'contact' }"
            class="font-bold"
            :class="{ 'hidden lg:block': isInHomePage }"
          >
            راه‌های ارتباطی
          </router-link>
        </button>
        <TheButton v-if="isInHomePage">
          <router-link :to="{ name: 'download' }"> دانلود نئوزرین </router-link>
        </TheButton>
      </div>
    </div>
  </header>
</template>

<script>
import TheButton from '@/components/uikit/TheButton/index.vue'

export default {
  name: 'TheFooter',

  components: { TheButton },

  computed: {
    isInDownloadPage() {
      return this.$route.name === 'download'
    },
    isInHomePage() {
      return this.$route.name === 'home'
    },
    isInContactPage() {
      return this.$route.name === 'contact'
    }
  }
}
</script>

<style scoped>
header {
}
</style>
