"use client"

import FeedHeader from "@/app/_component/news_feed/feed_header";
import FeedImage from "@/app/_component/news_feed/feed_image";
import FeedActions from "@/app/_component/news_feed/feed_action";
import FeedFooter from "@/app/_component/news_feed/feed_footer";
import { useState } from "react";

type User = {
    username: string;
    profile: string;
};

type Post = {
    user: User;
    posted_img: string[];
    date_posted: Date;
    likes: number;
    descriptions: string;
};

type Props = {
    posts: Post[];
}

export default function Feed({ posts }: Props) {

    const [postStates, setPostStates] = useState(
        posts.map((post) => ({ liked: false, animate: false, likes: post.likes, showHeart: false }))
    );

    const handleDoubleTap = (idx: number) => {
        setPostStates((prev) =>
            prev.map((state, index) => {
                if (index !== idx) return state; // Keep other posts unchanged
    
                return { 
                    ...state, 
                    liked: state.liked ? state.liked : true, // Like only if not already liked
                    animate: !state.liked ? true : state.animate, // Only animate if state is changing
                    showHeart: true, // Floating heart animation
                    likes: state.liked ? state.likes : state.likes + 1 // Add like only if not liked yet
                };
            })
        );
    
        // Reset small heart animation after 100ms
        setTimeout(() => {
            setPostStates((prev) =>
                prev.map((state, index) =>
                    index === idx ? { ...state, animate: false } : state
                )
            );
        }, 100);

        // Reset floating heart animation after 800ms
        setTimeout(() => {
            setPostStates((prev) =>
                prev.map((state, index) =>
                    index === idx ? { ...state, showHeart: false } : state
                )
            );
        }, 800);
    }

    const handleHeartLike = (idx: number) => {
        setPostStates((prev) =>
            prev.map((state, index) => {
                if (index !== idx) return state; // Keep other posts unchanged
    
                if (index === idx && !state.liked) {
                    // Liking trigger animation and add like count
                    return { ...state, liked: true, animate: true, likes: state.likes + 1 };
                } else {
                    // Unliking remove like count
                    return { ...state, liked: false, animate: true, likes: state.likes - 1 };
                }
            })
        );
    
        // Reset animation after 100ms
        setTimeout(() => {
            setPostStates((prev) => {
                return prev.map((state, index) => {
                    if (index === idx) {
                        return { ...state, animate: false };
                    }
                    return state;
                });
            });
        }, 100);
    }
    
    return (

        <div className="flex justify-center ">
            <div className="max-w-[470px]">
                {posts.map((post, idx) => (
                    <div key={idx} className="grid ">
                        <FeedHeader user={ post.user} date_posted={post.date_posted} />
                        <FeedImage 
                            images={post.posted_img} 
                            onDoubleTap={() => handleDoubleTap(idx)} 
                            showHeart={postStates[idx].showHeart}
                        />
                        <div className="max-xs:px-4 sm:pb-4 sm:border-b mb-5">
                            <FeedActions 
                                liked={postStates[idx].liked} 
                                onLike={() => handleHeartLike(idx)} 
                                animate={postStates[idx].animate} 
                            />
                            <FeedFooter likes={postStates[idx].likes} descriptions={post.descriptions} />
                        </div>
                    </div>
                ))}          
            </div>
        </div>
    )
}
