<template>
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-3 p-4 md:p-5 border-b border-gray-200">
        <slot v-if="simple"></slot>
        <div v-if="full || start" class="flex-1">
            <slot name="start">
            </slot>
        </div>
        <div v-if="full || center" class="flex gap-2">
            <slot name="center">
            </slot>
        </div>
        <div v-if="full || end" class="flex-1 md:text-end">
            <slot name="end">
            </slot>
        </div>
    </div>
</template>

<script setup>

defineProps({
    simple: {
        type: Boolean,
        default: false
    },
    full: {
        type: Boolean,
        default: false
    },
    start: {
        type: Boolean,
        default: false
    },
    center: {
        type: Boolean,
        default: false
    },
    end: {
        type: Boolean,
        default: false
    },
})

</script>