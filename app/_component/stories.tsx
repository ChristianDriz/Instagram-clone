"use client"

import React, { useCallback, useEffect, useState } from 'react'
import { createRandomStory } from "../helper/functions";
import { EmblaOptionsType } from 'embla-carousel'

import { PrevButton, NextButton } from './stories_arrow_btn'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image';

type PropType = {
    options?: EmblaOptionsType
}

interface Story {
    user: {
        profile: string;
        username: string;
    };
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const [isAtStart, setIsAtStart] = useState(true); // Track if at start
    const [isAtEnd, setIsAtEnd] = useState(false); // Track if at end
    const [stories, setStories] = useState<Story[]>([]);

    useEffect(() => {
        setStories(Array.from({ length: 20 }, createRandomStory));
    }, []);

   
    // Function to update state when scrolling
    const onSelect = useCallback(() => {
        if (emblaApi) {
            const currentIndex = emblaApi.selectedScrollSnap();
            const maxIndex = emblaApi.scrollSnapList().length - 1;
            setIsAtStart(currentIndex === 0);
            setIsAtEnd(currentIndex === maxIndex);
        }
    }, [emblaApi]);

    // Attach event listener
    useEffect(() => {
        if (emblaApi) {
            emblaApi.on('select', onSelect);
            onSelect(); // Initialize state on mount
        }
    }, [emblaApi, onSelect]);

    const handlePrevButtonClick = () => {
        if (emblaApi) {
            const currentIndex = emblaApi.selectedScrollSnap();
            const prevIndex = Math.max(currentIndex - 4, 0);
            emblaApi.scrollTo(prevIndex);
        }
    };
    
    const handleNextButtonClick = () => {
        if (emblaApi) {
            const currentIndex = emblaApi.selectedScrollSnap();
            const maxIndex = emblaApi.scrollSnapList().length - 1;
            const nextIndex = Math.min(currentIndex + 4, maxIndex);
            emblaApi.scrollTo(nextIndex);
        }
    };
    

    return (
        <div className="relative" ref={emblaRef}>
            <div className="py-2 flex gap-x-2 w-full mb-[19px] cursor-pointer touch-auto " >
            {stories.map((story, idx) => (
                <div key={idx} className="flex flex-col justify-center items-center min-w-[72px] h-[84px] " >
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
            <div className=''> 
                {!isAtStart && <PrevButton onClick={handlePrevButtonClick} className="rounded-full shadow-lg absolute top-8 left-4" />} 
                {!isAtEnd && <NextButton onClick={handleNextButtonClick} className="rounded-full shadow-lg absolute top-8 right-4"  />}
            </div>
        </div>
    )
}

export default EmblaCarousel
