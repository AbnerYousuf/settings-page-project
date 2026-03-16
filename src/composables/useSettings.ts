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

export function useSettings() {
  return {
    general
  };
}