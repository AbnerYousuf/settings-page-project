export type TabNameList = "General" | "Appearance" | "Notifications" | "Privacy" | "Account";

export interface Tab {
    tabName: TabNameList;
    tabIcon: string;
}