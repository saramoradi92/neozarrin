<template>
  <HomeSectionWrapper>
    <div class="flex flex-col items-center gap-y-5">
      <h2 class="text-center">سوالات متداول</h2>
      <p class="text-center">پرتکرارترین سوالاتی که از ما پرسیده می‌شود</p>
      <TheAccordions icon-handler="plus" class="gap-y-2">
        <AccordionItem v-for="item in accordion.items" :key="item.id" :is-expanded="item.isExpanded" @click="toggleExpanding(item)">
          <template #header>
            <h4>{{item.title}}</h4>
          </template>
          <p>{{item.content}}</p>
        </AccordionItem>
      </TheAccordions>
    </div>
  </HomeSectionWrapper>
</template>

<script>
import HomeSectionWrapper from '@/components/Home/Section/index.vue'
import TheAccordions from '@/components/TheAccordions/index.vue'
import AccordionItem from '@/components/TheAccordions/Item/index.vue'

export default {
  name: 'FaqSection',

  components: {
    HomeSectionWrapper,
    TheAccordions,
    AccordionItem
  },
  
  data: () => ({
    accordion: {
      items: [
        {
          id: 1,
          title: 'در چه بانکهایی میشه حساب باز کرد؟',
          content: 'در حال حاضر فقط بانک اینده .ولی به زودی امکان افتتاح حساب بانک ایران زمین و چند بانک دیگه هم فراهم خواهد شد.',
          isExpanded: false,
        },
        {
          id: 2,
          title: 'برای افتتاح حساب چه مدارکی لازم است؟',
          content: 'در حال حاضر فقط بانک اینده .ولی به زودی امکان افتتاح حساب بانک ایران زمین و چند بانک دیگه هم فراهم خواهد شد.',
          isExpanded: false,
        },
        {
          id: 3,
          title: 'چگونه با پشتیبانی زرین‌پال تماس بگیرم؟',
          content: 'در حال حاضر فقط بانک اینده .ولی به زودی امکان افتتاح حساب بانک ایران زمین و چند بانک دیگه هم فراهم خواهد شد.',
          isExpanded: false,
        },
        {
          id: 4,
          title: 'ایا امکان استفاده به صورت وب سرویس هم هست؟',
          content: 'در حال حاضر فقط بانک اینده .ولی به زودی امکان افتتاح حساب بانک ایران زمین و چند بانک دیگه هم فراهم خواهد شد.',
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
