import Image from "next/image";
import { faker } from '@faker-js/faker';

interface User {
    fullname: string,
    image: string
}

function createRandomUser(): User {
    return {
        fullname: faker.person.fullName(),
        image: `https://randomuser.me/api/portraits/${faker.helpers.arrayElement(["men", "women"])}/${faker.number.int(99)}.jpg`,
    }
}
  
const users:User[] = Array.from({length:20}, createRandomUser);

export default function Stories() {

    return (
        <div className="py-3 flex gap-[7px]">
            {users.slice(0, 8).map((user, idx ) => (
                <div key={idx} className="w-[72px] h-[84px] px-[3px]">
                    <div className="flex items-center justify-center w-[66px] h-[66px] box rounded-full">
                        <div className="flex items-center justify-center w-[61px] h-[61px] rounded-full bg-white">
                            <Image 
                                src={user.image}
                                alt='image' 
                                width={56} 
                                height={56} 
                                className="rounded-full border"
                            />
                        </div>
                    </div>
                    <div className="mt-0.5 text-xs truncate ">
                        {user.fullname}
                    </div>
                </div>   
            ))}
        </div>
    )
}
