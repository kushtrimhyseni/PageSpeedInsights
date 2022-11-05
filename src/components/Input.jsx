import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageSpeedInsightsContext from "../context/PageSpeedInsightsContext";

const Input = () => {
  const [, setClear] = useState({});
  const [input, setInput] = useState("");
  const { siteData } = useContext(PageSpeedInsightsContext);
  // const clearInput = useRef();
  const navigate = useNavigate();

  const inputHandler = (evt) => {
    if (evt.keyCode === 13) {
      navigate(`/?url=${encodeURIComponent(evt.target.value)}`);
    }
    setInput(evt.target.value);
  };

  const clearResults = () => {
    setClear({});
  };

  return (
    <div className="flex flex-col max-w-screen-md mx-auto">
      <div className="flex justify-center items-center">
        <input
          type="text"
          // ref={clearInput}
          onKeyUp={inputHandler}
          className="border-2 border-[##3c4043] w-full h-12 focus:outline-none"
        />
        <Link to={`/?url=${encodeURIComponent(input)}`}>
          <button className="text-white bg-[#1a73e8] ml-2 h-12 p-2 w-[100px]">
            Analyze
          </button>
        </Link>
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
