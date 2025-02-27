"use client"

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperArrowBtns from '@/app/_component/swiper_btns';

interface User {
    username: string;
    profile: string;
}

type Story = {
    user: User;
    story_img: string;
};

type Props = {
    stories: Story[];
}
export default function Stories({ stories }: Props) {
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const prevRef = useRef<HTMLButtonElement>(null!);
    const nextRef = useRef<HTMLButtonElement>(null!);
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const swiperRef = useRef<any>(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
            swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
            swiperRef.current.swiper.navigation.init();
            swiperRef.current.swiper.navigation.update();
        }
    }, []);
  
    return (
        <div className="relative" >
            <Swiper 
                ref={swiperRef}
                modules={[Navigation]}
                navigation={{ 
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onSlideChange={(swiper) => {
                    setIsAtStart(swiper.isBeginning);
                    setIsAtEnd(swiper.isEnd);
                }}        
                slidesPerView="auto"        
                slidesPerGroup={4} 
                spaceBetween={8} 
                className="py-2 flex gap-x-2 w-full mb-[19px] cursor-pointer" 
            >
            {stories.map((story, idx) => (
                <SwiperSlide key={idx} className="flex flex-col justify-center items-center min-w-[72px] h-[84px] " >
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
                </SwiperSlide>
            ))}
            </Swiper>
            <div className='absolute top-8 w-full px-4'>
                <SwiperArrowBtns 
                    isAtStart={isAtStart} 
                    isAtEnd={isAtEnd} 
                    prevRef={prevRef} 
                    nextRef={nextRef}
                /> 
            </div>
        </div>
    )
}

