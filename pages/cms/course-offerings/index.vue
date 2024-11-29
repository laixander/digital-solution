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
                        <NuxtLink class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300"
                            to="/cms/">
                            <GaugeIcon class="shrink-0 size-4" />
                            Analytics
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300"
                            to="/cms/courses">
                            <ShapesIcon class="shrink-0 size-4" />
                            Courses
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-white">
                            <MicroscopeIcon class="shrink-0 size-4" />
                            Course Offerings
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300"
                            to="/cms/program-offerings">
                            <BookOpenCheckIcon class="shrink-0 size-4" />
                            Program Offerings
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300"
                            to="/cms/curricula">
                            <GraduationCapIcon class="shrink-0 size-4" />
                            Curricula
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300"
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
                            <div>

                                <DsCard>
                                    <DsCardImage>
                                        <template #img>
                                            <img src="/placeholder.jpg" class="w-full object-cover h-32">
                                        </template>
                                    </DsCardImage>
                                    <DsCardBody>
                                        <h3 class="text-gray-800 font-bold">Card Title</h3>
                                        <p class="text-gray-500 text-sm font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fuga asperiores quos laboriosam. Totam sapiente labore voluptatum, ut quae sequi.</p>
                                    </DsCardBody>
                                </DsCard>

                            </div>
                        </template>
                        <template #table>
                            <div>Table Display Content</div>
                        </template>
                    </DsSwitchDisplayContent>
                </DsCardBody>
            </DsCard>

        </template>
    </AppContent>
</template>

<script setup>
import { GaugeIcon, ShapesIcon, BookOpenCheckIcon, MicroscopeIcon, GraduationCapIcon, UsersIcon, PlusIcon } from 'lucide-vue-next';

// Breadcrumb
import DsBreadcrumb from '~/components/DsBreadcrumb.vue';
const item = ref([
    { title: 'Course Offering' },
]);

import DsSwitchDisplay from '~/components/DsSwitchDisplay.vue';
import DsSwitchDisplayContent from '~/components/DsSwitchDisplayContent.vue';

const activeTab = ref('segment-1');
</script>