<template>
  <div>
    <h2 class="text-2xl font-bold mb-4 text-teal-800">Notification Settings</h2>
    <p class="mb-4 text-teal-600">Manage your notification preferences.</p>
    <form class="space-y-4 mx-auto">
      <div class="flex items-center gap-1">
        <input type="checkbox" v-model="notifications.emailNotifications" />
        <label>Email notifications</label>
      </div>
      <div class="flex items-center gap-1">
        <input type="checkbox" v-model="notifications.pushNotifications" />
        <label>Push notifications</label>
      </div>
      <div class="flex items-center gap-1">
        <input type="checkbox" v-model="notifications.smsNotifications" />
        <label>SMS Notifications</label>
      </div>

      <button type="submit" class="btn-primary" @click.prevent="saveChanges">Save</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useSettings } from '@/composables/useSettings';
import { useNotifications } from '@/composables/useNotifications';

const { notifications } = useSettings();

const { addNotification } = useNotifications();

const saveChanges = () => {
      addNotification('Changes saved successfully!'); 
};
</script>