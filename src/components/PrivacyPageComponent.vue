<template>
  <div>
    <h2 class="text-2xl font-bold mb-4 text-teal-800">Privacy Settings</h2>
    <p class="mb-4 text-teal-600">Manage your privacy preferences.</p>
    <form class="space-y-4 mx-auto">
      <div class="flex items-center gap-1">
        <input type="checkbox" v-model="privacy.searchEngineIndexing" />
        <label>Search engine indexing</label>
      </div>

      <div>
        <label class="mb-1">Visibility</label>
        <select v-model="privacy.profileVisibility">
          <option value="private">Private</option>
          <option value="public">Public</option>
        </select>
      </div>

      <button type="submit" class="btn-primary" @click.prevent="saveChanges">Save</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useSettings } from '@/composables/useSettings';
import { useNotifications } from '@/composables/useNotifications';

const { privacy } = useSettings();
const { addNotification } = useNotifications();

const saveChanges = () => {
    addNotification('Changes saved successfully!'); 
};
</script>