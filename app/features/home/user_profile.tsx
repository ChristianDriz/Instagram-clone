"use client";

import { useEffect } from "react";
import UserCard from "../../components/ui/user_card";
import { useUserStore } from "@/app/store/useStore";

export default function User_Profile() {
    
    const { user, generateUser } = useUserStore();

    useEffect(() => {
        if (!user) {
            generateUser(); // Ensure user is initialized on the client
        }
    }, [user, generateUser]);

    if (!user) return null; // Prevent rendering before user is set

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
    );
}
