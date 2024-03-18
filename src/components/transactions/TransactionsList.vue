<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStore } from '@fortawesome/free-solid-svg-icons'

import TableHeader from '@/components/TableHeader.vue'

interface Transaction {
  id: number
  title: string
  value: string
  color: string
}

defineProps({
  transactions: {
    type: Array as () => Array<Transaction>,
    required: true
  }
})
</script>

<template>
  <div class="w-full">
    <TableHeader title="Transações recentes" icon="dollar" />

    <ul>
      <li
        v-for="transaction in transactions"
        :key="transaction.id"
        class="flex items-center justify-between gap-4 px-1 py-3 border-b border-table first:border-t"
      >
        <div class="flex items-center gap-3">
          <FontAwesomeIcon :icon="faStore" class="text-xl bg-yellow p-2" />
          <p class="font-medium text-sm text-black">{{ transaction.title }}</p>
        </div>
        <p class="font-medium text-sm text-black">{{ transaction.value }}</p>
      </li>
    </ul>
  </div>
</template>
