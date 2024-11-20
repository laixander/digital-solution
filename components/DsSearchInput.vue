<template>
    <!-- Search Input -->
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
            <SearchIcon class="shrink-0 size-4 text-gray-400 dark:text-white/60" />
        </div>
        <input type="text"
            class="py-2 ps-10 pe-16 block w-full bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-600"
            placeholder="Search">
    </div>
    <!-- End Search Input -->
</template>

<script setup>
import { SearchIcon } from 'lucide-vue-next';
</script>