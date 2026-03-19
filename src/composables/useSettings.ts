import { ref } from "vue";

interface GeneralSettings {
    username: string;
    email: string;
    gender: string;
    location: string;
}

const general = ref<GeneralSettings>({
    username: "John Doe",
    email: "johndoe@gmail.com",
    gender: "Male",
    location: "Canada",
});

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
    isPrivate: boolean;
}

const privacy = ref<PrivacySettings>({
    profileVisibility: "Public",
    isPrivate: false,
});

interface ApperanceSettings {
    theme: string;
    fontSize: string;
}

const apperance = ref<ApperanceSettings>({
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
    apperance,
    account
  };
}