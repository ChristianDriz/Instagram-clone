"use client"

import { useStoreStories } from '@/app/store/useDataStore';
import Image from 'next/image';
import { use } from 'react';
import { Feed_Icons } from "@/app/constants/icons";

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PrevBtn, NextBtn } from '@/app/components/ui/swiper_btns';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const close_btn = "/icons/close.svg";

interface Props {
    params: Promise<{ username: string }>;
}

export default function Page({ params }: Props ) {
    
    const { username } = use(params); // Unwrap the params
    const { stories } = useStoreStories();

    const storiesForUser = stories.filter(story => story.user.username === username);

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
        <div className='absolute z-10 bg-[#1a1a1a] inset-0'>
            <div className='h-full w-full flex justify-center py-5 relative overflow-hidden'>
                <Link href={'/'} className='absolute z-50 right-5 max-md:hidden'>
                    <Image src={close_btn} alt={close_btn} height={24} width={24} />
                </Link>
                {storiesForUser.map((stories, idx) => (
                    <Swiper 
                        ref={swiperRef}
                        modules={[Navigation, Pagination]}
                        navigation={{ 
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onSlideChange={(swiper) => {
                            setIsAtStart(swiper.isBeginning);
                            setIsAtEnd(swiper.isEnd);
                        }}        
                        slidesPerView="auto"  
                        key={idx} 
                        className='h-full w-[530px] max-xs:w-full relative flex flex-col rounded-md overflow-hidden'
                    >
                        <div className='absolute w-full flex justify-between p-4'>
                            <div className='flex items-center gap-2 '>
                                <Image 
                                    src={stories.user.profile} 
                                    alt={stories.user.profile} 
                                    width={32} 
                                    height={32}
                                    className='rounded-full'
                                />
                                <span className='text-white text-sm '>{stories.user.username}</span>
                            </div>
                            <Link href={'/'} className='md:hidden opacity-90'>
                                <Image src={close_btn} alt={close_btn} height={24} width={24} />
                            </Link>
                        </div>
                        {stories.user_story.map((story, idx) => (
                        <SwiperSlide key={idx} className='min-w-full h-[90%] '>
                            <Image 
                                src={story.user_story_img} 
                                alt={story.user_story_img} 
                                width={100} 
                                height={100}
                                className='w-full h-full object-cover rounded-md '
                            />
                        </SwiperSlide>
                        ))}
                        {/* Navigation & Pagination */}    
                        <div className='absolute top-[47%] left-3'>
                            < PrevBtn isAtStart={isAtStart} prevRef={prevRef} />
                        </div>
                        <div className={`absolute top-[47%] right-3 ${stories.user_story.length === 1 ? 'hidden' : ''} `}>
                            < NextBtn isAtEnd={isAtEnd} nextRef={nextRef}  />
                        </div>
                        {/* Comment and heart  */}
                        <div className='absolute w-full flex justify-between bottom-0 p-4'>
                            <input 
                                type="text" 
                                placeholder={`Reply to ${stories.user.username}...`}
                                className='w-full rounded-full py-2 px-5 bg-transparent outline-none border text-white' 
                            />
                                <button className={`px-5 duration-150 text` }>
                                    <Image src={Feed_Icons[7].icon } alt="like" width={28} height={28} />
                                </button>
                        </div>
                    </Swiper>    
                ))}    
            </div>
        </div>
    )
}
