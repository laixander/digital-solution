<template>
	<div class="flex flex-col items-center">
		<!-- Upload Area -->
		<div class="relative flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg border-gray-300 bg-gray-50 hover:bg-gray-100 cursor-pointer"
			@click="triggerFileInput">
			<input type="file" accept="image/*" class="hidden" ref="fileInput" @change="onFileChange" />
			<div v-if="!preview" class="flex flex-col items-center gap-4">
				<ImageUpIcon class="w-12 h-12 text-gray-400" />
				<p class="text-sm text-gray-600">Click to upload</p>
			</div>
			<img v-if="preview" :src="preview" alt="Uploaded Image Preview"
				class="object-cover w-full h-full rounded-lg" />
		</div>
		<!-- Remove Button -->
		<button v-if="preview" class="mt-4 px-4 py-2 text-sm text-white bg-red-500 rounded hover:bg-red-600"
			@click="removeImage">
			Remove Image
		</button>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { ImageUpIcon } from 'lucide-vue-next';

const preview = ref(null);
const fileInput = ref(null);

const triggerFileInput = () => {
	fileInput.value.click();
};

const onFileChange = (event) => {
	const file = event.target.files[0];
	if (file) {
		const reader = new FileReader();
		reader.onload = (e) => {
			preview.value = e.target.result;
		};
		reader.readAsDataURL(file);
	}
};

const removeImage = () => {
	preview.value = null;
	fileInput.value.value = null;
};
</script>