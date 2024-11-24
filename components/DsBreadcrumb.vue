<template>
    <nav aria-label="Breadcrumb">
      <ol class="flex items-center whitespace-nowrap">
        <li v-for="(item, index) in items" :key="index" class="inline-flex items-center">
          <template v-if="index < items.length - 1">
            <nuxt-link
              :to="item.href"
              class="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
            >
              {{ item.title }}
            </nuxt-link>
            <svg
              class="shrink-0 mx-2 size-4 text-gray-400 dark:text-neutral-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </template>
          <template v-else>
            <span
              class="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-neutral-200"
              aria-current="page"
            >
              {{ item.title }}
            </span>
          </template>
        </li>
      </ol>
    </nav>
  </template>

<script setup>
// Define props directly in `script setup`
defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>