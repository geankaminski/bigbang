<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: 'primary'
  }
})
</script>

<template>
  <button
    :class="`bg-${color} rounded-3xl text-black font-bold p-2 mt-2 
        w-[100%] max-w-lg mb-3 hover:opacity-90 disabled:opacity-80 disabled:cursor-not-allowed disabled:bg-hint`"
  >
    <slot></slot>
  </button>
</template>
