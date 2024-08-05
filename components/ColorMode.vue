<template>
  <button @click="toggleDark()" class="flex items-center">
      <Icon v-if="isDark" icon="carbon:sun" />
      <Icon v-if="!isDark" icon="carbon:moon" />
      
      <span class="ml-2">
          {{ isDark ? 'Light' : 'Dark' }}
      </span>
  </button>

</template>

<script setup lang="ts">
import { useToggle } from '@vueuse/shared'
import { isDark } from '@/composables/dark'
import { Icon } from '@iconify/vue';

// const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<style>

</style>