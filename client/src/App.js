import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./routes/index";
import ProjectDetail from "./routes/projects/ProjectDetail";
import NotFound from "./routes/errors/NotFound";

function App() {
  return (
    <div className="dark">
      <div className="bg-white dark:bg-gray-900 dark:text-white">
        <div className="p-8 max-w-7xl mx-auto min-h-screen">
          <BrowserRouter>
            <Routes>
              <Route path="/project/:id" element={<ProjectDetail />} />
              <Route path="/NotFound" element={<NotFound />} />
              <Route path="/" element={<Index />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
