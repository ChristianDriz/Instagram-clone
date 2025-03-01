"use client"

import Image from 'next/image';
import { PrevBtn, NextBtn } from '@/app/components/ui/swiper_btns';
import { useRef, useState } from 'react';
import Link from 'next/link';

interface User {
    username: string;
    profile: string;
}

type Story = {
    user: User;
    user_story: {
        user_story_id: string;
        user_story_img: string;
    }[];
};

type Props = {
    stories: Story[];
}
export default function StoriesTray({ stories }: Props) {
    const storiesRef = useRef<HTMLDivElement>(null!);
    const [showPrev, setShowPrev] = useState(false);
    const [showNext, setShowNext] = useState(true);
    const scroll_amount = 80 * 4; // 4 images width

    const onScroll = () => {
        if (storiesRef.current.scrollLeft > 0 ) {
            setShowPrev(true);
        } else {
            setShowPrev(false);
        }

        if (storiesRef.current.scrollLeft >= storiesRef.current.scrollWidth - storiesRef.current.clientWidth - 1) {
            setShowNext(false);
        } else {
            setShowNext(true);
        }
    }

    const handlePrev = () => {
        storiesRef.current.scrollBy({ left: -scroll_amount});
    }

    const handleNext = () => {
        storiesRef.current.scrollBy({ left: scroll_amount});
    }

    return (
        <div className="relative "  >
            <div className="py-2 flex gap-x-2 w-full mb-[19px] overflow-auto scrollbar-hide scroll-smooth" ref={storiesRef} onScroll={onScroll} >
            {stories.map((story, idx) => (
                <div key={idx} className="flex flex-col justify-center items-center min-w-[72px] h-[84px] cursor-pointer" >
                    <Link href={`/stories/${story.user.username}`} className="flex items-center justify-center w-[66px] h-[66px] border border-white has_story rounded-full">
                        <Image 
                            src={story.user.profile}
                            alt='image' 
                            width={56} height={56} 
                            className="rounded-full outline outline-white outline-[2px] "
                        />
                    </Link>
                    <div className="mt-0.5 max-w-[66px] text-xs truncate text-center ">
                        {story.user.username}
                    </div>
                </div>
            ))}
            </div>
            { showPrev && 
            <div className='absolute top-8 left-4'>
                < PrevBtn onClick={handlePrev}/>
            </div>
            }
            { showNext && 
            <div className='absolute top-8 right-4' >
                < NextBtn onClick={handleNext}/>    
            </div>   
            }
                 
        </div>
    )
}

