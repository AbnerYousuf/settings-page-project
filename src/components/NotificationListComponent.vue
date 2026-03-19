<template>
    <teleport to="body">
        <ol class="notification-list">
            <li v-for="notification in notifications" :key="notification.id" class="notification-item">
                <div class="text-sm font-semibold">{{ notification.message }}</div>
                <button @click="removeNotification(notification.id)" class="notification-ack-button">Dismiss</button>
            </li>
        </ol>
    </teleport>
</template>

<script setup lang="ts">
import { useNotifications } from "@/composables/useNotifications";

const { notifications, removeNotification } = useNotifications();
</script>