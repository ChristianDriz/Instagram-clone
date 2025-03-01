import { create } from "zustand";
import 
{ 
    createRandomUser, 
    createRandomPost, 
    createRandomStory, 
    createRandomSuggestion 
} 
from "../utils/functions";

interface User {
    firstname: string;
    lastname: string;
    username: string;
    profile: string;
}

interface Post {
    user: User;
    posted_img: string[];
    date_posted: Date;
    likes: number;
    descriptions: string;
}

interface Stories {
    user: User;
    user_story: {
        user_story_id: string;
        user_story_img: string;
    }[];
}

interface Suggestions {
    user: User;
    followed_by: User[];
}

interface UserState {
    user: User | null;
    generateUser: () => void;
}

interface PostState {
    posts: Post[];
    generatePosts: (count: number) => void;
}

interface StoriesState {
    stories: Stories[];
    generateStories: (count: number) => void;
}

interface SuggestionState {
    suggestions: Suggestions[];
    generateSuggestions: (count: number) => void;
}

// user
export const useStoreUser = create<UserState>((set) => ({
    user: null, // Set initial state as null to prevent hydration issues
    generateUser: () => {
        const newUser = createRandomUser();
        set({ user: newUser });
    }
}));

// post
export const useStorePosts = create<PostState>((set) => ({
    posts: [],
    generatePosts: (count) => {
        const newPosts = createRandomPost(count);
        set({ posts: newPosts });
    }
}));

export const useStoreStories = create<StoriesState>((set) => ({
    stories: [], // Set initial state as null to prevent hydration issues
    generateStories: (count) => {
        const newStories = createRandomStory(count);
        set({ stories: newStories });
    }
}));

export const useStoreSuggestions = create<SuggestionState>((set) => ({
    suggestions: [], // Set initial state as null to prevent hydration issues
    generateSuggestions: (count) => {
        const newSuggestions = createRandomSuggestion(count);
        set({ suggestions: newSuggestions });
    }
}));

