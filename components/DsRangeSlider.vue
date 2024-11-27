<template>
    <div class="flex flex-col space-y-4 w-full max-w-md mx-auto p-4">
      <!-- Slider -->
      <div class="flex items-center space-x-4">
        <label for="slider" class="text-gray-700 font-semibold">Range:</label>
        <div class="relative w-full">
          <!-- Slider Background -->
          <input
            id="slider"
            type="range"
            class="w-full h-2 appearance-none rounded-lg cursor-pointer"
            :min="computedMinValue"
            :max="maxValue"
            :step="step"
            v-model.number="sliderValue"
            :style="sliderStyle"
          />
        </div>
      </div>
  
      <!-- Number Input -->
      <div class="flex items-center space-x-4">
        <label for="numberInput" class="text-gray-700 font-semibold">Value:</label>
        <input
          id="numberInput"
          type="number"
          class="w-24 border border-gray-300 rounded-lg px-2 py-1 text-center"
          :min="computedMinValue"
          :max="maxValue"
          :step="step"
          v-model.number="sliderValue"
        />
      </div>
  
      <!-- Displayed Value -->
      <div class="text-center text-gray-600">
        <p class="text-lg">Selected Value: <span class="font-bold">{{ sliderValue }}</span></p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
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
    },
    data() {
      return {
        sliderValue: this.startValue, // Initialize with starting value
        step: 1,                     // Step interval
      };
    },
    computed: {
      computedMinValue() {
        // Fallback to 0 if minValue is undefined
        return this.minValue !== undefined ? this.minValue : 0;
      },
      sliderStyle() {
        const percentage = ((this.sliderValue - this.computedMinValue) / (this.maxValue - this.computedMinValue)) * 100;
        return {
          background: `linear-gradient(to right, #4f46e5 ${percentage}%, #e5e7eb ${percentage}%)`,
        };
      },
    },
    watch: {
      startValue(newValue) {
        // Ensure sliderValue updates if startValue changes dynamically
        this.sliderValue = Math.min(this.maxValue, Math.max(this.computedMinValue, newValue));
      },
      minValue(newMin) {
        if (this.sliderValue < newMin) {
          this.sliderValue = newMin;
        }
      },
      maxValue(newMax) {
        if (this.sliderValue > newMax) {
          this.sliderValue = newMax;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Custom style for the range slider thumb */
  input[type='range'] {
    background: #e5e7eb; /* Default gray background */
    height: 2px;
  }
  
  input[type='range']::-webkit-slider-thumb {
    appearance: none;
    width: 16px;
    height: 16px;
    background: #4f46e5;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s;
  }
  
  input[type='range']::-webkit-slider-thumb:hover {
    transform: scale(1.2);
  }
  
  input[type='range']::-moz-range-thumb {
    width: 16px;
    height: 16px;
    background: #4f46e5;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s;
  }
  
  input[type='range']::-moz-range-thumb:hover {
    transform: scale(1.2);
  }
  </style>