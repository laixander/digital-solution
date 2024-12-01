<template>
	<div class="flex flex-col items-center gap-4">
		<!-- Upload Area -->
		<div class="transition ease-in-out duration-200 group relative flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg border-gray-200 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 hover:border-solid cursor-pointer"
		:style="preview ? { backgroundImage: `url(${preview})`, backgroundSize: 'cover', backgroundPosition: 'center', borderStyle: 'none' } : {}"
      	@click="triggerFileInput">
			<input type="file" accept="image/*" class="hidden" ref="fileInput" @change="onFileChange" />
			<div v-if="!preview" class="flex flex-col items-center gap-4">
				<ImageIcon class="w-12 h-12 text-gray-300 transition ease-in-out duration-200 group-hover:text-blue-500 group-hover:scale-125" strokeWidth="1.5" />
				<p class="text-sm text-gray-500 transition ease-in-out duration-200 group-hover:text-blue-500">Click to upload</p>
			</div>
			<!-- <img v-if="preview" :src="preview" alt="Uploaded Image Preview"
				class="object-cover w-full h-full rounded-lg" /> -->
		</div>
		<!-- Remove Button -->
		<button v-if="preview" @click="removeImage" type="button"
			class="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none">
			Remove Image
		</button>
	</div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { ImageIcon } from 'lucide-vue-next';

// Define props
const props = defineProps({
  imageURL: {
    type: String,
    default: null, // Optional default value
  },
});

// Reactive variables
const preview = ref(null); // Reactive variable for the preview image
const fileInput = ref(null); // Reference to the file input element

// Watch for changes in the imageURL prop to set the initial preview
watch(
  () => props.imageURL,
  (newVal) => {
    preview.value = newVal || null; // Set preview to the passed imageURL or null
  },
  { immediate: true } // Run immediately on component load
);

// Trigger the file input dialog
const triggerFileInput = () => {
  fileInput.value.click();
};

// Handle file change and set preview
const onFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      preview.value = e.target.result; // Update preview with the new image URL
    };
    reader.readAsDataURL(file); // Read file as data URL
  }
};

// Clear the preview and reset the file input
const removeImage = () => {
  preview.value = null;
  fileInput.value.value = null;
};
</script>