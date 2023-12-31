import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full pt-8">
      <h1 className="text-4xl text-black font-semibold mb-5 pl-64 pt-6 pb-2">
        Create Flashcard
      </h1>
      <div className="flex items-center space-x-10 mb-3">
        <button className="text-lg font-semibold text-black-600 pl-64">
          <NavLink
            to={"/"} 
            /*if the link is actve it will give bottom background to creat new of red color */
            style={({ isActive }) => ({
              borderBottom: isActive ? "4px solid red" : undefined,
              paddingBottom: "12px",
              borderRadius: "3px",
            })}
          >
            Create New
          </NavLink>
        </button>
        <button className="text-lg font-semibold text-black-600">
          <NavLink
            to={"/myflashcard"}
            /*if the link is actve it will give bottom background to my Flashcard of red color */
            style={({ isActive }) => ({
              borderBottom: isActive ? "4px solid red" : undefined,
              paddingBottom: "12px",
              borderRadius: "3px",
            })}
          >
            My Flashcard
          </NavLink>
        </button>
      </div>
      <hr className="border bg-black-700 border-gray-300 mx-64 mb-8" />
    </div>
  );
};

export default Navbar;
