<template>
<!-- Search Input -->
<div :class="customWidthClass" :style="customWidthStyle" class="relative">
    <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
    <SearchIcon class="shrink-0 size-4 text-gray-400 dark:text-white/60" />
    </div>
    <input
    type="text"
    class="py-2 ps-10 pe-16 block w-full bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-600"
    placeholder="Search"
    />
</div>
<!-- End Search Input -->
</template>

<script setup>
import { ref, watch } from 'vue';
import { SearchIcon } from 'lucide-vue-next';

// Props
const props = defineProps({
width: {
    type: String,
    default: 'w-full', // Default to full width using Tailwind CSS class
},
});

// Compute classes or styles based on the width prop
const customWidthClass = ref('');
const customWidthStyle = ref({});

watch(
() => props.width,
(newValue) => {
    if (newValue.startsWith('w-') || newValue === 'w-full') {
    // If the width is a Tailwind class
    customWidthClass.value = newValue;
    customWidthStyle.value = {}; // No inline styles needed
    } else {
    // If the width is a custom value like '300px'
    customWidthClass.value = '';
    customWidthStyle.value = { width: newValue };
    }
},
{ immediate: true }
);
</script>

<style scoped>
/* Add additional styles if necessary */
</style>
