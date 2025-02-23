import Image from "next/image";
import { Feed_Icons } from './icons'
import { createRandomPost, timeAgo } from "../helper/functions";

const posts = Array.from({length:20}, createRandomPost);

export default function Feed() {
  return (
    <div className="flex justify-center ">
        <div className="max-w-[470px]">
            {posts.map((post, idx) => (
                <div key={idx} className="grid ">
                    {/* Posted by */}
                    <div className="flex space-x-1.5 items-center w-full max-xs:px-4 pb-2">
                        {/* Profile */}
                        <div className="rounded-full min-h-[42px] min-w-[42px] border border-white flex items-center justify-center box">
                            <Image 
                                src={post.user.profile} 
                                alt="profile" 
                                width={32} height={32} 
                                className="outline outline-white outline-[2px] rounded-full "
                            />
                        </div>
                        {/* User name */}
                        <div className="flex justify-between items-center w-full ">
                            <div className="flex space-x-1 ">
                                <p className="font-medium text-sm leading-4.5">{post.user.username}</p>
                                <p className="text-[#737373] text-sm leading-4.5"> • {timeAgo(post.date_posted)}</p>
                            </div>
                            <button >
                                <Image src={Feed_Icons[4].icon} alt="option" width={24} height={24} className=""/>
                            </button>
                        </div>
                    </div>
                    {/* Posted Img */}
                    <div className="max-h-[585px] max-w-[470px] bg-slate-200 rounded">
                        <Image src={post.posted_img} alt="" width={470} height={470} className="h-full w-full object-cover rounded"/>
                    </div>   
                    <div className="max-xs:px-4 sm:pb-4 sm:border-b mb-5">
                        {/* Actions */}
                        <div className="flex justify-between my-1 py-3">
                            <div className="flex space-x-4">
                                <button><Image src={Feed_Icons[0].icon} alt="" width={24} height={24} className=""/></button>
                                <button><Image src={Feed_Icons[1].icon} alt="" width={24} height={24} className=""/></button>
                                <button><Image src={Feed_Icons[2].icon} alt="" width={24} height={24} className=""/></button>
                            </div>
                            <div className="flex">
                                <button><Image src={Feed_Icons[3].icon} alt="" width={24} height={24} className=""/></button>
                            </div>
                        </div>
                        {/* Likes */}
                        <div className="font-medium text-sm leading-4.5">
                            <span className="">{post.likes} likes</span>
                        </div>
                        {/* Descriptions */}
                        <div className="pt-2">
                            <span className="text-sm leading-4.5 line-clamp-2">{post.descriptions}</span>
                        </div>
                        {/* Add a comment */}
                        <div className="flex justify-between items-center max-xs:hidden pt-2 ">
                            <input placeholder="Add a comment..." className="text-sm h-[18px] max-h-20 leading-4.5 w-full outline-none"/>   
                            <button>
                                <Image src={Feed_Icons[5].icon} alt="" width={13} height={13} className=" "/>
                            </button>
                        </div>
                    </div>
                </div>
            ))}          
        </div>
    </div>
  )
}
