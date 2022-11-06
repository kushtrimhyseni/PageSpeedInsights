import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const OverallScore = ({ percentage, dataImg }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 border border-[#f1f1f1] rounded-md p-4 mt-8 mb-8">
      <div className="flex flex-col justify-center items-center lg:border-r lg:border-[#f1f1f1] mb-8 lg:mb-0">
        <div className="w-[120px] h-[120px]">
          <CircularProgressbar
            value={percentage}
            text={percentage}
            styles={buildStyles({
              textSize: "32px",
              pathTransitionDuration: 0.5,
              pathColor: `rgba(0, 204, 102, ${percentage / 100})`,
              textColor: "#00cc66",
              trailColor: "transparent",
              backgroundColor: "#00cc66",
            })}
          />
        </div>
        <span className="mt-2 mb-2 text-[#212121] font-semibold text-center text-xl">
          Performance
        </span>
        <span className="w-full md:max-w-[400px] text-center text-[12px] text-[#616161]">
          Values are estimated and may vary. The performance score is calculated
          directly from these metrics.
          <a
            rel="noreferrer"
            target="_blank"
            href="https://googlechrome.github.io/lighthouse/scorecalc/#FCP=2760&TTI=2760&SI=2760&TBT=0&LCP=2760&CLS=0.02&FMP=2760&device=mobile&version=9.6.6"
            className="text-[#0066ff]"
          >
            See calculator.
          </a>
        </span>
      </div>
      <img
        src={dataImg}
        alt=""
        className="w-[155px] h-[268px] mx-auto border-4 border-[#e0e0e0]"
      />
    </div>
  );
};

export default OverallScore;
