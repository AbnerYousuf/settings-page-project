<template>
    <div class="p-4">
        <h2 class="text-2xl font-bold mb-4 text-teal-800">Account Settings</h2>
        <p class="mb-4 text-teal-600">Manage your account information and preferences.</p>
        <form class="space-y-4 mx-auto">
        <!-- ok so i had to add prevent to stop the form from autorefreshing, had to do a custom saving method -->
            <div>
                <label>
                    Subscriptions:
                </label>
                <input type="text" v-model="account.subscriptions" class="border border-gray-300 rounded px-2 py-1" />
            </div>
            <div>
                <label>
                    Payment Methods:
                </label>
                <input type="text" v-model="account.paymentMethods" class="border border-gray-300 rounded px-2 py-1" />
            </div>
            <button type="submit" class="btn-primary">
                Save Changes
            </button>
        </form>
        <!-- this is the content for the account tab, mostly so people can manage their payment stuff -->
    </div>
</template>

<script setup lang="ts">
    import { useSettings } from "@/composables/useSettings";

    const { account } = useSettings();
    
</script>