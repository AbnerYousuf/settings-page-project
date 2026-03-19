<template>
    <div class="p-4">
        <h2 class="text-2xl font-bold mb-4 text-teal-800">Account Settings</h2>
        <p class="mb-4 text-teal-600">Manage your account information and preferences.</p>
        <form class="space-y-4 mx-auto" @submit.prevent="handleSave">
        <!-- ok so i had to add prevent to stop the form from autorefreshing, had to do a custom saving method -->
            <div>
                <label>
                    Subscriptions (please separate each item with a comma):
                </label>
                <input type="text" v-model="subscriptionsInput" class="border border-gray-300 rounded px-2 py-1" />
            </div>
            <div>
                <label>
                    Payment Methods (please separate each item with a comma):
                </label>
                <input type="text" v-model="paymentMethodsInput" class="border border-gray-300 rounded px-2 py-1" />
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
    import { ref } from "vue";

    const { account } = useSettings();

    // convert arrays into comma separated strings for editing in input fields
    const subscriptionsInput = ref(account.value.subscriptions.join(", "));
    const paymentMethodsInput = ref(account.value.paymentMethods.join(", "));

    // tur them back into arrays and save them when the form is submitted
    // it's a bit of a weird way of handling this but this is a personal project
    // so it's fine please don't judge me
    const handleSave = () => {
        account.value.subscriptions = subscriptionsInput.value
            .split(",")
            .map((item: string) => item.trim())
            .filter((item: string) => item.length > 0);
        
        account.value.paymentMethods = paymentMethodsInput.value
            .split(",")
            .map((item: string) => item.trim())
            .filter((item: string) => item.length > 0);
    };
</script>