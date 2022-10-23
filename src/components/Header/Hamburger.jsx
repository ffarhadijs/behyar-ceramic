import React from "react";

const Hamburger = (props) => {
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
          className="w-[200px] sm:w-[300px] bg-white h-screen "
          onClick={(e) => e.stopPropagation()}
        ></div>
      </div>
    </div>
  );
};

export default Hamburger;
