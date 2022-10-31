import Header from "./components/Header";
import { PageSpeedInsightsContextProvider } from "./context/PageSpeedInsightsContext";
import Input from "./components/Input";

function App() {
  return (
    <PageSpeedInsightsContextProvider>
      <div className="flex flex-col">
        <Header />
        <main className="mt-28">
          <Input />
        </main>
      </div>
    </PageSpeedInsightsContextProvider>
  );
}

export default App;
