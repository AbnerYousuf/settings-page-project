<template>
  <button
    @click="$emit('click')"
    :class="{
      'p-4 border-b-2': true,
      'border-teal-300 text-teal-600': isCurrentTab,
      'border-transparent hover:text-teal-600 hover:border-teal-300': !isCurrentTab,
    }"
  >
    {{ tab.tabName }}
  </button>
  <!-- provides a clickable tab for the main page -->
</template>

<script setup lang="ts">
import type { Tab } from '@/types';
import { computed } from 'vue';

const props = defineProps<{
  currentTab: string;
  tab: Tab;
}>();
//this is to let the main page know what the current tab and what all the tabs are

defineEmits<{
  click: [];
}>();
// this is to let the main page know when a tab is clicked

const isCurrentTab = computed(() => props.currentTab === props.tab.tabName);
// this is to determine if the tab is the current tab so we can update the main page accordingly
</script>
