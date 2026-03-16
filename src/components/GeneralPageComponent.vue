<template>
    <div class="p-4">
        <h2 class="text-2xl font-bold mb-4 text-teal-800">General Settings</h2>
        <p class="mb-4 text-teal-600">Manage your general settings.</p>
        <form class="space-y-4 mx-auto">
            <div>
                <label>
                    Username:
                </label>
                <input type="text" class="border border-gray-300 rounded px-2 py-1" />
            </div>
            <div>
                <label>
                    Email:
                </label>
                <input type="email" class="border border-gray-300 rounded px-2 py-1" />
            </div>
            <div>
                <label>
                    Gender:
                </label>
                <label>
                    <input type="radio" value="male" />
                    <span>Male</span>
                </label>
                <label>
                    <input type="radio" value="female" />
                    <span>Female</span>
                </label>
                <label>
                    <input type="radio" value="other" />
                    <span>Other</span>
                </label>
            </div>
            <div>
                <label>
                    Location:
                </label>
                <select>
                    <option value="canada">Canada</option>
                    <option value="uk">UK</option>
                    <option value="japan">Japan</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <button type="submit" class="btn-primary">
                Save Changes
            </button>
        </form>
        <!-- This is the content for the General tab -->
    </div>
</template>