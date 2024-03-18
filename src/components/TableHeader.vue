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
  <div class="flex items-center justify-between mb-6 md:mb-4">
    <div class="flex items-center gap-4 text-primary md:gap-2">
      <FontAwesomeIcon
        v-if="icon === 'dollar'"
        :icon="faMoneyCheckDollar"
        class="text-xl md:hidden"
      />
      <FontAwesomeIcon v-if="icon === 'target'" :icon="faBullseye" class="text-xl md:hidden" />
      <p class="font-medium text-xl md:text-lg">{{ title }}</p>
      <p class="font-medium text-sm md:text-xs text-hint">últimos 7 dias</p>
    </div>
    <a href="#" class="font-medium text-sm md:text-xs text-link hover:underline cursor-pointer"
      >Ver tudo</a
    >
  </div>
</template>
