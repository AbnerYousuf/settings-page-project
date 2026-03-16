<template>
  <main class="max-w-2xl mx-auto px-4">
      <nav class="font-medium text-center text-teal-400 border-b border-teal-100 mb-4">
          <ul class="flex flex-wrap -mb-px">
            <li
              v-for="tab in tabs"
              :key="tab.tabName"
              :currentTab="currentTab"
              :tab="tab"
              @click="currentTab = tab.tabName"
            >
              <TabComponent :tab="tab" :currentTab="currentTab" @click="currentTab = tab.tabName"/>
            </li>
            <!-- render every tab and provide a clickable list-->
          </ul>
      </nav>
    </main>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import type { Tab } from '@/types';
  import type { TabNameList } from '@/types';
  import TabComponent from '@/components/TabComponent.vue';

  const tabs: Tab[] = [
    { tabName: 'General', tabIcon: 'fa-solid fa-gear' },
    { tabName: 'Account', tabIcon: 'fa-solid fa-user' },
    { tabName: 'Appearance', tabIcon: 'fa-solid fa-palette' },
    { tabName: 'Notifications', tabIcon: 'fa-solid fa-bell' },
    { tabName: 'Privacy', tabIcon: 'fa-solid fa-shield-halved' }
  ];

  const currentTab = ref<TabNameList>('General');
  // this is to keep track of the current tab and also make sure the name is valid w/ the list of tabs
</script>
