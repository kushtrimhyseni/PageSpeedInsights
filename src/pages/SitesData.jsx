import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PageSpeedInsightsContext from "../context/PageSpeedInsightsContext";
import Spinner from "../components/Spinner";

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

  if (!loading) {
    return <div>{loading && <Spinner />}</div>;
  } else {
    return (
      <div>
        <h2>Data fetched</h2>
      </div>
    );
  }
};

export default SitesData;
