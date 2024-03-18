<script setup lang="ts">
import TheHeader from '@/components/header/TheHeader.vue'
import BalanceInfo from '@/components/balance/BalanceInfo.vue'
import StatisticsPanel from '@/components/statistics/StatisticsPanel.vue'
</script>

<template>
  <TheHeader />

  <main class="bg-primary mx-auto px-32 pt-28 font-poppins">
    <BalanceInfo />

    <StatisticsPanel class="mt-12" />
  </main>
</template>
