import React from "react";
import Arya from "../utils/Arya.png";

const AryaMessage = ({botMsg, time}) => {
    return(
        <div className="ml-[13px] mt-2 flex gap-2 w-full">
            <img className="rounded-[31px] bg-[#FFC746] w-10 h-10 overflow-hidden" src={Arya} alt="" loading="lazy" />
            <div className="pt-2 flex flex-col items-end w-fit max-lg:w-9/12 lg:w-fit max-w-[75%]">
                <div className="w-full bg-[#69235B] text-[#FFF] text-xs text-center tracking-[0.01em] font-inter font-normal pl-4 pr-3 py-4 rounded-r-2xl rounded-bl-2xl ">
                    <span>{botMsg}</span>
                </div>
                <div className="font-inter font-thin text-[#797C7B] text-[10px] leading-[10px] mt-[6px]">{time}</div>
            </div>
        </div>
    )
}

export default AryaMessage;