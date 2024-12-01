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
            <div class="flex flex-col xl:flex-row gap-4">
                <div
                    class="w-full xl:max-w-md bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                    <div class="relative">
                        <img :src="details.image" :alt="details.subject" class="w-full object-cover h-32" />
                        <div class="absolute right-4 top-4">
                            <span
                                class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white">
                                <component :is="details.icon" class="shrink-0 size-3.5" />
                                {{ details.type }}
                            </span>
                        </div>
                    </div>
                    <div class="p-4 space-y-5">
                        <div class=" space-y-3">
                            <div class="flex justify-between items-start">
                                <div class="space-y-2">
                                    <h5
                                        class="text-xs font-medium truncate text-gray-500 uppercase dark:text-neutral-500">
                                        {{ details.department }}
                                    </h5>
                                    <div class="flex items-center gap-3">
                                        <span
                                            class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium text-nowrap text-white"
                                            :class="details.tag.bgcolor">
                                            {{ details.tag.name }}
                                        </span>
                                        <h3
                                            class="font-bold truncate text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
                                            {{ details.subject }}
                                        </h3>
                                    </div>
                                </div>

                                <NuxtLink :to="'/cms/courses/details/edit/' + details.id"
                                    class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                                    <PenLineIcon class="shrink-0 size-4" />
                                    Edit
                                </NuxtLink>
                            </div>
                            <p class="font-light text-sm text-gray-600 mt-3">Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Consequuntur numquam eligendi adipisci.</p>
                        </div>

                        <div v-if="details.type === 'Lecture' || details.type === 'Mixed'" class="space-y-4">
                            <div class="text-gray-800 text-sm font-bold">
                                <div class="inline-flex items-center gap-2">
                                    <BookOpenTextIcon class="shrink-0 size-4" />
                                    Lecture Units
                                </div>
                                <div class="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-2">
                                    <div class="bg-gray-400 w-4 h-0.5"></div>
                                </div>
                            </div>
                            <ul class="flex flex-col">
                                <li class="inline-flex items-center justify-between gap-x-2 py-3 px-4 bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                                    <span class="text-sm font-medium">
                                        Lecture Unit:
                                    </span>
                                    <span class="text-sm text-gray-600">
                                        2
                                    </span>
                                </li>
                                <li class="inline-flex items-center justify-between gap-x-2 py-3 px-4 bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                                    <span class="text-sm font-medium">
                                        Lecture Hours:
                                    </span>
                                    <span class="text-sm text-gray-600">
                                        2
                                    </span>
                                </li>
                                <li class="inline-flex items-center justify-between gap-x-2 py-3 px-4 bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                                    <span class="text-sm font-medium">
                                        Lecture Faculty Unit:
                                    </span>
                                    <span class="text-sm text-gray-600">
                                        2
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div v-if="details.type === 'Laboratory' || details.type === 'Mixed'" class="space-y-4">
                            <div class="text-gray-800 text-sm font-bold">
                                <div class="inline-flex items-center gap-2">
                                    <FlaskConicalIcon class="shrink-0 size-4" />
                                    Laboratory Units
                                </div>
                                <div class="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-2">
                                    <div class="bg-gray-400 w-4 h-0.5"></div>
                                </div>
                            </div>
                            <ul class="flex flex-col">
                                <li class="inline-flex items-center justify-between gap-x-2 py-3 px-4 bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                                    <span class="text-sm font-medium">
                                        Laboratory Unit:
                                    </span>
                                    <span class="text-sm text-gray-600">
                                        2
                                    </span>
                                </li>
                                <li class="inline-flex items-center justify-between gap-x-2 py-3 px-4 bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                                    <span class="text-sm font-medium">
                                        Laboratory Hours:
                                    </span>
                                    <span class="text-sm text-gray-600">
                                        2
                                    </span>
                                </li>
                                <li class="inline-flex items-center justify-between gap-x-2 py-3 px-4 bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                                    <span class="text-sm font-medium">
                                        Laboratory Type:
                                    </span>
                                    <span class="text-sm text-gray-600">
                                        2
                                    </span>
                                </li>
                                <li class="inline-flex items-center justify-between gap-x-2 py-3 px-4 bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                                    <span class="text-sm font-medium">
                                        Laboratory Faculty Unit:
                                    </span>
                                    <span class="text-sm text-gray-600">
                                        2
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <ul class="flex flex-col">
                            <li class="inline-flex items-center justify-between gap-x-2 py-3 px-4 bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                                <span class="text-sm font-medium">
                                    Grade Type:
                                </span>
                                <span class="text-sm text-gray-600">
                                    {{ details.gradeType }}
                                </span>
                            </li>
                            <li class="inline-flex items-center justify-between gap-x-2 py-3 px-4 bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                                <span class="text-sm font-medium">
                                    Week Duration:
                                </span>
                                <span class="text-sm text-gray-600">
                                    5
                                </span>
                            </li>
                        </ul>

                    </div>
                </div>
                <div
                    class="w-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                    <div class="flex items-center justify-between p-4 border-b border-gray-200">
                        <h3 class="font-bold text-gray-800">
                            Course Requirements
                        </h3>
                        <DsModal>
                            <template #buttonLabel>
                                New Requirement
                            </template>
                            <template #modalTitle>
                                New Requirement
                            </template>
                            <template #modalContent>
                                <div class="p-4">
                                    <div class="flex flex-col gap-6">
                                        <div class="space-y-1">
                                            <label class="block text-sm font-medium mb-2 dark:text-white"><span
                                                    class="text-red-600">*</span>Type:</label>
                                            <DsRadioGroup :items="radioItems" groupName="userSelection"
                                                v-model="selectedOption"></DsRadioGroup>
                                            <p class="mt-4 hidden">Selected: {{ selectedOption }}</p>
                                        </div>
                                        <div class="space-y-1">
                                            <label class="block text-sm font-medium mb-2 dark:text-white"><span
                                                    class="text-red-600">*</span>Subject:</label>
                                            <SubjectSelect v-model="subject" :options="subjects"
                                                placeholder="Select Subject" />
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </DsModal>
                    </div>

                    <DsTable :columns="columns" :rows="details.rows">
                        <template #subject="{ row }">
                            <div class="flex items-center gap-3">
                                <span
                                    class="inline-flex items-center gap-x-1.5 py-1.5 px-2.5 rounded-full text-xs font-medium text-white"
                                    :class="details.tag.bgcolor"
                                >
                                    {{ row.tag}}
                                </span>
                                <span class="font-semibold">
                                    {{ row.subject }}
                                </span>
                            </div>
                        </template>
                        <template #status="{ row }">
                            <span  :class="row.status ? 'text-green-500' : 'text-amber-500'">
                                {{ row.status ? 'Active' : 'Suspended' }}
                            </span>
                        </template>
                        <template #actions="{ row }">
                            <DsToggleSwitch 
                                :modelValue="row.status" @update:modelValue="(value) => updateStatus(row.id, value)" 
                            />
                        </template>
                    </DsTable>

                </div>
            </div>
        </template>
    </AppContent>
</template>

<script setup>
import { ref } from "vue";
import {
    BookOpenTextIcon,
    PenLineIcon,
    FlaskConicalIcon,
    BlendIcon
} from 'lucide-vue-next';
import { menuItems } from "@/data/cms-menu";

// Breadcrumb items
import DsBreadcrumb from '~/components/DsBreadcrumb.vue';
const item = ref([
    { title: 'Courses', href: '/cms/courses' },
    { title: 'Details' }
]);


// Radio group items
import DsRadioGroup from "~/components/DsRadioGroup.vue";
const radioItems = [
    { label: "Prerequisite", value: "prerequisite" },
    { label: "Co-Requisite", value: "corequisite" },
    { label: "Substitute", value: "substitute" },
];
// Selected radio button value
const selectedOption = ref(null);


// Select input
import SubjectSelect from '~/components/DsSelect.vue';
const subjects = ref(['Basic Algebra', 'Natural Science', 'Computer Programming', 'English Literature']);
// Selected input value
const subject = ref(null);


const columns = [
    { label: 'Type', field: 'type', align: 'start' },
    { label: 'Subject', field: 'subject', align: 'start', slotName: 'subject' },
    { label: 'Status', field: 'status', align: 'start', slotName: 'status' },
    { label: 'Action', field: 'actions', align: 'end', slotName: 'actions' }
];


import { useRoute } from 'vue-router';

// Simulated data (in real cases, fetch from API)
const data = [
    {
        id: 1,
        subject: 'English Communication Skills',
        tag: { name: 'ENG 101', bgcolor: 'bg-blue-500' },
        department: 'Department of Language and Literature',
        type: 'Lecture',
        gradeType: 'Grade Points',
        icon: BookOpenTextIcon,
        image: '/digital-solution/img/placeholder.jpg',
        rows: [
            {
                id: 1,
                type: 'Prerequisite',
                subject: 'English Communication Skills',
                tag: 'ENG 101',
                status: true
            },
            {
                id: 2,
                type: 'Co-requisite',
                subject: 'Introduction to English Language Studies',
                tag: 'ELS 101',
                status: false
            },
            {
                id: 3,
                type: 'Substitute',
                subject: 'Elementary Communication Skills',
                tag: 'ELC 101',
                status: false
            },
        ]
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
        rows: [
            {
                id: 1,
                type: 'Prerequisite',
                subject: 'Calculus I',
                tag: 'MATH 101',
                status: true
            },
            {
                id: 2,
                type: 'Co-requisite',
                subject: 'Linear Algebra',
                tag: 'MATH 201',
                status: false
            },
            {
                id: 3,
                type: 'Substitute',
                subject: 'Discrete Mathematics',
                tag: 'CS 105',
                status: false
            },
        ]
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
        rows: [
            {
                id: 1,
                type: 'Prerequisite',
                subject: 'Introduction to Programming',
                tag: 'CS 101',
                status: true
            },
            {
                id: 2,
                type: 'Co-requisite',
                subject: 'Mathematical Logic',
                tag: 'MATH 202',
                status: false
            },
            {
                id: 3,
                type: 'Substitute',
                subject: 'Object-Oriented Programming',
                tag: 'CS 102',
                status: false
            },
        ]
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
        rows: [
            {
                id: 1,
                type: 'Prerequisite',
                subject: 'General Chemistry',
                tag: 'CHEM 101',
                status: true
            },
            {
                id: 2,
                type: 'Co-requisite',
                subject: 'Calculus II',
                tag: 'MATH 102',
                status: true
            },
            {
                id: 3,
                type: 'Substitute',
                subject: 'Modern Physics',
                tag: 'PHYS 102',
                status: false
            },
        ]
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
        rows: [
            {
                id: 1,
                type: 'Prerequisite',
                subject: 'Sociology',
                tag: 'SOC 101',
                status: true
            },
            {
                id: 2,
                type: 'Co-requisite',
                subject: 'Cognitive Psychology',
                tag: 'PSY 201',
                status: false
            },
            {
                id: 3,
                type: 'Substitute',
                subject: 'Social Psychology',
                tag: 'PSY 301',
                status: false
            },
        ]
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
        rows: [
            {
                id: 1,
                type: 'Prerequisite',
                subject: 'General Chemistry',
                tag: 'CHEM 101',
                status: true
            },
            {
                id: 2,
                type: 'Co-requisite',
                subject: 'Organic Chemistry',
                tag: 'CHEM 201',
                status: true
            },
            {
                id: 3,
                type: 'Substitute',
                subject: 'Biochemistry',
                tag: 'BIO 202',
                status: false
            },
        ]
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
        rows: [
            {
                id: 1,
                type: 'Prerequisite',
                subject: 'World History',
                tag: 'HIST 101',
                status: true
            },
            {
                id: 2,
                type: 'Co-requisite',
                subject: 'Philosophy of History',
                tag: 'PHIL 101',
                status: false
            },
            {
                id: 3,
                type: 'Substitute',
                subject: 'European History',
                tag: 'HIST 201',
                status: false
            },
        ]
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
        rows: [
            {
                id: 1,
                type: 'Prerequisite',
                subject: 'Software Engineering Principles',
                tag: 'SE 301',
                status: true
            },
            {
                id: 2,
                type: 'Co-requisite',
                subject: 'Data Structures and Algorithms',
                tag: 'CS 201',
                status: false
            },
            {
                id: 3,
                type: 'Substitute',
                subject: 'Web Development',
                tag: 'CS 202',
                status: false
            },
        ]
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
        rows: [
            {
                id: 1,
                type: 'Prerequisite',
                subject: 'Accounting Principles',
                tag: 'ACCT 101',
                status: true
            },
            {
                id: 2,
                type: 'Co-requisite',
                subject: 'Marketing Fundamentals',
                tag: 'MKT 101',
                status: false
            },
            {
                id: 3,
                type: 'Substitute',
                subject: 'Organizational Behavior',
                tag: 'MGMT 201',
                status: false
            },
        ]
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
        rows: [
            {
                id: 1,
                type: 'Prerequisite',
                subject: 'Health and Fitness',
                tag: 'PE 100',
                status: true
            },
            {
                id: 2,
                type: 'Co-requisite',
                subject: 'Nutrition and Wellness',
                tag: 'NUTR 101',
                status: false
            },
            {
                id: 3,
                type: 'Substitute',
                subject: 'Yoga and Relaxation',
                tag: 'PE 200',
                status: false
            },
        ]
    },
];

const route = useRoute();
const id = route.params.id;

// Fetch details based on ID
const details = ref(data.find((item) => item.id === parseInt(id, 10)));

// Update status function
import DsToggleSwitch from '~/components/DsToggleSwitch.vue';
// Update status function
const updateStatus = (id, value) => {
  const row = details.value.rows.find((row) => row.id === id);
  if (row) {
    row.status = value;
  }
};
</script>