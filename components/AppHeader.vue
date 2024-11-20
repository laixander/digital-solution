<template>
    <!-- ========== HEADER ========== -->
    <header
        class="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 lg:ps-[260px] dark:bg-neutral-800 dark:border-neutral-700">
        <nav class="px-4 sm:px-6 flex basis-full items-center w-full mx-auto">

            <div class="w-full flex items-center ms-auto justify-between gap-x-1 lg:gap-x-3">
                <!-- Navigation Toggle -->
                <button type="button"
                    class="lg:hidden size-8 flex justify-center items-center gap-x-2 border border-gray-200 text-gray-800 hover:text-gray-500 rounded-lg focus:outline-none focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                    aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-application-sidebar"
                    aria-label="Toggle navigation" data-hs-overlay="#hs-application-sidebar">
                    <span class="sr-only">Toggle Navigation</span>
                    <PanelRightClose class="shrink-0 size-4" />
                </button>
                <!-- End Navigation Toggle -->

                <div class="hidden xl:block xl:w-full">
                    <span class="text-sm font-semibold text-gray-800 truncate dark:text-neutral-400">Dashboard</span>
                </div>

                <div class="flex items-center gap-3 text-gray-900">
                    <svg class="size-9" viewBox="0 0 90 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M33.2267 50.3414H56.7733M37.1512 45.1088V35.9519M42.3837 45.1088V35.9519M47.6163 45.1088V35.9519M52.8488 45.1088V35.9519M45 24.1786L55.4651 30.7193H34.5349L45 24.1786Z"
                            stroke="currentColor" stroke-width="1.56977" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <circle cx="45" cy="37.26" r="27.2093" stroke="currentColor" stroke-width="1.04651" />
                        <circle cx="45" cy="37.26" r="31.657" stroke="currentColor" stroke-width="1.56977" />
                        <path
                            d="M33.4548 72.4517C32.1877 74.4659 30.4499 75.7884 28.381 76.026C26.3803 76.2547 24.0553 75.3399 21.7124 73.5311C23.835 72.5566 25.782 71.5346 27.9214 71.2993C30.0551 71.0573 31.5783 71.4882 33.4548 72.4517ZM15.5829 62.2601C17.7938 62.48 19.4076 63.4832 21.2528 65.5881C19.3226 66.9935 17.2134 67.5912 15.2061 67.052C13.2591 66.5327 11.4418 64.8312 9.94883 62.2911C11.699 62.1938 13.372 62.0358 15.5829 62.2601ZM3.35074 47.2656C5.55495 48.0512 7.66522 48.6898 9.02733 49.5516C10.4968 50.4853 11.5838 52.0343 12.4449 54.685C10.1143 55.2297 7.93362 54.9568 6.30199 53.6861C4.72068 52.4531 3.7209 50.1847 3.35074 47.2656ZM2.68758 30.9596C4.43663 32.4965 6.15884 33.861 7.09711 35.1659C8.11367 36.5658 8.54422 38.4044 8.34628 41.1865C5.97432 40.8307 4.05752 39.7855 3.01636 38.0011C2.01323 36.2719 1.93495 33.8025 2.68758 30.9596ZM8.78801 15.3408C9.7028 17.4666 10.6713 19.4289 10.9576 21.0056C11.2684 22.7005 10.8625 24.5457 9.48249 26.972C7.493 25.655 6.20805 23.8938 6.0403 21.8442C5.87926 19.8598 6.8768 17.5915 8.78801 15.3408ZM19.2096 3.4897C19.5026 5.78236 19.7174 7.92696 19.5619 9.52684C19.3953 11.2416 18.6773 12.9067 16.6822 14.8745C15.1289 13.0736 14.3751 11.0339 14.7755 9.01307C15.1636 7.0563 16.7471 5.14373 19.2096 3.4897ZM19.497 0.759507C15.6847 2.79141 13.3899 5.59673 12.7927 8.62746C12.247 11.351 13.1081 14.1475 15.1334 16.4026C14.2857 17.5904 13.5152 18.8135 12.8207 20.0786C12.2951 17.8511 11.2025 15.7518 10.0718 13.0183C9.77996 12.3156 8.86518 12.1256 8.31608 12.6338C5.15347 15.5629 3.76899 18.9251 4.02061 22.0033C4.27671 25.0749 6.20581 27.7764 9.29014 29.3763C8.95576 30.8237 8.71644 32.2832 8.56099 33.7605C7.10941 31.8579 5.1367 30.4049 2.84861 28.3178C2.25143 27.7697 1.36796 28.0349 1.09956 28.7089C-0.478389 32.702 -0.299458 36.3238 1.26172 38.9988C2.76027 41.5754 5.53258 43.1642 8.84952 43.4062C9.08772 44.8492 9.41651 46.2789 9.83476 47.7009C7.77258 46.4789 5.42411 45.8049 2.51535 44.7597C1.60504 44.4282 1.01345 45.0138 1.03134 45.764C1.12864 50.0411 2.5914 53.3436 5.04723 55.2562C7.4136 57.1069 10.593 57.5621 13.7712 56.5578C14.5541 57.8284 15.4096 59.0427 16.3411 60.2083C13.8786 59.8117 11.387 60.2746 8.17853 60.3089C7.33643 60.3144 6.91147 61.1475 7.21006 61.8082C8.99155 65.714 11.6621 68.1713 14.6737 68.9823C17.578 69.7623 20.6724 68.9591 23.1886 66.8134C24.383 67.694 25.6266 68.5028 26.9171 69.2408C24.4669 69.7745 22.2984 71.0783 19.3282 72.3368C18.5644 72.6627 18.4324 73.5267 18.9949 74.0869C22.0412 77.1287 25.5136 78.3706 28.6136 78.0148C31.6073 77.6734 34.1884 75.7884 35.725 72.8572C36.8008 73.1477 37.8889 73.4008 38.9938 73.5941C40.4454 73.8858 40.829 71.6992 39.364 71.4871C27.4315 69.4077 17.4472 61.3607 12.9772 50.2234C8.56659 39.2419 10.1691 26.5157 17.1653 17.2699C18.9401 14.9198 21.3837 13.2592 21.7549 9.71467C22.0177 7.23861 21.4015 4.79237 21.0795 1.60475C20.9956 0.783815 20.1345 0.418095 19.497 0.759507Z"
                            fill="currentColor" />
                        <path
                            d="M56.9824 72.4517C58.2319 74.4659 59.9428 75.7884 61.9826 76.026C63.9639 76.2547 66.2521 75.3399 68.5646 73.5311C66.4718 72.5566 64.5478 71.5346 62.4429 71.2993C60.3368 71.0573 58.8334 71.4882 56.9824 72.4517ZM74.6223 62.2601C72.4345 62.48 70.8417 63.4832 69.0204 65.5881C70.9245 66.9935 73.0118 67.5912 74.9931 67.052C76.9082 66.5327 78.7019 64.8312 80.1821 62.2911C78.4547 62.1938 76.8023 62.0358 74.6223 62.2601ZM86.6879 47.2656C84.5168 48.0512 82.435 48.6898 81.0839 49.5516C79.6335 50.4853 78.5672 52.0343 77.7107 54.685C80.0176 55.2297 82.1634 54.9568 83.7794 53.6861C85.3369 52.4531 86.3281 50.1847 86.6879 47.2656ZM87.3436 30.9596C85.6217 32.4965 83.9229 33.861 82.9913 35.1659C81.9868 36.5658 81.5685 38.4044 81.7639 41.1865C84.0995 40.8307 85.9992 39.7855 87.0191 38.0011C88.0158 36.2719 88.0865 33.8025 87.3436 30.9596ZM81.3279 15.3408C80.4249 17.4666 79.4691 19.4289 79.181 21.0056C78.8741 22.7005 79.2759 24.5457 80.638 26.972C82.6017 25.655 83.8699 23.8938 84.0399 21.8442C84.1978 19.8598 83.2143 17.5915 81.3279 15.3408ZM71.0415 3.4897C70.7534 5.78236 70.5415 7.92696 70.6938 9.52684C70.8594 11.2416 71.5614 12.9067 73.5317 14.8745C75.0649 13.0736 75.8077 11.0339 75.4115 9.01307C75.0329 7.0563 73.4655 5.14373 71.0415 3.4897ZM70.7578 0.759507C74.5152 2.79141 76.7802 5.59673 77.3762 8.62746C77.9072 11.351 77.0572 14.1475 75.0649 16.4026C75.9005 17.5904 76.661 18.8135 77.3409 20.0786C77.8608 17.8511 78.9436 15.7518 80.0585 13.0183C80.3411 12.3156 81.2506 12.1256 81.7915 12.6338C84.9064 15.5629 86.2817 18.9251 86.0268 22.0033C85.7784 25.0749 83.8754 27.7764 80.8311 29.3763C81.1612 30.8237 81.3974 32.2832 81.5508 33.7605C82.9847 31.8579 84.9241 30.4049 87.1846 28.3178C87.7785 27.7697 88.6527 28.0349 88.9176 28.7089C90.4751 32.702 90.2919 36.3238 88.752 38.9988C87.2729 41.5754 84.541 43.1642 81.2683 43.4062C81.032 44.8492 80.7097 46.2789 80.2958 47.7009C82.3246 46.4789 84.6492 45.8049 87.5213 44.7597C88.4176 44.4282 89.0015 45.0138 88.9838 45.764C88.8834 50.0411 87.4451 53.3436 85.0201 55.2562C82.6844 57.1069 79.5463 57.5621 76.4093 56.5578C75.6355 57.8284 74.7878 59.0427 73.8728 60.2083C76.3033 59.8117 78.7571 60.2746 81.9305 60.3089C82.7617 60.3144 83.18 61.1475 82.8787 61.8082C81.127 65.714 78.4911 68.1713 75.5119 68.9823C72.6531 69.7623 69.5977 68.9591 67.1098 66.8134C65.9353 67.694 64.7079 68.5028 63.4297 69.2408C65.8536 69.7745 67.9873 71.0783 70.9245 72.3368C71.6784 72.6627 71.802 73.5267 71.2501 74.0869C68.2467 77.1287 64.8205 78.3706 61.753 78.0148C58.7981 77.6734 56.2505 75.7884 54.7416 72.8572C53.6798 73.1477 52.6058 73.4008 51.5152 73.5941C50.0814 73.8858 49.6984 71.6992 51.1499 71.4871C62.9263 69.4077 72.7833 61.3607 77.1919 50.2234C81.5409 39.2419 79.9658 26.5157 73.0593 17.2699C71.3075 14.9198 68.8902 13.2592 68.5248 9.71467C68.2699 7.23861 68.8725 4.79237 69.1982 1.60475C69.2721 0.783815 70.122 0.418095 70.7578 0.759507Z"
                            fill="currentColor" />
                    </svg>
                    <span class="truncate hidden sm:inline">
                        State University of the Philippines
                    </span>
                </div>

                <div class="flex flex-row items-center justify-end gap-1 lg:w-full">
                    <!-- Select -->
                    <div class="hidden lg:block">
                        <CampusSelect v-model="campus" :options="campuses" placeholder="Select Campus" width="200px" />
                    </div>
                    <!-- End Select -->

                    <!-- Select -->
                    <div class="hidden lg:block">
                        <LevelSelect v-model="level" :options="levels" placeholder="Select Level" width="200px" />
                    </div>
                    <!-- End Select -->

                    <div class="hs-dropdown relative inline-flex lg:hidden [--auto-close:inside]">
                        <button id="hs-dropdown-custom-icon-trigger" type="button"
                            class="hs-dropdown-toggle size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                            <EllipsisVerticalIcon
                                class="hs-dropdown-open:hidden flex-none size-4 text-gray-600 dark:text-neutral-500" />
                            <XIcon class="hs-dropdown-open:block hidden size-4 text-gray-600 dark:text-neutral-500" />
                        </button>

                        <div class="hs-dropdown-menu border border-gray-200 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700"
                            role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-custom-icon-trigger">
                            <div class="p-3 space-y-2.5">
                                <CampusSelect v-model="campus" :options="campuses" placeholder="Select Campus" />
                                <LevelSelect v-model="level" :options="levels" placeholder="Select Level" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    </header>
    <!-- ========== END HEADER ========== -->
</template>

<script setup>
import { EllipsisVerticalIcon, XIcon, PanelRightClose } from 'lucide-vue-next';
import CampusSelect from '~/components/DsSelect.vue';
import LevelSelect from '~/components/DsSelect.vue';

const campuses = ref(['Main Campus', 'Campus Branch 1', 'Campus Branch 2', 'Campus Branch 3']);
const campus = ref(null);

const levels = ref(['Primary School', 'Junior High School', 'Senior High School', 'Vocational']);
const level = ref(null);
</script>