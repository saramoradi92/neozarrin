<template>
  <HomeSectionWrapper>
    <div class="flex flex-col items-center gap-y-5">
      <h2 class="text-center">هر روز بهتر از دیروز</h2>
      <p class="text-center">با امکاناتی که در آینده خواهیم داشت آشنا شوید</p>
      <TheAccordions class="gap-y-6 md:hidden">
        <AccordionItem v-for="item in accordion.items" :key="item.id" :is-expanded="item.isExpanded" @click="toggleExpanding(item)">
          <template #header>
            <div class="icon-wrapper">
              <component :is="item.icon" />
            </div>
            <h3 class="mr-2">{{ item.title }}</h3>
          </template>
          <p>{{ item.content }}</p>
        </AccordionItem>
      </TheAccordions>
      <div class="hidden md:grid grid-cols-2 gap-6 text-center">
        <div v-for="item in accordion.items" :key="item.key" class="bg-cont-default rounded-xl p-10">
          <div class="flex justify-center">
            <div class="icon-wrapper">
              <component :is="item.icon" size="40" />
            </div>
          </div>
          <h3 class="mt-6 mb-2">{{ item.title }}</h3>
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </HomeSectionWrapper>
</template>

<script>
import HomeSectionWrapper from '@/components/Home/Section/index.vue'
import TheAccordions from '@/components/TheAccordions/index.vue'
import AccordionItem from '@/components/TheAccordions/Item/index.vue'
import IconCard from '@/components/Icons/Card/index.vue'
import IconWalletCoins from '@/components/Icons/WalletCoins/index.vue'

export default {
  name: 'ComingSoonFeaturesSection',

  components: {
    IconWalletCoins,
    HomeSectionWrapper,
    TheAccordions,
    AccordionItem,
    IconCard
  },
  
  data: () => ({
    accordion: {
      items: [
        {
          id: 1,
          icon: 'IconCard',
          title: 'دریافت کارت بانکی',
          content: 'صدور زرین‌کارت با تمام ویژگی‌های کارت بانکی که به یک حساب بانکی (زرین‌حساب) متصل است یکی دیگر از خدمات نئو زرین خواهد بود.',
          isExpanded: false,
        },
        {
          id: 2,
          icon: 'IconWalletCoins',
          title: 'افتتاح حساب آنلاین',
          content: 'نئوزرین در تلاش است با فراهم کردن امکان افتتاح حساب در بانک های طرف قرارداد خود تجربه ای راحت و آسان را برای شما ممکن سازد.',
          isExpanded: false,
        },
      ],
    },
  }),
  
  methods: {
    toggleExpanding(item, isExpanded) {
      const newExpanded = isExpanded === undefined ? !item.isExpanded : isExpanded
      if (newExpanded) {
        this.accordion.items.forEach((item) => {
          item.isExpanded = false
        })
      }
      item.isExpanded = newExpanded
    },
  },
}
</script>

<style scoped>
.icon-wrapper {
  @apply text-2xl bg-cont-dim p-2 rounded-xl;
}
</style>
