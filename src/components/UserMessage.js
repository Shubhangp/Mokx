import React from "react";
import Arya from "../utils/Arya.png";

const UserMessage = ({msg, time}) => {
    return(
        <div className="mt-2 w-full flex justify-end">
            <div className="mr-6 pt-2 flex flex-col items-end w-fit max-lg:w-9/12 lg:w-fit max-w-[75%]">
                <div className="w-full bg-[#FBBC04] text-[#FFF] text-xs text-center tracking-[0.01em] font-inter font-normal pl-3 pr-4 py-4 rounded-l-2xl rounded-br-2xl">
                    <span>{msg}</span>
                </div>
                <div className="font-inter font-thin text-[#797C7B] text-[10px] leading-[10px] mt-[6px]">{time}</div>
            </div>
        </div>
    )
}

export default UserMessage;