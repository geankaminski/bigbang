<script setup lang="ts">
import { watch } from 'vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { useCounterAnimation } from '@/composables/useCounterAnimation'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  id: {
    type: String,
    required: true
  }
})

const { count, animate } = useCounterAnimation()

const updateCounter = (newValue: number) => {
  animate(newValue)
}

watch(() => props.value, updateCounter)
</script>

<template>
  <div class="bg-white text-black p-6 shadow-lg md:p-4">
    <p class="font-medium text-sm mb-7">{{ title }}</p>
    <p class="font-medium text-2xl mb-10">R${{ count }}</p>
    <div class="flex justify-between items-center mt-4 gap-3">
      <button
        class="text-secondary py-2 px-4 w-full border border-gray hover:bg-gray hover:text-white transition-all text-sm"
      >
        Ver mais detalhes
      </button>
      <button
        class="text-secondary py-2 px-4 border border-gray hover:bg-gray hover:text-white transition-all"
        aria-label="Abrir menu"
      >
        <FontAwesomeIcon :icon="faBars" />
      </button>
    </div>
  </div>
</template>
