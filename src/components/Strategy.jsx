import { useState } from "react";
import mobile from "./assets/smartphone.png";
import mobileActive from "./assets/mobile-active.png";
import desktop from "./assets/desktop.png";
import desktopActive from "./assets/desktop-active.png";
import { useSearchParams } from "react-router-dom";

const Strategy = () => {
  const [active, setActive] = useState("");

  const [search, setSearch] = useSearchParams();

  const clickHandler = (evt) => {
    setActive(evt.target.innerHTML);
    setSearch({
      url: search.get("url"),
      formFactor: evt.target.innerHTML?.toLowerCase(),
    });
  };

  return (
    <div className="grid grid-cols-2 gap-8 place-items-center mx-auto w-[240px] max-w-[240px] mb-8">
      <div
        className={`flex border-b-2 ${
          active === ""
            ? "hover:bg-[#F5FFFF] border-[#1a73e8] bg-[#F5FFFF]"
            : active === "Mobile"
            ? "hover:bg-[#F5FFFF] border-[#1a73e8] bg-[#F5FFFF]"
            : "hover:bg-[#f1f1f1] border-[#3c403]"
        } p-2`}
      >
        <img
          src={
            active === "" ? mobile : active === "Mobile" ? mobile : mobileActive
          }
          alt="Strategy Mobile"
        />
        <button
          className={`${
            active === ""
              ? "text-[#1a73e8]"
              : active === "Mobile"
              ? "text-[#1a73e8]"
              : "text-[#3c403]"
          } font-bold text-sm`}
          onClick={clickHandler}
        >
          Mobile
        </button>
      </div>
      <div
        className={`flex border-b-2 ${
          active === "Desktop"
            ? "hover:bg-[#F5FFFF] border-[#1a73e8] bg-[#F5FFFF]"
            : "hover:bg-[#f1f1f1] border-[#3c403]"
        } p-2`}
      >
        <img
          src={active === "Desktop" ? desktopActive : desktop}
          alt="Strategy Desktop"
        />
        <button
          className={`${
            active === "Desktop" ? "text-[#1a73e8]" : "text-[#3c403]"
          } font-bold text-sm`}
          onClick={clickHandler}
        >
          Desktop
        </button>
      </div>
    </div>
  );
};

export default Strategy;
