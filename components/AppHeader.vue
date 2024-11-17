<template>
    <!-- ========== HEADER ========== -->
    <header
        class="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 lg:ps-[260px] dark:bg-neutral-800 dark:border-neutral-700">
        <nav class="px-4 sm:px-6 flex basis-full items-center w-full mx-auto">
            <div class="me-5 lg:me-0 lg:hidden">
                <!-- Logo -->
                <a class="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80" href="#" aria-label="Preline">
                    <svg class="size-8" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                </a>
                <!-- End Logo -->
            </div>

            <div class="w-full flex items-center justify-end ms-auto lg:justify-between gap-x-1 lg:gap-x-3">

                <div class="hidden lg:block">
                    <!-- Search Input -->
                    <span class="text-sm font-semibold text-gray-800 truncate dark:text-neutral-400">Dashboard</span>
                    <!-- <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                            <Search class="shrink-0 size-4 text-gray-400 dark:text-white/60" />
                        </div>
                        <input type="text" class="py-2 ps-10 pe-16 block w-full bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-600" placeholder="Search">
                        <div class="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-1">
                            <button type="button" class="inline-flex shrink-0 justify-center items-center size-6 rounded-full text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500" aria-label="Close">
                                <span class="sr-only">Close</span>
                                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="m15 9-6 6" />
                                    <path d="m9 9 6 6" />
                                </svg>
                            </button>
                        </div>
                        <div class="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-3 text-gray-400">
                            <Command class="shrink-0 size-3 text-gray-400 dark:text-white/60" />
                            <span class="mx-1">
                                <Plus class="shrink-0 size-3 text-gray-400 dark:text-white/60" />
                            </span>
                            <span class="text-xs">/</span>
                        </div>
                    </div> -->
                    <!-- End Search Input -->
                </div>

                <div class="flex flex-row items-center justify-end gap-1">
                    <!-- Select -->
                    <div class="hidden md:block">
                        <SelectCampus />
                    </div>
                    <!-- End Select -->

                    <!-- Select -->
                    <div class="hidden md:block">
                        <SelectLevel />
                    </div>
                    <!-- End Select -->

                    <div class="hs-dropdown relative inline-flex md:hidden [--auto-close:inside]">
                        <button id="hs-dropdown-custom-icon-trigger" type="button" class="hs-dropdown-toggle size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                            <EllipsisVertical class="flex-none size-4 text-gray-600 dark:text-neutral-500" />
                        </button>
                      
                        <div class="hs-dropdown-menu border border-gray-200 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-custom-icon-trigger">
                          <div class="p-3 space-y-2.5">
                            <SelectCampus />
                            <SelectLevel />
                          </div>
                        </div>
                    </div>

                    <!-- <button type="button" class="md:hidden size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                        <Search class="shrink-0 size-4" />
                        <span class="sr-only">Search</span>
                    </button> -->

                    <!-- <button type="button" class="size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                        <Bell class="shrink-0 size-4" />
                        <span class="sr-only">Notifications</span>
                    </button> -->

                    <!-- <button type="button"
                        class="size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                        <Activity class="shrink-0 size-4" />
                        <span class="sr-only">Activity</span>
                    </button> -->

                    <!-- Dropdown -->
                    <!-- <div class="hs-dropdown [--placement:bottom-right] relative inline-flex">
                        <button id="hs-dropdown-account" type="button" class="size-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                            <img class="shrink-0 size-[38px] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar">
                        </button>

                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-account">
                            <div class="py-3 px-5 bg-gray-100 rounded-t-lg dark:bg-neutral-700">
                                <p class="text-sm text-gray-500 dark:text-neutral-500">Signed in as</p>
                                <p class="text-sm font-medium text-gray-800 dark:text-neutral-200">james@site.com</p>
                            </div>
                            <div class="p-1.5 space-y-0.5">
                                <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                                    <Bell class="shrink-0 size-4" />
                                    Newsletter
                                </a>
                                <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                                    <ShoppingBag class="shrink-0 size-4" />
                                    Purchases
                                </a>
                                <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                                    <CloudDownload class="shrink-0 size-4" />
                                    Downloads
                                </a>
                                <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                                    <Users class="shrink-0 size-4" />
                                    Team Account
                                </a>
                            </div>
                        </div>
                    </div> -->
                    <!-- End Dropdown -->
                </div>
            </div>
        </nav>
    </header>
    <!-- ========== END HEADER ========== -->
</template>

<script setup>
    import { Search, Command, Plus, Bell, Activity, CloudDownload, ShoppingBag, Users, EllipsisVertical } from 'lucide-vue-next';
</script>