import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Layout from "../../components/HOC/Layout";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import PersianNumber from "../../PersianNumber";
import "../../index.css";
import { BsShare } from "react-icons/bs";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useCallback } from "react";
import { MdOutlineNavigateBefore } from "react-icons/md";

const AdsDetails = () => {
  const [post, setPost] = useState({});
  const [copied, setCopied] = useState(false);
  const location = useLocation();
  const id = location.state?.id;
  const getApi = async () => {
    const data = await axios
      .get(`https://gbscoine.com/behyar/api/api/v1/ads/details/${id}`)
      .then((res) => setPost(res.data));
    return data;
  };

  useEffect(() => {
    getApi();
  }, [id]);
  console.log(post);
  const createdNumber = (date) => {
    const number = date?.slice(0, 2);
    return number;
  };
  const createdText = (string) => {
    const text = string.slice(2);
    return text;
  };
  const onCopy = useCallback(() => {
    setCopied(true);
  }, []);
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex flex-row gap-2 px-8 text-gray-500">
        {post.BreadCrumb?.map((item, index) =>
          index === post.BreadCrumb.length-1 ? (
            <span
              className={`flex flex-row items-center text-gray-500 text-sm group hover:text-gray-700`}
            >
              {item.name}
            </span>
          ) : (
            <Link
              to={`/${item.url}`}
              state={{ id: item.id }}
              className={`flex flex-row items-center text-gray-500 text-sm group hover:text-gray-700`}
            >
              {item.name}{" "}
              <span className="group-hover:rotate-180 duration-300 transition-transform ">
                {" "}
                <MdOutlineNavigateBefore />{" "}
              </span>
            </Link>
          )
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto ">
        <div className=" w-full p-8">
          <div className="mt-6">
            <h1 className="text-xl font-semibold py-4">{post.title}</h1>
            <span className="text-gray-500 text-sm">{post.category} | </span>
            {post.created_at && (
              <span className="text-gray-500 text-sm">
                {" "}
                <PersianNumber number={createdNumber(post.created_at)} />
                {createdText(post.created_at)}{" "}
              </span>
            )}
          </div>
          <div className="my-4 flex flex-row justify-between items-center">
            <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-md  hover:bg-blue-500 transition-colors duration-300">
              اطلاعات تماس
            </button>
            <CopyToClipboard onCopy={onCopy} text={window.location.href}>
              <button>
                <BsShare />
              </button>
            </CopyToClipboard>
          </div>
          <div className="w-full py-4">
            {post.details?.map((item) => (
              <div className="flex flex-row justify-between items-center py-3 border-b border-b-gray-300">
                <span className="text-gray-600">{item.title}</span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
          <div>
            <p className="text-lg text-gry-700 font-semibold py-6">توضیحات</p>
            <div dangerouslySetInnerHTML={{ __html: post.description }} />
          </div>
        </div>
        <div className=" w-full p-8">
          {post.gallery ? (
            <ImageGallery
              items={post.gallery}
              autoPlay={false}
              showPlayButton={false}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Layout(AdsDetails);
