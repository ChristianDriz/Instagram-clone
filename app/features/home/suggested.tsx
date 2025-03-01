"use client"

import Link from "next/link";
import UserCard from "../../components/ui/user_card";
import { formatFollowers } from "../../utils/functions";

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

type Props = {
    suggestions: Suggestion[];
}

export default function Suggested({ suggestions }: Props) {

    return (
        <div className="mt-4 mb-2">
            <div className="flex justify-between items-center py-1 px-4"> 
                <span className="text-sm font-medium text-[#737373]">Suggested for you</span>
                <Link href="" className="text-xs font-medium">See All</Link>
            </div>
            <div className="flex flex-col gap-1 py-2 ml-1 mb-1 ">
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
