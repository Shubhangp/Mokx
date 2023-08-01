import React from "react";

const QueryExm = ({ques, setSendText }) => {
    return(
        <div className="bg-[#FBBC04] lg:w-1/4 md::w-1/4 w-9/12  m-1 px-[14px] py-[10px] text-left rounded-[19px] cursor-pointer"  onClick={() => setSendText(ques)}>
            <span className="font-inter font-normal text-xs text-[#69235B] leading-[14.52px] tracking-[1.5%]">{ques}</span>
        </div>
    )
}

export default QueryExm;