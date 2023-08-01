import React from "react";

const Button = ({content, isSubmitting, isValid }) => {
    return(
        <button className={isValid ? "bg-[#FFC746] w-80 h-14 flex justify-center items-center rounded-lg mx-4  mt-[105px] cursor-pointer"
                            :"bg-[#FBDC94] w-80 h-14 flex justify-center items-center rounded-lg mx-4  mt-[105px] cursor-pointer"} 
                type="submit" disabled={isSubmitting}>
            <span className="font-kumbh font-medium text-xl leading-7 text-[#69235B]">{content}</span>
        </button>
    )
}

export default Button;