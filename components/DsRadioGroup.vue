<template>
    <ul class="flex flex-col sm:flex-row">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="w-full inline-flex items-center gap-x-2.5 py-2 px-3 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"
      >
        <div class="relative flex items-start w-full">
          <div class="flex items-center h-5">
            <input
              :id="`${groupName}-item-${index}`"
              :name="groupName"
              type="radio"
              :value="item.value"
              v-model="selectedValue"
              :disabled="item.disabled || false"
              class="border-gray-200 rounded-full disabled:opacity-50 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            />
          </div>
          <label
            :for="`${groupName}-item-${index}`"
            class="ms-3 block w-full text-sm text-gray-600 dark:text-neutral-500"
          >
            {{ item.label }}
          </label>
        </div>
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    props: {
      items: {
        type: Array,
        required: true,
        validator(value) {
          return value.length >= 2; // Ensure at least 2 items
        },
      },
      groupName: {
        type: String,
        required: true,
      },
      modelValue: {
        type: [String, Number],
        default: null,
      },
    },
    computed: {
      selectedValue: {
        get() {
          return this.modelValue;
        },
        set(value) {
          this.$emit("update:modelValue", value);
        },
      },
    },
  };
  </script>