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
                        <NuxtLink
                            class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300"
                            to="/cms">
                            <GaugeIcon class="shrink-0 size-4" />
                            Analytics
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink
                            class="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-white"
                            to="/cms/courses">
                            <ShapesIcon class="shrink-0 size-4" />
                            Courses
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink
                            class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300"
                            to="/cms/course-offerings">
                            <MicroscopeIcon class="shrink-0 size-4" />
                            Course Offerings
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink
                            class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300"
                            to="/cms/program-offerings">
                            <BookOpenCheckIcon class="shrink-0 size-4" />
                            Program Offerings
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink
                            class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300"
                            to="/cms/curricula">
                            <GraduationCapIcon class="shrink-0 size-4" />
                            Curricula
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink
                            class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300"
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
            <div class="flex gap-4">
                <div
                    class="w-full max-w-md bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                    <div class="relative">
                        <img class="w-full object-cover h-32" src="/placeholder.jpg" alt="Blog Image">
                        <div class="absolute right-2 top-2">
                            <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white">
                                <BookOpenTextIcon class="shrink-0 size-3.5" />
                                Lecture
                            </span>
                        </div>
                    </div>
                </div>
                <div
                    class="w-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                    <div class="flex items-center justify-between p-4 border-b border-gray-200">
                        <h3 class="font-semibold text-gray-800">
                            Course Requirements
                        </h3>
                        <button type="button"
                            class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white text-nowrap hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                            aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-offcanvas-right"
                            data-hs-overlay="#hs-offcanvas-right">
                            New Requirement
                            <PlusIcon class="shrink-0 size-4" />
                        </button>
                    </div>
                    <div class="p-4">
                        <!-- <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                            <thead>
                                <tr>
                                    <th scope="col"
                                        class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                                        Type</th>
                                    <th scope="col"
                                        class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                                        Subject</th>
                                    <th scope="col"
                                        class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                                        Status</th>
                                    <th scope="col"
                                        class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                                        Action</th>
                                </tr>
                            </thead>
    
                            <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                                <tr>
                                    <td
                                        class="px-6 py-4 whitespace-nowrap text-sm font-medium uppercase text-gray-800 dark:text-neutral-200">
                                        Co-requisite</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                        <div class="flex items-center gap-3">
                                            <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-500 text-white">EN 101</span>
                                            English Communication Skills 1
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm dark:text-neutral-200"
                                        :class="status === 'Active' ? 'text-green-500' : 'text-amber-500'">
                                        {{ status }}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                        <div class="relative inline-block">
                                            <input v-model="isActive" type="checkbox" id="hs-default-switch-with-icons" class="peer relative w-[3.25rem] h-7 p-px bg-amber-400 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-gray-200 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-green-600 checked:border-green-600 focus:checked:border-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-gray-600
                                          
                                            before:inline-block before:size-6 before:bg-white checked:before:bg-green-200 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-green-200">
                                            <label for="hs-default-switch-with-icons" class="sr-only">switch</label>
                                            <span class="peer-checked:text-white text-amber-500 size-6 absolute top-0.5 start-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200 dark:text-neutral-500">
                                                <XIcon class="shrink-0 size-3" />
                                            </span>
                                            <span class="peer-checked:text-green-600 text-white size-6 absolute top-0.5 end-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200 dark:text-neutral-500">
                                                <CheckIcon class="shrink-0 size-3" />
                                            </span>
                                        </div>
                                    </td>
                                </tr>
    
                                <tr>
                                    <td
                                        class="px-6 py-4 whitespace-nowrap text-sm font-medium uppercase text-gray-800 dark:text-neutral-200">
                                        Prerequisite</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                        <div class="flex items-center gap-3">
                                            <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-500 text-white">EN 102</span>
                                            Introduction to English Language Studies
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm dark:text-neutral-200"
                                        :class="status2 === 'Active' ? 'text-green-500' : 'text-amber-500'">
                                        {{ status2 }}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                        <div class="relative inline-block">
                                            <input v-model="isActive2" type="checkbox" id="hs-default-switch-with-icons" class="peer relative w-[3.25rem] h-7 p-px bg-amber-400 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-gray-200 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-green-600 checked:border-green-600 focus:checked:border-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-gray-600
                                          
                                            before:inline-block before:size-6 before:bg-white checked:before:bg-green-200 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-green-200">
                                            <label for="hs-default-switch-with-icons" class="sr-only">switch</label>
                                            <span class="peer-checked:text-white text-amber-500 size-6 absolute top-0.5 start-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200 dark:text-neutral-500">
                                                <XIcon class="shrink-0 size-3" />
                                            </span>
                                            <span class="peer-checked:text-green-600 text-white size-6 absolute top-0.5 end-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200 dark:text-neutral-500">
                                                <CheckIcon class="shrink-0 size-3" />
                                            </span>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td
                                        class="px-6 py-4 whitespace-nowrap text-sm font-medium uppercase text-gray-800 dark:text-neutral-200">
                                        Substitute</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                        <div class="flex items-center gap-3">
                                            <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-500 text-white">AE 101</span>
                                            Advance English Literature
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm dark:text-neutral-200"
                                        :class="status3 === 'Active' ? 'text-green-500' : 'text-amber-500'">
                                        {{ status3 }}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                        <div class="relative inline-block">
                                            <input v-model="isActive3" type="checkbox" id="hs-default-switch-with-icons" class="peer relative w-[3.25rem] h-7 p-px bg-amber-400 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-gray-200 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-green-600 checked:border-green-600 focus:checked:border-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-gray-600
                                          
                                            before:inline-block before:size-6 before:bg-white checked:before:bg-green-200 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-green-200">
                                            <label for="hs-default-switch-with-icons" class="sr-only">switch</label>
                                            <span class="peer-checked:text-white text-amber-500 size-6 absolute top-0.5 start-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200 dark:text-neutral-500">
                                                <XIcon class="shrink-0 size-3" />
                                            </span>
                                            <span class="peer-checked:text-green-600 text-white size-6 absolute top-0.5 end-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200 dark:text-neutral-500">
                                                <CheckIcon class="shrink-0 size-3" />
                                            </span>
                                        </div>
                                    </td>
                                </tr>
    
                            </tbody>
                        </table> -->

                        <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                            <thead>
                                <tr>
                                    <th scope="col"
                                        class="hidden px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                                        ID</th>
                                    <th scope="col"
                                        class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                                        Type</th>
                                    <th scope="col"
                                        class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                                        Subject</th>
                                    <th scope="col"
                                        class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                                        Status</th>
                                    <th scope="col"
                                        class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                                        Action</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                                <tr v-for="row in rows" :key="row.id">
                                    <td
                                        class="hidden px-6 py-4 whitespace-nowrap text-sm font-medium uppercase text-gray-800 dark:text-neutral-200">
                                        {{ row.id }}
                                    </td>
                                    <td
                                        class="px-6 py-4 whitespace-nowrap text-sm font-medium uppercase text-gray-800 dark:text-neutral-200">
                                        {{ row.type }}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                        <div class="flex items-center gap-3">
                                            <span
                                                class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-500 text-white">
                                                {{ row.tag }}
                                            </span>
                                            {{ row.subject }}
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm dark:text-neutral-200"
                                        :class="row.status ? 'text-green-500' : 'text-amber-500'">
                                        {{ row.status ? 'Active' : 'Suspended' }}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                        <!-- Reusable ToggleSwitch Component -->
                                        <DsToggleSwitch :modelValue="row.status"
                                            @update:modelValue="(value) => updateStatus(row.id, value)" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </template>
    </AppContent>
</template>

<script setup>
import { GaugeIcon, ShapesIcon, BookOpenCheckIcon, MicroscopeIcon, GraduationCapIcon, UsersIcon, PlusIcon, BookOpenTextIcon } from 'lucide-vue-next';

import DsBreadcrumb from '~/components/DsBreadcrumb.vue';
const item = ref([
    { title: 'Courses', href: './' },
    { title: 'Details' }
]);

// Table data
const rows = ref([
    { id: 1, type: 'Prerequisite', subject: 'English Communication Skills', tag: 'ENG 101', status: true },
    { id: 2, type: 'Co-requisite', subject: 'Introduction to English Language Studies', tag: 'ELS 101', status: false },
    { id: 3, type: 'Substitute', subject: 'Elementary Communication Skills', tag: 'ELC 101', status: false },
]);

// Update status function
const updateStatus = (id, value) => {
    const row = rows.value.find((row) => row.id === id);
    if (row) {
        row.status = value;
    }
};
</script>