<template>
    <AppHeader>
        <template #pageTitle>
            Instructor
        </template>
    </AppHeader>

    <AppSidebar app-name="Learning Management System">
        <template #appLogo>
            <LogoLMS className="size-16" />
        </template>
        <template #menu>
            <MenuLMS />
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
                        <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-hidden focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:text-blue-500 dark:focus:border-blue-600">
                            Request Edit
                            <FilePenLine class="shrink-0 size-4" />
                        </button>
                        <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-hidden focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:text-blue-500 dark:focus:border-blue-600">
                            Request Extension
                            <CalendarClock class="shrink-0 size-4" />
                        </button>

                    </div>
                </div>
                <div id="segment-1" role="tabpanel" aria-labelledby="segment-item-1"
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    <template v-for="n in 7">
                        <DsCard :hover-effect="true">
                            <div class="p-4 md:p-5">
                                <div class="space-y-3 text-center">
                                    <img class="inline-block size-14 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Avatar">
                                    <div class="space-y-1">
                                        <div class="font-semibold text-gray-800">
                                            Terry Clifford
                                        </div>
                                        <div class="text-sm text-gray-500">
                                            Department of Electronics Engineering
                                        </div>
                                    </div>
                                    <ul class="min-w-full flex flex-col divide-y divide-gray-200 dark:divide-neutral-700">
                                        <li class="inline-flex flex-col xl:flex-row xl:items-center xl:justify-between gap-1 xl:gap-3 py-2">
                                            <span class="text-sm font-medium text-gray-800 dark:text-neutral-800">
                                                Evaluation Start:
                                            </span>
                                            <span class="text-sm text-gray-500 xl:text-right truncate dark:text-neutral-200">
                                                March 12, 2025
                                            </span>
                                        </li>
                                        <li class="inline-flex flex-col xl:flex-row xl:items-center xl:justify-between gap-1 xl:gap-3 pt-2">
                                            <span class="text-sm font-medium text-gray-800 dark:text-neutral-800">
                                                Evaluation End:
                                            </span>
                                            <span class="text-sm text-gray-500 xl:text-right truncate dark:text-neutral-200">
                                                March 20, 2025
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </DsCard>
                    </template>
                </div>
                <div id="segment-2" class="hidden" role="tabpanel" aria-labelledby="segment-item-2">
                    
                    <div class="flex flex-col">
                        <div class="-m-1.5 overflow-x-auto">
                            <div class="p-1.5 min-w-full inline-block align-middle">
                                <div class="overflow-hidden">
                                    <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                        <thead>
                                            <tr>
                                                <th scope="col"
                                                    class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                                                    Instructor</th>
                                                <th scope="col"
                                                    class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                                                    Department</th>
                                                <th scope="col"
                                                    class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                                                    Evaluation Start</th>
                                                <th scope="col"
                                                    class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                                                    Evaluation End</th>
                                            </tr>
                                        </thead>

                                        <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                                            <template v-for="n in 7">
                                                <tr>
                                                    <td
                                                        class="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-800 dark:text-neutral-200">
                                                        Terry Clifford</td>
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        Department of Electronics Engineering</td>
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        March 12, 2025</td>
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                        March 20, 2025</td>
                                                </tr>
                                            </template>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </template>
    </AppContent>
</template>

<script setup>
    import { SearchIcon, PlusIcon, CreditCardIcon, TableIcon, FilePenLine, CalendarClock } from 'lucide-vue-next';
</script>