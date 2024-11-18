<template>
    <!-- Content -->
    <div class="w-full lg:ps-64">
        <div class="p-4 sm:p-6 space-y-3 sm:space-y-4">
            <!-- your content goes here ... -->
            <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 space-y-4 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                <div class="flex items-center justify-between">
                    <div class="w-full">
                        <div
                            class="inline-flex bg-gray-100 hover:bg-gray-200 rounded-lg transition p-1 dark:bg-neutral-700 dark:hover:bg-neutral-600">
                            <nav class="flex gap-x-1" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                                <button type="button"
                                    class="hs-tab-active:bg-white hs-tab-active:text-gray-700 hs-tab-active:dark:bg-neutral-800 hs-tab-active:dark:text-neutral-400 dark:hs-tab-active:bg-gray-800 p-2 inline-flex items-center gap-x-2 bg-transparent text-sm text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 font-medium rounded-md hover:hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-white dark:focus:text-white active"
                                    id="segment-item-1" aria-selected="true" data-hs-tab="#segment-1"
                                    aria-controls="segment-1" role="tab">
                                    <span class="sr-only">Grid</span>
                                    <CreditCard class="shrink-0 size-4" />
                                </button>
                                <button type="button"
                                    class="hs-tab-active:bg-white hs-tab-active:text-gray-700 hs-tab-active:dark:bg-neutral-800 hs-tab-active:dark:text-neutral-400 dark:hs-tab-active:bg-gray-800 p-2 inline-flex items-center gap-x-2 bg-transparent text-sm text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 font-medium rounded-md hover:hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-white dark:focus:text-white"
                                    id="segment-item-2" aria-selected="false" data-hs-tab="#segment-2"
                                    aria-controls="segment-2" role="tab">
                                    <span class="sr-only">Table</span>
                                    <Table class="shrink-0 size-4" />
                                </button>
                            </nav>
                        </div>
                    </div>


                    <!-- Search Input -->
                    <div class="w-full">
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                                <Search class="shrink-0 size-4 text-gray-400 dark:text-white/60" />
                            </div>
                            <input type="text"
                                class="py-2 ps-10 pe-16 block w-full bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-600"
                                placeholder="Search">
                        </div>
                    </div>
                    <!-- End Search Input -->

                    <div class="w-full flex justify-end">
                        <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-offcanvas-right" data-hs-overlay="#hs-offcanvas-right">
                            Create Post
                            <Plus class="shrink-0 size-4" />
                        </button>

                        <div id="hs-offcanvas-right" class="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform h-full max-w-lg w-full z-[80] bg-white border-s dark:bg-neutral-800 dark:border-neutral-700" role="dialog" tabindex="-1" aria-labelledby="hs-offcanvas-right-label">
                            <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                                <h3 id="hs-offcanvas-right-label" class="font-bold text-gray-800 dark:text-white">
                                    Create Post
                                </h3>
                                <button type="button"
                                    class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                                    aria-label="Close" data-hs-overlay="#hs-offcanvas-right">
                                    <span class="sr-only">Close</span>
                                    <X class="shrink-0 size-4" />
                                </button>
                            </div>
                            <div class="p-4">
                                <p class="text-gray-800 dark:text-neutral-400">
                                    Some text as placeholder. In real life you can have the elements you have chosen. Like,
                                    text, images, lists, etc.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="segment-1" role="tabpanel" aria-labelledby="segment-item-1" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    <ClassesCard />
                    <ClassesCard />
                    <ClassesCard />
                    <ClassesCard />
                    <ClassesCard />
                    <ClassesCard />
                    <ClassesCard />
                </div>
                <div id="segment-2" class="hidden" role="tabpanel" aria-labelledby="segment-item-2">
                    <ClassesTable />
                </div>
            </div>
        </div>
    </div>
    <!-- End Content -->
</template>

<script setup>
import { Search, Plus, CreditCard, Table, X } from 'lucide-vue-next';
</script>