import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PageSpeedInsightsContext from "../context/PageSpeedInsightsContext";
import Spinner from "../components/Spinner";
import iconlab from "../components/assets/icon-lab.svg";
import MetricsData from "../components/metrics/MetricsData";
import MetricHeader from "../components/metrics/MetricHeader";
import ExpandView from "../components/metrics/ExpandView";
import OverallScore from "../components/metrics/OverallScore";
import Strategy from "../components/Strategy";
import Treemap from "../components/metrics/Treemap";
import TreemapTitle from "../components/metrics/TreemapTitle";

const SitesData = () => {
  const [hidden, setHidden] = useState(true);
  const { checkPageSpeed, siteData, loading } = useContext(
    PageSpeedInsightsContext
  );

  const [searchParams] = useSearchParams();
  const url = searchParams.get("url");
  const formFactor = searchParams.get("formFactor");
  const formFactorSitesData = siteData[formFactor || "mobile"];

  useEffect(() => {
    if (url) {
      checkPageSpeed(url);
    }
  }, [url, checkPageSpeed]);

  if (loading) {
    return (
      <div className="flex justify-start items-start w-full lg:w-[960px] max-w-screen-lg mx-auto mt-4 border-b border-[#d8d8d8] p-2 lg:p-0">
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
      <div className="flex flex-col justify-start w-full lg:w-[960px] max-w-screen-lg mx-auto lg:mt-4 p-2 lg:p-0">
        {formFactorSitesData?.audits && (
          <>
            <div className="mt-8">
              <Strategy />
              <h2 className="text-center font-bold mb-4 text-xl lg:text-2xl">
                Site Diagnosed: {url}
              </h2>
              <OverallScore
                percentage={
                  formFactorSitesData.categories.performance.score * 100
                }
                dataImg={
                  formFactorSitesData.audits["final-screenshot"].details.data
                }
                deviceFactor={formFactorSitesData.configSettings.formFactor}
              />
              <TreemapTitle />
              <div className="flex justify-between items-center flex-wrap mb-4 mt-4 p-4 rounded-md border border-[#f1f1f1]">
                {formFactorSitesData.audits[
                  "screenshot-thumbnails"
                ]?.details.items.map((item, index) => {
                  return (
                    <Treemap
                      itemsScr={item.data}
                      factor={formFactorSitesData.configSettings.formFactor}
                      key={index}
                    />
                  );
                })}
              </div>
              <div className="flex justify-between items-center border-b border-[#d8d8d8]">
                <MetricHeader />
                <ExpandView onClick={() => setHidden(!hidden)} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 place-items-center lg:place-content-start">
                <MetricsData
                  metricTested={
                    formFactorSitesData?.audits["first-contentful-paint"]?.title
                  }
                  displayValue={
                    formFactorSitesData?.audits["first-contentful-paint"]
                      ?.displayValue
                  }
                  metricDescription={
                    formFactorSitesData?.audits[
                      "first-contentful-paint"
                    ]?.description.split(".")[0] + "."
                  }
                  score={
                    formFactorSitesData?.audits["first-contentful-paint"]?.score
                  }
                  showMetricsDescription={!hidden}
                />
                <MetricsData
                  metricTested={
                    formFactorSitesData?.audits["interactive"]?.title
                  }
                  displayValue={
                    formFactorSitesData?.audits["interactive"]?.displayValue
                  }
                  metricDescription={
                    formFactorSitesData?.audits[
                      "interactive"
                    ]?.description.split(".")[0] + "."
                  }
                  score={formFactorSitesData?.audits["interactive"]?.score}
                  showMetricsDescription={!hidden}
                />
                <MetricsData
                  metricTested={
                    formFactorSitesData?.audits["speed-index"]?.title
                  }
                  displayValue={
                    formFactorSitesData?.audits["speed-index"]?.displayValue
                  }
                  metricDescription={
                    formFactorSitesData?.audits[
                      "speed-index"
                    ]?.description.split(".")[0] + "."
                  }
                  score={formFactorSitesData?.audits["speed-index"]?.score}
                  showMetricsDescription={!hidden}
                />
                <MetricsData
                  metricTested={
                    formFactorSitesData?.audits["total-blocking-time"]?.title
                  }
                  displayValue={
                    formFactorSitesData?.audits["total-blocking-time"]
                      ?.displayValue
                  }
                  metricDescription={
                    formFactorSitesData?.audits[
                      "total-blocking-time"
                    ]?.description.split(".")[0] + "."
                  }
                  score={
                    formFactorSitesData?.audits["total-blocking-time"]?.score
                  }
                  showMetricsDescription={!hidden}
                />
                <MetricsData
                  metricTested={
                    formFactorSitesData?.audits["largest-contentful-paint"]
                      ?.title
                  }
                  displayValue={
                    formFactorSitesData?.audits["largest-contentful-paint"]
                      ?.displayValue
                  }
                  metricDescription={
                    formFactorSitesData?.audits[
                      "largest-contentful-paint"
                    ]?.description.split(".")[0] + "."
                  }
                  score={
                    formFactorSitesData?.audits["total-blocking-time"]?.score
                  }
                  showMetricsDescription={!hidden}
                />
                <MetricsData
                  metricTested={
                    formFactorSitesData?.audits["cumulative-layout-shift"]
                      ?.title
                  }
                  displayValue={
                    formFactorSitesData?.audits["cumulative-layout-shift"]
                      ?.displayValue
                  }
                  metricDescription={
                    formFactorSitesData?.audits[
                      "cumulative-layout-shift"
                    ]?.description.split(".")[0] + "."
                  }
                  score={
                    formFactorSitesData?.audits["cumulative-layout-shift"]
                      ?.score
                  }
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
