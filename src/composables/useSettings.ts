import { ref, watch } from "vue";

interface GeneralSettings {
    username: string;
    email: string;
    gender: string;
    location: string;
}

const general = ref<GeneralSettings>((() => {
    const storedSettings = localStorage.getItem("general");
    return storedSettings != null ? JSON.parse(storedSettings) : {
        username: "John Doe",
        email: "johndoe@gmail.com",
        gender: "Male",
        location: "Canada",
    };
})());

watch(general, (newSettings) => {
    localStorage.setItem("general", JSON.stringify(newSettings));
}, { deep: true });

interface NotificationsSettings {
    emailNotifications: boolean;
    pushNotifications: boolean;
    smsNotifications: boolean;
}

const notifications = ref<NotificationsSettings>({
    emailNotifications: true,
    pushNotifications: false,
    smsNotifications: false,
});

interface PrivacySettings {
    profileVisibility: string;
    searchEngineIndexing: boolean;
}

const privacy = ref<PrivacySettings>({
    profileVisibility: "Public",
    searchEngineIndexing: false,
});

interface AppearanceSettings {
    theme: string;
    fontSize: string;
}

const appearance = ref<AppearanceSettings>({
    theme: "Light",
    fontSize: "Medium",
});

interface AccountSettings {
  subscriptions: string[];
  paymentMethods: string[];
}

const account = ref<AccountSettings>({
  subscriptions: ["Newsletter", "Promotions"],
  paymentMethods: ["Credit Card", "PayPal"],
});

export function useSettings() {
  return {
    general,
    notifications,
    privacy,
    appearance,
    account
  };
}