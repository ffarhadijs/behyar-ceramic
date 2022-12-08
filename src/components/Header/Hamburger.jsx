import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../assets/img/logo.png";
import { AiOutlineClose } from "react-icons/ai";

const Hamburger = (props) => {
  const [items, setItems] = useState([]);
  const getApi = async () => {
    const data = await axios
      .get("https://gbscoine.com/behyar/api/api/v1/navbar")
      .then((res) => setItems(res.data));
    return data;
  };

  useEffect(() => {
    getApi();
  }, []);
  console.log(items);
  return (
    <div>
      <div
        className={`z-[5555] cursor-context-menu fixed inset-0 w-full translate-x-full bg-gray-300 bg-opacity-30 transition-transform duration-700 ${
          props.burger && "-translate-x-[0px]"
        } `}
        role={"button"}
        onClick={() => props.setBurger(false)}
      >
        <div
          className="w-[200px] sm:w-[300px] bg-white h-screen p-4 overflow-y-scroll"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={() => props.setBurger(false)} className="text-2xl float-left">
            <AiOutlineClose />
          </button>
          <div className="w-32 h-auto mx-auto py-6">
            <img src={logo} />
          </div>
          <div className="">
            {items.map((item, index) => (
              <div
                key={index}
                className={`${
                  index === items.length - 1 ? "border-0" : "border-b"
                }  border-gray-300 py-2 my-2`}
              >
                {item.list ? (
                  <div>
                    <input
                      type={"radio"}
                      name="subItem"
                      id={index}
                      className="hidden peer "
                    />
                    <label
                      htmlFor={index}
                      className="peer-checked:bg-slate-100 block p-2 font-medium text-gray-600  hover:scale-[1.03] transition-all duration-300"
                    >
                      {item.title}
                    </label>
                    {item.list?.map((subItem) => (
                      <div
                        key={subItem.id}
                        className="hidden hamburgerSubItem peer-checked:h-auto peer-checked:block px-4 py-2 "
                      >
                        {subItem.sub?.length ? (
                          <Link
                            to={`/${subItem.slug}`}
                            state={{ id: subItem.id }}
                            className="block text-sm font-medium bg-slate-100 p-2 text-gray-600  hover:scale-[1.03] transition-all duration-300"
                          >
                            {subItem.title}
                          </Link>
                        ) : (
                          <Link
                            to={`/${subItem.slug}`}
                            state={{ id: subItem.id }}
                            className="block text-sm font-medium text-gray-600  hover:scale-[1.03] transition-all duration-300"
                          >
                            {subItem.title}
                          </Link>
                        )}
                        <div className="px-6 ">
                          {subItem.sub?.map((subListItem) => (
                            <Link
                              to={`/${subListItem.slug}`}
                              state={{ id: subListItem.id }}
                              className="block text-sm font-medium py-2 text-gray-600  hover:scale-[1.03] transition-all duration-300"
                            >
                              {subListItem.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="hover:scale-[1.03] transition-all duration-300">
                    <Link
                      to={`/${item.slug}`}
                      className="p-2 font-medium text-gray-600  "
                    >
                      {item.title}
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
