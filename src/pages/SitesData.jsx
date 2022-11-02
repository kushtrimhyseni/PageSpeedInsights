import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PageSpeedInsightsContext from "../context/PageSpeedInsightsContext";
import Spinner from "../components/Spinner";
import iconlab from "../components/assets/icon-lab.svg";

const SitesData = () => {
  const { checkPageSpeed, siteData, loading } = useContext(
    PageSpeedInsightsContext
  );
  const [searchParams] = useSearchParams();
  const url = searchParams.get("url");

  useEffect(() => {
    if (url) {
      checkPageSpeed(url);
    }
  }, [url, checkPageSpeed]);

  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-start items-center mx-auto max-w-[960px] mt-4">
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
          <div className="flex flex-col">
            <span>{siteData.audits["first-contentful-paint"].title}</span>
            <span>
              {siteData.audits["first-contentful-paint"].displayValue}
            </span>
          </div>
        </div>
      </div>
    );
  }
};

export default SitesData;
