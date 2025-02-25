"use client"

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Feed_Icons } from '../../_constants/icons'
import { createRandomPost, timeAgo } from "../../_utils/functions";
import { Carousel } from "@fancyapps/ui";
import '@fancyapps/ui/dist/carousel/carousel.css';

// import { useEffect, useState } from "react";

// interface User {
//     profile: string;
//     username: string;
// }

// interface Post {
//     user: User;
//     posted_img: string[];
//     date_posted: Date;
//     likes: number;
//     descriptions: string;
// }


export default function Feed() {
    const posts = createRandomPost(5);

    const carouselRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (carouselRef.current) {
            new Carousel(carouselRef.current, {
                infinite: true,
                Dots: true,
                Navigation: true,
            });
        }
    }, []);


    // const [posts, setPosts] = useState<Post[]>([]);
    // const [hydrated, setHydrated] = useState(false);
    
    // useEffect(() => {
    //     setPosts(createRandomPost(100));
    //     setHydrated(true);
    // }, []);

    // if (!hydrated) return null;

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
                        {/* <div ref={setRef} className="f-carousel">
                            <div className="f-carouselslide">
                                1
                            </div>
                            <div className="f-carouselslide">
                                2
                            </div>
                            <div className="f-carousel__slide">
                                3
                            </div>
                        </div> */}
                        <div className="max-h-[585px] max-w-[470px] bg-slate-200 rounded flex overflow-hidden f-carousel" ref={carouselRef}>
                        {post.posted_img.map((img, idx) => (
                            <div key={idx} className="f-carousel__slide">
                                <Image src={img} alt="img" width={470} height={470} className="h-full w-full object-cover xs:rounded"/> 
                            </div>                        
                        ))}
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
