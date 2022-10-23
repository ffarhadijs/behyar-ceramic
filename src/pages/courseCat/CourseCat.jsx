import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/HOC/Layout";

const CourseCat = () => {
  const [courses, setCourses] = useState([]);
  const getApi = () => {
    axios
      .get("https://gbscoine.com/behyar/api/api/v1/category/course")
      .then((res) => setCourses(res.data));
  };
  useEffect(() => {
    getApi();
  }, []);
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="bg-[#f3f3f3] rounded-md p-6">
        <h1 className="text-lg font-semibold text-gray-600 pb-6">
          دسته بندی دوره ها
        </h1>
        <div className="grid grid-cols-4 w-full gap-8 p-4">
          {courses.map((course) => (
            <div className="h-[350px] border bg-white rounded-md shadow-md hover:bg-[#f9f9f9] transition-all duration-300 hover:shadow-lg">
              <Link to={`/${course.slug}`} state={{ id: course.id }}>
                <img src={course.image} className="w-full h-40" />
              </Link>
              <div className="p-2">
                <Link to={`/${course.slug}`} state={{ id: course.id }} title={course.title}>
                  <h3 className="font-semibold text-gray-600 text-sm block overflow-hidden whitespace-nowrap text-ellipsis">
                    {course.title}
                  </h3>
                </Link>
                <p >{course.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layout(CourseCat);
