import { PageSpeedInsightsContextProvider } from "./context/PageSpeedInsightsContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SitesData from "./pages/SitesData";
import Header from "./components/Header";
import Input from "./components/Input";

function App() {
  return (
    <PageSpeedInsightsContextProvider>
      <Router>
        <div className="flex flex-col">
          <Header />
          <main className="mt-28">
            <Input />
          </main>
        </div>
        <Routes>
          <Route path="/report" element={<SitesData />}></Route>
        </Routes>
      </Router>
    </PageSpeedInsightsContextProvider>
  );
}

export default App;
