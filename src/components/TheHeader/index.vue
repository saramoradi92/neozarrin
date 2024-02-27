<template>
  <header class="flex border-b sticky top-0 bg-cont-default">
    <div class="mx-auto w-full max-w-screen-2xl py-3 px-4 flex justify-between">
      <router-link :to="{ name: 'home' }">
        <img src="@/assets/images/neozarin_logo.svg" alt="نئوزرین" />
      </router-link>
      <div class="flex gap-x-5">
        <TheButton
          v-if="isInHomePage"
          variant="cont"
          class="font-bold"
          :class="{ 'hidden lg:flex': isInHomePage }"
        >
          <router-link
            :to="{ name: 'contact' }"
            class="font-bold"
            :class="{ 'hidden lg:block': isInHomePage }"
          >
            راه‌های ارتباطی
          </router-link>
        </TheButton>
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
  z-index: 2;
}
</style>
