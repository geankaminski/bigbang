<script setup lang="ts">
import { watch } from 'vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import TableHeader from '@/components/TableHeader.vue'

import { useCounterAnimation } from '@/composables/useCounterAnimation'

const props = defineProps({
  categories: {
    type: Array as () => Array<Category>,
    required: true
  },
  summary: {
    type: Object as () => Summary,
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

const { count, animate } = useCounterAnimation()

const updateCounter = (newValue: number) => {
  animate(newValue)
}

watch(() => props.summary.income, updateCounter)
</script>

<template>
  <div class="w-full">
    <TableHeader title="Análise Geral" icon="target" />

    <div class="flex items-center justify-between px-6 py-4 border-b border-t border-table">
      <div>
        <p class="font-medium text-sm color-black mb-2">Ganhos</p>
        <p class="font-medium text-xl color-black">R${{ count }}</p>
      </div>

      <div>
        <p class="font-medium text-sm color-black mb-2">Saídas</p>
        <p class="font-medium text-xl color-black">R${{ summary.outcome }}</p>
      </div>
    </div>

    <ul class="mt-2">
      <li v-for="category in categories" :key="category.id" class="py-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <FontAwesomeIcon :icon="faCartShopping" class="text-md bg-yellow p-2" />
            <p class="font-medium text-sm color-black">{{ category.title }}</p>
          </div>
          <p class="font-medium text-sm color-black">{{ category.value }}%</p>
        </div>

        <div class="w-full h-2 rounded mt-2 bg-bars relative">
          <div
            class="w-full h-2 rounded-full mt-2"
            :style="{ backgroundColor: category.color, width: category.value + '%' }"
          ></div>
        </div>
      </li>
    </ul>
  </div>
</template>
