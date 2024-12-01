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

            <DsCard>
                <DsCardHeader>
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

        </template>
    </AppContent>
</template>

<script setup>
import { PlusIcon, FileTextIcon } from 'lucide-vue-next';
import { menuItems } from "@/data/cms-menu";
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