<template>
    <nav
      class="hs-accordion-group p-3 w-full flex flex-col flex-wrap"
      data-hs-accordion-always-open
    >
      <ul class="flex flex-col space-y-1">
        <li v-for="(item, index) in menuItems" :key="index">
          <!-- Check if item has children (submenu) -->
          <template v-if="item.children">
            <div :id="`accordion-${index}`" class="hs-accordion">
              <button
                type="button"
                class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg"
                :class="{
                  'bg-gray-100 text-gray-700 dark:bg-neutral-700 dark:text-white': isActive(item),
                  'text-gray-700 hover:bg-gray-100 focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700':
                    !isActive(item),
                }"
                :aria-expanded="false"
                :aria-controls="`accordion-child-${index}`"
              >
                <component
                  v-if="item.icon"
                  :is="getIconComponent(item.icon)"
                  class="shrink-0 size-4"
                />
                {{ item.label }}
                <component
                  :is="getIconComponent('ChevronUp')"
                  class="hs-accordion-active:block ms-auto hidden size-4"
                />
                <component
                  :is="getIconComponent('ChevronDown')"
                  class="hs-accordion-active:hidden ms-auto block size-4"
                />
              </button>
              <div
                :id="`accordion-child-${index}`"
                class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                role="region"
                :aria-labelledby="`accordion-${index}`"
              >
                <ul class="ps-4 pt-1 ms-4 space-y-1 border-l">
                  <li v-for="(child, childIndex) in item.children" :key="childIndex">
                    <NuxtLink
                      :to="child.to"
                      class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg"
                      :class="{
                        'bg-gray-100 text-gray-700 dark:bg-neutral-700 dark:text-white': isActive(child),
                        'text-gray-700 hover:bg-gray-100 focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700':
                          !isActive(child),
                      }"
                    >
                      <component
                        v-if="child.icon"
                        :is="getIconComponent(child.icon)"
                        class="shrink-0 size-4"
                      />
                      {{ child.label }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </template>
          <template v-else>
            <NuxtLink
              :to="item.to"
              class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg"
              :class="{
                'bg-gray-100 text-gray-700 dark:bg-neutral-700 dark:text-white': isActive(item),
                'text-gray-700 hover:bg-gray-100 focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700':
                  !isActive(item),
              }"
            >
              <component
                v-if="item.icon"
                :is="getIconComponent(item.icon)"
                class="shrink-0 size-4"
              />
              {{ item.label }}
            </NuxtLink>
          </template>
        </li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  import { useRoute } from "vue-router";
  import * as lucideIcons from "lucide-vue-next";
  
  // Props
  defineProps({
    menuItems: {
      type: Array,
      required: true,
      default: () => [],
    },
  });
  
  // Composition
  const route = useRoute();
  
  // Methods
  const getIconComponent = (iconName) => lucideIcons[iconName] || null;
  
  // Check if a menu item is active
  const isActive = (item) => {
    if (!item.to) return false;
    // Ensure exact match for active routes
    return route.path === item.to;
  };
  </script>
  