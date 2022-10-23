import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PersianNumber from "../../PersianNumber";
import { Link } from "react-router-dom";
import "../Header/style.css";
import { RiArchiveDrawerFill } from "react-icons/ri";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [categoryId, setCategoryId] = useState(17);

  const getApi = async () => {
    const data = await axios
      .get("https://gbscoine.com/behyar/api/api/v1/course/list")
      .then((res) => setCourses(res.data));
    return data;
  };

  useEffect(() => {
    getApi();
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

  return (
    <div className={"max-w-7xl mx-auto my-10 px-6"}>
      <div className="flex flex-row justify-between items-center border-b border-gray-300 px-3 py-6 gap-4 overflow-x-auto">
        <div className="flex flex-row justify-start items-center">
          {courses?.map((course,index) => (
            <div>
              <input
                id={course.id}
                name={"courseCatBtn"}
                type={"radio"}
                key={course.id}
                defaultChecked={index===0}
                className={`pb-2 transition-all duration-300 px-4 text-gray-500 min-w-max hidden radioBtn peer`}
                onClick={() => setCategoryId(course.id)}
              />
              <label
                htmlFor={course.id}
                className=" cursor-pointer pb-2 px-4 labelTxt peer-checked:border-b peer-checked:border-b-blue-600 peer-checked:text-blue-600 transition-all duration-300"
              >
                {course.title}
              </label>
            </div>
          ))}
        </div>
        <Link
          to={"/course"}
          state={{ id: 0 }}
          className="flex flex-row items-center justify-start"
        >
          مشاهده آرشیو دوره ها
          <span className="text-blue-600 text-2xl">
            <RiArchiveDrawerFill />
          </span>
        </Link>
      </div>
      <div className="w-full h-auto grid gap-8 grid-cols-4 my-8 ">
        {courses
          ?.find((item) => item.id === categoryId)
          ?.product.slice(0, 4)
          .map((post) => (
            <div className="hover:shadow-lg transition-shadow duration-300 shadow-md rounded-lg overflow-hidden h-[350px]">
              <Link to={`/${post.slug}`} state={{ id: post.id }} key={post.id}>
                <img className="w-full h-40" src={post.img} />
              </Link>

              <div className="px-4 py-2 h-[190px]">
                <Link
                  to={`/${post.slug}`}
                  state={{ id: post.id }}
                  title={post.title}
                >
                  <h3 className="py-2 font-semibold block text-ellipsis whitespace-nowrap overflow-hidden ">
                    {post.title}
                  </h3>
                </Link>
                <p className=" py-2 text-sm text-gray-500 leading-6 h-[96px] ">
                  {shorten(post.des, 100)}
                </p>
                <span className="block line-through text-left text-xs text-[#6fc341] border-t border-gray-500 pt-2">
                  <PersianNumber number={post.del_price} /> تومان
                </span>
                <span className="block  text-left text-sm text-[#6fc341]">
                  <PersianNumber number={post.price} /> تومان
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CourseList;
