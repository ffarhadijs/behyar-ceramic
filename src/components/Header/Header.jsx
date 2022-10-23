import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import { TbBell } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown,IoIosArrowBack } from "react-icons/io";
import Hamburger from "./Hamburger";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { useEffect } from "react";
import "./style.css";
import ToolTip from "../ToolTip/ToolTip";

function Header() {
  const [burger, setBurger] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const getApi = async () => {
    const data = await axios
      .get("https://gbscoine.com/behyar/api/api/v1/navbar")
      .then((res) => setMenuItems(res.data));
    return data;
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="px-10">
      <header
        className={
          "max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-center mb-[50px]"
        }
      >
        <div className=" bg-[#ffffff] p-[20px] shadow-md w-32 mx-auto lg:mx-4">
          <a href="#">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <div>
          <div
            className={
              "flex justify-between items-center pt-[36px] px-[17px] mb-4"
            }
          >
            <div className={"flex flex-row"}>
              <span className="text-[#acacac] text-[13px] ml-[5px]">
                اخبار استخدامی :
              </span>
              <p className="text-gray-500 text-sm">استخدام مهندس سرامیک</p>
            </div>
            <div className="hidden lg:block">
              <ul className="flex justify-between">
                <li>
                  <Link
                    to="/"
                    className="ml-[28px] text-[#acacac] text-[12px] transition-all duration-200 hover:text-[#858585]"
                  >
                    صفحه اصلی
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ads"
                    className="ml-[28px] text-[#acacac] text-[12px] transition-all duration-200 hover:text-[#858585]"
                  >
                    تبلیغات
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    className="ml-[28px] text-[#acacac] text-[12px] transition-all duration-200 hover:text-[#858585]"
                  >
                    درباره ما
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contactus"
                    className="ml-[28px] text-[#acacac] text-[12px] transition-all duration-200 hover:text-[#858585]"
                  >
                    ارتباط با ما
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={
              "flex justify-between items-center bg-[#f3f3f3] py-[8px] px-[12px] rounded-lg w-full mx-auto lg:w-[750px] xl:w-[1000px] h-16"
            }
          >
            <nav className={"block mr-[20px] lg:hidden"}>
              <button onClick={() => setBurger(true)}>
                <GiHamburgerMenu />
              </button>

              <Hamburger burger={burger} setBurger={setBurger} />
            </nav>
            <div className={"hidden lg:block"}>
              <ul className="flex flex-row justify-start items-center w-full px-3 py-3 ">
                {menuItems.map((item, index) => (
                  <li className={"relative group"} key={index}>
                    {item.slug ? (
                      <Link
                        to={`/${item.slug}`}
                        className="cursor-context-menu flex flex-row items-center justify-between min-w-max text-[#a4a4a4] text-[15px] px-2 py-3 border-transparent"
                      >
                        {item.title}
                        {item.list ? (
                          <IoIosArrowDown className={"text-[15px] mx-1"} />
                        ) : (
                          ""
                        )}
                      </Link>
                    ) : (
                      <span className="cursor-context-menu flex flex-row items-center justify-between min-w-max text-[#a4a4a4] text-[15px] px-2 py-3 border-transparent">
                        {item.title}
                        {item.list ? (
                          <IoIosArrowDown className={"text-[15px] mx-1"} />
                        ) : (
                          ""
                        )}
                      </span>
                    )}
                    {item.list ? (
                      <ul className="group-hover:z-[500] opacity-0  absolute group-hover:top-[6px] group-hover:opacity-100 top-[10px] transition-all duration-500 bg-white shadow-lg border-t-2 border-t-[#0095da] rounded-xl py-4 px-4 mt-[35px] w-max invisible group-hover:visible ">
                        {item.list?.map((item) => (
                          <li
                            key={item.id}
                            className="item py-2 text-xs text-gray-800 hover:text-[#0095da] border-b-[1px] border-b-transparent hover:scale-105 hover:border-b-[#0095da] transition-all duration-500"
                          >
                            <Link to={`/${item.slug}`} state={{ id: item.id }} className="flex flex-row justify-between items-center">
                              {item.title}
                              {item.sub?.length ? (
                                <IoIosArrowBack
                                  className={"text-[15px] mx-1"}
                                />
                              ):null}
                            </Link>
                            {item.sub?.length ? (
                              <ul
                                key={item.id}
                                className="subItem opacity-0  absolute top-[10px] transition-all duration-500 right-full bg-white shadow-lg border-t-2 border-t-[#0095da] rounded-xl py-4 px-4 mt-[35px] w-max invisible"
                              >
                                {item.sub?.map((subItem) => (
                                  <Link
                                    to={`/${subItem.slug}`}
                                    state={{ id: subItem.id }}
                                    key={subItem.id}
                                    className=" py-2 text-xs text-gray-800 hover:text-[#0095da] border-b-[1px] border-b-transparent hover:scale-105 hover:border-b-[#0095da] transition-all duration-500 block"
                                  >
                                    <span>{subItem.title}</span>
                                  </Link>
                                ))}
                              </ul>
                            ) : null}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={
                "flex flex-row items-center text-2xl text-[#858585] mx-4"
              }
            >
              <button className="appearance-none mx-4">
                <TbBell />
              </button>
              <ToolTip title={"پروفایل کاربر"}>
              <Link
                to="/sign-up"
                className=" bg-[#0095da] text-[#ffffff] rounded-md shadow-lg mr-4 p-2.5"
              >
                <CgProfile />
              </Link>
                </ToolTip>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
