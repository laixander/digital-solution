<template>
	<div class="flex items-center space-x-4 w-full">
		<!-- Slider -->
		<div class="flex w-full items-center">
			<!-- <label for="slider" class="text-gray-700 font-semibold">Range:</label> -->
			<!-- Slider Background -->
			<input
				id="slider"
				type="range"
				class="w-full h-4 appearance-none rounded-lg cursor-pointer"
				:min="computedMinValue"
				:max="maxValue"
				:step="computedStep"
				v-model.number="sliderValue"
				:style="sliderStyle" 
			/>
		</div>

		<!-- Number Input -->
		<div class="flex items-center">
			<!-- <label for="numberInput" class="text-gray-700 font-semibold">Value:</label> -->
			<!-- <input id="numberInput" type="number" class="w-24 border border-gray-300 rounded-lg px-2 py-1 text-center"
				:min="computedMinValue" :max="maxValue" :step="step" v-model.number="sliderValue" /> -->

			<!-- Input Number -->
			<div v-if="showNumberInput" class="py-2 px-3 bg-gray-100 rounded-lg dark:bg-neutral-700" data-hs-input-number="">
				<div class="w-full flex justify-between items-center gap-x-2">
					<div class="grow">
						<input
							id="numberInput"
							class="w-full min-w-7 p-0 bg-transparent border-0 text-gray-800 focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none dark:text-white"
							type="number"
							:min="computedMinValue"
							:max="maxValue"
							:step="computedStep"
							v-model.number="sliderValue"
						/>
					</div>
					<div class="flex justify-end items-center gap-x-1">
						<button 
							type="button"
							class="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
							aria-label="Decrease"
							@click="decreaseValue"
						>
							<MinusIcon class="shrink-0 size-3.5" />
						</button>
						<button 
							type="button"
							class="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
							aria-label="Increase"
							@click="increaseValue"
						>
							<PlusIcon class="shrink-0 size-3.5" />
						</button>
					</div>
				</div>
			</div>
			<!-- End Input Number -->
		</div>

		<!-- Displayed Value -->
		<!-- <div class="text-center text-gray-600">
			<p class="text-lg">Selected Value: <span class="font-bold">{{ sliderValue }}</span></p>
		</div> -->
	</div>
</template>

<script setup>
import { PlusIcon, MinusIcon } from 'lucide-vue-next';
import { ref, computed, watch } from 'vue';

// Props
const props = defineProps({
	minValue: {
		type: Number,
		default: undefined, // Allow undefined
	},
	maxValue: {
		type: Number,
		default: 100, // Default maximum value
	},
	startValue: {
		type: Number,
		default: 50, // Default starting value
	},
	showNumberInput: {
		type: Boolean,
		default: false, // Default: Hide number input
	},
	step: {
		type: Number,
		default: 1, // Default step value
	},
	activeColor: {
		type: String,
		default: '#2563eb', // Default active color (Tailwind's blue-600)
	},
	inactiveColor: {
		type: String,
		default: '#d1d5db', // Default inactive color (Tailwind's gray-300)
	},
});

// Reactive data
const sliderValue = ref(props.startValue); // Initialize with startValue

// Computed properties
const computedMinValue = computed(() => {
	// Fallback to 0 if minValue is undefined
	return props.minValue !== undefined ? props.minValue : 0;
});

const computedStep = computed(() => {
	// Ensure step is at least 1
	return props.step > 0 ? props.step : 1;
});

const sliderStyle = computed(() => {
  const percentage = ((sliderValue.value - computedMinValue.value) / (props.maxValue - computedMinValue.value)) * 100;

  return {
    background: `linear-gradient(to right, ${props.activeColor} ${percentage}%, ${props.inactiveColor} ${percentage}%)`,
  };
});

// Increase and Decrease Functions
const increaseValue = () => {
	sliderValue.value = Math.min(props.maxValue, sliderValue.value + computedStep.value);
};

const decreaseValue = () => {
	sliderValue.value = Math.max(computedMinValue.value, sliderValue.value - computedStep.value);
};

// Watchers
watch(
	() => props.startValue,
	(newValue) => {
		sliderValue.value = Math.min(props.maxValue, Math.max(computedMinValue.value, newValue));
	}
);

watch(
	() => props.minValue,
	(newMin) => {
		if (sliderValue.value < newMin) {
			sliderValue.value = newMin;
		}
	}
);

watch(
	() => props.maxValue,
	(newMax) => {
		if (sliderValue.value > newMax) {
			sliderValue.value = newMax;
		}
	}
);
</script>


<style scoped>
/* Custom style for the range slider thumb */
input[type='range'] {
	@apply bg-gray-300 h-1;
}

input[type='range']::-webkit-slider-thumb {
	@apply bg-blue-600 rounded-full w-3.5 h-3.5 appearance-none cursor-pointer shadow-[0_0_2px_rgba(0,0,0,0.2)] transition-transform duration-200 hover:scale-125;
}

input[type='range']::-moz-range-thumb {
	@apply bg-blue-600 rounded-full w-3.5 h-3.5 cursor-pointer shadow-[0_0_2px_rgba(0,0,0,0.2)] transition-transform duration-200 hover:scale-125;
}
</style>