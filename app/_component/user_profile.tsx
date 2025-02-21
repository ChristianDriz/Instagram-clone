import UserCard from "./user_card";
import { createRandomUser } from "../helper/functions";

const logged_in_user = Array.from({length:1}, createRandomUser);

export default function User_Profile() {
    return (
        <div>
            {logged_in_user.map((user, idx) => (
                <UserCard 
                    key={idx}
                    username={user.username}
                    fullname={`${user.firstname} ${user.lastname}`}
                    profile={user.profile}
                    followed_By={''}
                    link={'Switch'}
                    mode={'profile'}
                />
            ))}        
        </div>
    )
}
