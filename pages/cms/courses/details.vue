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
                            class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300"
                            to="/cms">
                            <GaugeIcon class="shrink-0 size-4" />
                            Analytics
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink
                            class="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-white"
                            to="/cms/courses">
                            <ShapesIcon class="shrink-0 size-4" />
                            Courses
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink
                            class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300"
                            to="/cms/course-offerings">
                            <MicroscopeIcon class="shrink-0 size-4" />
                            Course Offerings
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink
                            class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300"
                            to="/cms/program-offerings">
                            <BookOpenCheckIcon class="shrink-0 size-4" />
                            Program Offerings
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink
                            class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300"
                            to="/cms/curricula">
                            <GraduationCapIcon class="shrink-0 size-4" />
                            Curricula
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink
                            class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300"
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
            <div class="flex flex-col xl:flex-row gap-4">
                <div class="w-full xl:max-w-md bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                    <div class="relative">
                        <img class="w-full object-cover h-32" src="/placeholder.jpg" alt="Blog Image">
                        <div class="absolute right-4 top-4">
                            <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white">
                                <BookOpenTextIcon class="shrink-0 size-3.5" />
                                Lecture
                            </span>
                        </div>
                    </div>
                    <div class="p-4 space-y-5">
                        <div class="flex justify-between items-start">
                            <div class="space-y-2">
                                <p class="text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">English Department</p>
                                <div class="flex items-center gap-3">
                                    <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-500 text-white">
                                        ELS 102
                                    </span>
                                    <h3 class="font-semibold text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
                                        Structure of English
                                    </h3>
                                </div>
                            </div>

                            <NuxtLink to="edit-details" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                                <PenLineIcon class="shrink-0 size-4" />
                                Edit
                            </NuxtLink>
                        </div>
                            
                        <p class="text-sm text-gray-600 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur numquam eligendi adipisci.</p>

                        <!-- <div class="flex items-center gap-2 text-gray-800 font-medium">
                            <BookOpenTextIcon class="shrink-0 size-3.5" />
                            Lecture
                        </div> -->

                        <div class="w-full bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                            <ul class="min-w-full flex flex-col divide-y divide-gray-200 dark:divide-neutral-700 
                            *:inline-flex *:items-center *:justify-between *:gap-3 *:py-3 *:px-4">
                                <li>
                                    <span class="text-sm font-medium text-gray-800 dark:text-neutral-800">Lecture Unit:</span>
                                    <span class="text-sm text-gray-600 truncate dark:text-neutral-200">2</span>
                                </li>
                                <li>
                                    <span class="text-sm font-medium text-gray-800 dark:text-neutral-800">Lecture Hours:</span>
                                    <span class="text-sm text-gray-600 truncate dark:text-neutral-200">1</span>
                                </li>
                                <li>
                                    <span class="text-sm font-medium text-gray-800 dark:text-neutral-800">Lecture Faculty Unit:</span>
                                    <span class="text-sm text-gray-600 truncate dark:text-neutral-200">2</span>
                                </li>
                            </ul>
                        </div>

                        <!-- <div class="flex items-center gap-2 text-gray-800 font-medium">
                            <FlaskConicalIcon class="shrink-0 size-3.5" />
                            Laboratory
                        </div> -->
                        
                        <div class="w-full bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                            <ul class="min-w-full flex flex-col divide-y divide-gray-200 dark:divide-neutral-700 
                            *:inline-flex *:items-center *:justify-between *:gap-3 *:py-3 *:px-4">
                                <li>
                                    <span class="text-sm font-medium text-gray-800 dark:text-neutral-800">Laboratory Unit:</span>
                                    <span class="text-sm text-gray-600 truncate dark:text-neutral-200">3</span>
                                </li>
                                <li>
                                    <span class="text-sm font-medium text-gray-800 dark:text-neutral-800">Laboratory Hours:</span>
                                    <span class="text-sm text-gray-600 truncate dark:text-neutral-200">3</span>
                                </li>
                                <li>
                                    <span class="text-sm font-medium text-gray-800 dark:text-neutral-800">Laboratory Type:</span>
                                    <span class="text-sm text-gray-600 truncate dark:text-neutral-200">---</span>
                                </li>
                                <li>
                                    <span class="text-sm font-medium text-gray-800 dark:text-neutral-800">Laboratory Faculty Unit:</span>
                                    <span class="text-sm text-gray-600 truncate dark:text-neutral-200">3</span>
                                </li>
                            </ul>
                        </div>

                        <!-- <div class="flex items-center gap-2 text-gray-800 font-medium">
                            <FlaskConicalIcon class="shrink-0 size-3.5" />
                            Laboratory
                        </div> -->
                        
                        <div class="w-full bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                            <ul class="min-w-full flex flex-col divide-y divide-gray-200 dark:divide-neutral-700 
                            *:inline-flex *:items-center *:justify-between *:gap-3 *:py-3 *:px-4">
                                <li>
                                    <span class="text-sm font-medium text-gray-800 dark:text-neutral-800">Grade Type:</span>
                                    <span class="text-sm text-gray-600 truncate dark:text-neutral-200">Points</span>
                                </li>
                                <li>
                                    <span class="text-sm font-medium text-gray-800 dark:text-neutral-800">Week Duration:</span>
                                    <span class="text-sm text-gray-600 truncate dark:text-neutral-200">5</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="w-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                    <div class="flex items-center justify-between p-4 border-b border-gray-200">
                        <h3 class="font-semibold text-gray-800">
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
                                            <label class="block text-sm font-medium mb-2 dark:text-white"><span class="text-red-600">*</span>Type:</label>
                                            <DsRadioGroup
                                                :items="radioItems"
                                                groupName="userSelection"
                                                v-model="selectedOption"
                                            ></DsRadioGroup>
                                            <p class="mt-4 hidden">Selected: {{ selectedOption }}</p>
                                        </div>
                                        <div class="space-y-1">
                                            <label class="block text-sm font-medium mb-2 dark:text-white"><span class="text-red-600">*</span>Subject:</label>
                                            <SubjectSelect v-model="subject" :options="subjects" placeholder="Select Subject" />
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </DsModal>
                    </div>
                    <div class="p-4">
                        <div class="flex flex-col">
                            <div class="-m-1.5 overflow-x-auto">
                                <div class="p-1.5 min-w-full inline-block align-middle">
                                    <div class="overflow-hidden">
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
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </AppContent>
</template>

<script setup>
import { ref } from "vue";
import { 
  GaugeIcon, 
  ShapesIcon, 
  BookOpenCheckIcon, 
  MicroscopeIcon, 
  GraduationCapIcon, 
  UsersIcon, 
  PlusIcon, 
  BookOpenTextIcon, 
  PenLineIcon, 
  FlaskConicalIcon 
} from 'lucide-vue-next';

// Breadcrumb items
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
import DsToggleSwitch from '~/components/DsToggleSwitch.vue';
const updateStatus = (id, value) => {
  const row = rows.value.find((row) => row.id === id);
  if (row) {
    row.status = value;
  }
};

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
</script>