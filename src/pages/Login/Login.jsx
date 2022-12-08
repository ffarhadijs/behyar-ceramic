import React from "react";
import { Field, Form, Formik } from "formik";
import { FiUserPlus } from "react-icons/fi";
import { BsLock } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/HOC/Layout";
import { BsPhone } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { saveUser } from "../../redux/features/auth/authSlice";

const SignupSchema = Yup.object().shape({
  phone: Yup.string()
    .required("پر کردن این فیلد الزامی است")
    .max(10, "حداکثر باید 10 رقم باشد"),
  password: Yup.string()
    .required("پر کردن این فیلد الزامی است")
    .min(6, "حداقل باید 6 کاراکتر باشد"),
});

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.value);

  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    status: "",
    avatar: "",
    full_name: "",
    token: "",
    message: "",
  });

  const initialValues = {
    phone: "",
    password: "",
  };
  return (
    <div className="max-w-[640px] h-auto px-5 py-10 rounded-2xl mx-4 sm:mx-auto shadow-2xl">
      <div className="flex flex-row items-center mt-3 my-10">
        <span className="text-2xl h-6 text-[#0095da]">
          <FiUserPlus />
        </span>
        <div>
          <h4 className="text-xl bold px-3 font-vazir">ورود</h4>
          <p className="font-vazir px-3 text-sm">وارد حساب کاربری خود شوید</p>
        </div>
      </div>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          try {
            const res = await axios.post(
              "https://gbscoine.com/behyar/api/api/v1/login",
              values
            );

            dispatch(saveUser(res.data));
            if (res.data.status == 200) {
              navigate("/");
            }
            setUserData({
              status: res.status,
              avatar: res.data.avatar,
              full_name: res.data.full_name,
              token: res.data.token,
              message: res.data.message,
            });
            localStorage.setItem("user", JSON.stringify(res.data));
          } catch {}
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="flex flex-col items-start w-full h-20 mt-3 sm:w-full">
              <div className="w-full flex flex-row items-center justify-start">
                <span className="text-lg h-5">
                  <BsPhone />
                </span>
                <Field
                  className="border-0 w-full px-4 py-2 outline-none border-b border-b-[#c5c5c5] transition-all duration-300 placeholder:font-vazir text-sm font-vazir"
                  name="phone"
                  type={"number"}
                  placeholder="شماره تماس"
                />
              </div>
              {errors.phone && touched.phone && (
                <span className="text-[#ff0000] text-xs font-bold my-1 mx-10 block font-vazir ">
                  {errors.phone}
                </span>
              )}
            </div>
            <div className="flex flex-col items-start w-full h-20 sm:w-full">
              <div className="w-full flex flex-row items-center justify-start">
                <span className="text-lg h-5">
                  <BsLock />
                </span>
                <Field
                  className="border-0 w-full px-4 py-2 outline-none border-b border-b-[#c5c5c5] transition-all duration-300 placeholder:font-vazir text-sm font-vazir"
                  name="password"
                  type={"password"}
                  placeholder="گذرواژه"
                />
              </div>
              {errors.password && touched.password && (
                <span className="text-[#ff0000] text-xs font-bold my-1 mx-10 block font-vazir">
                  {errors.password}
                </span>
              )}
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center min-h-max relative my-6">
              <span className="text-[#ff0000] text-base font-semibold font-vazir block w-full text-center absolute -top-8 left-auto mb-4">
                {userData.message}
              </span>
              <button
                type="submit"
                className="text-sm font-semibold mb-6 sm:mb-0 rounded-[50px] w-[100px] text-white appearance-none outline-none bg-[#0095da] border-0 p-[12px] flex flex-row items-center justify-between cursor-pointer transition-colors duration-300 hover:bg-white  hover:text-[#0095da] hover:shadow-[#0095da4d] hover:shadow-xl h-[45px]"
              >
                <p className="text-base font-vazir "> ورود </p>
                <span className="text-2xl h-6">
                  <BsArrowLeft />
                </span>
              </button>
              <div className="flex flex-col sm:flex-row  font-vazir items-center">
                <span className="font-vazir my-4 text-sm">
                  حساب کاربری ندارید؟
                </span>
                <Link to="/sign-up">
                  <button
                    className={
                      "rounded-[50px] text-sm font-semibold text-white appearance-none outline-none bg-[#3b414d] h-[45px] border-0 w-[100px] p-[12px] cursor-pointer transition-colors duration-300 mr-[10px] font-vazir hover:text-[#3b414d] hover:bg-white hover:shadow-[#3b414d4d] hover:shadow-xl "
                    }
                  >
                    ثبت نام
                  </button>
                </Link>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Layout(Login);
