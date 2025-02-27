import Image from "next/image";
import { Feed_Icons } from "../../_constants/icons";
import { timeAgo } from "../../_utils/functions";

type User = {
    username: string;
    profile: string;
}

type Props = {
    user: User;
    date_posted: Date;
}

export default function FeedHeader ({ user , date_posted }: Props) {
    return (
        <div className="flex space-x-1.5 items-center w-full max-xs:px-4 pb-2">
            {/* Profile */}
            <div className="rounded-full min-h-[42px] min-w-[42px] border border-white flex items-center justify-center box">
                <Image 
                    src={user.profile} 
                    alt="profile" 
                    width={32} height={32} 
                    className="outline outline-white outline-[2px] rounded-full "
                />
            </div>
            {/* User name */}
            <div className="flex justify-between items-center w-full ">
                <div className="flex space-x-1 ">
                    <p className="font-medium text-sm leading-4.5">{user.username}</p>
                    <p className="text-[#737373] text-sm leading-4.5"> • {timeAgo(date_posted)}</p>
                </div>
                <button >
                    <Image src={Feed_Icons[4].icon} alt="option" width={24} height={24} className=""/>
                </button>
            </div>
        </div>
    )
}
