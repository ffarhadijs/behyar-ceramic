import React from "react";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { IoShareSocialSharp } from "react-icons/io5";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
  TiSocialGooglePlus,
  TiSocialLinkedin,
  TiSocialSkype,
  TiSocialYoutube,
} from "react-icons/ti";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

const CompanyInfo = () => {
  return (
    <div>
      <div className="flex flex-row justify-start items-center mb-8">
        <span className="text-4xl font-bold mx-4">
          <GoLocation />
        </span>
        <div>
          <h4 className="font-semibold">آدرس : </h4>
          <span className="text-sm">
            نارمک، خیابان هنگام، میدان الغدیر، خیابان دلاوران، آزادگان شمالی،
            کوچه ششم غربی (کاظمی) پلاک 1500
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-start items-center my-8">
        <span className="text-4xl font-bold mx-4">
          <AiOutlineMail />
        </span>
        <div>
          <h4 className="font-semibold">ایمیل پشتیبانی : </h4>
          <span className="text-sm">info@iran-mavad.com </span>
        </div>
      </div>
      <div className="flex flex-row justify-start items-start my-8">
        <span className="text-4xl font-bold mx-4">
          <IoShareSocialSharp />
        </span>
        <div className="w-full">
          <h4 className="font-semibold mb-4"> شبکه های اجتماعی : </h4>
          <table className="text-3xl mx-auto border text-gray-600">
            <tbody>
              <tr className="border">
                <td className=" border p-4 hover:text-blue-800 hover:scale-125 transition-all duration-700">
                  <Link to="#">
                    <TiSocialFacebook />
                  </Link>
                </td>
                <td className=" border p-4 hover:text-blue-800 hover:scale-125 transition-all duration-700">
                  <Link to="#">
                    <TiSocialGooglePlus />
                  </Link>
                </td>
              </tr>
              <tr className="border">
                <td className=" border p-4 hover:text-blue-800 hover:scale-125 transition-all duration-700">
                  <Link to="#">
                    <TiSocialInstagram />
                  </Link>
                </td>
                <td className=" border p-4 hover:text-blue-800 hover:scale-125 transition-all duration-700">
                  <Link to="#">
                    <TiSocialLinkedin />
                  </Link>
                </td>
              </tr>
              <tr className="border">
                <td className=" border p-4 hover:text-blue-800 hover:scale-125 transition-all duration-700">
                  <Link to="#">
                    <TiSocialSkype />
                  </Link>
                </td>
                <td className=" border p-4 hover:text-blue-800 hover:scale-125 transition-all duration-700">
                  <Link to="#">
                    <TiSocialTwitter />
                  </Link>
                </td>
              </tr>
              <tr className="border">
                <td className=" border p-4 hover:text-blue-800 hover:scale-125 transition-all duration-700">
                  <Link to="#">
                    <TiSocialYoutube />
                  </Link>
                </td>
                <td className=" border p-4 hover:text-blue-800 hover:scale-125 transition-all duration-700">
                  <Link to="#">
                    <FaTelegramPlane />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
