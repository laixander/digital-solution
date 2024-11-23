<template>
    <AppHeader>
        <template #pageTitle>
            Courses
        </template>
    </AppHeader>

    <AppSidebar app-name="Course Management System">
        <template #appLogo>
            <LogoCMS className="size-16" />
        </template>
        <template #menu>
            <nav class="hs-accordion-group p-3 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
                <ul class="flex flex-col space-y-1">
                    <li>
                        <NuxtLink class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300"
                            to="/cms">
                            <GaugeIcon class="shrink-0 size-4" />
                            Analytics
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-white"
                            to="/cms/courses">
                            <ShapesIcon class="shrink-0 size-4" />
                            Courses
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300"
                            to="/cms/course-offerings">
                            <MicroscopeIcon class="shrink-0 size-4" />
                            Course Offerings
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300"
                            to="/cms/program-offerings">
                            <BookOpenCheckIcon class="shrink-0 size-4" />
                            Program Offerings
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300"
                            to="/cms/curricula">
                            <GraduationCapIcon class="shrink-0 size-4" />
                            Curricula
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300"
                            to="/cms/block-sections">
                            <UsersIcon class="shrink-0 size-4" />
                            Block Sections
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </template>
    </AppSidebar>

    <AppContent>
        <template #mainContent>
            <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 space-y-4 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                <div class="flex items-center justify-between gap-3">
                    <div class="xl:w-full">
                        <div
                            class="inline-flex bg-gray-100 hover:bg-gray-200 rounded-lg transition p-1 dark:bg-neutral-700 dark:hover:bg-neutral-600">
                            <nav class="flex gap-x-1" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                                <button type="button"
                                    class="hs-tab-active:bg-white hs-tab-active:text-gray-700 hs-tab-active:dark:bg-neutral-800 hs-tab-active:dark:text-neutral-400 dark:hs-tab-active:bg-gray-800 p-2 inline-flex items-center gap-x-2 bg-transparent text-sm text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 font-medium rounded-md hover:hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-white dark:focus:text-white active"
                                    id="segment-item-1" aria-selected="true" data-hs-tab="#segment-1"
                                    aria-controls="segment-1" role="tab">
                                    <span class="sr-only">Grid</span>
                                    <CreditCardIcon class="shrink-0 size-4" />
                                </button>
                                <button type="button"
                                    class="hs-tab-active:bg-white hs-tab-active:text-gray-700 hs-tab-active:dark:bg-neutral-800 hs-tab-active:dark:text-neutral-400 dark:hs-tab-active:bg-gray-800 p-2 inline-flex items-center gap-x-2 bg-transparent text-sm text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 font-medium rounded-md hover:hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-white dark:focus:text-white"
                                    id="segment-item-2" aria-selected="false" data-hs-tab="#segment-2"
                                    aria-controls="segment-2" role="tab">
                                    <span class="sr-only">Table</span>
                                    <TableIcon class="shrink-0 size-4" />
                                </button>
                            </nav>
                        </div>
                    </div>


                    <div class="w-full md:flex hidden gap-2">
                        <DsSearchInput />
                        <SelectDepartment v-model="department" :options="departments" placeholder="Select Department" />
                    </div>

                    <div class="xl:w-full flex justify-end gap-2">

                        <div class="md:hidden">
                            <button type="button"
                                class="flex justify-center items-center p-2.5 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                aria-haspopup="dialog" aria-expanded="false"
                                aria-controls="hs-slide-down-animation-modal"
                                data-hs-overlay="#hs-slide-down-animation-modal">
                                <SearchIcon class="shrink-0 size-4" />
                            </button>
                        </div>
                        <div id="hs-slide-down-animation-modal"
                            class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
                            role="dialog" tabindex="-1" aria-labelledby="hs-slide-down-animation-modal-label">
                            <div
                                class="hs-overlay-animation-target hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                                <div class="flex flex-col p-4 bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                                    <DsSearchInput />
                                </div>
                            </div>
                        </div>

                        <button type="button"
                            class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white text-nowrap hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                            aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-offcanvas-right"
                            data-hs-overlay="#hs-offcanvas-right">
                            New&nbsp;Course
                            <PlusIcon class="shrink-0 size-4" />
                        </button>

                        <div id="hs-offcanvas-right"
                            class="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform h-full max-w-lg w-full z-[80] bg-white border-s dark:bg-neutral-800 dark:border-neutral-700"
                            role="dialog" tabindex="-1" aria-labelledby="hs-offcanvas-right-label">
                            <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                                <h3 id="hs-offcanvas-right-label" class="font-bold text-gray-800 dark:text-white">
                                    Create Post
                                </h3>
                                <button type="button"
                                    class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                                    aria-label="Close" data-hs-overlay="#hs-offcanvas-right">
                                    <span class="sr-only">Close</span>
                                    <XIcon class="shrink-0 size-4" />
                                </button>
                            </div>
                            <div class="p-4 space-y-2">
                                <div class="flex justify-end items-center gap-2">
                                    <button type="button"
                                        class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:text-blue-500 dark:focus:border-blue-600"
                                        aria-label="Close" data-hs-overlay="#hs-offcanvas-right">
                                        Cancel
                                    </button>
                                    <button type="button"
                                        class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                        Save
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div id="segment-1" role="tabpanel" aria-labelledby="segment-item-1"
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

                    <!-- Card -->
                    <a class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" href="#">
                    <img class="w-full object-cover h-32 rounded-t-xl" src="https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image">
                    <div class="p-4 md:p-5">
                        <p class="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
                        Product
                        </p>
                        <h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
                        Better is when everything works together
                        </h3>
                    </div>
                    </a>
                    <!-- End Card -->

                    <!-- Card -->
                    <a class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" href="#">
                    <img class="w-full object-cover h-32 rounded-t-xl" src="https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image">
                    <div class="p-4 md:p-5">
                        <p class="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
                        Business
                        </p>
                        <h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
                        What CFR really is about
                        </h3>
                    </div>
                    </a>
                    <!-- End Card -->

                    <!-- Card -->
                    <a class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" href="#">
                    <img class="w-full object-cover h-32 rounded-t-xl" src="https://images.unsplash.com/photo-1668863699009-1e3b4118675d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image">
                    <div class="p-4 md:p-5">
                        <p class="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
                        Business
                        </p>
                        <h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
                        Should Product Owners think like entrepreneurs?
                        </h3>
                    </div>
                    </a>
                    <!-- End Card -->

                    <!-- Card -->
                    <a class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" href="#">
                    <img class="w-full object-cover h-32 rounded-t-xl" src="https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image">
                    <div class="p-4 md:p-5">
                        <p class="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
                        Facilitate
                        </p>
                        <h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
                        Announcing Front Strategies: Ready-to-use rules
                        </h3>
                    </div>
                    </a>
                    <!-- End Card -->

                </div>
                <div id="segment-2" class="hidden" role="tabpanel" aria-labelledby="segment-item-2">
                    Table
                </div>
            </div>
        </template>
    </AppContent>
</template>

<script setup>
    import { GaugeIcon, ShapesIcon, BookOpenCheckIcon, MicroscopeIcon, GraduationCapIcon, UsersIcon, XIcon, PlusIcon, CreditCardIcon, TableIcon, SearchIcon } from 'lucide-vue-next';
    import SelectDepartment from '~/components/DsSelect.vue';
    const departments = ref(['Department of Science', 'Department of Information Technology', 'Department of Engineering', 'Department of Medicine']);
    const department = ref(null);
</script>