import React from "react";
import Facebook from "../utils/Facebook.svg";
import Google from "../utils/Google.svg";
import Apple from "../utils/AppleLogin.svg";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FeedbackSchema = Yup.object().shape({
    email: Yup.string()
      .required('*Email is required!')
      .email('*Invalid Email'),
    password: Yup.string()
    .required('password is required')
 });


const SignIn = () => {
    const navigate = useNavigate();

    return(
        <div className="flex flex-col items-center pb-[37px]">
            <Link to="/home" className="absolute left-6 top-[61px] text-[#000E08] cursor-pointer">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)">
                    <path d="M7.46869 3.43394C7.79171 3.13249 8.29794 3.14998 8.59939 3.473C8.90083 3.79602 8.88334 4.30225 8.56033 4.60369L5.0839 7.84795C4.94511 7.97748 4.82252 8.0921 4.71414 8.19502L15.0937 8.19502C15.5355 8.19502 15.8937 8.5532 15.8937 8.99502C15.8937 9.43685 15.5355 9.79502 15.0937 9.79502L4.6665 9.79502C4.78625 9.90939 4.92436 10.0386 5.08389 10.1875L8.51791 13.3922C8.84092 13.6937 8.8584 14.1999 8.55695 14.5229C8.2555 14.8459 7.74927 14.8634 7.42626 14.5619L3.95463 11.3221C3.54648 10.9413 3.18179 10.601 2.92647 10.2871C2.64873 9.94573 2.41671 9.53755 2.41672 9.01769C2.41672 8.49783 2.64874 8.08965 2.92648 7.74824C3.18181 7.43439 3.54649 7.09412 3.95465 6.7133L7.46869 3.43394Z" fill="rgba(2, 6, 12, 0.92)" fillOpacity="0.92"></path>
                </svg>
            </Link>
            <div className="relative flex justify-center mt-[145px] w-[127px] h-[21px]">
                <span className="text-[#69235B] font-kumbh font-bold text-lg leading-[18px] not-italic"><span>Log in </span>to Mokx</span>
                <span className="absolute bg-[#FFC746] -z-10 w-[56px] h-[8px] bottom-0 left-0"></span>
            </div>
            <div className="flex justify-center mt-4 mx-[41px]">
                <span className="font-inter font-light text-sm tracking-[0.1px] text-center text-[#69235B]">Welcome back! Sign in using your social account or email to continue us</span>
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
            <div className="flex gap-1 items-center mt-[30px]">
                <span className="w-36 h-px bg-[#CDD1D0]"></span>
                <span className="text-[#CDD1D0]">OR</span>
                <span className="w-36 h-px bg-[#CDD1D0]"></span>
            </div>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={FeedbackSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        toast.success('Signin successfully, you will redirected automatically');
                        setSubmitting(false);
                        setTimeout(()=>{
                            navigate("/chat_bot");
                        }, 6000)
                    }, 400);
                }}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid, isSubmitting,}) => (
                <form action="submit" className="flex flex-col items-center gap-6 mt-[30px] mx-[23px]" onSubmit={handleSubmit}>
                    <Input tag="Your email" name="email" type="email" formValues={values.email} handleChange={handleChange} handleBlur={handleBlur} errors={errors.email} touched={touched.email} />
                    <Input tag="Password" name="password" type="password" formValues={values.password} handleChange={handleChange} handleBlur={handleBlur} errors={errors.password} touched={touched.password} />
                    <ToastContainer />
                    <Button content="Login" isSubmitting={isSubmitting} isValid={isValid}  />
                </form>
                )}
            </Formik>
            <div className="mt-[30px]">
                <span className="text-[#FBBC04] font-kumbh font-normal text-xl leading-[14px] tracking-[0.1px] cursor-pointer">Forgot Password?</span>
            </div>
        </div>
    )
}

export default SignIn;