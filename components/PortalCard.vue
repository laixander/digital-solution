<template>
    <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
        <div :class="bgColor" class="h-52 flex flex-col justify-center items-center rounded-t-xl">
            <div class="size-28 rounded-3xl bg-white flex items-center justify-center">
                <slot name="appLogo"></slot>
            </div>
        </div>
        <div class="p-4 md:p-6">
            <span :class="tagColor" class="block mb-1 text-xs font-semibold uppercase">
                <slot name="tag"></slot>
            </span>
            <h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                <slot name="appName"></slot>
            </h3>
            <p class="mt-3 text-gray-500 dark:text-neutral-500">
                <slot name="description"></slot>
            </p>
        </div>
        <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
            <slot name="link"></slot>
        </div>
    </div>
</template>

<script setup>
defineProps({
  bgColor: {
    type: String,
    default: '',
  },
  tagColor: {
    type: String,
    default: '',
  },
  tag: {
    type: String,
    default: '',
  },
  appName: {
    type: String,
    default: '',
  }
});
</script>