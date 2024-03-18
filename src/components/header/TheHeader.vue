<script setup lang="ts">
import { ref } from 'vue'
import HeaderNav from '@/components/header/HeaderNav.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const opened = ref(false)
</script>

<template>
  <header class="flex justify-between items-center bg-primary p-5 px-6 w-full md:gap-8">
    <h1>
      <img src="@/assets/png/logo.png" alt="BigBang Logo" class="w-24" />
    </h1>

    <HeaderNav class="md:hidden" />

    <div class="flex items-center">
      <FontAwesomeIcon
        aria-label="Notificações"
        :icon="faBell"
        class="text-white text-xl cursor-pointer hover:opacity-70 transition-all"
      />
      <FontAwesomeIcon
        aria-label="Abrir menu"
        :icon="faBars"
        class="menu-btn text-white text-xl ml-6 hidden md:block cursor-pointer hover:opacity-70 transition-all"
        @click="opened = !opened"
      />
    </div>
  </header>

  <HeaderNav v-if="opened" class="hidden md:block transition-all" />
</template>
