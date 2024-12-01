<template>
    <div>
        <div v-show="activeTab === 'segment-1'" id="segment-1" role="tabpanel">
            <slot name="card">Card Display</slot>
        </div>
        <div v-show="activeTab === 'segment-2'" id="segment-2" role="tabpanel" class="-m-5">
            <slot name="table">Table Display</slot>
        </div>
    </div>
</template>

<script setup>
defineProps({
    activeTab: {
        type: String,
        required: true
    }
});
</script>