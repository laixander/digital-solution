<template>
    <div class="relative">
        <slot name="img"></slot>
        <div v-if="showExtra" class="absolute right-2 top-2">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
defineProps({
    showExtra: {
        type: Boolean,
        default: true, // Set to `true` by default to show the extra by default
    },
});
</script>