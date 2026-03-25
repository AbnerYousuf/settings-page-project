import type { Component } from 'vue';

export type TabNameList = 'General' | 'Appearance' | 'Notifications' | 'Privacy' | 'Account';

export interface Tab {
  tabName: TabNameList;
  tabIcon: string;
  tabComponent: Component;
}
