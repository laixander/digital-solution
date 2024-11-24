<template>
    <div class="relative inline-block">
      <input
        type="checkbox"
        id="hs-default-switch-with-icons"
        class="peer relative w-[3.25rem] h-7 p-px bg-amber-400 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-gray-200 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-green-600 checked:border-green-600 focus:checked:border-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-gray-600 before:inline-block before:size-6 before:bg-white checked:before:bg-green-200 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-green-200"
        v-model="checked"
      />
      <label for="hs-default-switch-with-icons" class="sr-only">Switch Status</label>
  
      <!-- X Icon (Suspended) -->
      <span
        class="peer-checked:text-white text-amber-500 w-6 h-6 absolute top-0.5 left-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200 dark:text-neutral-500"
      >
        <XIcon class="shrink-0 w-3 h-3" />
      </span>
  
      <!-- Check Icon (Active) -->
      <span
        class="peer-checked:text-green-600 text-white w-6 h-6 absolute top-0.5 right-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200 dark:text-neutral-500"
      >
        <CheckIcon class="shrink-0 w-3 h-3" />
      </span>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  import { XIcon, CheckIcon } from 'lucide-vue-next';
  
  // Props
  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false,
    },
  });
  
  // Emit
  const emit = defineEmits(['update:modelValue']);
  
  // Local State
  const checked = ref(props.modelValue);
  
  // Sync local state with the parent
  watch(checked, (newVal) => emit('update:modelValue', newVal));
  </script>
  