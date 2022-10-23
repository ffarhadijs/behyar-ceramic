import axios from "axios";
import React from "react";
import { useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../../components/HOC/Layout";
import { Link } from "react-router-dom";
import { MdOutlineNavigateBefore } from "react-icons/md";
import ImageGallery from "react-image-gallery";
import PersianNumber from "../../PersianNumber";
import { AiOutlineDown, AiOutlineComment } from "react-icons/ai";
import Carousel from "react-multi-carousel";
import { FiVideo } from "react-icons/fi";
import ReactPlayer from "react-player/lazy";
import { MdDownload } from "react-icons/md";
import { FaLock } from "react-icons/fa";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 660, min: 0 },
    items: 1,
  },
};

const CourseDetails = () => {
  const [course, setCourse] = useState("");
  const [show, setShow] = useState(false);
  const location = useLocation();
  const id = location?.state.id;
  const getApi = () => {
    axios
      .get(`https://gbscoine.com/behyar/api/api/v1/course/details/${id}`)
      .then((res) => setCourse(res.data));
  };
  useEffect(() => {
    getApi();
  }, []);
  const shorten = (text, n) => {
    return text.length > n ? text.slice(0, n - 1) + "..." : text;
  };
  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="flex flex-row gap-2 px-8 text-gray-500 my-6">
        {course.BreadCrumb?.map((item, index) =>
          index === course.BreadCrumb.length - 1 ? (
            <span
              className={`flex flex-row items-center text-gray-500 text-sm group hover:text-gray-700 `}
            >
              {item.name}
            </span>
          ) : (
            <Link
              to={`/${item.url}`}
              state={{ id: item.id }}
              className={`flex flex-row items-center text-gray-500 text-sm group hover:text-gray-700 `}
            >
              {item.name}{" "}
              <span className="group-hover:rotate-180 duration-300 transition-transform ">
                {" "}
                <MdOutlineNavigateBefore />{" "}
              </span>
            </Link>
          )
        )}
      </div>{" "}
      <div className="flex flex-row justify-start items-start gap-6">
        <div className="w-[350px] shadow-md bg-white p-4 rounded-md">
          <div className="border-b border-gray-400 pb-5">
            <span className="text-[14px] font-semibold">قیمت این دوره:</span>
            <span className=" text-green-500 px-1 font-semibold">
              {course && <PersianNumber number={course.price} />}
            </span>
            <span className=" text-red-500 line-through px-1 font-semibold">
              {course && <PersianNumber number={course.del_price} />}
            </span>
            <span className="text-sm text-green-500 font-semibold">تومان</span>
          </div>
          <div className="py-2">
            {course.Attribute?.map((item) => (
              <p className="text-sm my-4 ">
                <span className="text-gray-600">{item.title}</span>
                <span className="text-gray-800"> {item.value}</span>
              </p>
            ))}
          </div>
          <button className="bg-green-500 text-white mx-auto w-full py-3 rounded-md hover:bg-green-600 transition-colors duration-300 font-semibold mt-4">
            ثبت نام در این دوره
          </button>
        </div>
        <div className="flex flex-col justify-start gap-y-4 items-start w-[850px]">
          <div className="w-full shadow-md bg-white rounded-md py-4 px-6 ">
            <h1 className="font-semibold text-lg pb-10">{course.title}</h1>

            <div className="w-full">
              {/* {course.gallery ? (
                <ImageGallery
                  items={course.gallery}
                  autoPlay={false}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  showNav={false}
                />
              ) : null} */}
            </div>
            <div
              className={`  ${
                show
                  ? `max-h-[3000px] duration-1000`
                  : "max-h-[150px] duration-500"
              } transition-all  overflow-hidden py-4 `}
            >
              <div dangerouslySetInnerHTML={{ __html: course.des }} />
            </div>
            <div>
              <button
                className="w-max mx-auto flex flex-row items-center gap-2 my-2 text-blue-600 font-semibold text-sm"
                onClick={() => setShow(!show)}
              >
                {show ? "مشاهده کمتر" : "مشاهده بیشتر"}

                <div
                  role={"button"}
                  className={`${
                    show ? "rotate-180 " : "rotate-0 "
                  } transition-all duration-500 text-lg`}
                >
                  <AiOutlineDown />
                </div>
              </button>
            </div>
          </div>
          <div className="w-full shadow-md bg-white rounded-md py-4 px-6">
            <ReactPlayer url={course.video_demo} controls muted={false} />
            {course.course_session?.map((item, index) => (
              <div className=" relative flex flex-row justify-between items-center border rounded-md my-4 text-gray-700 font-vazir py-4 px-6 h-auto">
                <div className="absolute top-[14px] -right-[14px] rounded-full bg-white border border-blue-700 w-[28px] h-[28px] flex flex-row items-center justify-center">
                  <PersianNumber number={index + 1} />
                </div>
                <button className=" ">
                  <PersianNumber number={item.title} />
                  <i
                    className={`${
                      item.type_status === "on" ? "hidden" : "inline-block"
                    } text-lg text-gray-500 mx-4`}
                  >
                    <FaLock />
                  </i>
                </button>
                <div className="flex flex-row justify-start items-center ">
                  <span className="pl-4 border-l border-gray-300">
                    <PersianNumber number={item.time} />
                  </span>
                  <button
                    className={`rounded-full border text-2xl p-1.5 mr-2 ${
                      item.type_status === "on"
                        ? "text-[#6fc341] border-[#6fc341]"
                        : "text-gray-500 border-gray-400"
                    }`}
                  >
                    <MdDownload />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full shadow-md bg-white rounded-md py-4 px-6">
            <h3 className="text-lg font-semibold text-gray-700 border-b border-gray-600 pb-3 flex flex-row items-center ">
              <i className="text-3xl ml-2">
                <FiVideo />
              </i>
              دوره های مرتبط
            </h3>
            <Carousel responsive={responsive}>
              {course.related_course ? (
                course.related_course.map((item) => (
                  <div
                    className={
                      "w-60 h-[360px] m-4 rounded-md text-right hover:shadow-md transition-shadow duration-300 bg-white border mx-2"
                    }
                    style={{ direction: "rtl" }}
                    key={item.id}
                  >
                    <Link to={`/blog/details/`} state={{ id: item.id }}>
                      <img src={item.image} className="w-full h-40 mb-2" />
                    </Link>
                    <div className="p-2 h-[190px] flex flex-col justify-between items-start">
                      <div className="w-full">
                        <Link
                          to={`/blog/details/`}
                          state={{ id: item.id }}
                          title={item.title}
                        >
                          <h3 className="font-semibold pb-3 text-gray-600 text-base block overflow-hidden whitespace-nowrap text-ellipsis">
                            {item.title}
                          </h3>
                        </Link>
                        <p className="text-sm text-gray-600 ">
                          {shorten(item.des, 150)}
                        </p>{" "}
                      </div>

                      <span className=" text-sm text-[#6fc341] text-left w-full border-t border-gray-500 block">
                        <PersianNumber number={item.price} /> تومان
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div></div>
              )}
            </Carousel>
          </div>
          <div className="w-full shadow-md bg-white rounded-md py-4 px-6">
            <h3 className="text-lg font-semibold text-gray-700 border-b border-gray-600 pb-3 flex flex-row items-center">
              <i className="text-3xl ml-2">
                <AiOutlineComment />
              </i>
              نظرات کاربران در رابطه با این دوره
            </h3>
            <p className="my-4 px-4 py-4 border border-[#00b3e9] bg-[#effafd] text-[#00b3e9] rounded text-sm">
              جهت ثبت نظر باید در سایت عضو شوید و یا وارد سایت شده باشید .
            </p>
            {course.comment?.map((cm) => (
              <div
                className="h-auto border rounded-md px-6 py-4 my-6 hover:shadow-md transition-shadow duration-300"
                key={cm.index}
              >
                <div className="flex flex-row items-center justify-start mb-6">
                  <img
                    src={cm.avatar}
                    className="w-16 h-auto rounded-full ml-4 shadow-md"
                  />
                  <div className="flex flex-row items-start justify-start gap-6">
                    <span className="text-sm">{cm.full_name} </span>
                    <span className=" text-gray-500">|</span>
                    <span className="text-sm text-gray-600">
                      {cm.created_at} ارسال شد{" "}
                    </span>
                  </div>
                </div>
                <div className="text-sm font-vazir">{cm.message}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout(CourseDetails);
