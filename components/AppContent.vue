<template>
    <!-- Content -->
    <div class="w-full xl:ps-64">
        <div class="p-4 sm:p-6 space-y-3 sm:space-y-4">
            <!-- your content goes here ... -->
            <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 space-y-4 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                <slot name="mainContent"></slot>
            </div>
        </div>
    </div>
    <!-- End Content -->
</template>