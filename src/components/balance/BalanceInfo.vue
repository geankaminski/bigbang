<script setup lang="ts">
import { watch } from 'vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBolt, faPlus, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import { useCounterAnimation } from '@/composables/useCounterAnimation'

const props = defineProps({
  balance: {
    type: Number,
    required: true
  }
})

const { count, animate } = useCounterAnimation()

const updateCounter = (newValue: number) => {
  animate(newValue)
}

watch(() => props.balance, updateCounter)
</script>

<template>
  <section class="w-full text-white">
    <p class="font-medium text-xl">Saldo total</p>

    <div class="flex items-center justify-between md:flex-col md:gap-4 md:items-start">
      <div class="mt-3 flex items-center gap-3 md:gap-4">
        <p class="text-4xl md:text-2xl font-medium">R${{ count }}</p>
        <FontAwesomeIcon :icon="faBolt" class="text-yellow" />
        <p class="text-sm font-normal">rendendo 124%</p>
      </div>

      <div class="mt-3 flex items-center">
        <button class="bg-secondary py-2 px-20 relative md:px-10 hover:opacity-70 transition-all">
          <FontAwesomeIcon
            :icon="faPaperPlane"
            class="text-white absolute left-4 top-2 md:left-2 md:top-2"
          />
          <p class="text-sm font-medium">Enviar dinheiro</p>
        </button>

        <button
          class="bg-secondary p-2 px-6 ml-4 hover:opacity-70 transition-all"
          aria-label="Adicionar"
        >
          <p class="text-sm font-medium">
            <FontAwesomeIcon :icon="faPlus" class="text-white" aria-hidden="true" />
          </p>
        </button>
      </div>
    </div>
  </section>
</template>
