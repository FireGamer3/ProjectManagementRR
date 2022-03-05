import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./routes/index";

function App() {
  return (
    <div className="dark">
      <div className="bg-white dark:bg-gray-900 dark:text-white">
        <div className="p-8 max-w-7xl mx-auto min-h-screen">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
