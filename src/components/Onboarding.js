import React from "react";
import Welcome from "../utils/Welcome.svg";
import Facebook from "../utils/Facebook.svg";
import Google from "../utils/Google.svg";
import Apple from "../utils/Apple.svg";
import { Link } from "react-router-dom";

const Onboarding = () => {
    return(
        <div className="bg-[#69235B] lg:h-fit h-screen">
            <div className="w-full bg-gradient-to-b from-circle from-[rgba(22,5,37,255)] from-10% via-[rgba(73,38,154,255)] via-30% to-[rgba(248,203,171,255)] to-90% flex justify-center items-center pt-5">
                <img src={Welcome} loading="lazy" alt="" />
                <span className="bg-[#CBCBFF] absolute top-[308px] w-48 h-8 flex justify-center items-center rounded-md">
                    <p className="text-base leading-4 font-medium font-inter tracking-wide text-[#69235B]">Arya, Vedic AI Guide</p>
                </span>
            </div>
            <div className="flex flex-col justify-center items-center mt-10 mx-9">
                <div>
                    <span className="font-semibold text-3xl font-kumbh leading-10 text-[#FFF]">
                        Discover the timeless wisdom of <span className="text-[#FFC746]">the Vedas.</span>
                    </span>
                </div>
                <div>
                    <span className="font-inter font-light text-base leading-7 text-[#FBBC04]"><span className="text-[#FFF]">Sign up and </span>journey through ancient knowledge with Arya 🌟</span>
                </div>
                <div className="w-[184px] mt-6 flex justify-between">
                    <div className="w-12 h-12 border border-[#A8B0AF] rounded-[50%] flex justify-center items-center cursor-pointer">
                        <img className="w-6 h-6" src={Facebook} loading="lazy" alt="" />
                    </div>
                    <div className="w-12 h-12 border border-[#A8B0AF] rounded-[50%] flex justify-center items-center cursor-pointer">
                        <img className="w-6 h-6" src={Google} loading="lazy" alt="" />
                    </div>
                    <div className="w-12 h-12 border border-[#A8B0AF] rounded-[50%] flex justify-center items-center cursor-pointer">
                        <img className="w-6 h-6" src={Apple} loading="lazy" alt="" />
                    </div>
                </div>
                <div className="flex gap-1 items-center mt-3">
                    <span className="w-36 h-px bg-[#CDD1D0]"></span>
                    <span className="text-[#CDD1D0]">OR</span>
                    <span className="w-36 h-px bg-[#CDD1D0]"></span>
                </div>
                <Link to="/signup" className="bg-[#FFC746] w-80 h-14 flex justify-center items-center rounded-lg mx-4  mt-[14px]">
                    <span className="font-kumbh font-medium text-xl leading-7 text-[#69235B]">Sign up with mail</span>
                </Link>
                <div className="mt-6 pb-4">
                    <span className="font-kumbh font-normal text-xl leading-4 tracking-[0.1px] text-[#FFF]">Existing account? <Link to="/login" className="text-[#FBBC04] cursor-pointer">Log in</Link></span>
                </div>
            </div>
        </div>
    )
}

export default Onboarding;