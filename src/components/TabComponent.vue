<template>
  <button @click="$emit('click')"
          :class="{'p-4 border-b-2': true,
          'border-teal-300 text-teal-600': isCurrentTab,
          'border-transparent hover:text-teal-600 hover:border-teal-300': !isCurrentTab}
          ">
    {{ tab.tabName }}
  </button>
</template>

<script setup lang="ts">
    import type { Tab } from '@/types';
import { computed } from 'vue';

    const props = defineProps<{
        currentTab: string;
        tab: Tab;
    }>();

    defineEmits<{
        click: [];
    }>();

    const isCurrentTab = computed(() => props.currentTab === props.tab.tabName);
</script>