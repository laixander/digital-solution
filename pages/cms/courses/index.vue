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
                        <DsSearchInput />
                        <SelectDepartment v-model="department" :options="departments" placeholder="Select Department" />
                    </template>

                    <template #end>
                        <NuxtLink to="/cms/courses/new-course">
                            <DsButton primary small label="New Course">
                                <template #trailing-icon>
                                    <PlusIcon class="flex-shrink-0 size-4" />
                                </template>
                            </DsButton>
                        </NuxtLink>
                    </template>
                </DsCardHeader>
                <DsCardBody>
                    <DsSwitchDisplayContent :activeTab="activeTab">
                        <template #card>
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

                                <NuxtLink v-for="item in data" :key="item.id" :to="'/cms/courses/details/' + item.id">
                                    <DsCard hover-effect same-height>
                                        <DsCardImage show-extra>
                                            <template #img>
                                                <img :src="item.image" :alt="item.subject"
                                                    class="w-full object-cover h-32" />
                                            </template>
                                            <span
                                                class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white">
                                                <component :is="item.icon" class="shrink-0 size-3.5" />
                                                {{ item.type }}
                                            </span>
                                        </DsCardImage>
                                        <DsCardBody>
                                            <div class="space-y-3">
                                                <div class="space-y-2">
                                                    <h5
                                                        class="text-xs font-medium truncate text-gray-500 uppercase dark:text-neutral-500">
                                                        {{ item.department }}</h5>
                                                    <div class="flex items-center gap-3">
                                                        <span
                                                            class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium text-nowrap text-white"
                                                            :class="item.tag.bgcolor">
                                                            {{ item.tag.name }}
                                                        </span>
                                                        <h3
                                                            class="font-bold truncate text-gray-700 group-hover:text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                                                            {{ item.subject }}
                                                        </h3>
                                                    </div>
                                                </div>
                                                <p class="text-sm text-gray-600 font-light mt-3 line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur numquam eligendi adipisci.</p>
                                            </div>
                                        </DsCardBody>
                                    </DsCard>
                                </NuxtLink>

                            </div>
                        </template>
                        <template #table>

                            <DsTable :columns="columns" :rows="data">
                                <template #subject="{ row }">
                                    <div class="flex items-center gap-3">
                                      <span
                                        class="inline-flex items-center gap-x-1.5 py-1.5 px-2.5 rounded-full text-xs font-medium text-white"
                                        :class="row.tag.bgcolor"
                                      >
                                        {{ row.tag.name }}
                                      </span>
                                      <span class="font-semibold">
                                        {{ row.subject }}
                                      </span>
                                    </div>
                                </template>
                                <template #actions="{ row }">
                                    <NuxtLink :to="'/cms/courses/details/' + row.id"
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
import { PlusIcon, BookOpenTextIcon, FileTextIcon, FlaskConicalIcon, BlendIcon } from 'lucide-vue-next';
import { menuItems } from "@/data/cms-menu";

import SelectDepartment from '~/components/DsSelect.vue';
const departments = ref(['Department of Science', 'Department of Information Technology', 'Department of Engineering', 'Department of Medicine']);
const department = ref(null);

import DsBreadcrumb from '~/components/DsBreadcrumb.vue';
const item = ref([
    { title: 'Courses' },
]);


const columns = [
    { label: 'Subject', field: 'subject', align: 'start', sortable: true, slotName: 'subject' },
    { label: 'Department', field: 'department', align: 'start', sortable: true },
    { label: 'Type', field: 'type', align: 'start' },
    { label: 'Grade Type', field: 'gradeType', align: 'start' },
    { label: 'Action', field: 'actions', align: 'end', slotName: 'actions' }
];

// Table data
const data = ref([
    {
        id: 1,
        subject: 'English Communication Skills',
        tag: { name: 'ENG 101', bgcolor: 'bg-blue-500' },
        department: 'Department of Language and Literature',
        type: 'Lecture',
        gradeType: 'Grade Points',
        icon: BookOpenTextIcon,
        image: '/digital-solution/img/placeholder.jpg',
    },
    {
        id: 2,
        subject: 'Mathematics for Engineers',
        tag: { name: 'MATH 202', bgcolor: 'bg-green-500' },
        department: 'Department of Mathematics',
        type: 'Lecture',
        gradeType: 'Percentage',
        icon: BookOpenTextIcon,
        image: '/digital-solution/img/placeholder-2.jpg',
    },
    {
        id: 3,
        subject: 'Data Structures and Algorithms',
        tag: { name: 'CS 201', bgcolor: 'bg-purple-500' },
        department: 'Department of Computer Science',
        type: 'Mixed',
        gradeType: 'Grade Points',
        icon: BlendIcon,
        image: '/digital-solution/img/placeholder-3.jpg',
    },
    {
        id: 4,
        subject: 'Fundamentals of Physics',
        tag: { name: 'PHYS 101', bgcolor: 'bg-yellow-500' },
        department: 'Department of Physics',
        type: 'Laboratory',
        gradeType: 'Pass/Fail',
        icon: FlaskConicalIcon,
        image: '/digital-solution/img/placeholder-4.jpg',
    },
    {
        id: 5,
        subject: 'Introduction to Psychology',
        tag: { name: 'PSY 101', bgcolor: 'bg-pink-500' },
        department: 'Department of Social Sciences',
        type: 'Lecture',
        gradeType: 'Grade Points',
        icon: BookOpenTextIcon,
        image: '/digital-solution/img/placeholder-5.jpg',
    },
    {
        id: 6,
        subject: 'Chemistry for Health Sciences',
        tag: { name: 'CHEM 301', bgcolor: 'bg-red-500' },
        department: 'Department of Chemistry',
        type: 'Laboratory',
        gradeType: 'Percentage',
        icon: FlaskConicalIcon,
        image: '/digital-solution/img/placeholder-6.jpg',
    },
    {
        id: 7,
        subject: 'History of Western Civilization',
        tag: { name: 'HIST 102', bgcolor: 'bg-indigo-500' },
        department: 'Department of History',
        type: 'Lecture',
        gradeType: 'Grade Points',
        icon: BookOpenTextIcon,
        image: '/digital-solution/img/placeholder-7.jpg',
    },
    {
        id: 8,
        subject: 'Advanced Software Engineering',
        tag: { name: 'SE 401', bgcolor: 'bg-teal-500' },
        department: 'Department of Computer Science',
        type: 'Mixed',
        gradeType: 'Grade Points',
        icon: BlendIcon,
        image: '/digital-solution/img/placeholder-8.jpg',
    },
    {
        id: 9,
        subject: 'Business Management Basics',
        tag: { name: 'BUS 101', bgcolor: 'bg-orange-500' },
        department: 'Department of Business Administration',
        type: 'Lecture',
        gradeType: 'Grade Points',
        icon: BookOpenTextIcon,
        image: '/digital-solution/img/placeholder-9.jpg',
    },
    {
        id: 10,
        subject: 'Physical Education and Wellness',
        tag: { name: 'PE 101', bgcolor: 'bg-gray-500' },
        department: 'Department of Physical Education',
        type: 'Lecture',
        gradeType: 'Pass/Fail',
        icon: BookOpenTextIcon,
        image: '/digital-solution/img/placeholder-10.jpg',
    },
]);


const activeTab = ref('segment-1');
</script>