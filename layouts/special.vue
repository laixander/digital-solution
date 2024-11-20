<template>
  <div>
    <slot />
  </div>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: 'special-layout',
  },
});
</script>