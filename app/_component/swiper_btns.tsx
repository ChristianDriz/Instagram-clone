
import Image from 'next/image';
import { RefObject } from 'react';

const Chevron_btn = './icons/chevron-btn.svg';

type Props = {
    isAtStart: boolean;
    isAtEnd: boolean;
    totalSlides?: number;
    prevRef: RefObject<HTMLButtonElement>;
    nextRef: RefObject<HTMLButtonElement>;
};

export default function SwiperArrowBtns ({ totalSlides, isAtStart, isAtEnd, prevRef, nextRef } : Props) {
    return (
        //will hide the nav buttons if the image length is 1
        <div className={`flex justify-between ${totalSlides === 1 ? 'hidden' : 'block'}`}>
            <button ref={prevRef} type="button" className={`${isAtStart ? 'invisible' : ''}`} >
                <Image src={Chevron_btn} alt='prev-btn' height={24} width={24} />
            </button>
            <button ref={nextRef} type="button" className={`${isAtEnd ? 'invisible' : ''}`} >
                <Image src={Chevron_btn} alt='next-btn' height={24} width={24} className='rotate-180'/>
            </button>
        </div>
    )
}
