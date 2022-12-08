import React from "react";
import ProfileLayout from "../../components/HOC/ProfileHOC";
import { BiUserCircle } from "react-icons/bi";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { BsBagCheck } from "react-icons/bs";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineComment } from "react-icons/ai";
import PersianNumber from "../../PersianNumber";


const Profile = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const [info, setInfo] = useState(null);
  const [lastItems,setLastItems]=useState([])
  console.log(userData);
  const getInfo = () => {
    axios
      .get(`https://gbscoine.com/behyar/api/api/v1/dashboard/${userData.token}`)
      .then((res) => setInfo(res.data));
  };
  const getLastItems=()=>{
    axios.get(`https://gbscoine.com/behyar/api/api/v1/history/list/${userData.token}`).then(res=>setLastItems(res.data))
  }
  useEffect(() => {
    getInfo();
    getLastItems()
  }, []);

  const shorten = (title, n) => {
    return title.length > n ? title.slice(0, n - 1) + "..." : title;
  };
  const createdNumber = (date) => {
    const number = date.slice(0, 2);
    return number;
  };
  const createdText = (string) => {
    const text = string.slice(2);
    return text;
  };

  console.log(info);
  return (
    <div className="mx-auto max-w-7xl my-10 px-10 h-auto">
      <div className="flex flex-col justify-start items-start bg-gray-50 rounded-md h-auto ">
        <div className="flex flex-row items-center justify-start gap-x-4 h-auto border-b border-gray-300 w-full p-6">
          <Link
            to="/profile/تنظیمات-حساب"
            className="rounded-full w-14 realtive h-14 group bg-blue-600 flex items-center justify-center hover:bg-[#273668]"
          >
            <i className="text-4xl group-hover:text-gray-400 text-white">
              {userData.avatar ? userData.avatar : <BiUserCircle />}
            </i>
            <i className="group-hover:inline-block hidden absolute text-xl text-white">
              <BsFillPencilFill />
            </i>
          </Link>
          <span className="text-base"> نام و نام خانوادگی: </span>
          <span className="text-sm text-blue-500 font-bold">
            {userData.full_name}
          </span>
        </div>
        <div className="flex flex-row items-cneter justify-between h-auto px-6 p-6 bg-gray-100 w-full ">
          {info?.map((item, index) => (
            <Link
              to={`/${item.slog}`}
              className="border-r border-gray-300 flex flex-row gap-x-2 justify-center items-center px-4"
            >
              <i className="text-4xl">
                {index === 0 && <BsBagCheck />}
                {index === 1 && <MdOutlineFavoriteBorder />}
                {index === 2 && <AiOutlineComment />}
              </i>
              <span className="text-sm">{item.title}</span>
              <span className="pr-16 text-xl">
                {" "}
                <PersianNumber number={item.count} />
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 rounded-md h-auto w-full my-4 py-6">
        <p className="border-b border-gray-300 mb-4 px-6 pb-2 font-medium ">محصولاتی که اخیرا مشاهده کرده اید</p>

        <div className="grid grid-cols-4 gap-4 px-6 ">
          {lastItems.slice(0,8).map((post) => (
            <div
              key={post.id}
              className="hover:shadow-lg transition-shadow duration-300 shadow-md rounded-lg overflow-hidden h-[350px] bg-white"
            >
              <Link to={`/${post.slug}`} state={{id:post.id}}>
                <img className="w-full h-40" src={post.image} />
              </Link>
              <div className="px-4 py-2 h-[190px]">
                <Link to={`/${post.slug}`} title={post.title} state={{id:post.id}}>
                  <h3 className="py-2 font-semibold text-ellipsis whitespace-nowrap overflow-hidden ">
                    {post.title}
                  </h3>
                </Link>
                <p className=" py-4 pt-2 text-sm text-gray-500 leading-6 h-[96px] ">
                  {shorten(post.description, 100)}
                </p>
                <p className="text-xs text-gray-500 pt-4">
                  <PersianNumber number={createdNumber(post.created_at)} />{" "}
                    {createdText(post.created_at)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout(Profile);
