
import Stories from "./_features/home/stories";
import Feed from './_features/home/news_feed';
import Suggested from './_features/home/suggested';
import User_Profile from './_features/home/user_profile';
import { createRandomPost, createRandomSuggestion, createRandomStory } from "./_utils/functions";

export default function Home() {

    const posts = createRandomPost(100);
    const suggestions = createRandomSuggestion(5);
    const stories = createRandomStory(30);

    return (
        <div className="w-full flex justify-center ">
            <div className="w-[630px] overflow-hidden ">
                <Stories stories={stories}/>
                <Feed posts={posts} />
            </div>
            <div className="w-[383px] pl-16 mt-4 max-[1159px]:hidden ">
                <User_Profile />
                <Suggested suggestions={suggestions}/>
            </div>
        </div> 
    );
}