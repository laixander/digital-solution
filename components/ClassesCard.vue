<template>
    <div class="bg-white border shadow-sm rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
        <div class="p-4 md:p-5">
            <span class="flex items-center justify-between">
                <span class="text-gray-900 text-md font-medium text-center dark:text-neutral-300">
                    Section 1A
                </span>
                <ClassesOptions />
            </span>
            <ul class="min-w-full flex flex-col divide-y divide-gray-200 dark:divide-neutral-700">
                <li class="inline-flex flex-col xl:flex-row xl:items-center xl:justify-between gap-1 xl:gap-3 py-3">
                    <span class="text-sm font-medium text-gray-800 dark:text-neutral-800">Subject:</span>
                    <span class="text-sm text-gray-500 xl:text-right truncate dark:text-neutral-200">Computer Architecture 2</span>
                </li>
                <li class="inline-flex flex-col xl:flex-row xl:items-center xl:justify-between gap-1 xl:gap-3 py-3">
                    <span class="text-sm font-medium text-gray-800 dark:text-neutral-800">Instructor/s:</span>
                    <span class="text-sm text-gray-500 xl:text-right truncate dark:text-neutral-200">Kylie J.
                        Montenegro</span>
                </li>
                <li class="inline-flex flex-col xl:flex-row xl:justify-between gap-1 xl:gap-3 py-3">
                    <span class="text-sm font-medium text-gray-800 dark:text-neutral-800">Schedule:</span>
                    <span class="text-sm text-gray-500 xl:text-right truncate dark:text-neutral-200">
                        06:00 AM - 12:00 PM<br>
                        Mon, Tue, Wed, Thu, Fri, Sat
                    </span>
                </li>
                <li class="inline-flex flex-col xl:flex-row xl:items-center xl:justify-between gap-1 xl:gap-3 py-3">
                    <span class="text-sm font-medium text-gray-800 dark:text-neutral-800">Term:</span>
                    <span class="text-sm text-gray-500 xl:text-right truncate dark:text-neutral-200">Midterm</span>
                </li>
            </ul>
        </div>
    </div>
</template>