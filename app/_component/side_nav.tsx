"use client"

import { useEffect } from "react";
import Link from "next/link";
import { NavIcons, Logo, More } from "../_constants/icons";
import Image from "next/image";
import { useUserStore } from "@/app/_store/useStore";

export default function Sidenav() {

    const { user, generateUser } = useUserStore();

    useEffect(() => {
        if (!user) {
            generateUser(); // Ensure user is initialized on the client
        }
    }, [user, generateUser]);

    if (!user) return null; // Prevent rendering before user is set

    return (
        <div className="fixed border-r-[1px] w-[72px] xl:min-w-[244px] 2xl:min-w-[335px] h-dvh p-3 flex flex-col justify-between">
            <div className="">
                <div className="py-7 px-3 ">
                    <Link href="/" className="relative flex items-center w-[103px] h-[29px] xl:w-[103px] xl:h-[29px]">
                        <Image
                            src={Logo[0].icon}
                            alt="home"
                            width={103}
                            height={29}
                            className="absolute opacity-0 xl:opacity-100 transition-opacity ease-in-out delay-300"
                        />

                        <Image
                            src={Logo[1].icon}
                            alt="home"
                            width={24}
                            height={24}
                            className="absolute opacity-100 xl:opacity-0 transition-opacity ease-in-out delay-300 "
                        />
                    </Link>
                </div>

                <div className="w-full  ">
                {NavIcons.map((item, idx) => (
                    <Link href={`/`} key={idx} className="flex gap-4 p-3 my-2 hover:bg-[#f2f2f2] rounded-lg">
                        <Image
                            src={idx === 7 ? user.profile : item.icon}
                            alt="home"
                            width={24}
                            height={24}
                            className={`${idx === 7 ? 'rounded-full': ''} object-cover`}
                        />
                        <span
                            className={`capitalize ${
                            item.isActive ? "font-bold" : ""
                            } hidden xl:block`}
                        >
                            {item.name }
                        </span>
                    </Link>
                ))}
                </div>
            </div>

            <div className="pb-1">
                {More.map((item, idx) => (
                <Link href={`/`} key={idx}className="flex gap-4 p-3 my-2 hover:bg-[#f2f2f2] rounded-lg">
                    <Image
                        src={item.icon}
                        alt="home"
                        width={24}
                        height={24}
                        className="object-cover"
                    />
                    <span className="capitalize hidden xl:block">{item.name}</span>
                </Link>
                ))}
            </div>
        </div>
    );
}
