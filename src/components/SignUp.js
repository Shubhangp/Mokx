import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";
import Mokxlogo from "../utils/Mokxlogo.svg"
import axios from "axios";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FeedbackSchema = Yup.object().shape({
    username: Yup.string()
        .required('*Name is required!')
        .min(2, '*Too short'),
    email: Yup.string()
        .required('*Email is required!')
        .email('*Invalid Email'),
    password: Yup.string()
        .required('Password is required!')
        .min(8, 'Password size is not less than 8')
        .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                '*Make strong password(Atyc@345)!'),
    confirm: Yup.string()
        .required('Confirm your password!')
        .oneOf([Yup.ref('password')], '*Your password could not match!')
 });

const SignUp = () => {
    const navigate = useNavigate();

    return(
        <div className="flex flex-col items-center pb-[37px]">
            <div className="mt-[69px]">
                <img className="w-[72px] h-16" loading="lazy" src={Mokxlogo} alt="welcome" />
            </div>
            <Link to="/home" className="absolute left-6 top-[61px] text-[#000E08] cursor-pointer">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)">
                    <path d="M7.46869 3.43394C7.79171 3.13249 8.29794 3.14998 8.59939 3.473C8.90083 3.79602 8.88334 4.30225 8.56033 4.60369L5.0839 7.84795C4.94511 7.97748 4.82252 8.0921 4.71414 8.19502L15.0937 8.19502C15.5355 8.19502 15.8937 8.5532 15.8937 8.99502C15.8937 9.43685 15.5355 9.79502 15.0937 9.79502L4.6665 9.79502C4.78625 9.90939 4.92436 10.0386 5.08389 10.1875L8.51791 13.3922C8.84092 13.6937 8.8584 14.1999 8.55695 14.5229C8.2555 14.8459 7.74927 14.8634 7.42626 14.5619L3.95463 11.3221C3.54648 10.9413 3.18179 10.601 2.92647 10.2871C2.64873 9.94573 2.41671 9.53755 2.41672 9.01769C2.41672 8.49783 2.64874 8.08965 2.92648 7.74824C3.18181 7.43439 3.54649 7.09412 3.95465 6.7133L7.46869 3.43394Z" fill="rgba(2, 6, 12, 0.92)" fillOpacity="0.92"></path>
                </svg>
            </Link>
            <div className="relative flex justify-center mt-3 w-[165px] h-[21px]">
                <span className="text-[#69235B] font-kumbh font-bold text-lg leading-[18px] not-italic">Sign upwith Email</span>
                <span className="absolute bg-[#FFC746] w-[50px] h-[8px] right-0 -z-10 bottom-[1.5px]"></span>
            </div>
            <div className="flex justify-center mt-4 mx-[31px]">
                <span className="font-inter font-light text-sm tracking-[0.1px] text-center text-[#69235B]">Enter your  details and dive into a realm of ancient wisdom! 💫</span>
            </div>
            <Formik
                initialValues={{ username: '', email: '', password: '', confirm: '' }}
                validationSchema={FeedbackSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    toast.success('Signup successfully, you will redirected automatically');
                    setSubmitting(false);
                    setTimeout(()=>{
                            navigate("/login");
                        }, 6000)
                    }, 400);
                }}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid, isSubmitting,}) => (
                <form action="submit" className="flex flex-col items-center gap-6 mt-[30px] mx-[23px]" onSubmit={handleSubmit}>
                    <Input tag="Your name" name="username" type="text" formValues={values.username} handleChange={handleChange} handleBlur={handleBlur} errors={errors.username} touched={touched.username} />
                    <Input tag="Your email" name="email" type="email" formValues={values.email} handleChange={handleChange} handleBlur={handleBlur} errors={errors.email} touched={touched.email} />
                    <Input tag="Password" name="password" type="password" formValues={values.password} handleChange={handleChange} handleBlur={handleBlur} errors={errors.password} touched={touched.password} />
                    <Input tag="Comfirm Password" name="confirm" type="password" formValues={values.confirm} handleChange={handleChange} handleBlur={handleBlur} errors={errors.confirm} touched={touched.confirm} />
                    <ToastContainer />
                    <Button content="Create an account" isSubmitting={isSubmitting} isValid={isValid} />
                </form>
                )}
            </Formik>
        </div>
    )
}

export default SignUp;