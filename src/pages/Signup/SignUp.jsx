import React, { useState } from "react";
import styles from "./SignUp.module.css";
import { Field, Form, Formik } from "formik";
import { FiUserPlus } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone, BsLock } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import * as Yup from "yup";
import axios from "axios";
import ReactInputVerificationCode from "react-input-verification-code";
import Layout from "../../components/HOC/Layout";
import { Link } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "حداقل طول اسم باید 3 حرف باشد")
    .required("پر کردن این فیلد الزامی است"),
  family: Yup.string()
    .min(3, "حداقل اسم باید 3 حرف باشد")
    .required("پر کردن این فیلد الزامی است"),
  email: Yup.string()
    .email("ایمیل وارد شده نامعتبر است")
    .required("پر کردن این فیلد الزامی است"),
  phone: Yup.string()
    .required("پر کردن این فیلد الزامی است")
    .max(10, "حداکثر باید 10 رقم باشد"),
  password: Yup.string()
    .required("پر کردن این فیلد الزامی است")
    .min(6, "حداقل باید 6 کاراکتر باشد"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "با پسورد وارد شده مطابقت ندارد")
    .required("پر کردن این فیلد الزامی است"),
  agree: Yup.bool().oneOf([true], "ابتدا قوانین را تایید کنید"),
});

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [userData, setUserData] = useState([]);
  const [message, setMessage] = useState(null);
  const [token, setToken] = useState("");
  const [secondMsg,setSecondMsg]=useState(null)
  const [verifyStatus, setVerifyStatus] = useState("");
  const [verificationCode, setVerificationCode] = useState();

  console.log(verificationCode);

  const changeInfoHandler = () => {
    setStatus(0);
    setLoading(false);
  };
  const confirmHandler = (e) => {
    e.preventDefault();
    const code = {
      sms: verificationCode,
      token: token,
    };
    axios
      .post("https://gbscoine.com/behyar/api/api/v1/active-code", code)
      .then((response) => {
        console.log(response.data.status);
        console.log(response.data.message);
        console.log(response.data.token);
        setVerifyStatus(response.data.status);
        setSecondMsg(response.data.message)
      });
  };

  const initialValues = {
    name: "" || userData.name,
    family: "" || userData.family,
    email: "" || userData.email,
    phone: "" || userData.phone,
    password: "" || userData.password,
    confirmPassword: "" || userData.confirmPassword,
    agree: false || userData.agree,
  };

  return (
    <div className="px-6">
    <div className="max-w-[580px] h-auto px-5 py-10 rounded-2xl mx-auto shadow-2xl">
      {status === 200 ? (
        <div>
          <h1 className="text-lg mb-5">{secondMsg?secondMsg:message} </h1>
          <div
            className={styles.divVerify}
            style={{
              direction: "ltr",
              width: "fit-content",
              margin: "60px auto",
            }}
          >
            <ReactInputVerificationCode
              onChange={setVerificationCode}
              placeholder={"0"}
            />
          </div>
          <div className="mt-9 flex items-center flex-col">
            <button
              onClick={confirmHandler}
              className={
                "font-semibold rounded-[50px] w-max text-white appearance-none outline-none bg-[#0095da] border-0 px-6 py-3 font-vazir flex flex-row items-center justify-between cursor-pointer transition-colors duration-300 hover:bg-white hover:text-[#0095da] hover:shadow-xl hover:shadow-[#0095da4d] my-4"
              }
            >
              ثبت کد
            </button>
            <button
              onClick={changeInfoHandler}
              className="rounded-[50px] text-white appearance-none outline-none bg-slate-700 border-none w-[120px] p-3 cursor-pointer transition-all text-base mr-2 hover:bg-white hover:text-gray-800 shadow-sm font-vazir "
            >
              تغییر اطلاعات{" "}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-row items-center mt-2 mb-10">
            <span className="text-2xl h-6 text-[#0095da] ">
              <FiUserPlus />
            </span>
            <div>
              <h4 className="text-2xl font-bold px-3 font-vazir">عضویت</h4>
              <p className="p-3 text-base font-vazir">
                حساب کاربری خود را ایجاد کنید
              </p>
            </div>
          </div>
          <Formik
            enableReinitialize
            initialValues={initialValues || userData}
            validationSchema={SignupSchema}
            onSubmit={async (values) => {
              setUserData({ ...values });
              try {
                setLoading(true);
                const res = await axios.post(
                  "https://gbscoine.com/behyar/api/api/v1/register",
                  userData
                );
                setStatus(res.status);
                setMessage(res.data.message);
                setToken(res.data.token);
                console.log(res.status);
                console.log(res.data.message);
                console.log(res.data.token);
              } catch (error) {
                setLoading(false);
                console.log(error.message);
              }
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="w-full flex flex-col items-start justify-start">
                  <div className="flex sm:flex-row flex-col w-full h-auto items-center justify-between">
                    <div className="flex flex-col w-full sm:w-11/12 items-start justify-start h-[90px]">
                      <div className="flex flex-row items-center justify-start w-full">
                        <span className=" text-lg ">
                          <BiUser />
                        </span>
                        <Field
                          className="mr-2 border-0 w-full px-4 py-2 outline-none border-b border-b-[#c5c5c5] transition-all duration-300 placeholder:font-vazir text-sm font-vazir "
                          name="name"
                          type="text"
                          placeholder="نام"
                        />
                      </div>
                      <div>
                        {errors.name && touched.name && (
                          <span className="text-xs font-vazir text-[#ff0000] my-2 mx-10">
                            {errors.name}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col w-full sm:w-11/12 sm:mr-4 mr-0 items-start justify-start h-[90px]">
                      <div className="flex flex-row items-center justify-start w-full">
                        <Field
                          className="border-0 w-full px-4 py-2 outline-none border-b border-b-[#c5c5c5] transition-all duration-300 placeholder:font-vazir text-sm font-vazir "
                          name="family"
                          type="text"
                          placeholder="نام خانوادگی"
                        />
                      </div>
                      <div>
                        {errors.family && touched.family && (
                          <span className="text-xs font-vazir text-[#ff0000] my-2 mx-10">
                            {errors.family}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col w-full items-start justify-start h-[90px]">
                    <div className="flex flex-row items-center justify-start w-full">
                      <span className=" text-lg ">
                        <AiOutlineMail />
                      </span>
                      <Field
                        className="sm: mr-2 border-0 w-full px-4 py-2 outline-none border-b border-b-[#c5c5c5] transition-all duration-300 placeholder:font-vazir text-sm font-vazir "
                        name="email"
                        type="email"
                        placeholder="ایمیل"
                      />
                    </div>
                    <div>
                      {errors.email && touched.email && (
                        <span className="text-xs font-vazir text-[#ff0000] my-2 mx-10">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col w-full items-start justify-start h-[90px]">
                    <div className="flex flex-row items-center justify-start w-full">
                      <span className=" text-lg ">
                        <BsPhone />
                      </span>
                      <Field
                        className="sm: mr-2 border-0 w-full px-4 py-2 outline-none border-b border-b-[#c5c5c5] transition-all duration-300 placeholder:font-vazir text-sm font-vazir "
                        name="phone"
                        type="number"
                        placeholder="شماره تماس"
                      />
                    </div>
                    <div>
                      {errors.phone && touched.phone && (
                        <span className="text-xs font-vazir text-[#ff0000] my-2 mx-10">
                          {errors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex sm:flex-row flex-col w-full h-auto items-center justify-between">
                    <div className="flex flex-col w-full sm:w-11/12 items-start justify-start h-[90px]">
                      <div className="flex flex-row items-center justify-start w-full">
                        <span className=" text-lg ">
                          <BsLock />
                        </span>
                        <Field
                          className="mr-2 border-0 w-full px-4 py-2 outline-none border-b border-b-[#c5c5c5] transition-all duration-300 placeholder:font-vazir text-sm font-vazir "
                          name="password"
                          type="password"
                          placeholder="گذرواژه"
                        />
                      </div>
                      <div>
                        {errors.password && touched.password && (
                          <span className="text-xs font-vazir text-[#ff0000] my-2 mx-10">
                            {errors.password}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col w-full sm:w-11/12 sm:mr-4 mr-0 items-start justify-start h-[90px]">
                      <div className="flex flex-row items-center justify-start w-full">
                        <Field
                          className="border-0 w-full px-4 py-2 outline-none border-b border-b-[#c5c5c5] transition-all duration-300 placeholder:font-vazir text-sm font-vazir "
                          name="confirmPassword"
                          type="password"
                          placeholder="تکرار گذرواژه"
                        />
                      </div>
                      <div>
                        {errors.confirmPassword && touched.confirmPassword && (
                          <span className="text-xs font-vazir text-[#ff0000] my-2 mx-10">
                            {errors.confirmPassword}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pr-5 h-10 font-vazir">
                    <label className="text-sm">
                      <Field
                        name="agree"
                        type="checkbox"
                        id="agree"
                        className="mx-2"
                      />
                      با قوانین و مقررات سایت موافقم
                    </label>
                    {errors.agree && touched.agree && (
                      <span className="text-xs font-vazir text-[#ff0000] my-2 mx-10">
                        {errors.agree}
                      </span>
                    )}
                  </div>

                  <div className="mt-9 flex flex-col sm:flex-row justify-between items-center w-full">
                    <button
                      type="submit"
                      className={`text-sm font-semibold sm:mb-0 rounded-[50px] w-[100px] text-white appearance-none outline-none bg-[#0095da] border-0 p-[12px] flex flex-row items-center justify-between cursor-pointer transition-colors duration-300 hover:bg-white hover:text-[#0095da] hover:shadow-[#0095da4d] hover:shadow-xl ${
                        loading && ` cursor-not-allowed opacity-50 shadow-none`
                      }`}
                      disabled={loading}
                    >
                      <p className="text-sm font-vazir">ثبت نام</p>
                      <span>
                        <BsArrowLeft />
                      </span>
                    </button>
                    <div className="py-6 sm:py-0 flex flex-col sm:flex-row justify-start items-center">
                      <span className="text-sm font-vazir py-1">
                        حساب کاربری دارید؟
                      </span>
                      <Link to="/login">
                        <button className="rounded-[50px] text-white appearance-none outline-none bg-slate-700 border-none w-[100px] p-3 cursor-pointer text-base mr-2 hover:bg-white hover:text-gray-800 hover:shadow-xl hover:shadow-[#3b414d4d] font-vazir transition-all duration-300">
                          وارد شوید
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </div>
    </div>
  );
};

export default Layout(SignUp);
