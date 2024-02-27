<template>
  <li class="rounded-xl w-full bg-cont-default">
    <div class="p-4 w-full flex cursor-pointer items-center">
      <slot name="header"/>
      <div class="mr-auto">
        <div v-if="iconHandler === 'plus'">
          <div class="handler-wrapper">
            <IconMinus v-if="isExpanded"/>
            <IconPlus v-else/>
          </div>
        </div>
        <div v-else :class="{ 'rotate-180': isExpanded }" class="transition">
          <div class="handler-wrapper">
            <IconChevron/>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isExpanded" class="p-4">
      <slot/>
    </div>
  </li>
</template>

<script>
export default {
  name: 'AccordionItem',
  
  props: {
    isExpanded: {
      type: Boolean,
      required: true,
    },
  }
}
</script>

<script setup>
import {inject} from 'vue'
import IconChevron from '@/components/Icons/Chevron/index.vue'
import IconMinus from '@/components/Icons/Minus/index.vue'
import IconPlus from '@/components/Icons/Plus/index.vue'

const {iconHandler} = inject('providedData')
</script>

<style scoped>
.handler-wrapper {
  @apply text-2xl bg-cont-dim p-2 rounded-xl;
}
</style>
