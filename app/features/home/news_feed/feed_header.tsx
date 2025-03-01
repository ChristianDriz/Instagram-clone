import Image from "next/image";
import { Feed_Icons } from "../../../constants/icons";
import { useEffect, useState } from "react";

type User = {
    username: string;
    profile: string;
}

type Props = {
    user: User;
    posted_date: string;
}

export default function FeedHeader ({ user, posted_date }: Props) {

    const [hydratedDate, setHydratedDate] = useState("");

    useEffect(() => {
        setHydratedDate(posted_date); // Ensures date is set after hydration
    }, [posted_date]);

    return (
        <div className="flex space-x-1.5 items-center w-full max-xs:px-4 pb-2 ">
            {/* Profile */}
            <div className="rounded-full min-h-[42px] min-w-[42px] border border-white flex items-center justify-center has_story cursor-pointer">
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
                    <p className="font-medium text-sm leading-4.5 cursor-pointer">{user.username}</p>
                    <p className="text-[#737373] text-sm leading-4.5"> • {hydratedDate}</p>
                </div>
                <button >
                    <Image src={Feed_Icons[4].icon} alt="option" width={24} height={24} />
                </button>
            </div>
        </div>
    )
}
