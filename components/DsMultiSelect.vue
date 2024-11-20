<template>
    <div ref="dropdownRef" :class="customWidthClass" :style="customWidthStyle">
        <!-- Multi-Select Container -->
        <div class="relative">
            <!-- Input Field -->
            <div @click="toggleDropdown"
                class="flex items-center gap-2 py-[7px] px-2 border rounded-lg cursor-pointer bg-white">
                <!-- Selected Items -->
                <div v-if="selectedOptions.length" class="flex flex-wrap gap-1.5">
                    <div v-for="(option, index) in selectedOptions" :key="option"
                        class="flex flex-nowrap items-center relative z-10 bg-white border border-gray-200 rounded-full p-1 pl-2.5 text-gray-800 text-sm">
                        {{ option }}
                        <button @click.stop="removeOption(index)"
                            class="inline-flex shrink-0 justify-center items-center size-5 ms-2 rounded-full text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm text-blue-500 hover:text-blue-800"
                            title="Remove">
                            <XIcon class="size-3" />
                        </button>
                    </div>
                </div>
                <!-- Placeholder -->
                <span v-if="!selectedOptions.length" class="text-sm text-gray-400 inline-block p-[5px]">
                    {{ placeholder }}
                </span>
                <div class="ml-auto">
                    <ChevronDownIcon class="size-4 text-gray-400 transition-transform"
                        :class="{ 'rotate-180': isOpen }" />
                </div>
            </div>

            <!-- Dropdown -->
            <ul v-if="isOpen"
                class="absolute left-0 right-0 z-10 mt-1 p-1 bg-white border rounded-lg shadow-md max-h-48 overflow-y-auto">
                <li v-for="option in options" :key="option"
                    class="flex items-center justify-between text-sm px-4 py-2 cursor-pointer rounded-md hover:bg-gray-100"
                    @click="selectOption(option)">
                    <span>{{ option }}</span>
                    <CheckIcon v-if="selectedOptions.includes(option)" class="w-4 h-4 text-green-500" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { ChevronDownIcon, CheckIcon, XIcon } from 'lucide-vue-next';

// Props
const props = defineProps({
    options: {
        type: Array,
        required: true,
    },
    modelValue: {
        type: Array,
        default: () => [],
    },
    placeholder: {
        type: String,
        default: 'Select options...',
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

// State for selected options
const selectedOptions = ref([...props.modelValue]);

// Dropdown visibility state
const isOpen = ref(false);

// Watch for external updates to modelValue
watch(
    () => props.modelValue,
    (newValue) => {
        selectedOptions.value = [...newValue];
    },
    { immediate: true }
);

// Toggle dropdown visibility
const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};

// Select an option
const selectOption = (option) => {
    if (!selectedOptions.value.includes(option)) {
        selectedOptions.value.push(option);
        emit('update:modelValue', [...selectedOptions.value]);
    }
};

// Remove a selected option
const removeOption = (index) => {
    selectedOptions.value.splice(index, 1);
    emit('update:modelValue', [...selectedOptions.value]);
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