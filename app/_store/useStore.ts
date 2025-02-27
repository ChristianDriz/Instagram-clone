import { create } from "zustand";
import { createRandomUser } from "../_utils/functions";

interface User {
    firstname: string;
    lastname: string;
    username: string;
    profile: string;
}

interface UserState {
    user: User | null;
    generateUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
    user: null, // Set initial state as null to prevent hydration issues
    generateUser: () => set({ user: createRandomUser() }),
}));
