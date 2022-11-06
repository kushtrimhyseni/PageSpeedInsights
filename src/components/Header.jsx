import React from "react";
import headerImg from "./assets/g_static.png";
const Header = () => {
  return (
    <div className="fixed flex h-16 p-4 border-b border-[#dadce0] z-20 w-full bg-white">
      <div className="flex justify-start items-center">
        <img src={headerImg} alt="Img" className="w-6 h-6" />
        <span className="text-[#5f6369] text-xl ml-2 mb-2">
          PageSpeed Insights
        </span>
      </div>
    </div>
  );
};

export default Header;
