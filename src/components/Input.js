import React from "react";

const Input = ({ tag, name, type, formValues, handleChange, handleBlur, errors, touched }) => {
    return(
        <div className="mb-4 relative">
            <div className={touched && errors ? "pb-2 relative flex flex-col border-b border-[#FF2D1B]"
                            :"pb-2 relative flex flex-col border-b border-[#CDD1D0]"}
            >
                <input className="focus:outline-none peer placeholder-transparent" 
                    type={type} 
                    name={name} 
                    id={name} 
                    placeholder={tag} 
                    autoComplete="off" 
                    value={formValues}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <label className={touched && errors ? "text-[#FF2D1B] text-base absolute top-[-25px] font-inter left-0 tracking-[0.8px] transition-all duration-[0.5s] peer-focus:top-[-25px] peer-focus:text-[#FF2D1B] peer-focus:text-base peer-placeholder-shown:text-[#ffa199] peer-placeholder-shown:top-0 peer-placeholder-shown:font-medium peer-placeholder-shown:text-lg"
                        : "text-[#69235B] text-base absolute top-[-25px] font-inter left-0 tracking-[0.8px] transition-all duration-[0.5s] peer-focus:top-[-25px] peer-focus:text-[#69235B] peer-focus:text-base peer-placeholder-shown:text-[#9f9f9f] peer-placeholder-shown:top-0 peer-placeholder-shown:font-medium peer-placeholder-shown:text-lg"} 
                    htmlFor={name}
                >
                    {tag}
                </label>
            </div>
            {touched && errors && (<p className="absolute right-0 text-[#FF2D1B] text-xs leading-3 font-inter">{errors}</p>)}
        </div>
    )
}

export default Input;