import React from "react";
import logo from "../Assets/logoF.png";

const Header=()=>{
    return (
      <div className=" shadow-lg shadow-zinc-400 bg-white ">
      <img className=" pt-3 pb-2 ml-8 w-56 " src={logo} alt="logo" />
    </div>
    );
}

export default Header;