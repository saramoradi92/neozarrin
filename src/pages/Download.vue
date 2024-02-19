<template>
  <div class="flex flex-col gap-y-32">
    <DownloadHeroSection />
    <AppsSection />
    <FeaturesSectionSolid />
  </div>
</template>

<script>
import DownloadHeroSection from '@/components/Download/HeroSection/index.vue'
import AppsSection from '@/components/Download/AppsSection/index.vue'
import FeaturesSectionSolid from "@/components/FeaturesSection/Solid/index.vue";

export default {
  name: 'DownloadPage',
  components: {FeaturesSectionSolid, AppsSection, DownloadHeroSection }
}
</script>
