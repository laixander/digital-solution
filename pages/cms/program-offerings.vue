<template>
    <AppHeader>
        <template #pageTitle>
            Analytics
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
                        <NuxtLink class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300"
                            to="/cms/course-offerings">
                            <MicroscopeIcon class="shrink-0 size-4" />
                            Course Offerings
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-white"
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
            Content Here
        </template>
    </AppContent>
</template>

<script setup>
    import { GaugeIcon, ShapesIcon, BookOpenCheckIcon, MicroscopeIcon, GraduationCapIcon, UsersIcon } from 'lucide-vue-next';
</script>