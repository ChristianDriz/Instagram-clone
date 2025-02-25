"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import UserCard from "../../_component/user_card";
import { createRandomSuggestion, formatFollowers } from "../../_utils/functions";

interface User {
    firstname: string;
    lastname: string;
    username: string;
    profile: string;
}

interface Suggestion {
    user: User;
    followed_by: User[]; 
}

export default function Suggested() {

    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
    const [hydrated, setHydrated] = useState(false);
    
    useEffect(() => {
        setSuggestions(createRandomSuggestion(5));
        setHydrated(true);
    }, []);

    if (!hydrated) return null;
    
    console.log(suggestions);

    return (
        <div className="mt-4 mb-2">
            <div className="flex justify-between items-center py-1 px-4"> 
                <span className="text-sm font-medium text-[#737373]">Suggested for you</span>
                <Link href="" className="text-xs font-medium">See All</Link>
            </div>
            <div className="py-1 ml-1 mb-1">
            {suggestions.slice(0, 5).map((suggestion, idx) => (
                <UserCard 
                    key={idx} 
                    username={suggestion.user.username}
                    profile={suggestion.user.profile}
                    followed_By={formatFollowers(suggestion.followed_by)}
                    link={'Follow'}
                    mode={'suggestion'}
                />
            ))} 
            </div>
        </div>
    )
}
