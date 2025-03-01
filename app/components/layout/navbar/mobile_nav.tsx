"use client"

import Image from "next/image";
import Link from "next/link";
import { Mobile_NavIcons} from "../../../constants/icons";
import { useStoreUser } from "@/app/store/useDataStore";

export default function Mobile_Nav() {

    const { user } = useStoreUser();
    
    if (!user) return null;

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
