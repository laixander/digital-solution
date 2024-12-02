<template>
	<div class="flex flex-col">
		<div
			class="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
			<div class="min-w-full inline-block align-middle">
				<div class="overflow-hidden">
					<table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
						<!-- Table Head -->
						<thead class="bg-gray-50 dark:bg-neutral-800">
							<tr>
								<th v-for="(column, index) in columns" :key="index" scope="col" :class="[
									'px-6 py-3 text-xs font-medium uppercase',
									column.align === 'end' ? 'text-end' : 'text-start',
									'text-gray-500 dark:text-neutral-500'
								]">
									<a v-if="column.sortable" @click.prevent="sortBy(column.field)"
										class="group inline-flex items-center gap-x-2 font-semibold hover:text-gray-600 focus:text-gray-600 cursor-pointer">
										{{ column.label }}
										<span>
											<ChevronUpIcon v-if="sortField === column.field && sortOrder === 'asc'"
												class="size-3.5 inline" />
											<ChevronDownIcon
												v-else-if="sortField === column.field && sortOrder === 'desc'"
												class="size-3.5 inline" />
											<ChevronsUpDownIcon v-else-if="sortField !== column.field"
												class="shrink-0 size-3.5 inline" />
										</span>
									</a>
									<span v-else>{{ column.label }}</span>
								</th>
							</tr>
						</thead>

						<!-- Table Body -->
						<tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
							<tr v-for="(row, rowIndex) in sortedRows" :key="rowIndex">
								<td v-for="(column, colIndex) in columns" :key="colIndex" :class="[
									'px-6 py-4 whitespace-nowrap text-sm',
									column.align === 'end' ? 'text-end' : 'text-start',
									'text-gray-800 dark:text-neutral-200'
								]">
									<template v-if="column.slotName">
										<slot :name="column.slotName" :row="row" :value="row[column.field]" />
									</template>
									<template v-else>
										{{ row[column.field] }}
									</template>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
	<div v-if="pagination" class="px-6 py-4 grid gap-3 border-t border-gray-200 md:flex md:justify-between md:items-center">
		<div>
			<p class="text-sm text-gray-600 dark:text-neutral-400">
				<span class="font-semibold text-gray-800 dark:text-neutral-200">10</span> results
			</p>
		</div>
		<div>
			<div class="inline-flex gap-x-2">
				<button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
					<ArrowLeftIcon class="shrink-0 size-4" />
					Prev
				</button>
				<button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
					Next
					<ArrowRightIcon class="shrink-0 size-4" />
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ChevronsUpDownIcon, ChevronUpIcon, ChevronDownIcon, ArrowLeftIcon, ArrowRightIcon } from 'lucide-vue-next';
import { ref, computed } from 'vue';

// Props
const props = defineProps({
	columns: { type: Array, required: true },
	rows: { type: Array, required: true },
	pagination: { 
		type: Boolean, 
		default: false 
	},
});

// State (Reactive variables)
const sortField = ref(null); // Current field being sorted
const sortOrder = ref(null); // Sorting order ('asc' or 'desc')

// Computed property for sorted rows
const sortedRows = computed(() => {
	if (!sortField.value) return props.rows;

	return [...props.rows].sort((a, b) => {
		const aValue = a[sortField.value];
		const bValue = b[sortField.value];

		if (sortOrder.value === 'asc') {
			return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
		} else if (sortOrder.value === 'desc') {
			return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
		}

		return 0;
	});
});

// Method to handle sorting
function sortBy(field) {
	if (sortField.value === field) {
		// Toggle sorting order if the same field is clicked again
		sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
	} else {
		// Set the sort field and default to ascending order
		sortField.value = field;
		sortOrder.value = 'asc';
	}
}
</script>