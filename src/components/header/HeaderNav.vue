<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <nav>
    <ul class="flex gap-10 items-center font-poppins font-medium text-white">
      <li class="hover:opacity-70 transition-all">
        <router-link
          to="/"
          :class="router.currentRoute.value.path === '/' && 'bg-error text-white px-4 py-2'"
        >
          Dashboard
        </router-link>
      </li>

      <li class="hover:opacity-70 transition-all">
        <router-link
          to="/payments"
          :class="router.currentRoute.value.path === '/payments' && 'bg-error text-white px-4 py-2'"
        >
          Pagamentos
        </router-link>
      </li>

      <li class="hover:opacity-70 transition-all">
        <router-link
          to="/invoices"
          :class="router.currentRoute.value.path === '/payments' && 'bg-error text-white px-4 py-2'"
        >
          Invoices
        </router-link>
      </li>

      <li class="hover:opacity-70 transition-all">
        <router-link
          to="/insights"
          :class="router.currentRoute.value.path === '/payments' && 'bg-error text-white px-4 py-2'"
        >
          Insights
        </router-link>
      </li>
    </ul>
  </nav>
</template>
