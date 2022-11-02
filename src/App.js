import { PageSpeedInsightsContextProvider } from "./context/PageSpeedInsightsContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SitesData from "./pages/SitesData";
import Home from "./pages/Home";

function App() {
  return (
    <PageSpeedInsightsContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/report" element={<SitesData />}></Route>
        </Routes>
      </Router>
    </PageSpeedInsightsContextProvider>
  );
}

export default App;
