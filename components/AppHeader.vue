<template>
    <!-- header -->
    <header
        class="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 xl:ps-[260px] dark:bg-neutral-800 dark:border-neutral-700">
        <nav class="px-4 sm:px-6 flex basis-full items-center w-full mx-auto">

            <div class="w-full flex items-center ms-auto justify-between gap-x-1 xl:gap-x-3">
                <!-- Navigation Toggle -->
                <button type="button"
                    class="xl:hidden size-8 flex justify-center items-center gap-x-2 border border-gray-200 text-gray-800 hover:text-gray-500 rounded-lg focus:outline-none focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                    aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-application-sidebar"
                    aria-label="Toggle navigation" data-hs-overlay="#hs-application-sidebar">
                    <span class="sr-only">Toggle Navigation</span>
                    <PanelRightCloseIcon class="shrink-0 size-4" />
                </button>
                <!-- End Navigation Toggle -->

                <div class="hidden xl:block xl:w-full">
                    <slot name="pageTitle"></slot>
                </div>

                <div class="flex items-center gap-3 text-gray-900">
                    <LogoCampus className="size-9 text-gray-500" />
                    <span class="truncate hidden sm:inline">
                        State Colleges of the Philippines
                    </span>
                </div>

                <div class="flex flex-row items-center justify-end gap-1 xl:w-full">
                    <DsDarkMode />

                    <!-- Select -->
                    <div class="hidden xl:block">
                        <CampusSelect v-model="campus" :options="campuses" placeholder="Select Campus" width="200px" />
                    </div>
                    <!-- End Select -->

                    <!-- Select -->
                    <div class="hidden xl:block">
                        <LevelSelect v-model="level" :options="levels" placeholder="Select Level" width="200px" />
                    </div>
                    <!-- End Select -->

                    <div class="hs-dropdown relative inline-flex xl:hidden [--auto-close:inside]">
                        <button id="hs-dropdown-custom-icon-trigger" type="button"
                            class="hs-dropdown-toggle size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                            <EllipsisVerticalIcon
                                class="hs-dropdown-open:hidden flex-none size-4 text-gray-600 dark:text-neutral-500" />
                            <XIcon class="hs-dropdown-open:block hidden size-4 text-gray-600 dark:text-neutral-500" />
                        </button>

                        <div class="hs-dropdown-menu border border-gray-200 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700"
                            role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-custom-icon-trigger">
                            <div class="p-3 space-y-2.5">
                                <CampusSelect v-model="campus" :options="campuses" placeholder="Select Campus" />
                                <LevelSelect v-model="level" :options="levels" placeholder="Select Level" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    </header>
    <!-- End header -->
</template>

<script setup>
import { EllipsisVerticalIcon, XIcon, PanelRightCloseIcon } from 'lucide-vue-next';
import CampusSelect from '~/components/DsSelect.vue';
import LevelSelect from '~/components/DsSelect.vue';

const campuses = ref(['Main Campus', 'Campus Branch 1', 'Campus Branch 2', 'Campus Branch 3']);
const campus = ref(null);

const levels = ref(['Primary School', 'Junior High School', 'Senior High School', 'Vocational']);
const level = ref(null);
</script>