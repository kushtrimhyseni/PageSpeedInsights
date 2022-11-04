import React from "react";

const FirstContentfulPaint = ({
  displayValue,
  metricTested,
  metricDescription,
}) => {
  return (
    <div className="flex flex-col max-w-screen-md mx-auto justify-start items-start mt-8 w-full border-b border-[#d8d8d8]">
      <div className="flex justify-start items-center">
        <span className="bg-[#ffaa33] w-3 h-3"></span>
        <span className="ml-4 text-[#212121] text-base">{metricTested}</span>
      </div>
      <span
        className={`text-2xl ml-[27px] text-center ${
          displayValue > 2.5 ? "text-[#c33300]" : "text-[#008800]"
        }`}
      >
        {displayValue}
      </span>
      <span className="text-[#424242] text-base max-w-[375px] mt-2 hidden mb-2">
        {metricDescription}
      </span>
    </div>
  );
};

export default FirstContentfulPaint;
