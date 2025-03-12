<template>
    <nav class="hs-accordion-group p-3 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
        <ul class="flex flex-col space-y-1">

            <li class="hs-accordion" id="account-accordion">
                <button type="button"
                    class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200"
                    aria-expanded="true" aria-controls="account-accordion-child">
                    <User class="shrink-0 size-4" />
                    Instructor
                    <ChevronUpIcon class="hs-accordion-active:block ms-auto hidden size-4" />
                    <ChevronDownIcon class="hs-accordion-active:hidden ms-auto block size-4" />
                </button>

                <div id="account-accordion-child"
                    class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    role="region" aria-labelledby="account-accordion">
                    <ul class="ps-4 pt-1 ms-4 space-y-1 border-l">
                        <li>
                            <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200"
                                href="#">
                                Evaluation
                            </a>
                        </li>
                    </ul>
                </div>
            </li>

            <li>
                <a class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-300"
                    href="#">
                    <ChartNoAxesCombined class="shrink-0 size-4" />
                    Progress
                </a>
            </li>
            
        </ul>
    </nav>
</template>

<script setup>
import { ChevronDownIcon, ChevronUpIcon, User, ChartNoAxesCombined } from 'lucide-vue-next';
</script>