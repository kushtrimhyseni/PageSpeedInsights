import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PageSpeedInsightsContext from "../context/PageSpeedInsightsContext";
import Spinner from "../components/Spinner";
import iconlab from "../components/assets/icon-lab.svg";
import MetricsData from "../components/metrics/MetricsData";
import MetricHeader from "../components/metrics/MetricHeader";
import ExpandView from "../components/metrics/ExpandView";

const SitesData = () => {
  const [hidden, setHidden] = useState(true);
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

  console.log(siteData.audits);
  if (loading) {
    return (
      <div class="flex justify-start items-start w-[960px] max-w-screen-md mx-auto mt-4">
        <Spinner />
        <div className="flex">
          <img
            src={iconlab}
            alt=""
            className={`${loading ? "hidden" : "flex"} w-6 h-8`}
          />
          <h2 className={`ml-2 font-bold text-md`}>
            Diagnose performance issues
          </h2>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-start w-[960px] max-w-screen-md mx-auto mt-4">
        {siteData.audits && (
          <>
            <div className="mt-8">
              <h2 className="flex justify-center items-center font-bold mb-4">
                Site Diagnosed: {url}
              </h2>
              <div className="flex justify-between items-center border-b border-[#d8d8d8]">
                <MetricHeader />
                <ExpandView onClick={() => setHidden(!hidden)} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <MetricsData
                  metricTested={
                    siteData?.audits["first-contentful-paint"]?.title
                  }
                  displayValue={
                    siteData?.audits["first-contentful-paint"]?.displayValue
                  }
                  metricDescription={
                    siteData?.audits[
                      "first-contentful-paint"
                    ]?.description.split(".")[0] + "."
                  }
                  score={siteData?.audits["first-contentful-paint"]?.score}
                  showMetricsDescription={!hidden}
                />
                <MetricsData
                  metricTested={siteData?.audits["interactive"]?.title}
                  displayValue={siteData?.audits["interactive"]?.displayValue}
                  metricDescription={
                    siteData?.audits["interactive"]?.description.split(".")[0] +
                    "."
                  }
                  score={siteData?.audits["interactive"]?.score}
                  showMetricsDescription={!hidden}
                />
                <MetricsData
                  metricTested={siteData?.audits["speed-index"]?.title}
                  displayValue={siteData?.audits["speed-index"]?.displayValue}
                  metricDescription={
                    siteData?.audits["speed-index"]?.description.split(".")[0] +
                    "."
                  }
                  score={siteData?.audits["speed-index"]?.score}
                  showMetricsDescription={!hidden}
                />
                <MetricsData
                  metricTested={siteData?.audits["total-blocking-time"]?.title}
                  displayValue={
                    siteData?.audits["total-blocking-time"]?.displayValue
                  }
                  metricDescription={
                    siteData?.audits["total-blocking-time"]?.description.split(
                      "."
                    )[0] + "."
                  }
                  score={siteData?.audits["total-blocking-time"]?.score}
                  showMetricsDescription={!hidden}
                />
                <MetricsData
                  metricTested={
                    siteData?.audits["largest-contentful-paint"]?.title
                  }
                  displayValue={
                    siteData?.audits["largest-contentful-paint"]?.displayValue
                  }
                  metricDescription={
                    siteData?.audits[
                      "largest-contentful-paint"
                    ]?.description.split(".")[0] + "."
                  }
                  score={siteData?.audits["total-blocking-time"]?.score}
                  showMetricsDescription={!hidden}
                />
                <MetricsData
                  metricTested={
                    siteData?.audits["cumulative-layout-shift"]?.title
                  }
                  displayValue={
                    siteData?.audits["cumulative-layout-shift"]?.displayValue
                  }
                  metricDescription={
                    siteData?.audits[
                      "cumulative-layout-shift"
                    ]?.description.split(".")[0] + "."
                  }
                  score={siteData?.audits["cumulative-layout-shift"]?.score}
                  showMetricsDescription={!hidden}
                />
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
};

export default SitesData;
