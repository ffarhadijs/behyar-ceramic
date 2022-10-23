import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

function Search() {
  const [search, setSearch] = useState("");

  return (
    <div className="px-6 my-16 sm:my-28">
      <div className="overflow-hidden rounded-xl max-w-[550px] mx-auto  bg-[#0095da] flex flex-row justify-start items-center">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="جستجو در همه..."
          className="w-full outline-none appearance-none bg-inherit rounded-xl font-vazir placeholder:font-vazir text-white text-xl py-4 sm:py-8 px-8 placeholder:text-white"
        />
        <button className=" text-white rounded-r-full bg-blue-700 h-[60px] sm:h-[100px] font-semibold text-2xl flex justify-center items-center w-16 hover:bg-[#1553a5] group transition-colors duration-300">
          <i className="group-hover:scale-110 transition-all duration-300">
            <FiSearch />
          </i>
        </button>
      </div>
    </div>
  );
}

export default Search;
