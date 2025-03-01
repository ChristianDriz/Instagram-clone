"use client"

import { useEffect } from "react";
import StoriesTray from "./features/home/stories_tray";
import Feed from './features/home/news_feed';
import Suggested from './features/home/suggested';
import User_Profile from './features/home/user_profile';
import { 
    useStoreUser, 
    useStorePosts, 
    useStoreStories, 
    useStoreSuggestions 
} from "./store/useDataStore";


export default function Home() {

    const { user } = useStoreUser();
    const { posts, generatePosts } = useStorePosts();
    const { stories, generateStories } = useStoreStories();
    const { suggestions, generateSuggestions } = useStoreSuggestions();

    useEffect(() => {
        if (posts.length === 0 || stories.length === 0 || suggestions.length === 0) {
            generatePosts(100);
            generateStories(100);
            generateSuggestions(5);
        }

    }, [posts, stories, suggestions, generatePosts, generateStories, generateSuggestions]);
    
    if (!user) return null;


    return (
        <div className="w-full h-full flex justify-center py-4">
            <div className="w-[630px] overflow-hidden ">
                <StoriesTray stories={stories}/>
                <Feed posts={posts} />
            </div>
            <div className="w-[383px] pl-16 mt-4 max-[1159px]:hidden ">
                <User_Profile user={user}/>
                <Suggested suggestions={suggestions}/>
            </div>
        </div> 
    );
}