import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PageSpeedInsightsContext from "../context/PageSpeedInsightsContext";
import Header from "../components/Header";
import Input from "../components/Input";
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

  return (
    <div className="flex flex-col">
      <Header />
      <main className="mt-28">
        <Input />
      </main>
      {loading && <Spinner />}
    </div>
  );
};

export default SitesData;
