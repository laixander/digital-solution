<template>
    <div class="-mt-px">
        <!-- Breadcrumb -->
        <div
            class="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 lg:px-8 lg:hidden dark:bg-neutral-800 dark:border-neutral-700">
            <div class="flex items-center py-2">
                <!-- Navigation Toggle -->
                <button type="button"
                    class="size-8 flex justify-center items-center gap-x-2 border border-gray-200 text-gray-800 hover:text-gray-500 rounded-lg focus:outline-none focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                    aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-application-sidebar"
                    aria-label="Toggle navigation" data-hs-overlay="#hs-application-sidebar">
                    <span class="sr-only">Toggle Navigation</span>
                    <PanelRightClose class="shrink-0 size-4" />
                </button>
                <!-- End Navigation Toggle -->

                <!-- Breadcrumb -->
                <ol class="ms-3 inline-flex items-center whitespace-nowrap">
                    <!-- <li class="flex items-center text-sm text-gray-800 dark:text-neutral-400">
                        Application Layout
                        <ChevronRight class="shrink-0 mx-3 overflow-visible size-2.5 text-gray-400 dark:text-neutral-500" />
                    </li> -->
                    <li class="text-sm font-semibold text-gray-800 truncate dark:text-neutral-400" aria-current="page">
                        Dashboard
                    </li>
                </ol>
                <!-- End Breadcrumb -->
            </div>
        </div>
        <!-- End Breadcrumb -->
    </div>
</template>

<script setup>
import { ChevronRight, PanelRightClose, EllipsisVertical } from 'lucide-vue-next';
</script>