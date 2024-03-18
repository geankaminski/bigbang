<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

import StatisticsCard from '@/components/statistics/StatisticsCard.vue'

const cardInfo = [
  {
    title: 'Conta PJ',
    value: 'R$ 1.000,00',
    id: 'sales'
  },
  {
    title: 'Recebimentos',
    value: 'R$ 1.000,00',
    id: 'clients'
  },
  {
    title: 'Lucro',
    value: 'R$ 1.000,00',
    id: 'products'
  }
]
</script>

<template>
  <section>
    <div class="text-white flex items-center gap-4">
      <FontAwesomeIcon :icon="faCircle" class="text-red" />
      <p class="font-medium text-xl">Painel de estatísticas</p>
      <p class="font-medium text-sm text-hint">últimos 7 dias</p>
    </div>

    <div class="flex justify-between items-center gap-12 mt-8 md:flex-col md:gap-4">
      <StatisticsCard
        v-for="card in cardInfo"
        :key="card.id"
        :title="card.title"
        :value="card.value"
        :id="card.id"
        class="w-1/3 md:w-full"
      />
    </div>
  </section>
</template>
