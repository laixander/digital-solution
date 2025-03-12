<template>
    <div class="text-sm p-4"
         :class="[
             customClass,
             variantClass,
             !isInk ? colorClass : '',      // Exclude soft/solid colors when ink is active
             !isInk ? darkColorClass : '',  // Exclude dark mode soft colors when ink is active
             inkClass, 
             { 'rounded-lg': isRounded }
         ]">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
    customClass?: string
    variant?: 'solid' | 'soft' | 'ink'
    color?: 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone'
           | 'red' | 'orange' | 'amber' | 'yellow' | 'lime'
           | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky'
           | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia'
           | 'pink' | 'rose'
    isRounded?: boolean
    inkPosition?: 'top' | 'bottom' | 'left' | 'right' | 'all'
}>()

const positionClassMap: Record<string, string> = {
    top: 'border-t-4',
    bottom: 'border-b-4',
    left: 'border-l-4',
    right: 'border-r-4',
    all: 'border-4'
}

// Identify Ink Variant
const isInk = computed(() => props.variant === 'ink')

// Ink variant logic
const inkClass = computed(() => {
    if (!isInk.value) return ''

    const inkColorMap: Record<string, string> = {
        slate: 'bg-slate-100 text-gray-700 border-slate-500 dark:bg-slate-600/10 dark:text-gray-300',
        gray: 'bg-gray-100 text-gray-700 border-gray-500 dark:bg-gray-600/10 dark:text-gray-300',
        zinc: 'bg-zinc-100 text-gray-700 border-zinc-500 dark:bg-zinc-600/10 dark:text-gray-300',
        neutral: 'bg-neutral-100 text-gray-700 border-neutral-500 dark:bg-neutral-600/10 dark:text-gray-300',
        stone: 'bg-stone-100 text-gray-700 border-stone-500 dark:bg-stone-600/10 dark:text-gray-300',

        red: 'bg-red-100 text-gray-700 border-red-500 dark:bg-red-800/30 dark:text-gray-300',
        orange: 'bg-orange-100 text-gray-700 border-orange-500 dark:bg-orange-800/30 dark:text-gray-300',
        amber: 'bg-amber-100 text-gray-700 border-amber-500 dark:bg-amber-800/30 dark:text-gray-300',
        yellow: 'bg-yellow-100 text-gray-700 border-yellow-500 dark:bg-yellow-800/30 dark:text-gray-300',
        lime: 'bg-lime-100 text-gray-700 border-lime-500 dark:bg-lime-800/30 dark:text-gray-300',

        green: 'bg-green-100 text-gray-700 border-green-500 dark:bg-green-800/30 dark:text-gray-300',
        emerald: 'bg-emerald-100 text-gray-700 border-emerald-500 dark:bg-emerald-800/30 dark:text-gray-300',
        teal: 'bg-teal-100 text-gray-700 border-teal-500 dark:bg-teal-800/30 dark:text-gray-300',
        cyan: 'bg-cyan-100 text-gray-700 border-cyan-500 dark:bg-cyan-800/30 dark:text-gray-300',
        sky: 'bg-sky-100 text-gray-700 border-sky-500 dark:bg-sky-800/30 dark:text-gray-300',

        blue: 'bg-blue-100 text-gray-700 border-blue-500 dark:bg-blue-800/30 dark:text-gray-300',
        indigo: 'bg-indigo-100 text-gray-700 border-indigo-500 dark:bg-indigo-800/30 dark:text-gray-300',
        violet: 'bg-violet-100 text-gray-700 border-violet-500 dark:bg-violet-800/30 dark:text-gray-300',
        purple: 'bg-purple-100 text-gray-700 border-purple-500 dark:bg-purple-800/30 dark:text-gray-300',
        fuchsia: 'bg-fuchsia-100 text-gray-700 border-fuchsia-500 dark:bg-fuchsia-800/30 dark:text-gray-300',

        pink: 'bg-pink-100 text-gray-700 border-pink-500 dark:bg-pink-800/30 dark:text-gray-300',
        rose: 'bg-rose-100 text-gray-700 border-rose-500 dark:bg-rose-800/30 dark:text-gray-300',
    }

    const baseInkClass = `${positionClassMap[props.inkPosition || 'all']} border-current`
    return `${inkColorMap[props.color || 'gray']} ${baseInkClass}`
})


// Variant class logic
const variantClass = computed(() => {
    if (props.variant === 'solid') return 'text-white'
    if (props.variant === 'soft') return 'border'
    return ''
})

// Light mode color logic
const colorClass = computed(() => {
    if (!props.color) return ''

    const colorMap: Record<string, string> = {
        slate: props.variant === 'solid' ? 'bg-slate-500' : 'bg-slate-100 text-slate-800 border-slate-300',
        gray: props.variant === 'solid' ? 'bg-gray-500' : 'bg-gray-100 text-gray-800 border-gray-300',
        zinc: props.variant === 'solid' ? 'bg-zinc-500' : 'bg-zinc-100 text-zinc-800 border-zinc-300',
        neutral: props.variant === 'solid' ? 'bg-neutral-500' : 'bg-neutral-100 text-neutral-800 border-neutral-300',
        stone: props.variant === 'solid' ? 'bg-stone-500' : 'bg-stone-100 text-stone-800 border-stone-300',

        red: props.variant === 'solid' ? 'bg-red-500' : 'bg-red-100 text-red-800 border-red-300',
        orange: props.variant === 'solid' ? 'bg-orange-500' : 'bg-orange-100 text-orange-800 border-orange-300',
        amber: props.variant === 'solid' ? 'bg-amber-500' : 'bg-amber-100 text-amber-800 border-amber-300',
        yellow: props.variant === 'solid' ? 'bg-yellow-500' : 'bg-yellow-100 text-yellow-800 border-yellow-300',
        lime: props.variant === 'solid' ? 'bg-lime-500' : 'bg-lime-100 text-lime-800 border-lime-300',

        green: props.variant === 'solid' ? 'bg-green-500' : 'bg-green-100 text-green-800 border-green-300',
        emerald: props.variant === 'solid' ? 'bg-emerald-500' : 'bg-emerald-100 text-emerald-800 border-emerald-300',
        teal: props.variant === 'solid' ? 'bg-teal-500' : 'bg-teal-100 text-teal-800 border-teal-300',
        cyan: props.variant === 'solid' ? 'bg-cyan-500' : 'bg-cyan-100 text-cyan-800 border-cyan-300',
        sky: props.variant === 'solid' ? 'bg-sky-500' : 'bg-sky-100 text-sky-800 border-sky-300',

        blue: props.variant === 'solid' ? 'bg-blue-500' : 'bg-blue-100 text-blue-800 border-blue-300',
        indigo: props.variant === 'solid' ? 'bg-indigo-500' : 'bg-indigo-100 text-indigo-800 border-indigo-300',
        violet: props.variant === 'solid' ? 'bg-violet-500' : 'bg-violet-100 text-violet-800 border-violet-300',
        purple: props.variant === 'solid' ? 'bg-purple-500' : 'bg-purple-100 text-purple-800 border-purple-300',
        fuchsia: props.variant === 'solid' ? 'bg-fuchsia-500' : 'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-300',

        pink: props.variant === 'solid' ? 'bg-pink-500' : 'bg-pink-100 text-pink-800 border-pink-300',
        rose: props.variant === 'solid' ? 'bg-rose-500' : 'bg-rose-100 text-rose-800 border-rose-300'
    }

    return colorMap[props.color] || ''
})

// Dark mode color logic (for soft variant's opacity in dark mode)
const darkColorClass = computed(() => {
    if (!props.color) return ''

    const darkColorMap: Record<string, string> = {
        slate: props.variant === 'soft' ? 'dark:bg-slate-600/10 dark:text-slate-400 dark:border-slate-700' : 'dark:bg-slate-700',
        gray: props.variant === 'soft' ? 'dark:bg-gray-600/10 dark:text-gray-400 dark:border-gray-700' : 'dark:bg-gray-700',
        zinc: props.variant === 'soft' ? 'dark:bg-zinc-600/10 dark:text-zinc-400 dark:border-zinc-700' : 'dark:bg-zinc-700',
        neutral: props.variant === 'soft' ? 'dark:bg-neutral-600/10 dark:text-neutral-400 dark:border-neutral-700' : 'dark:bg-neutral-700',
        stone: props.variant === 'soft' ? 'dark:bg-stone-600/10 dark:text-stone-400 dark:border-stone-700' : 'dark:bg-stone-700',

        red: props.variant === 'soft' ? 'dark:bg-red-800/10 dark:text-red-500 dark:border-red-900' : 'dark:bg-red-700',
        orange: props.variant === 'soft' ? 'dark:bg-orange-800/10 dark:text-orange-500 dark:border-orange-900' : 'dark:bg-orange-700',
        amber: props.variant === 'soft' ? 'dark:bg-amber-800/10 dark:text-amber-500 dark:border-amber-900' : 'dark:bg-amber-700',
        yellow: props.variant === 'soft' ? 'dark:bg-yellow-800/10 dark:text-yellow-500 dark:border-yellow-900' : 'dark:bg-yellow-700',
        lime: props.variant === 'soft' ? 'dark:bg-lime-800/10 dark:text-lime-500 dark:border-lime-900' : 'dark:bg-lime-700',

        green: props.variant === 'soft' ? 'dark:bg-green-800/10 dark:text-green-500 dark:border-green-900' : 'dark:bg-green-700',
        emerald: props.variant === 'soft' ? 'dark:bg-emerald-800/10 dark:text-emerald-500 dark:border-emerald-900' : 'dark:bg-emerald-700',
        teal: props.variant === 'soft' ? 'dark:bg-teal-800/10 dark:text-teal-500 dark:border-teal-900' : 'dark:bg-teal-700',
        cyan: props.variant === 'soft' ? 'dark:bg-cyan-800/10 dark:text-cyan-500 dark:border-cyan-900' : 'dark:bg-cyan-700',
        sky: props.variant === 'soft' ? 'dark:bg-sky-800/10 dark:text-sky-500 dark:border-sky-900' : 'dark:bg-sky-700',

        blue: props.variant === 'soft' ? 'dark:bg-blue-800/10 dark:text-blue-500 dark:border-blue-900' : 'dark:bg-blue-700',
        indigo: props.variant === 'soft' ? 'dark:bg-indigo-800/10 dark:text-indigo-500 dark:border-indigo-900' : 'dark:bg-indigo-700',
        violet: props.variant === 'soft' ? 'dark:bg-violet-800/10 dark:text-violet-500 dark:border-violet-900' : 'dark:bg-violet-700',
        purple: props.variant === 'soft' ? 'dark:bg-purple-800/10 dark:text-purple-500 dark:border-purple-900' : 'dark:bg-purple-700',
        fuchsia: props.variant === 'soft' ? 'dark:bg-fuchsia-800/10 dark:text-fuchsia-500 dark:border-fuchsia-900' : 'dark:bg-fuchsia-700',

        pink: props.variant === 'soft' ? 'dark:bg-pink-800/10 dark:text-pink-500 dark:border-pink-900' : 'dark:bg-pink-700',
        rose: props.variant === 'soft' ? 'dark:bg-rose-800/10 dark:text-rose-500 dark:border-rose-900' : 'dark:bg-rose-700',
    }

    return darkColorMap[props.color] || ''
})
</script>
