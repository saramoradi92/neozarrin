<template>
  <div>
    <HomeSectionWrapper class="text-center">
      <div class="flex flex-col items-center gap-y-5">
        <h2>چرا نئوزرین؟</h2>
        <p>هر آنچه شما لازم دارید در نئوزرین گرد هم آورده‌ایم</p>
      </div>
    </HomeSectionWrapper>
    <div class="pt-12 w-full">
      <swiper
        ref="swiper"
        dir="rtl"
        :slides-per-view="1"
        :breakpoints="{
          640: {
            slidesPerView: 2.000001,
          }
        }"
        :space-between="24"
        :modules="modules"
        loop
        :autoplay="{
          delay: 2500
        }"
        centered-slides
      >
        <swiper-slide>
          <WhyNeozarinSectionItem title="واریز وجه با شناسه پرداخت">
            <template #image>
              <img
                src="@/assets/images/carousel/carousel-image-1.svg"
                alt="واریز وجه با شناسه پرداخت"
              />
            </template>
            <template #title>واریز وجه با شناسه پرداخت</template>
            <p>
              شناسه پرداخت کدی منحصر به فرد است که امکان دسته‌بندی، رهگیری و مدیریت آسان انتقالات را
              برای شما فراهم میسازد. پس از انجام هر تراکنش با شناسه پرداخت، مبلغ واریزی در عرض یک
              دقیق با حساب متصل شده‌ی شما تسویه خواهد شد.
            </p>
          </WhyNeozarinSectionItem>
        </swiper-slide>
        <swiper-slide>
          <WhyNeozarinSectionItem title="واریز وجه با شناسه پرداخت">
            <template #image>
              <img
                src="@/assets/images/carousel/carousel-image-2.svg"
                alt="واریز وجه با شناسه پرداخت"
              />
            </template>
            <template #title>واریز وجه با شناسه پرداخت</template>
            <p>
              شناسه پرداخت کدی منحصر به فرد است که امکان دسته‌بندی، رهگیری و مدیریت آسان انتقالات را
              برای شما فراهم میسازد. پس از انجام هر تراکنش با شناسه پرداخت، مبلغ واریزی در عرض یک
              دقیق با حساب متصل شده‌ی شما تسویه خواهد شد.
            </p>
          </WhyNeozarinSectionItem>
        </swiper-slide>
        <swiper-slide>
          <WhyNeozarinSectionItem title="واریز وجه با شناسه پرداخت">
            <template #image>
              <img
                src="@/assets/images/carousel/carousel-image-3.svg"
                alt="واریز وجه با شناسه پرداخت"
              />
            </template>
            <template #title>واریز وجه با شناسه پرداخت</template>
            <p>
              شناسه پرداخت کدی منحصر به فرد است که امکان دسته‌بندی، رهگیری و مدیریت آسان انتقالات را
              برای شما فراهم میسازد. پس از انجام هر تراکنش با شناسه پرداخت، مبلغ واریزی در عرض یک
              دقیق با حساب متصل شده‌ی شما تسویه خواهد شد.
            </p>
          </WhyNeozarinSectionItem>
        </swiper-slide>
        <swiper-slide>
          <WhyNeozarinSectionItem title="واریز وجه با شناسه پرداخت">
            <template #image>
              <img
                src="@/assets/images/carousel/carousel-image-2.svg"
                alt="واریز وجه با شناسه پرداخت"
              />
            </template>
            <template #title>واریز وجه با شناسه پرداخت</template>
            <p>
              شناسه پرداخت کدی منحصر به فرد است که امکان دسته‌بندی، رهگیری و مدیریت آسان انتقالات را
              برای شما فراهم میسازد. پس از انجام هر تراکنش با شناسه پرداخت، مبلغ واریزی در عرض یک
              دقیق با حساب متصل شده‌ی شما تسویه خواهد شد.
            </p>
          </WhyNeozarinSectionItem>
        </swiper-slide>
      </swiper>
    </div>
    <div class="mt-12 flex justify-center gap-2 text-2xl">
      <button class="bg-white rounded-full p-3" @click="previousSlide">
        <IconChevron class="-rotate-90" />
      </button>
      <button class="bg-white rounded-full p-3" @click="nextSlide">
        <IconChevron class="rotate-90" />
      </button>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import WhyNeozarinSectionItem from '@/components/WhyNeozarinSection/Item/index.vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import { Autoplay, Navigation } from 'swiper/modules'
import HomeSectionWrapper from '@/components/Home/Section/index.vue'
import IconChevron from "@/components/Icons/Chevron/index.vue";

export default {
  name: 'WhyNeozarinSection',

  components: {
    IconChevron,
    HomeSectionWrapper,
    WhyNeozarinSectionItem,
    Swiper,
    SwiperSlide
  },
  
  setup() {
    return {
      modules: [Autoplay, Navigation],
      swiperInstance: null, // New property to store the Swiper instance
    };
  },
  
  mounted() {
    // Wait until the component is mounted to access the Swiper instance
    if (this.$refs.swiper) {
      this.swiperInstance = document.querySelector('.swiper').swiper;
    }
  },
  
  methods: {
    previousSlide() {
      if (this.swiperInstance) {
        this.swiperInstance.slidePrev();
      }
    },
    
    nextSlide() {
      if (this.swiperInstance) {
        this.swiperInstance.slideNext();
      }
    },
  },
}
</script>
