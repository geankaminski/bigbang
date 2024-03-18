<script setup lang="ts">
import HeaderNav from '@/components/header/HeaderNav.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
</script>

<template>
  <header class="flex justify-between items-center bg-primary p-5 px-6 w-full">
    <img src="@/assets/png/logo.png" alt="Vue logo" class="w-24" />

    <HeaderNav />

    <FontAwesomeIcon :icon="faBell" class="text-white text-xl" />
  </header>
</template>
