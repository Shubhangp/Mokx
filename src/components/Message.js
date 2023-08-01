import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Arya from "../utils/Arya.png";
import AryaMessage from "./AryaMessage";
import Flash from "../utils/Flash.svg";
import Danger from "../utils/Danger.svg";
import QueryExm from "./QueryExm";
import Send from "../utils/Send.svg";
import Mic from "../utils/Mic.svg";
import useOnlineStatus from "../utils/userOnline";
import UserMessage from "./UserMessage";
import { useTranslation } from "react-i18next";

const Message = () => {
    const onlineStatus = useOnlineStatus();
    const [sendText, setSendText] = useState("");
    const [userMsg, setUserMsg] = useState([]);
    const [isEnglish, setIsEnglish] = useState(true);
    const messagesEndRef = useRef(null);
    // Call i18n Translation
    const { t, i18n } = useTranslation();
    
    const addZero = (num) => {
        return num < 10 ? `0${num}` : num;
    }
    
    let today = new Date();
    let hours = addZero(today.getHours());
    let minutes = addZero(today.getMinutes());
    let time = `${hours}:${minutes}`;

    const handleSend = () => {
        if(sendText == ""){

        }else{
        const newEntry = {id: new Date().getTime().toString(), msg: sendText, time: time}
        setUserMsg([...userMsg, newEntry]);
        setSendText("");
        }
    }

    const handleLangEng = () => {
        i18n.changeLanguage("en");
        setIsEnglish(true);
    }
    const handleLangHin = () => {
        i18n.changeLanguage("hi");
        setIsEnglish(false);
    }

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView();
    })
    
    return(
            <div className="flex flex-col items-center bg-[#F8F8FF] w-full pb-[100px]">
                <div className="fixed h-[124px] w-full drop-shadow-3xl bg-[#FFF]">
                    <div className="h-11 mt-[60px] mx-6 flex justify-between items-center">
                        <div className="flex items-center">
                            <Link to="/login">
                                <svg className="text-[#69235B]" width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)">
                                    <path d="M7.46869 3.43394C7.79171 3.13249 8.29794 3.14998 8.59939 3.473C8.90083 3.79602 8.88334 4.30225 8.56033 4.60369L5.0839 7.84795C4.94511 7.97748 4.82252 8.0921 4.71414 8.19502L15.0937 8.19502C15.5355 8.19502 15.8937 8.5532 15.8937 8.99502C15.8937 9.43685 15.5355 9.79502 15.0937 9.79502L4.6665 9.79502C4.78625 9.90939 4.92436 10.0386 5.08389 10.1875L8.51791 13.3922C8.84092 13.6937 8.8584 14.1999 8.55695 14.5229C8.2555 14.8459 7.74927 14.8634 7.42626 14.5619L3.95463 11.3221C3.54648 10.9413 3.18179 10.601 2.92647 10.2871C2.64873 9.94573 2.41671 9.53755 2.41672 9.01769C2.41672 8.49783 2.64874 8.08965 2.92648 7.74824C3.18181 7.43439 3.54649 7.09412 3.95465 6.7133L7.46869 3.43394Z" fill="rgba(2, 6, 12, 0.92)" fillOpacity="0.92"></path>
                                </svg>
                            </Link>
                            <div className="relative">
                                <img className="rounded-[31px] bg-[#FFC746] w-11 h-11  ml-9 overflow-hidden" src={Arya} alt="" loading="lazy" />
                                <span className={onlineStatus ? ("absolute w-2 h-2 bg-[#2BEF83] rounded-[50%] top-[31px] left-[71px]")
                                                                :("absolute w-2 h-2 bg-[#f01404] rounded-[50%] top-[31px] left-[71px]")}
                                ></span>
                            </div>
                            <div className="ml-9 flex flex-col gap-[5px]">
                                <span className="font-raleway font-medium text-base leading-4 text-[#69235B]">Arya</span>
                                <span className="font-inter font-thin text-xs leading-3 text-[#797C7B] ">Vedic AI Bot</span>
                            </div>
                        </div>
                        <div className=" text-base leading-4 mix-blend-normal flex gap-[2px]">
                            <span className={isEnglish ? "text-[#FBBC04] font-extrabold font-mukta cursor-pointer" :"text-[#FBDC94] font-normal font-mukta cursor-pointer"} onClick={() => handleLangEng()}>A</span>
                            <span className="text-[#FBBC04] font-normal">/</span>
                            <span className={!isEnglish ? "text-[#FBBC04] font-extrabold font-mukta cursor-pointer" :"text-[#FBDC94] font-normal font-mukta cursor-pointer"} onClick={() => handleLangHin()}>क</span>
                        </div>
                    </div>
                </div>
                <div className="pt-[124px]"></div>
                <AryaMessage 
                    botMsg={t("namaste")} 
                />
                <div className="flex mt-7 mb-2">
                    <img className="w-[19px] h-[21px] text-[#69235B]" src={Flash} alt="" />
                    <span className="font-kumbh font-normal text-base leading-[19.84px] tracking-[1.5%] text-[#69235B]">You can ask queries like:</span>
                </div>
                <QueryExm ques="What is the mantra in Rigveda 10.2.3?" setSendText={setSendText} />
                <QueryExm ques="What are the prescribed Vedic remedies for snake bites?" setSendText={setSendText} />
                <QueryExm ques="Can you tell me the significance of the Gayatri Mantra?" setSendText={setSendText} />
                 <div className="flex items-center gap-[5px] mt-[25px] mb-[43px]">
                    <img className="w-5 h-5" src={Danger} alt="" />
                    <span className="font-ABeeZee font-normal text-[#69235B] text-[13px] leading-[15.37px] tracking-[1.5%]">Limitation: May struggle with complex queries.</span>
                 </div>
                <AryaMessage botMsg={t("curiosityGuide")} time="09:25 AM" />
                <div className="mt-5">
                    {userMsg.length == 0 ? ("")
                        :(<span className="font-raleway font-medium text-[#69235B] text-xs leading-3">Today</span>)
                    }
                </div>
                {userMsg.map((data) =>
                    (<UserMessage key={data.id} msg={data.msg} time={data.time} />)
                )}
                <div ref={messagesEndRef} />
                <div className="fixed bottom-0 w-screen h-[86px] bg-[#F8F8FF] flex justify-center">
                    <div className="fixed bottom-0 flex items-center w-11/12 h-[56px] rounded-[30px] mb-[30px] bg-[#FFF] shadow-msg">
                        <input className="focus:outline-none text-[#0e0d0d] placeholder:text-[#A1A1A1] text-[13px] leading-[15.73px] ml-[22px] w-11/12 h-full" 
                                type="text" 
                                placeholder="Write your message"
                                value={sendText}
                                onChange={(e) => setSendText(e.target.value)}
                        />
                        <span className="cursor-pointer">
                            <img onClick={() => handleSend()} className="lg:w-10 lg:h-10 w-6 h-6" src={Send} alt="" />
                        </span>
                        <span className="cursor-pointer">
                            <img className="lg:w-10 lg:h-10 w-6 h-6" src={Mic} alt="" />
                        </span>
                    </div>
                </div>
            </div>
    )
}

export default Message;