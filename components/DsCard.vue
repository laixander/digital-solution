<template>
    <div
        :class="[
        'bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden',
        hoverEffect && 'group cursor-pointer hover:shadow-xl hover:scale-105 focus:outline-none focus:shadow-md transition ease-in-out duration-200',
        sameHeight && 'h-full',
        ]"
    >
        <slot></slot>
    </div>
</template>

<script setup>
defineProps({
    hoverEffect: {
        type: Boolean,
        default: false,
    },
    sameHeight: {
        type: Boolean,
        default: false,
    }
});
</script>

<!-- 
Card without hover effect:
<DsCard>
    No hover effect here.
</DsCard>

Card with hover effect:
<DsCard :hoverEffect="true">
    Hover effect applied.
</DsCard>

Cards with same height inside CSS Grid:
<DsCard :sameHeight="true">
    Hover effect applied.
</DsCard>
-->