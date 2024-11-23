<template>
    <!-- Hero -->
    <div class="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
        <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">

            <!-- Title -->
            <div class="mt-5 max-w-2xl text-center mx-auto">
                <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
                    Smart
                    <span class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
                        Campus
                    </span>
                </h1>
            </div>
            <!-- End Title -->

            <div class="mt-5 max-w-3xl text-center mx-auto">
                <p class="text-lg text-gray-600 dark:text-neutral-400">Manage your applications in one place. Select from the list of applications to enter the management console.</p>
            </div>


            <!-- Card Blog -->
            <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <!-- Grid -->
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    <PortalCard bg-color="bg-green-600" tag-color="text-green-600">
                        <template #appLogo>
                            <ShapesIcon class="size-16 text-green-700" />
                        </template>
                        <template #appName>
                            Learning Management System
                        </template>
                        <template #tag>
                            LMS
                        </template>
                        <template #description>
                            A software application for organizations and institutions to manage, host, and track learning programs.
                        </template>
                        <template #link>
                            <NuxtLink class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                to="/dashboard">
                                Login
                            </NuxtLink>
                            <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                href="#">
                                Sign Up
                            </a>
                        </template>
                    </PortalCard>

                    <PortalCard bg-color="bg-blue-500" tag-color="text-blue-500">
                        <template #appLogo>
                            <UserRoundCheckIcon class="size-16 text-blue-600" />
                        </template>
                        <template #appName>
                            Human Resource Information System
                        </template>
                        <template #tag>
                            HRIS
                        </template>
                        <template #description>
                            A software application used to store employee information and support various human resource functions.
                        </template>
                        <template #link>
                            <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                href="#">
                                View sample
                            </a>
                            <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                href="#">
                                View API
                            </a>
                        </template>
                    </PortalCard>

                    <PortalCard bg-color="bg-red-500" tag-color="text-red-500">
                        <template #appLogo>
                            <NotebookPenIcon class="size-16 text-red-600" />
                        </template>
                        <template #appName>
                            Course Management System
                        </template>
                        <template #tag>
                            CMS
                        </template>
                        <template #description>
                            A specialized software platform designed to enhance the administration, delivery, and management of educational courses in higher education institutions.
                        </template>
                        <template #link>
                            <NuxtLink class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                to="/cms">
                                Login
                            </NuxtLink>
                            <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                href="#">
                                View API
                            </a>
                        </template>
                    </PortalCard>

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

import { ShapesIcon, UserRoundCheckIcon, NotebookPenIcon } from 'lucide-vue-next';
</script>