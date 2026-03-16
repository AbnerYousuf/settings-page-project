<template>
  <div class="tab">
    <slot>tab stuff goes here</slot>
  </div>
</template>

<script setup lang="ts">
    import type { Tab } from '@/types';

    const props = defineProps<{
        currentTab: string;
        tab: Tab;
    }>();

    const emit = defineEmits<{
        click: [];
    }>();
</script>