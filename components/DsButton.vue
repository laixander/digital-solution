<template>
    <button :class="[typeClasses, sizeClasses, pilledClass, blockClass, iconClass]" type="button">
        <template v-if="$slots.icon">
            <slot name="icon"></slot>
        </template>
        <template v-else>
            <slot name="leading-icon"></slot>
            <template v-if="label">{{ label }}</template>
            <slot name="trailing-icon"></slot>
        </template>
    </button>
</template>
  
<script setup>
    // Define props
    const props = defineProps({
        label: String,
        primary: Boolean,
        outline: Boolean,
        ghost: Boolean,
        soft: Boolean,
        white: Boolean,
        link: Boolean,
        small: Boolean,
        large: Boolean,
        pilled: Boolean,
        block: Boolean,
        icon: Boolean
    });

    // Compute classes based on variant props
    const typeClasses = Object.keys(props)
        .filter(prop => props[prop] && prop !== 'label' && !['small', 'large', 'pilled', 'block', 'icon'].includes(prop)) // Exclude label, small, large, pilled, and block props
        .map(prop => `btn-${prop}`)
        .join(' ');

    // Compute size classes
    // const sizeClasses = Object.keys(props)
    //     .filter(prop => props[prop] && ['small', 'large'].includes(prop)) // Only use small or large props
        // .map(prop => `btn-${prop}`)
        // .join(' ');

        const sizeClasses = props.icon
        ? {
            'size-[38px]': props.small && props.icon,
            'size-[62px]': props.large && props.icon,
            'size-[46px]': !props.small && !props.large
          }
        : {
            'py-2 px-3': props.small && !props.large,
            'p-4 sm:p-5': props.large && !props.small,
            'py-3 px-4': !props.small && !props.large
        };

    // Compute pilled class
    const pilledClass = props.pilled ? 'rounded-full' : 'rounded-lg';

    // Compute block class
    const blockClass = props.block ? 'w-full' : '';

    // Compute icon class
    const iconClass = props.icon ? ['flex', 'justify-center'] : '';

</script>

<style scoped>
    .btn-primary {
        @apply inline-flex items-center gap-x-2 text-sm font-semibold border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600;
    }
    .btn-outline {
        @apply inline-flex items-center gap-x-2 text-sm font-semibold border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600;
    }
    .btn-ghost {
        @apply inline-flex items-center gap-x-2 text-sm font-semibold border border-transparent text-blue-600 hover:bg-blue-100 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:bg-blue-800/30 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600;
    }
    .btn-soft {
        @apply inline-flex items-center gap-x-2 text-sm font-semibold border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600;
    }
    .btn-white {
        @apply inline-flex items-center gap-x-2 text-sm font-semibold border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600;
    }
    .btn-link {
        @apply inline-flex items-center gap-x-2 text-sm font-semibold border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600;
    }
</style>
