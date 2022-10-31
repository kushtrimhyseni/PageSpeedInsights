import { useState, useContext, useRef } from "react";
import PageSpeedInsightsContext from "../context/PageSpeedInsightsContext";

const Input = () => {
  //   const [, setClear] = useState({});
  const [input, setInput] = useState("");
  const { checkPageSpeed, siteData } = useContext(PageSpeedInsightsContext);
  const clearInput = useRef();

  const inputHandler = (evt) => {
    if (evt.keyCode === 13) {
      checkPageSpeed(evt.target.value);
      return;
    }
    setInput(evt.target.value);
  };

  const clickHandler = () => {
    if (input === " ") {
      alert("Enter a valid url");
    } else {
      checkPageSpeed(input);
      //   setClear(siteData);
      clearInput.current.value = "";
    }
  };

  //   const clearResults = () => {
  //     setClear({});
  //   };

  console.log(siteData);
  return (
    <div className="flex justify-center items-center max-w-screen-md mx-auto">
      <input
        type="text"
        ref={clearInput}
        onKeyUp={inputHandler}
        className="border-2 border-[##3c4043] w-full h-12 focus:outline-none"
      />
      <button
        className="text-white bg-[#1a73e8] ml-2 h-12 p-2 w-[100px]"
        onClick={clickHandler}
      >
        Analyze
      </button>
      {/* <div
        onClick={clearResults}
        className={`${
          siteData ? "flex" : "hidden"
        } w-[100px] h-[40px] pt-4 md:pt-0 mx-auto md:mx-0 md:ml-4`}
      >
        <a href="/" className="transparent">
          <span className="text-black bg-white">Clear</span>
        </a>
      </div> */}
    </div>
  );
};

export default Input;
