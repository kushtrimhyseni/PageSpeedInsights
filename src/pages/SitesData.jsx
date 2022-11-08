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
import treemapImg from "../components/assets/treemap.svg";

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

  console.log(siteData);
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
        {siteData.audits && (
          <>
            <div className="mt-8">
              <Strategy />
              <h2 className="text-center font-bold mb-4 text-xl lg:text-2xl">
                Site Diagnosed: {url}
              </h2>
              <OverallScore
                percentage={siteData.categories.performance.score * 100}
                dataImg={siteData.audits["final-screenshot"].details.data}
              />
              <div className="p-2 border border-[#f1f1f1] rounded-md mb-4 flex justify-start items-center w-[150px] max-w-[150px]">
                <img src={treemapImg} alt="" />
                <a
                  href="https://googlechrome.github.io/lighthouse/treemap/?gzip=1#H4sIAAAAAAAACq2WS2/bRhDHv4rBsynu+2EgCJr60EtOrk9FD8OZWXldimRJyoJh6Lt3JacXWUqaQgBBcDkP/rgz/A/fqu5pqu7eqon/3vK8MD1OXXVXPS3LON81zW63Ww1Ec8/LCodNU91WKffQ/dALtpSX+ZB5ximPS71MzBsYa4IFDrczlQTnbLfVkpeOi/XhaL35/d16c/9uJX6PykNffB5npps0TDffctzAOBanGYeppOi3XfdtcZ/nsYPXrwMdUue+xGxgyS98TLlA7o60y+t4sJ8Q9SWqmP94q3rY8PfffOJ52E7IX16XQ4yOUur97Q8jd2ONQ79wvzQI+MRNetk0m9w30jknvXAi1M8zYmIOqCgSStcmNqiUItW6wBpClIIkCwFRG+nABi1kTIBSk3WWVs/zR8AQnVe31bbflq38F1rZKK8G7QJEtInJJy8hecc+WeuFVilZaoVxoKzFpK33FkjrFkCxsmwc0XnosqdBn0Lb4H6Oeey269zPDQ7DX5nrDnb1oTGajteAr824bbuMzfMHh/rdUsg+v/D0Sa/ESn9kFBdg1sOw7vjIMjHCuOATNDDmsy96Kcn/qEJMRkrlQrKIImhffFuhNQFobL1npZ0i8pEgRe0wCiWE1VhqFNGcr4LR4qQIUobrNQ4aFbzFGFHGYFqZKLA3TlgUAMFTSK0uzQ+GUQF4YwUJEzmkWBLEs8gleTxBNtJe7wOF6KMXSQhvufBqjjGFAtdap5JLhIotepTW+CCiaSOjswg+cVn588hGhA/Mzl5RVZIGImXYBC2D06QRtDdBBM9SpMQgo0sedVIYrSfjlUwt0qFBzAXo4GI8hS6frI9Xg26LSlgTY9E1oW2rpNNWJlZtUklRET+hdDkSGrKsk04yQgRA60IRmvP9bL08YXbmJzXlO8QSZDj2R+lUhRwltyIVIW9ZAguFppyUipwiYFFtKznaovKhbS3ZcH6bhTvV7gvSnTew5nlFG4Qj8hegsm7uv/76y/HyN+5GnlYF+uyDSsOdPOe/KBNSX+M6N+8Te24s2qIwKjTYDVtKHUxcz0sZw9iUcZu7mhjLqL1IIZU+bSop/f7P/X5/W5UKpLx+4GXJ/fo4zLsB4fgnwX39+FAVr38Af/lDdvAIAAA="
                  rel="noreferrer"
                  target="_blank"
                  className="text-[#0066ff] text-[14px] ml-2 font-semibold"
                >
                  View Treemap
                </a>
              </div>
              <div className="flex justify-between items-center flex-wrap mb-4 mt-4 p-4 rounded-md border border-[#f1f1f1]">
                {siteData.audits["screenshot-thumbnails"]?.details.items.map(
                  (item) => {
                    return <Treemap itemsScr={item.data} />;
                  }
                )}
              </div>
              <div className="flex justify-between items-center border-b border-[#d8d8d8]">
                <MetricHeader />
                <ExpandView onClick={() => setHidden(!hidden)} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 place-items-center lg:place-content-start">
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
