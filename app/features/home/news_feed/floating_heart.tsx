import Image from 'next/image'

const floating_heart = './icons/floating heart.svg'

export default function FloatingHeart() {

    return (
        <div className='absolute inset-0 flex justify-center items-center pointer-events-none'>
            <Image 
                className="animate-float-heart" 
                src={floating_heart} 
                alt='floating heart' 
                height={128} 
                width={128}
            />
        </div>
    )
}
