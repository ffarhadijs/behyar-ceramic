import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/HOC/Layout";
import PersianNumber from "../../PersianNumber";
import { AiOutlineClose } from "react-icons/ai";

const Basket = () => {
  const [boughtCourses, setBoughtCourses] = useState([]);
  const [cartId, setCartId] = useState("");
  const token = JSON.parse(localStorage.getItem("user"))?.token;
  const getApi = () => {
    axios
      .get(`https://gbscoine.com/behyar/api/api/v1/cart/list/${token}`)
      .then((res) => setBoughtCourses(res.data));
  };
  useEffect(() => {
    getApi();
  }, []);
  const closeHandler = (id) => {
    setCartId(id);
    axios
      .post(`https://gbscoine.com/behyar/api/api/v1/remove/cart/${id}`)
      .then(getApi());
  };
  const payHandler = () => {
    axios
      .post(`https://gbscoine.com/behyar/api/api/v1/gateway/api/${token}`)
      .then((res) =>
        window.location.assign(res.data.status == 200 && `${res.data.url}`)
      );
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 flex flex-row gap-8 items-start">
      <div className="flex flex-col items-start justify-start gap-4 w-[830px]">
        {boughtCourses.course_list?.map((course) => (
          <div className="relative w-[830px] font-semibold shadow-sm border rounded-md h-auto p-4 flex flex-row items-center justify-between hover:shadow-md transition-all duration-300">
            <div className="flex flex-row gap-4 items-center justify-start">
              <img src={course.image} className="w-20 h-auto" />
              <Link to={`/${course.slug}`} state={{ id: course.course_id }}>
                {course.title}
              </Link>
            </div>
            <span className="text-green-500 font-semibold">
              {" "}
              <PersianNumber number={course.price} /> تومان
            </span>
            <button
              onClick={() => closeHandler(course.cart_id)}
              className="absolute -left-3 -top-3 rounded-full text-lg w-8 h-8 shadow-sm border flex items-center justify-center bg-white hover:text-red-500 hover:shadow-md transition-all duration-300"
            >
              <AiOutlineClose />
            </button>
          </div>
        ))}
      </div>
      <div className=" text-gray-600 w-[300px] text-15px] shadow-sm border rounded-md h-auto p-4 flex flex-col items-start justify-start">
        <div className="flex flex-row justify-between w-full my-2">
          <span> تعداد دوره ها:</span>
          {boughtCourses.course_list?.length>0 ? (
            <span>
              <PersianNumber number={boughtCourses.count_cart} />
            </span>
          ) : (
            <span><PersianNumber number={0} /></span>
          )}
        </div>
        <div className="flex flex-row justify-between w-full my-2">
          <span>مبلغ کل:</span>
          {boughtCourses.course_list?.length>0 ? (
            <span>
              <PersianNumber number={boughtCourses.total_price} /> تومان
            </span>
          ) : (
            <span><PersianNumber number={0} /></span>
          )}
        </div>
        <button
          onClick={payHandler}
          className="w-full text-center py-2.5 font-semibold mt-8 rounded-md outline-none bg-green-500 hover:bg-green-600 transition-all duration-300 text-white"
        >
          ثبت و پرداخت نهایی
        </button>
      </div>
    </div>
  );
};

export default Layout(Basket);
