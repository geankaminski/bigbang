<script setup lang="ts">
import TheHeader from '@/components/header/TheHeader.vue'
import BalanceInfo from '@/components/balance/BalanceInfo.vue'
import StatisticsPanel from '@/components/statistics/StatisticsPanel.vue'
import TransactionsList from '@/components/transactions/TransactionsList.vue'
import GeneralAnalysis from '@/components/analysis/GeneralAnalysis.vue'

const transactions = [
  {
    id: 1,
    title: 'Salary',
    color: 'green',
    value: 'R$10,98'
  },
  {
    id: 2,
    title: 'Food',
    color: 'red',
    value: 'R$10,98'
  },
  {
    id: 3,
    title: 'Salary',
    color: 'green',
    value: 'R$10,98'
  },
  {
    id: 4,
    title: 'Food',
    color: 'red',
    value: 'R$10,98'
  }
]

const categories = [
  {
    id: 1,
    title: 'Compras',
    color: 'green',
    value: 62
  },
  {
    id: 2,
    title: 'Boletos',
    color: 'red',
    value: 14
  },
  {
    id: 3,
    title: 'Investimentos',
    color: 'green',
    value: 5
  }
]

const summary = {
  income: 50,
  outcome: 50
}
</script>

<template>
  <TheHeader />

  <main class="mx-auto px-32 pt-28 font-poppins">
    <BalanceInfo />

    <StatisticsPanel class="mt-16" />

    <div class="flex justify-between mt-16 gap-24">
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
