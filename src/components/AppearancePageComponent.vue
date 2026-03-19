<template>
    <div class="p-6">
        <h2 class="text-2xl font-bold mb-2 text-teal-800">Appearance Settings</h2>
        <p class="mb-6 text-teal-600">Customize the look and feel of your application.</p>
        <form class="space-y-6 max-w-md">
            <!-- Theme Selection -->
            <div class="bg-white p-4 rounded-lg border border-gray-200">
                <label class="block text-lg font-semibold text-gray-800 mb-3">
                    Theme:
                </label>
                <div class="space-y-2">
                    <label class="flex items-center cursor-pointer">
                        <input 
                            type="radio" 
                            value="Light" 
                            v-model="appearance.theme" 
                            class="mr-3 w-4 h-4 text-teal-600"
                        />
                        <span class="text-gray-700">Light</span>
                    </label>
                    <label class="flex items-center cursor-pointer">
                        <input 
                            type="radio" 
                            value="Dark" 
                            v-model="appearance.theme" 
                            class="mr-3 w-4 h-4 text-teal-600"
                        />
                        <span class="text-gray-700">Dark</span>
                    </label>
                    <label class="flex items-center cursor-pointer">
                        <input 
                            type="radio" 
                            value="Auto" 
                            v-model="appearance.theme" 
                            class="mr-3 w-4 h-4 text-teal-600"
                        />
                        <span class="text-gray-700">Auto (System)</span>
                    </label>
                </div>
            </div>

            <!-- Font Size Selection -->
            <div class="bg-white p-4 rounded-lg border border-gray-200">
                <label for="fontSize" class="block text-lg font-semibold text-gray-800 mb-3">
                    Font Size:
                </label>
                <select 
                    id="fontSize"
                    v-model="appearance.fontSize"
                    class="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                >
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
            </div>

            <!-- Preview -->
            <div class="bg-teal-50 p-4 rounded-lg border border-teal-200">
                <p class="text-sm text-teal-700 mb-2 font-semibold">Preview:</p>
                <p class="text-gray-700">
                    Theme: <span class="font-semibold">{{ appearance.theme }}</span> | 
                    Font Size: <span class="font-semibold">{{ appearance.fontSize }}</span>
                </p>
            </div>

            <!-- Save Button -->
            <button 
                type="submit" 
                class="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
                Save Changes
            </button>
        </form>
    </div>
</template>

<script setup lang="ts">
    import { useSettings } from "@/composables/useSettings";

    const { appearance } = useSettings();
</script>