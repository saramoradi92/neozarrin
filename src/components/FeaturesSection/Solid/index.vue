<template>
  <HomeSectionWrapper class="text-center">
    <div class="flex flex-col items-center gap-y-5">
      <h2>ویژگی‌های نئوزرین</h2>
      <div class="flex flex-col items-center gap-y-5">
        <p>
          با ویژگی‌ها و مزیت‌هایی کم‌نظیر نئوزرین، تجربه متفاوت از بانکداری الکترونیک خلق کرده‌ایم
        </p>
        <ul class="grid grid-cols-2 md:grid-cols-4 mt-10 w-full">
          <li class="border-l border-b md:border-b-0">
            <div class="flex flex-col gap-y-2.5 items-center">
              <div class="icon-wrapper">
                <IconShieldCheckmark />
              </div>
              <h3>امنیت پرداخت</h3>
            </div>
          </li>
          <li class="border-b md:border-b-0 md:border-l">
            <div class="flex flex-col gap-y-2.5 items-center">
              <div class="icon-wrapper">
                <IconSupport24 />
              </div>
              <h3>پشتیبانی ۲۴ ساعته</h3>
            </div>
          </li>
          <li class="border-l">
            <div class="flex flex-col gap-y-2.5 items-center">
              <div class="icon-wrapper">
                <IconTimeCoins />
              </div>
              <h3>کاهش هزینه‌های</h3>
            </div>
          </li>
          <li>
            <div class="flex flex-col gap-y-2.5 items-center">
              <div class="icon-wrapper">
                <IconHandCard />
              </div>
              <h3>استفاده آسان</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </HomeSectionWrapper>
</template>

<script>
import IconArrow from '@/components/Icons/Arrow/index.vue'
import HomeSectionWrapper from '@/components/Home/Section/index.vue'
import IconShieldCheckmark from '@/components/Icons/ShieldCheckmark/index.vue'
import IconHandCard from '@/components/Icons/HandCard/index.vue'
import IconSupport24 from '@/components/Icons/Support24/index.vue'
import IconTimeCoins from '@/components/Icons/TimeCoins/index.vue'

export default {
  name: 'FeaturesSectionSolid',

  components: {
    IconTimeCoins,
    IconSupport24,
    IconHandCard,
    IconShieldCheckmark,
    HomeSectionWrapper,
    IconArrow
  }
}
</script>

<style scoped>
li {
  @apply p-8;

  .icon-wrapper {
    @apply text-2xl bg-cont-dim p-2 rounded-xl bg-white;
  }
}
</style>
