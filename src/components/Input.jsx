import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PageSpeedInsightsContext from "../context/PageSpeedInsightsContext";

const Input = () => {
  const [, setClear] = useState({});
  const [input, setInput] = useState("");
  const { siteData } = useContext(PageSpeedInsightsContext);
  // const clearInput = useRef();
  const navigate = useNavigate();

  const isValidURL = (string) => {
    let res = string.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g
    );
    return res !== null;
  };

  const clickHandler = () => {
    if (isValidURL(input)) {
      navigate(`/?url=${encodeURIComponent(input)}`);
    } else {
      alert("You must enter a valid domain name.");
    }
  };

  const inputHandler = (evt) => {
    if (evt.keyCode === 13) {
      if (isValidURL(evt.target.value)) {
        navigate(`/?url=${encodeURIComponent(evt.target.value)}`);
      } else {
        alert("You must enter a valid domain name.");
      }
    }
    setInput(evt.target.value);
  };

  const clearResults = () => {
    setClear({});
  };

  return (
    <div className="flex flex-col max-w-screen-lg mx-auto">
      <div className="flex justify-center items-center">
        <input
          type="text"
          // ref={clearInput}
          onKeyUp={inputHandler}
          className="border-2 border-[#f1f1f1] w-full h-12 focus:outline-[#1a73e8] p-2"
        />
        <button
          className="text-white bg-[#1a73e8] ml-2 h-12 p-2 w-[100px] cursor-pointer"
          onClick={clickHandler}
        >
          Analyze
        </button>
        <div
          onClick={clearResults}
          className={`${
            siteData.length > 0 ? "flex" : "hidden"
          } w-[100px] h-[40px] pt-4 md:pt-0 mx-auto md:mx-0 md:ml-4`}
        >
          <a href="/" className="transparent">
            <span className="text-black bg-white">Clear</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Input;
