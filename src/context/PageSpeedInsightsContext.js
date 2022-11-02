/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useCallback, useState } from "react";

const PageSpeedInsightsContext = createContext();

export const PageSpeedInsightsContextProvider = ({ children }) => {
  const [siteData, setSiteData] = useState({});
  const [loading, setLoading] = useState(false);
  const checkPageSpeed = useCallback(async (url) => {
    setLoading(true);
    const response = await fetch(
      `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&strategy=mobile&key=AIzaSyB6vssdE7yXHseGHZxmZ1sySxQB_8MDe9k`
    );
    const data = await response.json();
    setLoading(false);
    setSiteData(data.lighthouseResult.audits);
  }, []);

  return (
    <PageSpeedInsightsContext.Provider
      value={{
        siteData,
        checkPageSpeed,
        loading,
      }}
    >
      {children}
    </PageSpeedInsightsContext.Provider>
  );
};

export default PageSpeedInsightsContext;
