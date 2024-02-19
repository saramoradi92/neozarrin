<template>
  <HomeSectionWrapper>
    <div class="flex flex-col items-center gap-y-5">
      <h2 class="text-center">سوالات متداول</h2>
      <p class="text-center">پرتکرارترین سوالاتی که از ما پرسیده می‌شود</p>
      <Accordions class="gap-y-2">
        <AccordionItem>
          <template #header>
            <h4>در چه بانکهایی میشه حساب باز کرد؟</h4>
          </template>
          <p>
            در حال حاضر فقط بانک اینده .ولی به زودی امکان افتتاح حساب بانک ایران زمین و چند بانک
            دیگه هم فراهم خواهد شد.
          </p>
        </AccordionItem>
        <AccordionItem>
          <template #header>
            <h4>برای افتتاح حساب چه مدارکی لازم است؟</h4>
          </template>
          <p>
            در حال حاضر فقط بانک اینده .ولی به زودی امکان افتتاح حساب بانک ایران زمین و چند بانک
            دیگه هم فراهم خواهد شد.
          </p>
        </AccordionItem>
        <AccordionItem>
          <template #header>
            <h4>دریافت کارت بانکی به چه شکل هست؟</h4>
          </template>
          <p>
            در حال حاضر فقط بانک اینده .ولی به زودی امکان افتتاح حساب بانک ایران زمین و چند بانک
            دیگه هم فراهم خواهد شد.
          </p>
        </AccordionItem>
        <AccordionItem>
          <template #header>
            <h4>چگونه با پشتیبانی زرین‌پال تماس بگیرم؟</h4>
          </template>
          <p>
            در حال حاضر فقط بانک اینده .ولی به زودی امکان افتتاح حساب بانک ایران زمین و چند بانک
            دیگه هم فراهم خواهد شد.
          </p>
        </AccordionItem>
        <AccordionItem>
          <template #header>
            <h4>ایا امکان استفاده به صورت وب سرویس هم هست؟</h4>
          </template>
          <p>
            در حال حاضر فقط بانک اینده .ولی به زودی امکان افتتاح حساب بانک ایران زمین و چند بانک
            دیگه هم فراهم خواهد شد.
          </p>
        </AccordionItem>
      </Accordions>
    </div>
  </HomeSectionWrapper>
</template>

<script>
import HomeSectionWrapper from '@/components/Home/Section/index.vue'
import Accordions from '@/components/Accordions/index.vue'
import AccordionItem from '@/components/Accordions/Item/index.vue'

export default {
  name: 'FaqSection',

  components: {
    HomeSectionWrapper,
    Accordions,
    AccordionItem
  }
}
</script>
