import React, { ComponentPropsWithRef, useCallback, useEffect, useState } from 'react'
import { EmblaCarouselType } from 'embla-carousel'
import Image from 'next/image';

const Chevron_btn = './icons/chevron-btn.svg'
  
type UsePrevNextButtonsType = {
    prevBtnDisabled: boolean
    nextBtnDisabled: boolean
    onPrevButtonClick: () => void
    onNextButtonClick: () => void
}
  
export const usePrevNextButtons = (
    emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  
    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollPrev()
    }, [emblaApi])
  
    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollNext()
    }, [emblaApi])
  
    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])
  
    useEffect(() => {
        if (!emblaApi) return
    
        onSelect(emblaApi)
        emblaApi.on('reInit', onSelect).on('select', onSelect)
    }, [emblaApi, onSelect])
  
    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    }
}
  
type PropType = ComponentPropsWithRef<'button'>
  
export const PrevButton: React.FC<PropType> = (props) => {
    const { children, ...restProps } = props
  
    return (
        <button type="button" {...restProps}>
            <Image src={Chevron_btn} alt='prev-btn' height={24} width={24} className=''/>
            {children}
        </button>
    )
}
  
export const NextButton: React.FC<PropType> = (props) => {
    const { children, ...restProps } = props

    return (
        <button type="button" {...restProps}>
            <Image src={Chevron_btn} alt='next-btn' height={24} width={24} className='rotate-180'/>
            {children}
        </button>
    )
}
  