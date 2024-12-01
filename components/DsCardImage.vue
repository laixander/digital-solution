<template>
    <div class="relative">
        <slot name="img"></slot>
        <div v-if="showExtra" class="absolute right-2 top-2">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
defineProps({
    showExtra: {
        type: Boolean,
        default: false, // Set to `true` by default to show the extra by default
    },
});
</script>

<!--
Extra Hidden by Default:
<DsCardImage>
  <template #img>
    <img src="example.jpg" alt="Example" />
  </template>
</DsCardImage>

Showing Extra:
<DsCardImage :showExtra="true">
  <template #img>
    <img src="example.jpg" alt="Example" />
  </template>
  <DsTag>
    Extra Tag
  </DsTag>
</DsCardImage>
-->