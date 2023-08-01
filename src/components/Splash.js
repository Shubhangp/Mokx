import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Mokxlogo from "../utils/Mokxlogo.svg"

const Splash = () => {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
           navigate("/home");
        }, 3000)
    }, [])

    return(
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <span>
                <img src={Mokxlogo} alt="" />
            </span>
            <p className="font-semibold text-xl text-[#69235B] leading-6 font-kumbh mt-36">Back to Vedas 🕉️</p>
        </div>
    )
}

export default Splash;