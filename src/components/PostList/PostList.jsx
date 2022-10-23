import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PersianNumber from "../../PersianNumber";
import { Link } from "react-router-dom";
import "../Header/style.css";
import { RiArchiveDrawerFill } from "react-icons/ri";

const PostList = () => {
  const [items, setItems] = useState([]);
  const [catId, setCatId] = useState(4);
  const [active, setActive] = useState(false);
  const getApi = async () => {
    const data = await axios
      .get("https://gbscoine.com/behyar/api/api/v1/post/list")
      .then((res) => setItems(res.data));
    return data;
  };
  useEffect(() => {
    getApi();
  }, []);
  const clickHandler = (catId) => {
    setActive(false);
    setCatId(catId);
    setActive(true);
  };

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
          {items?.map((item, index) => (
            <div>
              <input
                id={index}
                name={"postCatBtn"}
                type={"radio"}
                key={index}
                defaultChecked={index === 0}
                className={`pb-2 transition-all duration-300 px-4 text-gray-500 min-w-max hidden radioBtn peer`}
                onClick={() => clickHandler(item.cat_id)}
              />
              <label
                htmlFor={index}
                className=" cursor-pointer pb-2 px-4 labelTxt peer-checked:border-b peer-checked:border-b-blue-600 peer-checked:text-blue-600 transition-all duration-300"
              >
                {item.cat_name}
              </label>
            </div>
          ))}
        </div>
        <Link
          to={"/ads-list"}
          state={{ id: 0 }}
          className="flex flex-row items-center justify-start"
        >
          مشاهده آرشیو آگهی ها
          <span className="text-blue-600 text-2xl">
            <RiArchiveDrawerFill />
          </span>
        </Link>
      </div>
      <div className="w-full h-auto grid gap-8 grid-cols-4 my-8 ">
        {items
          ?.find((item) => item.cat_id === catId)
          ?.post.slice(0, 4)
          .map((post) => (
            <div
              key={post.id}
              className="hover:shadow-lg transition-shadow duration-300 shadow-md rounded-lg overflow-hidden h-[350px]"
            >
              <Link to={`/${post.slug}`} state={{ id: post.id }}>
                <img className="w-full h-40" src={post.image} />
              </Link>
              <div className="px-4 py-2 h-[190px]">
                <Link
                  to={`/${post.slug}`}
                  state={{ id: post.id }}
                  title={post.title}
                >
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
  );
};

export default PostList;
