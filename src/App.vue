<template>
  <main>hello</main>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import type { Tab } from '@/types';
  import type { TabNameList } from '@/types';

  const tabs: Tab[] = [
    { tabName: 'General', tabIcon: 'fa-solid fa-gear' },
    { tabName: 'Account', tabIcon: 'fa-solid fa-user' },
    { tabName: 'Appearance', tabIcon: 'fa-solid fa-palette' },
    { tabName: 'Notifications', tabIcon: 'fa-solid fa-bell' },
    { tabName: 'Privacy', tabIcon: 'fa-solid fa-shield-halved' }
  ];

  const currentTab = ref<TabNameList>('General');
</script>
