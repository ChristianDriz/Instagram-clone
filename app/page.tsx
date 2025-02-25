"use client"

import dynamic from 'next/dynamic'
import EmblaCarousel from "./_features/home/stories";
// import Feed from "./_features/home/feed";
import Suggested from "./_features/home/suggested";
import User_Profile from "./_features/home/user_profile";

const Feed = dynamic(() => import('./_features/home/feed'), { ssr: false })

export default function Home() {
    return (
        <div className="w-full flex justify-center ">
            <div className="w-[630px] overflow-hidden ">
                <EmblaCarousel />
                <Feed />
            </div>
            <div className="w-[383px] pl-16 mt-4 max-[1159px]:hidden ">
                <User_Profile />
                <Suggested />
            </div>
        </div>
    );
}
