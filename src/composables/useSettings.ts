import { ref, watch } from 'vue';

interface SettingsMap {
  general: GeneralSettings;
  privacy: PrivacySettings;
  notifications: NotificationsSettings;
  account: AccountSettings;
  appearance: AppearanceSettings;
}

type SettingsKey = keyof SettingsMap;

const init = <T>(settingKey: string, defaultSettings: T): T => {
  const storedSettings = localStorage.getItem(settingKey);
  return storedSettings != null ? JSON.parse(storedSettings) : defaultSettings;
};

const watcher =
  <T extends SettingsKey>(key: T) =>
  (value: SettingsMap[T]) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

interface GeneralSettings {
  username: string;
  email: string;
  gender: string;
  location: string;
}

const general = ref<GeneralSettings>(
  init<GeneralSettings>('general', {
    username: 'John Doe',
    email: 'johndoe@gmail.com',
    gender: 'Male',
    location: 'Canada',
  }),
);

watch(general, watcher('general'), { deep: true });

interface NotificationsSettings {
  emailNotifications: boolean;
  pushNotifications: boolean;
  smsNotifications: boolean;
}

const notifications = ref<NotificationsSettings>(
  init<NotificationsSettings>('notifications', {
    emailNotifications: true,
    pushNotifications: false,
    smsNotifications: false,
  }),
);

watch(notifications, watcher('notifications'), { deep: true });

interface PrivacySettings {
  profileVisibility: string;
  searchEngineIndexing: boolean;
}

const privacy = ref<PrivacySettings>(
  init<PrivacySettings>('privacy', {
    profileVisibility: 'Public',
    searchEngineIndexing: false,
  }),
);

watch(privacy, watcher('privacy'), { deep: true });

interface AppearanceSettings {
  theme: string;
  fontSize: string;
}

const appearance = ref<AppearanceSettings>(
  init<AppearanceSettings>('appearance', {
    theme: 'Light',
    fontSize: 'Medium',
  }),
);

watch(appearance, watcher('appearance'), { deep: true });

interface AccountSettings {
  subscriptions: string[];
  paymentMethods: string[];
}

const account = ref<AccountSettings>(
  init<AccountSettings>('account', {
    subscriptions: ['Newsletter', 'Promotions'],
    paymentMethods: ['Credit Card', 'PayPal'],
  }),
);

watch(account, watcher('account'), { deep: true });

export function useSettings() {
  return {
    general,
    notifications,
    privacy,
    appearance,
    account,
  };
}
