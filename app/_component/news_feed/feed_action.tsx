import Image from "next/image";
import { Feed_Icons } from "@/app/_constants/icons";

type Props = {
    liked: boolean;
    animate: boolean;
    onLike: () => void;
};

export default function FeedActions({ liked, onLike, animate } : Props ) {

    return (

        <div className="flex justify-between my-1 py-3">
            <div className="flex space-x-4">
                <button onClick={onLike} className={`duration-150 ${animate ? 'scale-125 ' : 'scale-100'} ${liked ? '' : 'hover:opacity-50'}` }>
                    <Image src={liked ? Feed_Icons[6].icon : Feed_Icons[0].icon } alt="like" width={24} height={24} />
                </button>
                <button className="hover:opacity-50">
                    <Image src={Feed_Icons[1].icon} alt="comment" width={24} height={24} className=""/>
                </button>
                <button className="hover:opacity-50">
                    <Image src={Feed_Icons[2].icon} alt="share" width={24} height={24} className=""/>
                </button>
            </div>
            <div className="flex">
                <button className="hover:opacity-50">
                    <Image src={Feed_Icons[3].icon} alt="save" width={24} height={24} className=""/>
                </button>
            </div>
        </div>
    )
}
