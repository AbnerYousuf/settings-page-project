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
          <TabComponent :tab="tab" :currentTab="currentTab" @click="currentTab = tab.tabName" />
        </li>
        <!-- render every tab and provide a clickable list-->
      </ul>
    </nav>
    <FadeTransitionComponent>
      <KeepAlive>
        <component :is="currentTabComponent" />
      </KeepAlive>
    </FadeTransitionComponent>
    <!-- provide a fade transition when switching tabs and render the correct component -->
    <NotificationListComponent />
    <!-- this is to render the notifications page component so we can test the notifications system -->
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Tab } from '@/types';
import type { TabNameList } from '@/types';
import TabComponent from '@/components/TabComponent.vue';
import GeneralPageComponent from '@/components/GeneralPageComponent.vue';
import AccountPageComponent from '@/components/AccountPageComponent.vue';
import AppearancePageComponent from '@/components/AppearancePageComponent.vue';
import NotificationsPageComponent from '@/components/NotificationsPageComponent.vue';
import PrivacyPageComponent from '@/components/PrivacyPageComponent.vue';
import FadeTransitionComponent from './components/FadeTransitionComponent.vue';
import NotificationListComponent from '@/components/NotificationListComponent.vue';

const tabs: Tab[] = [
  { tabName: 'General', tabIcon: 'fa-solid fa-gear', tabComponent: GeneralPageComponent },
  { tabName: 'Account', tabIcon: 'fa-solid fa-user', tabComponent: AccountPageComponent },
  { tabName: 'Appearance', tabIcon: 'fa-solid fa-palette', tabComponent: AppearancePageComponent },
  {
    tabName: 'Notifications',
    tabIcon: 'fa-solid fa-bell',
    tabComponent: NotificationsPageComponent,
  },
  { tabName: 'Privacy', tabIcon: 'fa-solid fa-shield-halved', tabComponent: PrivacyPageComponent },
];

const currentTab = ref<TabNameList>('General');
// this is to keep track of the current tab and also make sure the name is valid w/ the list of tabs

const currentTabComponent = computed(
  () => tabs.find((tab) => tab.tabName === currentTab.value)?.tabComponent,
);
// this is to get the component for the current tab so we can render it in the main page
</script>
