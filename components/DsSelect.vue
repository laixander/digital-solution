<template>
    <div ref="dropdownRef" :class="customWidthClass" :style="customWidthStyle">
        <!-- Single Select Container -->
        <div class="relative">
            <!-- Input Field -->
            <div @click="toggleDropdown"
                class="flex items-center gap-2 py-2 px-3 border dark:border-neutral-700 rounded-lg cursor-pointer bg-white dark:bg-neutral-800 truncate">
                <!-- Selected Item -->
                <span v-if="selectedOption" class="text-gray-700 dark:text-neutral-200 text-sm">
                    {{ selectedOption }}
                </span>
                <!-- Placeholder -->
                <span v-else class="text-sm text-gray-400 dark:text-neutral-500">
                    {{ placeholder }}
                </span>
                <div class="ml-auto">
                    <ChevronDownIcon class="size-4 text-gray-400 dark:text-neutral-500 transition-transform"
                        :class="{ 'rotate-180': isOpen }" />
                </div>
            </div>

            <!-- Dropdown -->
            <ul v-if="isOpen"
                class="absolute left-0 right-0 z-10 mt-1 p-1 bg-white dark:bg-neutral-800 border dark:border-neutral-700 rounded-lg shadow-md max-h-52 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb] :bg-neutral-500">
                <li v-for="option in options" :key="option"
                    class="flex items-center justify-between text-sm text-gray-700 dark:text-neutral-200 px-4 py-2 cursor-pointer rounded-md hover:bg-neutral-300/10"
                    @click="selectOption(option)">
                    <span>{{ option }}</span>
                    <CheckIcon v-if="selectedOption === option" class="w-4 h-4 text-green-500" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { ChevronDownIcon, CheckIcon } from 'lucide-vue-next';

// Props
const props = defineProps({
    options: {
        type: Array,
        required: true,
    },
    modelValue: {
        type: String,
        default: null,
    },
    placeholder: {
        type: String,
        default: 'Select an option...',
    },
    width: {
        type: String,
        default: 'w-full', // Default to full width using Tailwind CSS class
    },
});

// Emit event
const emit = defineEmits(['update:modelValue']);

// Compute classes or styles based on the width prop
const customWidthClass = ref('');
const customWidthStyle = ref({});
const dropdownRef = ref(null);

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

// State for the selected option
const selectedOption = ref(props.modelValue);

// Dropdown visibility state
const isOpen = ref(false);

// Watch for external updates to modelValue
watch(
    () => props.modelValue,
    (newValue) => {
        selectedOption.value = newValue;
    },
    { immediate: true }
);

// Toggle dropdown visibility
const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};

// Select an option
const selectOption = (option) => {
    selectedOption.value = option;
    emit('update:modelValue', option);
    isOpen.value = false; // Close dropdown after selecting
};

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
        isOpen.value = false;
    }
};

// Lifecycle hooks to add/remove the event listener
onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
/* Add additional styles if necessary */
</style>