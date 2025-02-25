"use client"

import { useEffect, useState } from "react";
import UserCard from "../../_component/user_card";
import { useUserStore } from "@/app/_store/useStore";

export default function User_Profile() {

    const { user } = useUserStore();
    const [hydrated, setHydrated] = useState(false);
    
    useEffect(() => {
        setHydrated(true);
    }, []);

    if (!hydrated) return null;

    return (
        <div>           
            <UserCard 
                username={user.username}
                fullname={`${user.firstname} ${user.lastname}`}
                profile={user.profile}
                followed_By={''}
                link={'Switch'}
                mode={'profile'}
            />       
        </div>
    )
}
