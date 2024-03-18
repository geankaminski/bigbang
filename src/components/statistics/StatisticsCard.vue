<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

defineProps({
  title: String,
  value: String,
  id: String
})
</script>

<template>
  <div class="bg-white text-black p-6 shadow-md md:p-4">
    <p class="font-medium text-sm mb-7">{{ title }}</p>
    <p class="font-medium text-2xl mb-10">{{ value }}</p>
    <div class="flex justify-between items-center mt-4 gap-3">
      <button class="text-secondary py-2 px-4 w-full border border-gray">Ver mais detalhes</button>
      <button class="text-secondary py-2 px-4 border border-gray" aria-label="Abrir menu">
        <FontAwesomeIcon :icon="faBars" />
      </button>
    </div>
  </div>
</template>
