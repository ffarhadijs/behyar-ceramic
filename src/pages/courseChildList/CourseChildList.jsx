import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../../components/HOC/Layout";
import { Link } from "react-router-dom";
import PersianNumber from "../../PersianNumber";

const CourseChildList = () => {
  const [courses, setCourses] = useState([]);
  const location = useLocation();
  const id = location?.state.id;

  const getApi = () => {
    axios
      .get(`https://gbscoine.com/behyar/api/api/v1/course/child/list/${id}`)
      .then((res) => setCourses(res.data));
  };
  useEffect(() => {
    getApi();
  }, []);
  const shorten = (text, n) => {
    return text.length > n ? text.slice(0, n - 1) + "..." : text;
  };
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="bg-[#f3f3f3] rounded-md p-6">
        <h1 className="text-lg font-semibold text-gray-600 pb-6">
          لیست دوره ها{" "}
        </h1>
        <div className="grid grid-cols-4 w-full gap-8 p-4">
          {courses.status ? (
            <p>{courses.message}</p>
          ) : (
            courses.map((course) => (
              <div className="border h-[350px] bg-white rounded-md shadow-md hover:bg-[#f9f9f9] transition-all duration-300 hover:shadow-lg">
                <Link to={`${course.slug}`} state={{ id: course.id }}>
                  <img src={course.image} className="w-full h-40" />
                </Link>

                <div className="p-2 h-[190px] flex flex-col justify-between items-start">
                  <div className="w-full">
                  <Link  to={`${course.slug}`} state={{ id: course.id }} title={course.title}>
                    <h3 className="font-semibold text-gray-600 text-sm block overflow-hidden whitespace-nowrap text-ellipsis">
                      {course.title}
                    </h3>
                  </Link>
                    <p className="text-sm text-gray-600 ">
                      {shorten(course.des, 150)}
                    </p>{" "}
                  </div>
                  <div className="border-t border-gray-500 block text-left w-full">
                    <span className="block line-through text-left text-xs text-[#6fc341] pt-2">
                      <PersianNumber number={course.del_price} /> تومان
                    </span>
                    <span className="block  text-left text-sm text-[#6fc341]">
                      <PersianNumber number={course.price} /> تومان
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout(CourseChildList);
