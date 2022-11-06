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
          <main className="mt-28 w-full lg:w-[960px] max-w-screen-lg mx-auto p-2 lg:p-0">
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
