import Image from "next/image";
import { createRandomStory } from "../helper/functions";
import { PrevButton, NextButton, UsePrevNextButtonsType } from "./stories_arrow_btn";
import useEmblaCarousel from "embla-carousel-react";
  
const stories = Array.from({length:20}, createRandomStory);

export default function Stories() {

    return (
        <div className="relative" >
            <div className="py-2 flex gap-x-2 w-full mb-[19px] overflow-auto scrollbar-hide touch-pan-x">
                {stories.map((story, idx ) => (
                    <div key={idx} className="flex flex-col items-center min-w-[72px] h-[84px] ">
                        <div className="flex items-center justify-center w-[66px] h-[66px] border border-white box rounded-full">
                            <Image 
                                src={story.user.profile}
                                alt='image' 
                                width={56} height={56} 
                                className="rounded-full outline outline-white outline-[2px] "
                            />
                        </div>
                        <div className="mt-0.5 max-w-[66px] text-xs truncate text-center ">
                            {story.user.username}
                        </div>
                    </div>   
                ))}
            </div>
            <div>
                <PrevButton />
                <NextButton />
            </div>
        </div>
    )
}
