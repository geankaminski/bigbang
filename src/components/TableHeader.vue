<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMoneyCheckDollar, faBullseye } from '@fortawesome/free-solid-svg-icons'

defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="flex items-center justify-between mb-6">
    <div class="flex items-center gap-4 text-primary">
      <FontAwesomeIcon v-if="icon === 'dollar'" :icon="faMoneyCheckDollar" class="text-xl" />
      <FontAwesomeIcon v-if="icon === 'target'" :icon="faBullseye" class="text-xl" />
      <p class="font-medium text-xl">{{ title }}</p>
      <p class="font-medium text-sm text-hint">últimos 7 dias</p>
    </div>
    <p class="font-medium text-sm text-link">Ver tudo</p>
  </div>
</template>
