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
                <div class="w-full md:max-w-xl p-4 mx-auto space-y-6 bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                    <div>
                        <h3 class="text-gray-700 font-semibold flex items-center gap-3">
                            <FileTextIcon class="shrink-0 size-8 text-rose-500" strokeWidth="1.5" />
                            Edit Course
                        </h3>
                        <div class="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-4 dark:from-neutral-700 dark:via-neutral-900">
                            <div class="bg-rose-500 w-8 h-0.5 dark:bg-neutral-600"></div>
                        </div>
                    </div>
                    <DsImgUpload imageURL="/digital-solution/img/placeholder.jpg" />
                    <div class="space-y-1">
                        <label class="block text-sm text-gray-700 font-medium mb-2 dark:text-white">
                            <span class="text-red-600">*</span>Department:
                        </label>
                        <SelectDepartment v-model="department" :options="departments" placeholder="Select Department" />
                    </div>
                    <div class="space-y-1">
                        <label class="block text-sm text-gray-700 font-medium mb-2 dark:text-white">
                            <span class="text-red-600">*</span>Subject:
                        </label>
                        <SubjectSelect v-model="subject" :options="subjects" placeholder="Select Subject" />
                    </div>
                    
                    <div class="space-y-1">
                        <label class="block text-sm text-gray-700 font-medium mb-2 dark:text-white">
                            Type:
                        </label>
                        <DsRadioGroup
                            :items="typeItems"
                            groupName="typeSelection"
                            v-model="typeOption"
                        ></DsRadioGroup>
                    </div>

                    <div class="space-y-1">
                        <label class="block text-sm text-gray-700 font-medium mb-2 dark:text-white">
                            Lecture Unit:
                        </label>
                        <!-- Custom range and start value -->
                        <DsRangeSlider :min-value="0" :max-value="3" :step="1" :start-value="3" :showNumberInput="true" activeColor="#2563eb" inactiveColor="#d1d5db" />
                    </div>

                    <div class="space-y-1">
                        <label class="block text-sm text-gray-700 font-medium mb-2 dark:text-white">
                            Lecture Faculty Unit:
                        </label>
                        <!-- Custom range and start value -->
                        <DsRangeSlider :min-value="0" :max-value="3" :step="1" :start-value="3" :showNumberInput="true" activeColor="#2563eb" inactiveColor="#d1d5db" />
                    </div>

                    <div class="space-y-1">
                        <label class="block text-sm text-gray-700 font-medium mb-2 dark:text-white">
                            Lecture hours:
                        </label>
                        <!-- Custom range and start value -->
                        <DsRangeSlider :min-value="0" :max-value="3" :step="1" :start-value="3" :showNumberInput="true" activeColor="#2563eb" inactiveColor="#d1d5db" />
                    </div>

                    <div class="space-y-1">
                        <label class="block text-sm text-gray-700 font-medium mb-2 dark:text-white">
                            Course Duration (Week):
                        </label>
                        <!-- Custom range and start value -->
                        <DsRangeSlider :min-value="0" :max-value="24" :step="1" :start-value="12" :showNumberInput="true" activeColor="#2563eb" inactiveColor="#d1d5db" />
                    </div>

                    <div class="space-y-1">
                        <label class="block text-sm text-gray-700 font-medium mb-2 dark:text-white">
                            GPA counted:
                        </label>
                        <!-- Custom range and start value -->
                        <DsRadioGroup
                            :items="gpaItems"
                            groupName="gpaSelection"
                            v-model="gpaOption"
                        ></DsRadioGroup>
                    </div>

                    <div class="space-y-1">
                        <label class="block text-sm text-gray-700 font-medium mb-2 dark:text-white">
                            Grade Type:
                        </label>
                        <GradeTypeSelect v-model="gradeType" :options="gradeTypes" placeholder="Select Grade Type" />
                    </div>

                    <div class="flex items-center justify-center gap-2">
                        <button type="button"
                            class="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                            Cancel
                        </button>
                        <button type="button"
                            class="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                            Save
                        </button>
                    </div>

                </div>
            </div>
        </template>
    </AppContent>
</template>

<script setup>
import { ref } from "vue";
import { 
  FileTextIcon,
} from 'lucide-vue-next';
import { menuItems } from "@/data/cms-menu";

import SelectDepartment from '~/components/DsSelect.vue';
    const departments = ref(['Department of Science', 'Department of Information Technology', 'Department of Engineering', 'Department of Medicine']);
    const department = ref('Department of Science');

import SubjectSelect from '~/components/DsSelect.vue';
    const subjects = ref(['Basic Algebra', 'Natural Science', 'Computer Programming', 'English Literature']);
    const subject = ref('Natural Science');

    import GradeTypeSelect from '~/components/DsSelect.vue';
    const gradeTypes = ref(['Passed/Failed', 'Grade Letter', 'Grade Points', 'Percentage', 'Descriptor']);
    const gradeType = ref('Grade Points');

import DsRadioGroup from "~/components/DsRadioGroup.vue";
const typeItems = [
  { label: "Lecture", value: "lecture" },
  { label: "Laboratory", value: "laboratory" },
  { label: "Mixed", value: "mixed" },
];
const typeOption = ref("lecture");

const gpaItems = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];
const gpaOption = ref("yes");

// Breadcrumb items
import DsBreadcrumb from '~/components/DsBreadcrumb.vue';
const item = ref([
  { title: 'Courses', href: '/cms/courses' },
  { title: 'Edit Course' }
]);
</script>