import React from "react";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Layout from "../../components/HOC/Layout";
import axios from "axios";
import PersianNumber from "../../PersianNumber";
const CourseSub = () => {
  const location = useLocation();
  const id = location?.state.id;
  const [subCourses, setSubCourses] = useState([]);
  const getApi = () => {
    axios
      .get(`https://gbscoine.com/behyar/api/api/v1/course/sub/category/${id}`)
      .then((res) => setSubCourses(res.data));
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
          {subCourses.status ? (
            <p>{subCourses.message}</p>
          ) : (
            subCourses?.map((course) => (
              <div className="h-[350px] border bg-white rounded-md shadow-md hover:bg-[#f9f9f9] transition-all duration-300 hover:shadow-lg">
                <Link to={`/${course.slug}`} state={{ id: course.id }}>
                  <img src={course.image} className="w-full h-40" />
                </Link>
                <div className="p-2">
                  <Link
                    to={`/${course.slug}`}
                    state={{ id: course.id }}
                    title={course.title}
                  >
                    <h3 className="font-semibold text-gray-600 text-sm block overflow-hidden whitespace-nowrap text-ellipsis">
                      {course.title}
                    </h3>
                  </Link>

                  <p className="text-sm text-gray-600 ">
                    {shorten(course.des, 150)}
                  </p>

                  {course.price && (
                    <p className="text-left text-[#6fc341] font-semibold text-sm border-t border-gray-400">
                      <PersianNumber number={course.price} /> تومان
                    </p>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout(CourseSub);
