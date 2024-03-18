<script setup lang="ts">
import { onMounted, ref } from 'vue'

import TheHeader from '@/components/header/TheHeader.vue'
import BalanceInfo from '@/components/balance/BalanceInfo.vue'
import StatisticsPanel from '@/components/statistics/StatisticsPanel.vue'
import TransactionsList from '@/components/transactions/TransactionsList.vue'
import GeneralAnalysis from '@/components/analysis/GeneralAnalysis.vue'

import fetchData from '@/services/mock'

const transactions = ref([])
const categories = ref([])
const summary = ref({ income: 0, outcome: 0 })

onMounted(async () => {
  const response = await fetchData()
  transactions.value = (response as any).transactions
  categories.value = (response as any).categories
  summary.value = (response as any).summary
})
</script>

<template>
  <TheHeader />

  <main class="mx-auto px-32 pt-28 mb-32 font-poppins lg:px-10 md:px-6 md:pt-16">
    <BalanceInfo />

    <StatisticsPanel class="mt-24" />

    <div class="flex justify-between mt-16 gap-24 md:flex-col md:gap-16">
      <TransactionsList :transactions="transactions" />
      <GeneralAnalysis :categories="categories" :summary="summary" />
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  background: linear-gradient(180deg, #202027 50%, #fff 50%);
}
</style>
