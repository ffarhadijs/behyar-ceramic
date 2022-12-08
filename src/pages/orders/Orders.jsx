import axios from "axios";
import React, { useState, useEffect } from "react";
import ProfileLayout from "../../components/HOC/ProfileHOC";
import { Link } from "react-router-dom";
import PersianNumber from "../../PersianNumber";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const userData = JSON.parse(localStorage.getItem("user"));
  const getOrders = () => {
    axios
      .get(
        `https://gbscoine.com/behyar/api/api/v1/order/list/${userData.token}`
      )
      .then((res) => setOrders(res.data));
  };
  useEffect(() => {
    getOrders();
  }, []);

  const shorten = (title, n) => {
    return title.length > n ? title.slice(0, n - 1) + "..." : title;
  };

  return (
    <div className="mx-auto max-w-7xl my-10 px-10 h-auto">
      <div className="bg-gray-50 rounded-md h-auto w-full my-4 py-6">
        <p className="border-b border-gray-300 mb-4 px-6 pb-2 font-medium ">
          محصولاتی که خریداری کرده اید
        </p>
        <div className="grid grid-cols-4 gap-4 px-6 ">
          {orders?.map((post) => (
            <div
              key={post.id}
              className="hover:shadow-lg transition-shadow duration-300 shadow-md rounded-lg overflow-hidden h-[350px] bg-white"
            >
              <Link to={`/${post.slug}`} state={{ id: post.id }} key={post.id}>
                <img className="w-full h-40" src={post.image} />
              </Link>

              <div className="px-4 py-2 h-[190px]">
                <Link
                  to={`/${post.slug}`}
                  state={{ id: post.id }}
                  title={post.title}
                >
                  <h3 className="py-2 font-semibold block text-sm text-ellipsis whitespace-nowrap overflow-hidden ">
                    {post.title}
                  </h3>
                </Link>
                <p className=" py-2 text-xs text-gray-500 leading-6 h-[114px] ">
                  {shorten(post.des, 120)}
                </p>
                <span className="block  text-left text-sm text-[#6fc341]">
                  <PersianNumber number={post.price} /> تومان
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout(Orders);
