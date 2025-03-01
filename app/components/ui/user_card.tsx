// "use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface UserCardProps {
    username: string;
    fullname?: string;
    profile: string;
    followed_By?: string;
    link: string;
    mode: "profile" | "suggestion";
}

export default function UserCard({ username, fullname, profile, followed_By, link, mode }: UserCardProps) {
    return (
        <div className="flex items-center justify-between py-1 px-4">
            <div className="flex items-center gap-3">
                <Image src={profile} 
                    alt="" 
                    height={44} width={44} 
                    className="rounded-full"
                />
                <div className="grid">
                    <span className="text-sm font-medium">{username} </span>
                    <span className="text-xs text-[#737373]">{mode === "profile" ? fullname : followed_By}</span>
                </div>
            </div>
            <div>
                <Link href ={'/'} className="text-xs text-[#0095f6] font-medium">{link} </Link>
            </div>
        </div>
    )
}
