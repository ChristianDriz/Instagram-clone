import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Swiper_Pagination from "@/app/components/ui/swiper_pagination";
import { PrevBtn, NextBtn } from '@/app/components/ui/swiper_btns';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import FloatingHeart from './floating_heart';

type Props = {
    images: string[];
    onDoubleTap: () => void;
    showHeart: boolean;
};

export default function FeedImage({ images, onDoubleTap, showHeart } : Props) {

    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const prevRef = useRef<HTMLButtonElement>(null!);
    const nextRef = useRef<HTMLButtonElement>(null!);
    const [currentIndex, setCurrentIndex] = useState(0);
    
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

    const pagination = {
        clickable: false,
    };

    const [lastTap, setLastTap] = useState(0);

    const handleTap = () => {
        const now = Date.now();
        if (now - lastTap < 300) { // Detect double tap (300ms threshold)
            onDoubleTap();
        }
        setLastTap(now);
    };

    return (
        <Swiper 
            onClick={handleTap}
            ref={swiperRef}
            modules={[Navigation, Pagination]}
            navigation={{ 
                prevEl: prevRef.current,
                nextEl: nextRef.current,
            }}
            pagination={pagination}
            onSlideChange={(swiper) => {
                setIsAtStart(swiper.isBeginning);
                setIsAtEnd(swiper.isEnd);
                setCurrentIndex(swiper.activeIndex)
            }}        
            slidesPerView="auto"        
            className="max-h-[585px] max-w-[470px] bg-slate-200 xs:rounded flex overflow-hidden relative "  
        >
            {images.map((img, idx) => (
                <SwiperSlide key={idx} className="overflow-hidden min-h-[470px] min-w-full">
                    <Image 
                        src={img} 
                        alt="img" 
                        width={470} 
                        height={470} 
                        className="h-full w-full object-cover xs:rounded "
                    />  
                </SwiperSlide>                  
            ))}   
            {showHeart && <FloatingHeart />}
            {/* Navigation & Pagination */}    
            <div className='absolute top-[47%] left-3'>
                < PrevBtn isAtStart={isAtStart} prevRef={prevRef} />
            </div>
            <div className={`absolute top-[47%] right-3 ${images.length == 1 ? 'hidden' : ''}`}>
                < NextBtn isAtEnd={isAtEnd} nextRef={nextRef}  />
            </div>
            <Swiper_Pagination 
                totalSlides={images.length} 
                currentIndex={currentIndex} 
            />    
        </Swiper>  
    )
}
