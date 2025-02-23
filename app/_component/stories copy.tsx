"use client"

import React from 'react'
import { createRandomStory } from "../helper/functions";
import { EmblaOptionsType } from 'embla-carousel'

import { PrevButton, NextButton, usePrevNextButtons } from './stories_arrow_btn'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image';

const stories = Array.from({length:20}, createRandomStory);

type PropType = {
    stories: number[]
    options?: EmblaOptionsType
}



const EmblaCarousel: React.FC<PropType> = (props) => {
    const { options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <div className="relative border" ref={emblaRef}>
            <div className="py-2 flex gap-x-2 w-full mb-[19px] " >
            {stories.map((story, idx) => (
                <div key={idx} className="embla__slide " >
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
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>
        </div>
    )
}

export default EmblaCarousel
