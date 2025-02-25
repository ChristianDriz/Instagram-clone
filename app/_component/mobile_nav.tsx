"use client"

import Image from "next/image";
import Link from "next/link";
import { Mobile_NavIcons} from "../_constants/icons";
import { useEffect, useState } from "react";
import { useUserStore } from "@/app/_store/useStore"

export default function Mobile_Nav() {

    const { user } = useUserStore();
    const [hydrated, setHydrated] = useState(false);
    
    useEffect(() => {
        setHydrated(true);
    }, []);

    if (!hydrated) return null;

    return (
        <div className="bg-white flex justify-evenly border">
            {Mobile_NavIcons.map((item, idx) => (
                <Link href={'/'} key={idx} className='p-3'>
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
