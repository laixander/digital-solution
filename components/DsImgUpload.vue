<template>
    <div class="flex flex-col items-center">
      <!-- Upload Area -->
      <div 
        class="relative flex flex-col items-center justify-center w-64 h-64 border-2 border-dashed rounded-lg border-gray-300 bg-gray-50 hover:bg-gray-100 cursor-pointer"
        @click="triggerFileInput"
      >
        <input
          type="file"
          accept="image/*"
          class="hidden"
          ref="fileInput"
          @change="onFileChange"
        />
        <div v-if="!preview" class="text-center">
          <ImageUpIcon class="shrink-0 size-4"/>
          <p class="mt-2 text-sm text-gray-600">Click to upload</p>
        </div>
        <img
          v-if="preview"
          :src="preview"
          alt="Uploaded Image Preview"
          class="object-cover w-full h-full rounded-lg"
        />
      </div>
      <!-- Remove Button -->
      <button
        v-if="preview"
        class="mt-4 px-4 py-2 text-sm text-white bg-red-500 rounded hover:bg-red-600"
        @click="removeImage"
      >
        Remove Image
      </button>
    </div>
  </template>
  
  <script>
  import { ImageUpIcon } from 'lucide-vue-next';
  export default {
    data() {
      return {
        preview: null,
      };
    },
    methods: {
      triggerFileInput() {
        this.$refs.fileInput.click();
      },
      onFileChange(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.preview = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      },
      removeImage() {
        this.preview = null;
        this.$refs.fileInput.value = null;
      },
    },
  };
  </script>
  
  <style scoped>
  </style>