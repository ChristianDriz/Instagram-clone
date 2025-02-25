import { create } from "zustand";
import { createRandomUser } from "../_utils/functions";

interface User {
    firstname: string;
    lastname: string;
    username: string;
    profile: string;
}

interface UserState {
    user: User;
    generateUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
    user: createRandomUser(), // Generate user when store initializes
    generateUser: () => set({ user: createRandomUser() }), // Function to regenerate user
}));