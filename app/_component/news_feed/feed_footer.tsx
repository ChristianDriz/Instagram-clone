import Image from 'next/image'
import { Feed_Icons } from '@/app/_constants/icons'

type Props = {
    likes: number;
    descriptions: string;
}

export default function FeedFooter({ likes, descriptions } : Props) {
    return (
        <div>
            <div className="font-medium text-sm leading-4.5">
                <span className="">{likes.toLocaleString()} likes</span>
            </div>
            {/* Descriptions */}
            <div className="pt-2">
                <span className="text-sm leading-4.5 line-clamp-2">{descriptions}</span>
            </div>
            {/* Add a comment */}
            <div className="flex justify-between items-center max-xs:hidden pt-2 ">
                <input placeholder="Add a comment..." className="text-sm h-[18px] max-h-20 leading-4.5 w-full outline-none"/>   
                <button>
                    <Image src={Feed_Icons[5].icon} alt="" width={13} height={13} className=" "/>
                </button>
            </div>
        </div>
    )
}
