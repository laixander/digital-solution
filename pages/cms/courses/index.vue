<template>
    <AppHeader>
        <template #pageTitle>
            <DsBreadcrumb :items="item" />
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
                        <NuxtLink class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300"
                            to="/cms">
                            <GaugeIcon class="shrink-0 size-4" />
                            Analytics
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-white"
                            to="/cms/courses">
                            <ShapesIcon class="shrink-0 size-4" />
                            Courses
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300"
                            to="/cms/course-offerings">
                            <MicroscopeIcon class="shrink-0 size-4" />
                            Course Offerings
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300"
                            to="/cms/program-offerings">
                            <BookOpenCheckIcon class="shrink-0 size-4" />
                            Program Offerings
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300"
                            to="/cms/curricula">
                            <GraduationCapIcon class="shrink-0 size-4" />
                            Curricula
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300"
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
            <div class="bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                <div class="flex items-center justify-between gap-3 p-4 md:p-5 border-b border-gray-200">
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

                        <NuxtLink to="/cms/courses/new-course" 
                            class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white text-nowrap hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                            New Course
                            <PlusIcon class="shrink-0 size-4" />
                        </NuxtLink>
                    </div>
                </div>
                <div id="segment-1" role="tabpanel" aria-labelledby="segment-item-1"
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 md:p-5">

                    <!-- Card -->
                    <NuxtLink class="group flex flex-col bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" to="/cms/courses/details">
                        <div class="relative">
                            <img class="w-full object-cover h-32" src="/placeholder.jpg" alt="Blog Image">
                            <div class="absolute right-2 top-2">
                                <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white">
                                    <BookOpenTextIcon class="shrink-0 size-3.5" />
                                    Lecture
                                </span>
                            </div>
                        </div>
                        <div class="p-4 md:p-5">
                            <div class="flex items-center gap-3">
                                <span class="inline-flex items-center gap-x-1.5 py-1.5 px-2 rounded-full text-xs font-medium bg-teal-500 text-white">
                                    MATH 130
                                </span>
                                <h3 class="font-semibold text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
                                    Analytical Geometry
                                </h3>
                            </div>
                            <p class="text-sm text-gray-700 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur numquam eligendi adipisci.</p>
                        </div>
                    </NuxtLink>
                    <!-- End Card -->

                    <!-- Card -->
                    <NuxtLink class="group flex flex-col bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" to="/cms/courses/details">
                        <div class="relative">
                            <img class="w-full object-cover h-32" src="/placeholder.jpg" alt="Blog Image">
                            <div class="absolute right-2 top-2">
                                <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white">
                                    <BookOpenTextIcon class="shrink-0 size-3.5" />
                                    Lecture
                                </span>
                            </div>
                        </div>
                        <div class="p-4 md:p-5">
                            <div class="flex items-center gap-3">
                                <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-600 text-white">
                                    COA 102
                                </span>
                                <h3 class="font-semibold text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
                                    Computer Architecture
                                </h3>
                            </div>
                            <p class="text-sm text-gray-700 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur numquam eligendi adipisci.</p>
                        </div>
                    </NuxtLink>
                    <!-- End Card -->

                    <!-- Card -->
                    <NuxtLink class="group flex flex-col bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" to="/cms/courses/details">
                        <div class="relative">
                            <img class="w-full object-cover h-32" src="/placeholder.jpg" alt="Blog Image">
                            <div class="absolute right-2 top-2">
                                <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white">
                                    <BookOpenTextIcon class="shrink-0 size-3.5" />
                                    Lecture
                                </span>
                            </div>
                        </div>
                        <div class="p-4 md:p-5">
                            <div class="flex items-center gap-3">
                                <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-500 text-white">
                                    ELS 102
                                </span>
                                <h3 class="font-semibold text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
                                    Structure of English
                                </h3>
                            </div>
                            <p class="text-sm text-gray-700 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur numquam eligendi adipisci.</p>
                        </div>
                    </NuxtLink>
                    <!-- End Card -->

                    <!-- Card -->
                    <NuxtLink class="group flex flex-col bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" to="/cms/courses/details">
                        <div class="relative">
                            <img class="w-full object-cover h-32" src="/placeholder.jpg" alt="Blog Image">
                            <div class="absolute right-2 top-2">
                                <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white">
                                    <BookOpenTextIcon class="shrink-0 size-3.5" />
                                    Lecture
                                </span>
                            </div>
                        </div>
                        <div class="p-4 md:p-5">
                            <div class="flex items-center gap-3">
                                <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-yellow-500 text-white">
                                    LIT 102
                                </span>
                                <h3 class="font-semibold text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
                                    Philippine Literature
                                </h3>
                            </div>
                            <p class="text-sm text-gray-700 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur numquam eligendi adipisci.</p>
                        </div>
                    </NuxtLink>
                    <!-- End Card -->

                </div>
                <div id="segment-2" class="hidden p-4 md:p-5" role="tabpanel" aria-labelledby="segment-item-2">
                    Table
                </div>
            </div>
        </template>
    </AppContent>
</template>

<script setup>
    import { GaugeIcon, ShapesIcon, BookOpenCheckIcon, MicroscopeIcon, GraduationCapIcon, UsersIcon, XIcon, PlusIcon, CreditCardIcon, TableIcon, SearchIcon, BookOpenTextIcon } from 'lucide-vue-next';
    import SelectDepartment from '~/components/DsSelect.vue';
    const departments = ref(['Department of Science', 'Department of Information Technology', 'Department of Engineering', 'Department of Medicine']);
    const department = ref(null);

    import DsBreadcrumb from '~/components/DsBreadcrumb.vue';
    const item = ref([
        { title: 'Courses' },
    ]);
</script>