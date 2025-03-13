<template>
    <!-- Sidebar -->
    <div id="hs-application-sidebar" class="hs-overlay [--auto-close:xl] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform w-[256px] h-full hidden fixed inset-y-0 start-0 z-[60] bg-white border-e border-gray-200 xl:block xl:translate-x-0 xl:end-auto xl:bottom-0  dark:bg-neutral-800 dark:border-neutral-700"
        role="dialog" tabindex="-1" aria-label="Sidebar">
        <div class="relative flex flex-col h-full max-h-full">
            <div class="px-3 pt-1.5">
                <!-- Logo -->
                <a class="inline-flex items-center gap-2 focus:outline-none focus:opacity-80"
                    href="#" aria-label="Preline">
                    <slot name="appLogo"></slot>
                    <!-- <LogoLMS className="size-16" /> -->
                    <!-- <LogoDS className="size-14" fill="#334155" /> -->
                    <span class="text-sm text-gray-700 dark:text-neutral-200 font-medium">
                        {{ appName }}
                    </span>
                </a>
                <!-- End Logo -->
            </div>

            <!-- Content -->
            <div
                class="flex flex-col justify-between h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                <slot name="menu"></slot>
            </div>
            <!-- End Content -->

            <div class="shrink-0 group block p-3 border-t border-gray-200 dark:border-neutral-700">
                <SbProfile />
            </div>
        </div>
    </div>
    <!-- End Sidebar -->
</template>

<script setup>
defineProps({
    appName: String
})
</script>