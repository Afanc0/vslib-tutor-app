
import { Left4ScriptLogo } from "../../../../../icons/left4scriptlogo"
import { MenuGrid } from "../../../../../icons/MenuGrid"

export const PlatformHeader = () => {
    return (
        <header>
            <div className="px-20 py-8 bg-[#39125A] flex flex-row">
                <div className="flex flex-1 justify-start items-center">
                    <Left4ScriptLogo width={222} height={48} />
                </div>
                <div className="min-shrink flex flex-1 justify-center items-center">
                    <span className="text-xl">
                        <span className="font-bold">Multiple Game Scripting Platform - </span>
                        Learning Space
                    </span>
                </div>
                <div className="flex flex-1 justify-end items-center gap-10">
                    <button className="min-shrink bg-[#280C40] py-3 px-8 rounded-3xl mt-0">
                        <span className="text-base font-bold">Get Started</span>
                    </button>
                    <MenuGrid width={35} height={35} className="cursor-pointer" />
                </div>
            </div>
        </header>
    )
}
