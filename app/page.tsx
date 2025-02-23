import EmblaCarousel from "./_component/stories";
import Feed from "./_component/feed";
import Suggested from "./_component/suggested";
import User_Profile from "./_component/user_profile";

export default function Home() {
    return (
        <div className="w-full flex justify-center ">
            <div className="w-[630px] overflow-hidden ">
                <EmblaCarousel />
                <Feed />
            </div>
            <div className="w-[383px] pl-16 mt-4 max-[1159px]:hidden ">
                <User_Profile />
                <Suggested />
            </div>
        </div>
    );
}
