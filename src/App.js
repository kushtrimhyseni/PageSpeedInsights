import { PageSpeedInsightsContextProvider } from "./context/PageSpeedInsightsContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SitesData from "./pages/SitesData";
import Header from "./components/Header";
import Input from "./components/Input";

function App(props) {
  return (
    <PageSpeedInsightsContextProvider>
      <Router>
        <div className="flex flex-col">
          <Header />
          <main className="mt-28 w-[960px] max-w-screen-md mx-auto">
            <Input />
          </main>
        </div>
        <Routes>
          <Route path="/" element={<SitesData />}></Route>
        </Routes>
      </Router>
    </PageSpeedInsightsContextProvider>
  );
}

export default App;
