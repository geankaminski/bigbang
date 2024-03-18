<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

import StatisticsCard from '@/components/statistics/StatisticsCard.vue'

interface Card {
  title: string
  value: Number
  id: String
}

defineProps({
  cards: {
    type: Array as () => Card[],
    required: true
  },
  loading: Boolean
})
</script>

<template>
  <section>
    <div class="text-white flex items-center gap-4">
      <FontAwesomeIcon :icon="faCircle" class="text-red" />
      <p class="font-medium text-xl">Painel de estatísticas</p>
      <p class="font-medium text-sm text-hint">últimos 7 dias</p>
    </div>

    <div class="flex justify-between items-center gap-10 mt-6 md:flex-col md:gap-4" v-if="!loading">
      <StatisticsCard
        v-for="card in cards"
        :key="card.id + '-card'"
        :id="card.id as string"
        :title="card.title"
        :value="card.value as number"
        class="w-1/3 md:w-full"
      />
    </div>
  </section>
</template>
