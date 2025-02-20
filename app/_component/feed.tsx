import Image from "next/image";
import { Feed_Icons } from './constants'
import { faker } from '@faker-js/faker';

interface Post {
    username: string,
    profile: string,
    posted_img: string,
    date_posted: Date,
    likes: number,
    descriptions: string,
}

function createRandomPost(): Post {
    return {
        username: faker.person.firstName().toLowerCase() + "." + faker.person.lastName().toLowerCase(),
        profile: `https://randomuser.me/api/portraits/${faker.helpers.arrayElement(["men", "women"])}/${faker.number.int(99)}.jpg`,
        posted_img: `https://picsum.photos/800/600?random=${faker.number.int(1000)}`,
        date_posted: faker.date.recent(),
        likes: faker.number.int(1000),
        descriptions: faker.lorem.lines()
    }
}

function timeAgo(date: Date): string {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime(); // Get time difference in milliseconds
    const diffSec = Math.floor(diffMs / 1000); // Convert to seconds
    const diffMin = Math.floor(diffSec / 60); // Convert to minutes
    const diffHrs = Math.floor(diffMin / 60); // Convert to hours
    const diffDays = Math.floor(diffHrs / 24); // Convert to days

    if (diffDays > 0) return `${diffDays}d`; // If more than a day, show days
    if (diffHrs > 0) return `${diffHrs}h`; // If more than an hour, show hours
    if (diffMin > 0) return `${diffMin}m`; // If more than a minute, show minutes
    return `${diffSec}s`; // If less than a minute, show seconds
}

const posts:Post[] = Array.from({length:20}, createRandomPost);

// console.log("post ==> ", post);


export default function Feed() {

  return (
    <div className="flex justify-center ">
        <div>
            {posts.map((post, idx) => (
                <div key={idx} className="grid gap-2 w-[470px] py-4">
                    {/* Posted by */}
                    <div className="flex gap-2 w-full">
                        {/* Profile */}
                        <Image src={post.profile} alt="" width={24} height={24} className="rounded-full"/>
                        {/* User name */}
                        <div className="flex justify-between w-full">
                            <div className="flex gap-1">
                                <span className="font-medium text-sm">{post.username}</span>
                                <span className="text-[#737373] text-sm"> • {timeAgo(post.date_posted)}</span>
                            </div>
                            <button>
                                <Image src={Feed_Icons[4].icon} alt="option" width={24} height={24} className=""/>
                            </button>
                        </div>
                    </div>
                    {/* Posted Img */}
                    <div className="w-[468px] h-[468px] bg-slate-200 rounded">
                        <Image src={post.posted_img} alt="" width={468} height={468} className="h-[468px] w-[468px] object-cover border rounded"/>
                    </div>
                    {/* Actions */}
                    <div className="flex justify-between ">
                        <div className="flex gap-4">
                            <button>
                                <Image src={Feed_Icons[0].icon} alt="" width={24} height={24} className=""/>
                            </button>
                            <button>
                                <Image src={Feed_Icons[1].icon} alt="" width={24} height={24} className=""/>
                            </button>
                            <button>
                                <Image src={Feed_Icons[2].icon} alt="" width={24} height={24} className=""/>
                            </button>
                        </div>
                        <div>
                            <button>
                                <Image src={Feed_Icons[3].icon} alt="" width={24} height={24} className=""/>
                            </button>
                        </div>
                    </div>
                    {/* Likes */}
                    <div className="">
                        <span className="font-medium text-sm">{post.likes} likes</span>
                    </div>
                    {/* Descriptions */}
                    <div className="truncate">
                        <p className="truncate text-sm">{post.descriptions}</p>
                    </div>
                    {/* Add a comment */}
                    <div className="relative">
                        <input type="text" placeholder="Add a comment..." className="pb-4 w-full outline-none border-b"/>   
                        <button>
                            <Image src={Feed_Icons[5].icon} alt="" width={13} height={13} className="absolute right-0 top-2"/>
                        </button>
                    </div>
                </div>
            ))}
            
        </div>
    </div>
  )
}
