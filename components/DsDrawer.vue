<template>
    <button type="button"
        class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white text-nowrap hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-offcanvas-right"
        data-hs-overlay="#hs-offcanvas-right">
        <slot name="buttonLabel">
            Create Data
        </slot>
        <PlusIcon class="shrink-0 size-4" />
    </button>

    <div id="hs-offcanvas-right"
        class="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform h-full max-w-lg w-full z-[80] bg-white border-s dark:bg-neutral-800 dark:border-neutral-700"
        role="dialog" tabindex="-1" aria-labelledby="hs-offcanvas-right-label">
        <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
            <h3 id="hs-offcanvas-right-label" class="font-bold text-gray-800 dark:text-white">
                <slot name="drawerTitle">
                    Create Data
                </slot>
            </h3>
            <button type="button"
                class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                aria-label="Close" data-hs-overlay="#hs-offcanvas-right">
                <span class="sr-only">Close</span>
                <XIcon class="shrink-0 size-4" />
            </button>
        </div>
        <div class="p-4 space-y-4">
            <slot name="drawerContent">
                Content Goes Here
            </slot>
            <div class="flex justify-end items-center gap-2">
                <slot name="drawerButtons">
                    <button type="button"
                        class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:text-blue-500 dark:focus:border-blue-600"
                        aria-label="Close" data-hs-overlay="#hs-offcanvas-right">
                        Cancel
                    </button>
                    <button type="button"
                        class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                        aria-label="Close" data-hs-overlay="#hs-offcanvas-right">
                        Save
                    </button>
                </slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import { XIcon, PlusIcon } from 'lucide-vue-next';
</script>