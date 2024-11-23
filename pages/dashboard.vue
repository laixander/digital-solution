<template>
    <AppHeader>
        <template #pageTitle>
            Dashboard
        </template>
    </AppHeader>

    <AppSidebar app-name="Learning Management System">
        <template #appLogo>
            <LogoLMS className="size-16" />
        </template>
        <template #menu>
            <nav class="hs-accordion-group p-3 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
                <ul class="flex flex-col space-y-1">
                    <li>
                        <a class="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-white"
                            href="#">
                            <HouseIcon class="shrink-0 size-4" />
                            Dashboard
                        </a>
                    </li>

                    <li class="hs-accordion" id="users-accordion">
                        <button type="button"
                            class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200"
                            aria-expanded="true" aria-controls="users-accordion-child">
                            <UsersIcon class="shrink-0 size-4" />
                            Users
                            <ChevronUpIcon class="hs-accordion-active:block ms-auto hidden size-4" />
                            <ChevronDownIcon class="hs-accordion-active:hidden ms-auto block size-4" />
                        </button>

                        <div id="users-accordion-child"
                            class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                            role="region" aria-labelledby="users-accordion">
                            <ul class="hs-accordion-group ps-4 pt-1 ms-4 space-y-1 border-l"
                                data-hs-accordion-always-open>
                                <li class="hs-accordion" id="users-accordion-sub-1">
                                    <button type="button"
                                        class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200"
                                        aria-expanded="true" aria-controls="users-accordion-sub-1-child">
                                        Sub Menu 1
                                        <ChevronUpIcon class="hs-accordion-active:block ms-auto hidden size-4" />
                                        <ChevronDownIcon class="hs-accordion-active:hidden ms-auto block size-4" />
                                    </button>

                                    <div id="users-accordion-sub-1-child"
                                        class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                                        role="region" aria-labelledby="users-accordion-sub-1">
                                        <ul class="ps-4 pt-1 ms-4 space-y-1 border-l">
                                            <li>
                                                <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200"
                                                    href="#">
                                                    Link 1
                                                </a>
                                            </li>
                                            <li>
                                                <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200"
                                                    href="#">
                                                    Link 2
                                                </a>
                                            </li>
                                            <li>
                                                <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200"
                                                    href="#">
                                                    Link 3
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="hs-accordion" id="users-accordion-sub-2">
                                    <button type="button"
                                        class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200"
                                        aria-expanded="true" aria-controls="users-accordion-sub-2-child">
                                        Sub Menu 2
                                        <ChevronUpIcon class="hs-accordion-active:block ms-auto hidden size-4" />
                                        <ChevronDownIcon class="hs-accordion-active:hidden ms-auto block size-4" />
                                    </button>

                                    <div id="users-accordion-sub-2-child"
                                        class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                                        role="region" aria-labelledby="users-accordion-sub-2">
                                        <ul class="ps-4 pt-1 ms-4 space-y-1 border-l">
                                            <li>
                                                <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200"
                                                    href="#">
                                                    Link 1
                                                </a>
                                            </li>
                                            <li>
                                                <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200"
                                                    href="#">
                                                    Link 2
                                                </a>
                                            </li>
                                            <li>
                                                <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200"
                                                    href="#">
                                                    Link 3
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li class="hs-accordion" id="account-accordion">
                        <button type="button"
                            class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200"
                            aria-expanded="true" aria-controls="account-accordion-child">
                            <UserCogIcon class="shrink-0 size-4" />
                            Account
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
                                        Link 1
                                    </a>
                                </li>
                                <li>
                                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200"
                                        href="#">
                                        Link 2
                                    </a>
                                </li>
                                <li>
                                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200"
                                        href="#">
                                        Link 3
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li class="hs-accordion" id="projects-accordion">
                        <button type="button"
                            class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200"
                            aria-expanded="true" aria-controls="projects-accordion-child">
                            <BriefcaseIcon class="shrink-0 size-4" />
                            Projects
                            <ChevronUpIcon class="hs-accordion-active:block ms-auto hidden size-4" />
                            <ChevronDownIcon class="hs-accordion-active:hidden ms-auto block size-4" />
                        </button>

                        <div id="projects-accordion-child"
                            class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                            role="region" aria-labelledby="projects-accordion">
                            <ul class="ps-4 pt-1 ms-4 space-y-1 border-l">
                                <li>
                                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200"
                                        href="#">
                                        Link 1
                                    </a>
                                </li>
                                <li>
                                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200"
                                        href="#">
                                        Link 2
                                    </a>
                                </li>
                                <li>
                                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200"
                                        href="#">
                                        Link 3
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <a class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-300"
                            href="#">
                            <CalendarDaysIcon class="shrink-0 size-4" />
                            Calendar
                        </a>
                    </li>
                    
                    <li>
                        <a class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300"
                            href="#">
                            <BookOpenIcon class="shrink-0 size-4" />
                            Documentation
                        </a>
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


                    <div class="w-full md:block hidden">
                        <DsSearchInput />
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
                                <div
                                    class="flex flex-col p-4 bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                                    <DsSearchInput />
                                </div>
                            </div>
                        </div>

                        <button type="button"
                            class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white text-nowrap hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                            aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-offcanvas-right"
                            data-hs-overlay="#hs-offcanvas-right">
                            Create&nbsp;Post
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

                                <MultiSelectSections v-model="selectedSections" :options="sections"
                                    placeholder="Select Sections" />

                                <TiptapEditor />

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
                    <span v-for="n in 7">
                        <ClassesCard />
                    </span>
                </div>
                <div id="segment-2" class="hidden" role="tabpanel" aria-labelledby="segment-item-2">
                    <ClassesTable />
                </div>
            </div>
        </template>
    </AppContent>
</template>

<script setup>
    import TiptapEditor from '~/components/TiptapEditor.vue';
    import MultiSelectSections from '~/components/DsMultiSelect.vue';
    import { ChevronDownIcon, ChevronUpIcon, HouseIcon, UsersIcon, UserCogIcon, BriefcaseIcon, CalendarDaysIcon, BookOpenIcon, SearchIcon, PlusIcon, CreditCardIcon, TableIcon, XIcon } from 'lucide-vue-next';

    const sections = ref(['Section 1A', 'Section 2A', 'Section 3A', 'Section 4A', 'Section 5A']);
    const selectedSections = ref([]);
</script>