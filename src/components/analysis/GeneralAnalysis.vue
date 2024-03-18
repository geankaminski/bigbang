<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import TableHeader from '@/components/TableHeader.vue'
import BaseLoading from '@/components/BaseLoading.vue'

defineProps({
  categories: {
    type: Array as () => Array<Category>,
    required: true
  },
  summary: {
    type: Object as () => Summary,
    required: true
  },
  loading: {
    type: Boolean,
    required: true
  }
})

interface Summary {
  income: number
  outcome: number
}

interface Category {
  id: number
  title: string
  color: string
  value: number
}
</script>

<template>
  <div class="w-full mb-16">
    <TableHeader title="Análise Geral" icon="target" />

    <div v-if="!loading">
      <div class="flex items-center justify-between px-5 py-4 border-b border-t border-table">
        <div>
          <p class="font-medium text-sm color-black mb-2">Ganhos</p>
          <p class="font-medium text-xl color-black">R${{ summary.income }}</p>
        </div>

        <div>
          <p class="font-medium text-sm color-black mb-2">Saídas</p>
          <p class="font-medium text-xl color-black">R${{ summary.outcome }}</p>
        </div>
      </div>

      <ul class="mt-2">
        <li v-for="category in categories" :key="category.id" class="py-1">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <FontAwesomeIcon :icon="faCartShopping" class="text-md bg-yellow p-2" />
              <p class="font-medium text-sm color-black">{{ category.title }}</p>
            </div>
            <p class="font-medium text-sm color-black">{{ category.value }}%</p>
          </div>

          <div class="w-full h-2 rounded mt-1 bg-bars relative">
            <div
              class="w-full h-2 rounded-full mt-1"
              :style="{ backgroundColor: category.color, width: category.value + '%' }"
            ></div>
          </div>
        </li>
      </ul>
    </div>

    <div v-else class="flex items-center justify-center w-full h-32">
      <BaseLoading />
    </div>
  </div>
</template>
