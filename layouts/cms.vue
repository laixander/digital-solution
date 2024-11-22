<template>
    <!-- header -->
    <AppHeader>
        <template #pageTitle>
            {{ pageTitle }}
        </template>
    </AppHeader>
    <!-- End header -->

    <!-- Sidebar -->
    <div id="hs-application-sidebar" class="hs-overlay [--auto-close:xl] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform w-[256px] h-full hidden fixed inset-y-0 start-0 z-[60] bg-white border-e border-gray-200 xl:block xl:translate-x-0 xl:end-auto xl:bottom-0  dark:bg-neutral-800 dark:border-neutral-700"
        role="dialog" tabindex="-1" aria-label="Sidebar">
        <div class="relative flex flex-col h-full max-h-full">
            <div class="px-3 pt-4">
                <!-- Logo -->
                <a class="inline-flex items-center gap-2 focus:outline-none focus:opacity-80"
                    href="#" aria-label="Preline">
                    <svg class="size-14" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="60" height="60" rx="30" fill="#1E293B" />
                        <rect width="10.5659" height="10.5659" transform="matrix(-0.500028 0.86601 -1 3.17914e-05 29.1306 29.8354)" fill="#6E6E6E" />
                        <rect width="10.5658" height="10.5659" transform="matrix(0.500028 0.86601 -1 -3.18788e-05 23.8474 20.6855)" fill="#5A5A5A" />
                        <rect width="10.5659" height="10.5659" transform="matrix(-0.499971 0.866041 -0.499974 -0.866041 18.5654 29.8354)" fill="#AAAAAA" />
                        <rect width="10.5659" height="10.5659" transform="matrix(-0.500028 0.86601 -1 3.17914e-05 23.8491 20.6851)" fill="white" />
                        <rect width="10.5658" height="10.5659" transform="matrix(0.500028 0.86601 -1 -3.18788e-05 18.5659 29.8354)" fill="#CFCFCF" />
                        <rect width="10.5659" height="10.5659" transform="matrix(0.499974 0.866041 -0.499971 0.866041 23.8479 20.6851)" fill="#EAEAEA" />
                        <rect width="10.5659" height="10.5659" transform="matrix(-0.500028 0.86601 -1 3.17914e-05 44.981 20.748)" fill="#6E6E6E" />
                        <rect width="10.5658" height="10.5659" transform="matrix(0.500028 0.86601 -1 -3.18788e-05 39.6978 11.5981)" fill="#5A5A5A" />
                        <rect width="10.5659" height="10.5659" transform="matrix(-0.499971 0.866041 -0.499974 -0.866041 34.4158 20.748)" fill="#AAAAAA" />
                        <rect width="10.5659" height="10.5659" transform="matrix(-0.500028 0.86601 -1 3.17914e-05 39.6995 11.5977)" fill="white" />
                        <rect width="10.5658" height="10.5659" transform="matrix(0.500028 0.86601 -1 -3.18788e-05 34.4163 20.748)" fill="#CFCFCF" />
                        <rect width="10.5659" height="10.5659" transform="matrix(0.499974 0.866041 -0.499971 0.866041 39.6982 11.5977)" fill="#EAEAEA" />
                        <rect width="5.28532" height="5.28532" transform="matrix(-0.500028 0.86601 -1 3.17914e-05 25.7556 14.9067)" fill="#6E6E6E" />
                        <rect width="5.28531" height="5.28532" transform="matrix(0.500028 0.86601 -1 -3.18788e-05 23.1128 10.3296)" fill="#5A5A5A" />
                        <rect width="5.28532" height="5.28532" transform="matrix(-0.499971 0.866041 -0.499974 -0.866041 20.4705 14.9067)" fill="#AAAAAA" />
                        <rect width="5.28532" height="5.28532" transform="matrix(-0.500028 0.86601 -1 3.17914e-05 23.1138 10.3296)" fill="white" />
                        <rect width="5.28531" height="5.28532" transform="matrix(0.500028 0.86601 -1 -3.18788e-05 20.4709 14.9067)" fill="#CFCFCF" />
                        <rect width="5.28532" height="5.28532" transform="matrix(0.499974 0.866041 -0.499971 0.866041 23.113 10.3296)" fill="#EAEAEA" />
                        <rect width="5.28532" height="5.28532" transform="matrix(-0.500028 0.86601 -1 3.17914e-05 51.9614 29.7002)" fill="#6E6E6E" />
                        <rect width="5.28531" height="5.28532" transform="matrix(0.500028 0.86601 -1 -3.18788e-05 49.3186 25.123)" fill="#5A5A5A" />
                        <rect width="5.28532" height="5.28532" transform="matrix(-0.499971 0.866041 -0.499974 -0.866041 46.6763 29.7002)" fill="#AAAAAA" />
                        <rect width="5.28532" height="5.28532" transform="matrix(-0.500028 0.86601 -1 3.17914e-05 49.3196 25.123)" fill="white" />
                        <rect width="5.28531" height="5.28532" transform="matrix(0.500028 0.86601 -1 -3.18788e-05 46.6768 29.7002)" fill="#CFCFCF" />
                        <rect width="5.28532" height="5.28532" transform="matrix(0.499974 0.866041 -0.499971 0.866041 49.3188 25.123)" fill="#EAEAEA" />
                        <rect width="5.28532" height="5.28532" transform="matrix(-0.500028 0.86601 -1 3.17914e-05 25.7556 44.9165)" fill="#6E6E6E" />
                        <rect width="5.28531" height="5.28532" transform="matrix(0.500028 0.86601 -1 -3.18788e-05 23.1128 40.3394)" fill="#5A5A5A" />
                        <rect width="5.28532" height="5.28532" transform="matrix(-0.499971 0.866041 -0.499974 -0.866041 20.4705 44.9165)" fill="#AAAAAA" />
                        <rect width="5.28532" height="5.28532" transform="matrix(-0.500028 0.86601 -1 3.17914e-05 23.1138 40.3394)" fill="white" />
                        <rect width="5.28531" height="5.28532" transform="matrix(0.500028 0.86601 -1 -3.18788e-05 20.4709 44.9165)" fill="#CFCFCF" />
                        <rect width="5.28532" height="5.28532" transform="matrix(0.499974 0.866041 -0.499971 0.866041 23.113 40.3394)" fill="#EAEAEA" />
                        <rect width="10.5659" height="10.5659" transform="matrix(-0.500028 0.86601 -1 3.17914e-05 44.981 38.9229)" fill="#6E6E6E" />
                        <rect width="10.5658" height="10.5659" transform="matrix(0.500028 0.86601 -1 -3.18788e-05 39.6978 29.7729)" fill="#5A5A5A" />
                        <rect width="10.5659" height="10.5659" transform="matrix(-0.499971 0.866041 -0.499974 -0.866041 34.4158 38.9229)" fill="#AAAAAA" />
                        <rect width="10.5659" height="10.5659" transform="matrix(-0.500028 0.86601 -1 3.17914e-05 39.6995 29.7725)" fill="white" />
                        <rect width="10.5658" height="10.5659" transform="matrix(0.500028 0.86601 -1 -3.18788e-05 34.4163 38.9229)" fill="#CFCFCF" />
                        <rect width="10.5659" height="10.5659" transform="matrix(0.499974 0.866041 -0.499971 0.866041 39.6982 29.7725)" fill="#EAEAEA" />
                    </svg>
                    <span class="text-sm text-gray-800 font-medium">Learning Management System</span>
                </a>
                <!-- End Logo -->
            </div>

            <!-- Content -->
            <div
                class="flex flex-col justify-between h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track] :bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb] :bg-neutral-500">
                <slot name="menu"></slot>
            </div>
            <!-- End Content -->

            <div class="shrink-0 group block p-3 border-t border-gray-200">
                <div class="flex items-center">
                    <div class="hs-dropdown [--placement:bottom-right] relative inline-flex">
                        <button id="hs-dropdown-account" type="button"
                            class="rounded-full border border-transparent text-gray-800 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:text-white"
                            aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                            <img class="shrink-0 size-[38px] rounded-full"
                                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                alt="Avatar">
                        </button>
                        <div class="hs-dropdown-menu border border-gray-200 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[235px] bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
                            role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-account">
                            <div class="border-b border-gray-200 py-3 px-5 bg-gray-50 rounded-t-lg dark:bg-neutral-700">
                                <p class="text-sm text-gray-500 dark:text-neutral-500">Signed in as</p>
                                <p class="text-sm font-medium text-gray-800 dark:text-neutral-200">Administrator</p>
                            </div>
                            <div class="p-1.5 space-y-0.5">
                                <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                                    <LayoutGridIcon class="shrink-0 size-4" />
                                    App Portal
                                </a>
                                <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                                    <NewspaperIcon class="shrink-0 size-4" />
                                    Newsletter
                                </a>
                                <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                                    <BoltIcon class="shrink-0 size-4" />
                                    Settings
                                </a>
                                <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                                    <LogOutIcon class="shrink-0 size-4" />
                                    Logout
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="ms-3 mr-auto">
                        <h3 class="font-semibold text-gray-800 dark:text-white">Mark Wanner</h3>
                        <p class="text-sm text-gray-400 dark:text-neutral-500">mark@gmail.com</p>
                    </div>

                    <button type="button" class="size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                        <BellIcon class="shrink-0 size-4" />
                        <span class="sr-only">Notifications</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- End Sidebar -->

    <!-- Content -->
    <div class="w-full xl:ps-64">
        <div class="p-4 sm:p-6 space-y-3 sm:space-y-4">
            <!-- your content goes here ... -->
            <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 space-y-4 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                <slot></slot>
            </div>
        </div>
    </div>
    <!-- End Content -->
</template>

<script setup>
    import { BellIcon, LayoutGridIcon, BoltIcon, NewspaperIcon, LogOutIcon } from 'lucide-vue-next';

    import AppHeader from '~/components/AppHeader.vue';

    defineProps({
        pageTitle: String,
    });
</script>