import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Layout from "../../components/HOC/Layout";
import PersianNumber from "../../PersianNumber";
import { Link, useLocation } from "react-router-dom";

const ArchivePosts = () => {
  const [posts, setPosts] = useState([]);
  const [cat, setCat] = useState([]);
  const location = useLocation();
  const id = location?.state.id;
  console.log(location);
  const getApi = () => {
    axios
      .get(`https://gbscoine.com/behyar/api/api/v1/archive/post/${id}`)
      .then((res) => setPosts(res.data));
    axios
      .get("https://gbscoine.com/behyar/api/api/v1/category/list")
      .then((res) => setCat(res.data));
  };
  useEffect(() => {
    getApi();
  }, [id]);
  const shorten = (text, n) => {
    return text.length > n ? text.slice(0, n - 1) + " ... " : text;
  };
  const createdNumber = (date) => {
    const number = date?.slice(0, 2);
    return number;
  };
  const createdText = (string) => {
    const text = string.slice(2);
    return text;
  };
  console.log(cat);
  return (
    <div className="max-w-[1300px] mx-auto flex flex-row justify-start items-start ">
      <div className="w-[300px] mx-2 bg-[#f3f3f3] p-4 rounded">
        <h3 className="font-semibold pb-4">دسته بندی</h3>
        <div>
          {cat?.map((item) => (
            <Link
              to={`/${item.slug}`}
              state={{ id: item.id }}
              className={`text-gray-600 py-1 flex flex-row items-center justify-start ${
                item.id == id && "bg-white rounded-md"
              }`}
            >
              <img src={item.img} className="w-6 h-6 ml-2" />
              <span className="text-sm ">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="rounded-md mx-2 bg-[#f3f3f3] grid grid-cols-2 gap-6 p-4 w-full">
        {posts?.map((post) => (
          <div className="bg-white h-28 gap-2 p-4 rounded-md flex flex-row justify-start items-center shadow-md hover:bg-[#f9f9f9] transition-all duration-300 hover:shadow-lg">
            <Link to={`/${post.slug}`} state={{ id: post.id }}>
              <div className="w-28 h-full">
                <img src={post.image} className="w-full h-full" />
              </div>
            </Link>
            <div className="text-xs text-gray-600 w-full h-full flex flex-col items-start justify-between">
              <Link
                to={`/${post.slug}`}
                state={{ id: post.id }}
                title={post.title}
              >
                <h3 className="text-sm font-semibold">
                  {shorten(post.title, 50)}
                </h3>
              </Link>
              <p>{shorten(post.des, 100)}</p>
              <span className="pb-2">
                {<PersianNumber number={createdNumber(post.created_at)} />}{" "}
                {createdText(post.created_at)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Layout(ArchivePosts);
