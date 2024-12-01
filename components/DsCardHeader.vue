<template>
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-3 p-4 md:p-5 border-b border-gray-200">
        <div class="flex-1">
            <slot name="start">
                Start
            </slot>
        </div>
        <div class="flex gap-2">
            <slot name="center">
                Center
            </slot>
        </div>
        <div class="flex-1 md:text-end">
            <slot name="end">
                End
            </slot>
        </div>
    </div>
</template>