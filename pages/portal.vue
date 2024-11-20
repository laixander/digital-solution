<template>
    <!-- Hero -->
    <div
        class="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
        <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">

            <!-- Title -->
            <div class="mt-5 max-w-2xl text-center mx-auto">
                <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
                    Smart
                    <span
                        class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">Campus</span>
                </h1>
            </div>
            <!-- End Title -->

            <div class="mt-5 max-w-3xl text-center mx-auto">
                <p class="text-lg text-gray-600 dark:text-neutral-400">Manage your applications in one place. Select
                    from the list of applications to enter the management console.</p>
            </div>


            <!-- Card Blog -->
            <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <!-- Grid -->
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <!-- Card -->
                    <div
                        class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                        <div class="h-52 flex flex-col justify-center items-center bg-green-600 rounded-t-xl">
                            <div class="size-28 rounded-3xl bg-white flex items-center justify-center">
                                <WalletIcon class="size-16 text-green-700" />
                            </div>
                        </div>
                        <div class="p-4 md:p-6">
                            <span class="block mb-1 text-xs font-semibold uppercase text-green-600 dark:text-green-500">
                                Accounting
                            </span>
                            <h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                                Billing
                            </h3>
                            <p class="mt-3 text-gray-500 dark:text-neutral-500">
                                A software that develops products for software developers and developments.
                            </p>
                        </div>
                        <div
                            class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">

                            <NuxtLink
                                class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                to="/dashboard">
                                View sample
                            </NuxtLink>
                            <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                href="#">
                                View API
                            </a>
                        </div>
                    </div>
                    <!-- End Card -->

                    <!-- Card -->
                    <div
                        class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                        <div class="h-52 flex flex-col justify-center items-center bg-blue-500 rounded-t-xl">
                            <div class="size-28 rounded-3xl bg-white flex items-center justify-center">
                                <UserRoundCheckIcon class="size-16 text-blue-600" />
                            </div>

                        </div>
                        <div class="p-4 md:p-6">
                            <span class="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                                Human Resource
                            </span>
                            <h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                                HRIS
                            </h3>
                            <p class="mt-3 text-gray-500 dark:text-neutral-500">
                                Track tasks and projects, use agile boards, measure progress.
                            </p>
                        </div>
                        <div
                            class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                            <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                href="#">
                                View sample
                            </a>
                            <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                href="#">
                                View API
                            </a>
                        </div>
                    </div>
                    <!-- End Card -->

                    <!-- Card -->
                    <div
                        class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                        <div class="h-52 flex flex-col justify-center items-center bg-red-500 rounded-t-xl">
                            <div class="size-28 rounded-3xl bg-white flex items-center justify-center">
                                <LibraryBigIcon class="size-16 text-red-600" />
                            </div>
                        </div>
                        <div class="p-4 md:p-6">
                            <span class="block mb-1 text-xs font-semibold uppercase text-red-500">
                                Academic
                            </span>
                            <h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                                eLib
                            </h3>
                            <p class="mt-3 text-gray-500 dark:text-neutral-500">
                                Email collaboration and email service desk made easy.
                            </p>
                        </div>
                        <div
                            class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                            <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                href="#">
                                View sample
                            </a>
                            <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                href="#">
                                View API
                            </a>
                        </div>
                    </div>
                    <!-- End Card -->
                </div>
                <!-- End Grid -->
            </div>
            <!-- End Card Blog -->


        </div>
    </div>
    <!-- End Hero -->
</template>

<script setup>
definePageMeta({
    layout: 'simple',
});


import { WalletIcon, UserRoundCheckIcon, LibraryBigIcon } from 'lucide-vue-next';
</script>