
type Props = {
    totalSlides: number;
    currentIndex: number;
}

export default function Swiper_Pagination ({ totalSlides, currentIndex } : Props )  {
    return (
        //will hide the pagination if the image length is 1
        <div className={`absolute bottom-4 w-full ${totalSlides === 1 ? 'hidden' : 'block'}`}> 
            <div className="flex justify-center gap-1.5 ">            
                {Array.from({ length: totalSlides }).map((_, index) => (
                <span
                    key={index}
                    className={`w-1.5 h-1.5 rounded-full bg-white ${currentIndex === index ? "opacity-90" : "opacity-25"}`}
                />
            ))}
            </div>
        </div>
    )
}
