import Link from "next/link";
import UserCard from "./user_card";
import { createRandomSuggestion, formatFollowers } from "../helper/functions";

const suggestions = Array.from({length:20}, createRandomSuggestion);

export default function Suggested() {
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
