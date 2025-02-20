import Stories from "../_component/stories"
import Feed from "../_component/feed"

export default function Home () {

    return (
        <div className="w-screen flex justify-center ">
            <div className="xl:ml-[244px] 2xl:ml-[335px] flex lg:min-w-[1013px]">
                <div className="min-w-[630px] py-3">
                    <Stories />
                    <Feed />
                </div>
                <div className="w-full hidden bg-slate-100 ">
                    
                </div>
            </div>
        </div>
    )

}