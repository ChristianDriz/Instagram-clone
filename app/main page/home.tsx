import Stories from "../_component/stories"
import Feed from "../_component/feed"
import Suggested from "../_component/suggested"
import User_Profile from "../_component/user_profile"

export default function Home () {

    return (
        <div className="w-screen flex sm:justify-center ">
            <div className="xl:ml-[244px] 2xl:ml-[335px] flex py-4 ">
                <div className="w-[630px] ">
                    <Stories />
                    <Feed />
                </div>
                <div className="w-[383px] pl-16 mt-4 max-[1159px]:hidden">
                    <User_Profile />
                    <Suggested />
                </div>
            </div>
        </div>
    )

}