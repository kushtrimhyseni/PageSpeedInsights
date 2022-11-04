import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PageSpeedInsightsContext from "../context/PageSpeedInsightsContext";
import Spinner from "../components/Spinner";
import iconlab from "../components/assets/icon-lab.svg";
import FirstContentfulPaint from "../components/FirstContentfulPaint";
import MetricHeader from "../components/MetricHeader";
import ExpandView from "../components/ExpandView";

const SitesData = () => {
  const [hidden, setHidden] = useState(false);
  const { checkPageSpeed, siteData, loading } = useContext(
    PageSpeedInsightsContext
  );
  const [searchParams] = useSearchParams();
  const url = searchParams.get("url");

  const hiddenDesc = () => {
    setHidden(true);
  };

  useEffect(() => {
    if (url) {
      checkPageSpeed(url);
    }
  }, [url, checkPageSpeed]);

  console.log(siteData.audits);
  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-start mx-auto max-w-[960px] mt-4">
        <div className="flex">
          <img src={iconlab} alt="" className="w-6 h-8" />
          <h2 className="ml-4 font-bold text-md">
            Diagnose performance issues
          </h2>
        </div>
        <div className="mt-8">
          <h2 className="flex justify-center items-center">
            Site Diagnosed: {url}
          </h2>
          <div className="flex justify-between items-center border-b border-[#d8d8d8]">
            <MetricHeader />
            <ExpandView onClick={hiddenDesc} />
          </div>
          {siteData && (
            <div className="grid grid-cols-1 md:grid-cols-2">
              <FirstContentfulPaint
                className={`${hidden ? "hidden" : "flex"}`}
                metricTested={siteData?.audits["first-contentful-paint"]?.title}
                displayValue={
                  siteData?.audits["first-contentful-paint"]?.displayValue
                }
                metricDescription={
                  siteData?.audits["first-contentful-paint"]?.description.split(
                    "."
                  )[0] + "."
                }
              />
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default SitesData;
