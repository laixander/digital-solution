<template>
    <div
        class="inline-flex bg-gray-100 hover:bg-gray-200 rounded-lg transition p-1 dark:bg-neutral-700 dark:hover:bg-neutral-600">
        <nav class="flex gap-x-1" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
            <button
                type="button"
                class="p-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-md transition focus:outline-none dark:text-neutral-400 dark:hover:text-white dark:focus:text-white"
                :class="{
                    'bg-white text-gray-700 dark:bg-neutral-800 dark:text-neutral-400': activeTab === 'segment-1',
                    'bg-transparent text-gray-500 hover:text-blue-600 hover:bg-gray-200 dark:text-neutral-400 dark:hover:text-white dark:hs-tab-active:bg-neutral-700': activeTab !== 'segment-1'
                }"
                @click="selectTab('segment-1')"
                id="segment-item-1"
                role="tab">
                <span class="sr-only">Grid</span>
                <CreditCardIcon class="shrink-0 size-4" />
            </button>
            <button
                type="button"
                class="p-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-md transition focus:outline-none dark:text-neutral-400 dark:hover:text-white dark:focus:text-white"
                :class="{
                    'bg-white text-gray-700 dark:bg-neutral-800 dark:text-neutral-400': activeTab === 'segment-2',
                    'bg-transparent text-gray-500 hover:text-blue-600 hover:bg-gray-200 dark:text-neutral-400 dark:hover:text-white dark:hs-tab-active:bg-neutral-700': activeTab !== 'segment-2'
                }"
                @click="selectTab('segment-2')"
                id="segment-item-2"
                role="tab">
                <span class="sr-only">Table</span>
                <TableIcon class="shrink-0 size-4" />
            </button>
        </nav>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { CreditCardIcon, TableIcon } from 'lucide-vue-next';

const props = defineProps({
    modelValue: {
        type: String,
        default: 'segment-1'
    }
});

const emit = defineEmits(['update:modelValue']);
const activeTab = ref(props.modelValue);

watch(
    () => props.modelValue,
    (newVal) => {
        activeTab.value = newVal;
    }
);

function selectTab(tabId) {
    activeTab.value = tabId;
    emit('update:modelValue', tabId);
}
</script>