import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./routes/index";

function App() {
  return (
    <div class="dark">
      <div class="bg-white dark:bg-gray-900 dark:text-white">
        <div class="p-8 max-w-7xl mx-auto min-h-screen">
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
