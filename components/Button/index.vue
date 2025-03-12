<template>
    <button
        class="px-4 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
        :class="[customClass, colorClass, hoverClass, focusClass, roundedClass, disabledClass]"
        :disabled="isDisabled"
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
    customClass?: string
    variant?: 'solid' | 'outline'
    color?: 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone'
           | 'red' | 'orange' | 'amber' | 'yellow' | 'lime'
           | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky'
           | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia'
           | 'pink' | 'rose'
    isRounded?: boolean
    isDisabled?: boolean
}>()

// Base color class logic
const colorClass = computed(() => {
    const solidColorMap: Record<string, string> = {
        slate: 'bg-slate-500 text-white',
        gray: 'bg-gray-500 text-white',
        zinc: 'bg-zinc-500 text-white',
        neutral: 'bg-neutral-500 text-white',
        stone: 'bg-stone-500 text-white',

        red: 'bg-red-500 text-white',
        orange: 'bg-orange-500 text-white',
        amber: 'bg-amber-500 text-black',
        yellow: 'bg-yellow-500 text-black',
        lime: 'bg-lime-500 text-black',

        green: 'bg-green-500 text-white',
        emerald: 'bg-emerald-500 text-white',
        teal: 'bg-teal-500 text-white',
        cyan: 'bg-cyan-500 text-white',
        sky: 'bg-sky-500 text-white',

        blue: 'bg-blue-500 text-white',
        indigo: 'bg-indigo-500 text-white',
        violet: 'bg-violet-500 text-white',
        purple: 'bg-purple-500 text-white',
        fuchsia: 'bg-fuchsia-500 text-white',

        pink: 'bg-pink-500 text-white',
        rose: 'bg-rose-500 text-white'
    }

    const outlineColorMap: Record<string, string> = {
        slate: 'text-slate-500 border border-slate-500',
        gray: 'text-gray-500 border border-gray-500',
        zinc: 'text-zinc-500 border border-zinc-500',
        neutral: 'text-neutral-500 border border-neutral-500',
        stone: 'text-stone-500 border border-stone-500',

        red: 'text-red-500 border border-red-500',
        orange: 'text-orange-500 border border-orange-500',
        amber: 'text-amber-500 border border-amber-500',
        yellow: 'text-yellow-500 border border-yellow-500',
        lime: 'text-lime-500 border border-lime-500',

        green: 'text-green-500 border border-green-500',
        emerald: 'text-emerald-500 border border-emerald-500',
        teal: 'text-teal-500 border border-teal-500',
        cyan: 'text-cyan-500 border border-cyan-500',
        sky: 'text-sky-500 border border-sky-500',

        blue: 'text-blue-500 border border-blue-500',
        indigo: 'text-indigo-500 border border-indigo-500',
        violet: 'text-violet-500 border border-violet-500',
        purple: 'text-purple-500 border border-purple-500',
        fuchsia: 'text-fuchsia-500 border border-fuchsia-500',

        pink: 'text-pink-500 border border-pink-500',
        rose: 'text-rose-500 border border-rose-500'
    }

    if (props.variant === 'outline') return outlineColorMap[props.color || 'gray']
    return solidColorMap[props.color || 'gray']
})

// Hover effect (darker shade)
const hoverClass = computed(() => {
    const solidHoverMap: Record<string, string> = {
        slate: 'hover:bg-slate-600',
        gray: 'hover:bg-gray-600',
        zinc: 'hover:bg-zinc-600',
        neutral: 'hover:bg-neutral-600',
        stone: 'hover:bg-stone-600',

        red: 'hover:bg-red-600',
        orange: 'hover:bg-orange-600',
        amber: 'hover:bg-amber-600',
        yellow: 'hover:bg-yellow-600',
        lime: 'hover:bg-lime-600',

        green: 'hover:bg-green-600',
        emerald: 'hover:bg-emerald-600',
        teal: 'hover:bg-teal-600',
        cyan: 'hover:bg-cyan-600',
        sky: 'hover:bg-sky-600',

        blue: 'hover:bg-blue-600',
        indigo: 'hover:bg-indigo-600',
        violet: 'hover:bg-violet-600',
        purple: 'hover:bg-purple-600',
        fuchsia: 'hover:bg-fuchsia-600',

        pink: 'hover:bg-pink-600',
        rose: 'hover:bg-rose-600'
    }

    const outlineHoverMap: Record<string, string> = {
        slate: 'hover:bg-slate-500 hover:text-white',
        gray: 'hover:bg-gray-500 hover:text-white',
        zinc: 'hover:bg-zinc-500 hover:text-white',
        neutral: 'hover:bg-neutral-500 hover:text-white',
        stone: 'hover:bg-stone-500 hover:text-white',

        red: 'hover:bg-red-500 hover:text-white',
        orange: 'hover:bg-orange-500 hover:text-white',
        amber: 'hover:bg-amber-500 hover:text-black',
        yellow: 'hover:bg-yellow-500 hover:text-black',
        lime: 'hover:bg-lime-500 hover:text-black',

        green: 'hover:bg-green-500 hover:text-white',
        emerald: 'hover:bg-emerald-500 hover:text-white',
        teal: 'hover:bg-teal-500 hover:text-white',
        cyan: 'hover:bg-cyan-500 hover:text-white',
        sky: 'hover:bg-sky-500 hover:text-white',

        blue: 'hover:bg-blue-500 hover:text-white',
        indigo: 'hover:bg-indigo-500 hover:text-white',
        violet: 'hover:bg-violet-500 hover:text-white',
        purple: 'hover:bg-purple-500 hover:text-white',
        fuchsia: 'hover:bg-fuchsia-500 hover:text-white',

        pink: 'hover:bg-pink-500 hover:text-white',
        rose: 'hover:bg-rose-500 hover:text-white'
    }

    return props.variant === 'outline'
        ? outlineHoverMap[props.color || 'gray']
        : solidHoverMap[props.color || 'gray']
})

// Focus effect
const focusClass = computed(() => `focus:ring-${props.color || 'gray'}-400`)

// Rounded corners logic
const roundedClass = computed(() => props.isRounded ? 'rounded-full' : 'rounded-md')

// Disabled state logic
const disabledClass = computed(() =>
    props.isDisabled ? 'opacity-50 cursor-not-allowed' : ''
)
</script>
