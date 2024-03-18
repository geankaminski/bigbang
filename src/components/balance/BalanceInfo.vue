<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBolt, faPlus } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <section class="w-full text-white">
    <p class="font-medium text-xl">Saldo total</p>

    <div class="flex items-center justify-between">
      <div class="mt-3 flex items-center gap-3">
        <p class="text-4xl font-medium">R$304,78</p>
        <FontAwesomeIcon :icon="faBolt" class="text-yellow" />
        <p class="text-sm font-normal">rendendo 124%</p>
      </div>

      <div>
        <button class="bg-secondary py-2 px-12">
          <p class="text-sm font-medium">Enviar dinheiro</p>
        </button>

        <button class="bg-secondary p-2 px-4 ml-4">
          <p class="text-sm font-medium"><FontAwesomeIcon :icon="faPlus" class="text-white" /></p>
        </button>
      </div>
    </div>
  </section>
</template>
