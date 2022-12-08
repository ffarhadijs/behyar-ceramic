import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

function ProfileHeader() {
  const [menuItems, setMenuItems] = useState([]);
  const getApi = () => {
    axios
      .get("https://gbscoine.com/behyar/api/api/v1/profile/menu/name")
      .then((res) => setMenuItems(res.data));
  };

  useEffect(() => {
    getApi();
  }, []);

     const pathName=window.location.pathname;


  console.log(pathName);
  return (
    <div className="px-10">
      <header
        className={
          " max-w-[1170px] mx-auto hidden lg:flex lg:flex-row justify-center mb-[50px]"
        }
      >
        <div
          className={
            "  flex justify-between items-center bg-[#f3f3f3]  px-[12px] -mt-8 rounded-lg w-full mx-auto lg:w-max xl:w-[1170px] h-16"
          }
        >
          <ul className="flex flex-row justify-start items-center w-full px-3 h-full">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={`/${item.slug}`}
                  className={
                    ` hover:bg-[#e7e7e7]  ${pathName.includes(item.slug)&&" bg-[#e7e7e7] "} bg-[#f3f3f3] transition-colors duration-300 flex flex-row items-center justify-between min-w-max text-[#a4a4a4] text-[15px] px-2 py-5 border-transparent`
                  }
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default ProfileHeader;
