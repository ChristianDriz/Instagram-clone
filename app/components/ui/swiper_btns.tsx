
import Image from 'next/image';
import { RefObject } from 'react';

const Chevron_btn = './icons/chevron-btn.svg';

type PrevProp = {
    isAtStart?: boolean;
    prevRef?: RefObject<HTMLButtonElement>;
    onClick?: () => void;
};

type NextProp = {
    isAtEnd?: boolean;
    nextRef?: RefObject<HTMLButtonElement>;
    onClick?: () => void;
};

export function PrevBtn ({isAtStart, prevRef, onClick } : PrevProp ) {
    return (
        <button onClick={onClick} ref={prevRef} type="button" className={`drop-shadow-sm opacity-90 ${isAtStart ? 'hidden' : ''}`} >
            <Image src={Chevron_btn} alt='prev-btn' height={24} width={24} />
        </button>
    )
}

export function NextBtn ({ isAtEnd, nextRef, onClick } : NextProp ) {
    return (
        <button onClick={onClick} ref={nextRef} type="button" className={`drop-shadow-sm opacity-90 ${isAtEnd ? 'hidden' : ''}`} >
            <Image src={Chevron_btn} alt='next-btn' height={24} width={24} className='rotate-180'/>
        </button>
    )
}
