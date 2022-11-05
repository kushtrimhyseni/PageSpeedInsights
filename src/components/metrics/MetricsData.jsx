import { useState } from "react";

const MetricsData = ({
  displayValue,
  metricTested,
  metricDescription,
  score,
  showMetricsDescription = false,
}) => {
  // const [classes, setClasses] = useState("");

  const getClasses = () => {
    if(score < 0.49) {
      return "triangle"
    }

    if(score < 0.9) {
      return "square"
    }

    return "forsquare";
  }

  const classes = score < 0.49 ? 'triangle' : score < 0.9 ? 'square' : 'forsquare';
  
  return (
    <div className="flex flex-col max-w-screen-md mx-auto justify-start items-start mt-8 w-full border-b border-[#d8d8d8]">
      <div className="flex justify-start items-center">
        <span className={`${classes} w-3 h-3`}>{score}</span>
        <span className="ml-4 text-[#212121] text-base">{metricTested}</span>
      </div>
      <span
        className={`text-2xl ml-[27px] text-center ${
          displayValue > 2.5 ? "text-[#c33300]" : "text-[#008800]"
        }`}
      >
        {displayValue}
      </span>
      {showMetricsDescription && (
        <span className="text-[#424242] text-base max-w-[375px] ml-[27px] mt-2 mb-2">
          {metricDescription}
        </span>
      )}
    </div>
  );
};

export default MetricsData;
