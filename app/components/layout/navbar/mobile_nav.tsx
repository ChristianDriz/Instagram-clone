"use client"

import Image from "next/image";
import Link from "next/link";
import { Mobile_NavIcons} from "../../../constants/icons";
import { useEffect } from "react";
import { useUserStore } from "@/app/store/useStore"

export default function Mobile_Nav() {

    const { user, generateUser } = useUserStore();

    useEffect(() => {
        if (!user) {
            generateUser(); // Ensure user is initialized on the client
        }
    }, [user, generateUser]);

    if (!user) return null; // Prevent rendering before user is set

    return (
        <div className="bg-white flex justify-evenly border">
            {Mobile_NavIcons.map((item, idx) => (
                <Link href={`/${idx === 0 ? '' : item.name}`} key={idx} className='p-3'>
                    <Image 
                        src={idx === 5 ? user.profile : item.icon}
                        alt={item.name}
                        width={24}
                        height={24}
                        className={`${idx === 5 ? 'rounded-full': ''} object-cover`}
                    />
                </Link>
            ))}
        </div>
    )
}
