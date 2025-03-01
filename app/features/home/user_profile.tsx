
import UserCard from "../../components/ui/user_card";

interface User {
    firstname: string;
    lastname: string;
    username: string;
    profile: string;
}

interface userProps {
    user: User;
}

export default function User_Profile({ user } : userProps) {

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
