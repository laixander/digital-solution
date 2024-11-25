<template>
    <div class="flex items-center">
        <div class="hs-dropdown [--placement:bottom-right] relative inline-flex">
            <button id="hs-dropdown-account" type="button"
                class="rounded-full border border-transparent text-gray-800 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:text-white"
                aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                <img class="shrink-0 size-10 rounded-full"
                    src="/avatar.png"
                    alt="Avatar">
            </button>
            <div class="hs-dropdown-menu border border-gray-200 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[235px] bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
                role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-account">
                <div class="border-b border-gray-200 py-3 px-5 bg-gray-50 rounded-t-lg dark:bg-neutral-700">
                    <p class="text-sm text-gray-500 dark:text-neutral-500">Signed in as</p>
                    <p class="text-sm font-medium text-gray-800 dark:text-neutral-200">jbaltazar@scp.edu</p>
                </div>
                <div class="p-1.5 space-y-0.5">
                    <NuxtLink to="/portal" class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300">
                        <LayoutGridIcon class="shrink-0 size-4" />
                        App Portal
                    </NuxtLink>
                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                        <NewspaperIcon class="shrink-0 size-4" />
                        Newsletter
                    </a>
                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                        <BoltIcon class="shrink-0 size-4" />
                        Settings
                    </a>
                    <NuxtLink to="/" class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300">
                        <LogOutIcon class="shrink-0 size-4" />
                        Logout
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="ms-3 mr-auto">
            <h3 class="font-semibold text-gray-800 leading-tight dark:text-white">Joselito Baltazar</h3>
            <p class="text-sm text-gray-500 dark:text-neutral-500">Administrator</p>
        </div>

        <button type="button" class="size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
            <BellIcon class="shrink-0 size-4" />
            <span class="sr-only">Notifications</span>
        </button>
    </div>
</template>

<script setup>
    import { BellIcon, LayoutGridIcon, BoltIcon, NewspaperIcon, LogOutIcon } from 'lucide-vue-next';
</script>