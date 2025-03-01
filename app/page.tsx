
import StoriesTray from "./features/home/stories_tray";
import Feed from './features/home/news_feed';
import Suggested from './features/home/suggested';
import User_Profile from './features/home/user_profile';
import { createRandomPost, createRandomSuggestion, createRandomStory } from "./utils/functions";

export default function Home() {

    const posts = createRandomPost(100);
    const suggestions = createRandomSuggestion(5);
    const stories = createRandomStory(30);

    // console.log(stories);

    return (
        <div className="w-full h-full flex justify-center py-4">
            <div className="w-[630px] overflow-hidden ">
                <StoriesTray stories={stories}/>
                <Feed posts={posts} />
            </div>
            <div className="w-[383px] pl-16 mt-4 max-[1159px]:hidden ">
                <User_Profile />
                <Suggested suggestions={suggestions}/>
            </div>
        </div> 
    );
}