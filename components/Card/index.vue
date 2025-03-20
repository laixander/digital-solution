<template>
    <div class="relative">
        <div
            :class="[
                defaultClasses.base, 
                ui?.base,
                hasHover && 'group cursor-pointer hover:shadow-xl hover:scale-105 active:scale-100 transition ease-in-out duration-200',
            ]"
        >   
            <div :class="[defaultClasses.header, ui?.header]" v-if="hasHeader">
                <slot name="header"></slot>
            </div>
            <div :class="[defaultClasses.body, ui?.body]">
                <slot></slot>
            </div>
            <div :class="[defaultClasses.footer, ui?.footer]" v-if="hasFooter">
                <slot name="footer"></slot>
            </div>
        </div>
        <div 
            v-if="hasInk"
            class="absolute"
            :class="inkClasses[hasInk]"
            :style="{ backgroundColor: inkColor || '#3b82f6' }"
        >
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, useSlots } from 'vue';

interface UIConfig {
    base?: string;
    header?: string;
    body?: string;
    footer?: string;
}

type InkPosition = 'top' | 'left' | 'right' | 'bottom';

interface Props {
    hasHover?: boolean;
    hasPadding?: boolean;
    hasInk?: InkPosition;
    inkColor?: string; // New prop for dynamic color
    ui?: UIConfig;
}

defineProps<Props>();

const defaultClasses = {
    base: 'relative h-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm rounded-xl overflow-hidden divide-y divide-neutral-200 dark:divide-neutral-700 text-gray-700 dark:text-neutral-200',
    header: 'p-4 font-semibold',
    body: 'p-4 space-y-2 text-sm',
    footer: 'p-4 text-sm'
};

const inkClasses: Record<InkPosition, string> = {
    top: 'inset-x-2 top-2 h-2 w-auto rounded-full',
    left: 'inset-y-2 left-2 w-2 h-auto rounded-full',
    right: 'inset-y-2 right-2 w-2 h-auto rounded-full',
    bottom: 'inset-x-2 bottom-2 h-2 w-auto rounded-full'
};

const slots = useSlots();

const hasHeader = ref(false);
const hasFooter = ref(false);

onMounted(() => {
    hasHeader.value = !!slots.header;
    hasFooter.value = !!slots.footer;
});
</script>