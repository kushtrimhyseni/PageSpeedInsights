/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useCallback, useState } from "react";

const PageSpeedInsightsContext = createContext();

export const PageSpeedInsightsContextProvider = ({ children }) => {
  const [siteData, setSiteData] = useState({});
  const [loading, setLoading] = useState(false);

  const checkPageSpeed = useCallback(async (url) => {
    setLoading(true);
    const promises = [];
    promises.push(
      fetch(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&strategy=mobile&key=AIzaSyB6vssdE7yXHseGHZxmZ1sySxQB_8MDe9k`
      )
    );
    promises.push(
      fetch(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&strategy=desktop&key=AIzaSyB6vssdE7yXHseGHZxmZ1sySxQB_8MDe9k`
      )
    );
    const newSiteData = {};
    Promise.allSettled(promises).then((results) => {
      results.forEach(async (result) => {
        const data = await result.value.json();
        setLoading(false);
        newSiteData[data.lighthouseResult?.configSettings.formFactor] =
          data?.lighthouseResult;
      });
      setSiteData(newSiteData);
    });
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
