<template>
    <button 
        type="button" 
        :class="[
            baseSize,

            baseRounded,

            'inline-flex items-center gap-x-2 text-sm font-medium border',
            
            solid && 'border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none',

            outline && 'border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none',

            ghost && 'border-transparent text-blue-600 hover:bg-blue-100 hover:text-blue-800 focus:outline-none focus:bg-blue-100 focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none',

            soft && 'border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none',

            white && 'border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none',

            link && 'border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none',

            block && 'w-full justify-center' // Ensures the w-full class is applied conditionally
        ]"
    >
        <slot></slot>
    </button>
</template>

<script setup>
import { computed } from 'vue';

// Define props
const props = defineProps({
    solid: {
        type: Boolean,
        default: false,
    },
    outline: {
        type: Boolean,
        default: false,
    },
    ghost: {
        type: Boolean,
        default: false,
    },
    soft: {
        type: Boolean,
        default: false,
    },
    white: {
        type: Boolean,
        default: false,
    },
    link: {
        type: Boolean,
        default: false,
    },
    sm: {
        type: Boolean,
        default: false,
    },
    lg: {
        type: Boolean,
        default: false,
    },
    block: {
        type: Boolean,
        default: false,
    },
    pilled: {
        type: Boolean,
        default: false,
    },
});

const baseSize = computed(() => {
    if (props.sm) return 'py-2 px-3';
    if (props.lg) return 'p-4 sm:p-5';
    return 'py-3 px-4';
});

const baseRounded = computed(() => {
    if (props.pilled) return 'rounded-full';
    return 'rounded-lg';
});
</script>