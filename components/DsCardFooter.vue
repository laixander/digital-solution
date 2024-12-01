<template>
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-3 p-4 md:p-5 border-t border-gray-200">
        <div class="flex-1 space-x-2">
            <slot name="start">
                Start
            </slot>
        </div>
        <div class="space-x-2 md:text-center">
            <slot name="center">
                Center
            </slot>
        </div>
        <div class="flex-1 space-x-2 md:text-end">
            <slot name="end">
                End
            </slot>
        </div>
    </div>
</template>