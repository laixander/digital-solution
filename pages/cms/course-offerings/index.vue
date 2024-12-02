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
            <DsMenu :menu-items="menuItems" />
        </template>
    </AppSidebar>

    <AppContent>
        <template #mainContent>

            <div class="grid lg:grid-cols-4 gap-4">
                <DsCard :class="['col-span-3']">
                    <DsCardHeader full>
                        <template #start>
                            <DsSwitchDisplay v-model="activeTab" />
                        </template>
                        <template #center>
                            <DsSearchInput class="lg:w-[600px]" />
                        </template>
                        <template #end>
                            <DsButton primary small label="New Course Offering">
                                <template #trailing-icon>
                                    <PlusIcon class="flex-shrink-0 size-4" />
                                </template>
                            </DsButton>
                        </template>
                    </DsCardHeader>

                    <DsCardBody>
                        <DsSwitchDisplayContent :activeTab="activeTab">
                            <template #card>
                                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

                                    <NuxtLink v-for="n in 10">
                                        <DsCard :hoverEffect="true">
                                            <DsCardImage>
                                                <template #img>
                                                    <img src="/img/placeholder.jpg" class="w-full object-cover h-32">
                                                </template>
                                            </DsCardImage>
                                            <DsCardBody>
                                                <h3 class="text-gray-800 font-bold">Card Title</h3>
                                                <p class="text-gray-500 text-sm font-light line-clamp-2">Lorem ipsum dolor
                                                    sit amet consectetur
                                                    adipisicing elit. Facere fuga asperiores quos laboriosam. Totam sapiente
                                                    labore voluptatum, ut quae
                                                    sequi.</p>
                                            </DsCardBody>
                                        </DsCard>
                                    </NuxtLink>

                                </div>
                            </template>
                            <template #table>

                                <DsTable :columns="columns" :rows="rows">
                                    <template #actions="{ row }">
                                        <NuxtLink :to="'/cms/course-offerings/details/' + row.id"
                                            class="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                            <FileTextIcon class="shrink-0 size-4" />
                                            View
                                        </NuxtLink>
                                    </template>
                                </DsTable>

                            </template>
                        </DsSwitchDisplayContent>
                    </DsCardBody>
                </DsCard>

                <DsCard :class="['col-span-1']">
                    <DsCardHeader simple>
                        <!-- <h3 class="text-gray-800 font-bold">Sections</h3>
                        <a href="" class="text-blue-600 hover:bg-blue-50 text-sm flex items-center gap-1 px-2 py-1 rounded-md"><CalendarIcon class="shrink-0 size-4" /> SY 2024-2025, 1st Semester</a> -->
                        <div class="w-full space-y-5">
                            <div>
                                <h3 class="text-gray-700 font-semibold flex items-center gap-3">
                                    <FileTextIcon class="shrink-0 size-8 text-rose-500" strokeWidth="1.5" />
                                    Sections
                                </h3>
                                <div class="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-4 dark:from-neutral-700 dark:via-neutral-900">
                                    <div class="bg-rose-500 w-8 h-0.5 dark:bg-neutral-600"></div>
                                </div>
                            </div>
                            <div class="flex items-center gap-2">
                                <DsSelect v-model="schoolYear" :options="schoolYears" placeholder="Select SY" />
                                <DsSelect v-model="academicTerm" :options="academicTerms" placeholder="Select Term" />
                            </div>
                        </div>
                    </DsCardHeader>
                    <DsCardBody>
                        <div class="space-y-4">
                            <DsCard v-for="n in 3" hover-effect>
                                <DsCardHeader start end :class="['bg-teal-50']">
                                    <template #start>
                                        <h3 class="text-gray-800 text-sm font-bold">SE-1B</h3>
                                    </template>
                                    <template #end>
                                        <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-white bg-green-600 text-xs">
                                            Active
                                        </span>
                                    </template>
                                </DsCardHeader>
                                <DsCardBody>
                                    <ul class="max-w-xs flex flex-col divide-y divide-gray-200 dark:divide-neutral-700">
                                        <li class="inline-flex items-center gap-x-2 py-3 text-sm font-light text-gray-600 dark:text-white">
                                            <BookOpenIcon class="shrink-0 size-4" />
                                            Structure of English
                                        </li>
                                        <li class="inline-flex items-center gap-x-2 py-3 text-sm font-light text-gray-400 dark:text-white">
                                            <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full bg-gray-100 text-xs">
                                                <span class="text-red-600 font-bold">25</span> / 50
                                            </span>
                                            Remaining Slot
                                        </li>
                                    </ul>
                                </DsCardBody>
                            </DsCard>
                        </div>
                    </DsCardBody>
                </DsCard>
            </div>

        </template>
    </AppContent>
</template>

<script setup>
import { PlusIcon, FileTextIcon, BookOpenIcon, CalendarIcon } from 'lucide-vue-next';
import { menuItems } from "@/data/cms-menu";

const schoolYears = ref(['2024-2025', '2025-2026', '2026-2027', '2027-2028']);
const schoolYear = ref(null);

const academicTerms = ref(['1st Semester', '2nd Semester', 'Summer']);
const academicTerm = ref(null);

// Breadcrumb
import DsBreadcrumb from '~/components/DsBreadcrumb.vue';
const item = ref([
    { title: 'Course Offering' },
]);

import DsSwitchDisplay from '~/components/DsSwitchDisplay.vue';
import DsSwitchDisplayContent from '~/components/DsSwitchDisplayContent.vue';

const activeTab = ref('segment-1');

const columns = [
    { label: 'Subject', field: 'subject', align: 'start', sortable: true },
    { label: 'Department', field: 'department', align: 'start', sortable: true },
    { label: 'Type', field: 'type', align: 'start' },
    { label: 'Grade Type', field: 'gradeType', align: 'start' },
    { label: 'Action', field: 'actions', align: 'end', slotName: 'actions' }
];

const rows = [
    {
        id: 1,
        subject: 'Mathematics',
        department: 'Science',
        type: 'Lecture',
        gradeType: 'Numeric'
    },
    {
        id: 2,
        subject: 'History',
        department: 'Humanities',
        type: 'Seminar',
        gradeType: 'Pass/Fail'
    }
];
</script>