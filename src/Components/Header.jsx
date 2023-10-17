import React from "react";
import logo from "../Assets/flashcard-logo.png";
import logo1 from "../Assets/logoF.png"

const Header=()=>{
    return (
      // <div className="row">
      <div className=" column shadow-lg shadow-zinc-400 bg-white ">
      <div className="image-container">
      <img className=" pb-4 ml-8 w-64 " src={logo} alt="logo" />
      {/* <img className=" ml-2 w-52 " src={logo1} alt="logo1" /> */}
    </div>
    {/* </div> */}
    </div>
    );
}

export default Header;