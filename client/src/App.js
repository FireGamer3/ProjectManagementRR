import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/nav/Navbar";

import Index from "./routes/index";
import ProjectDetail from "./routes/projects/ProjectDetail";
import NewProject from "./routes/projects/NewProject";
import NewProjectTask from "./routes/tasks/NewProjectTask";
import EditProjectTask from "./routes/tasks/EditProjectTask";
import EditProject from "./routes/projects/EditProject";

import NotFound from "./routes/errors/NotFound";

function App() {
  return (
    <div className="dark">
      <div className="bg-white dark:bg-gray-900 dark:text-white">
        <BrowserRouter>
          <Navbar />
          <div className="p-8 max-w-7xl mx-auto min-h-screen">
              <Routes>
                <Route path="/project/:id" element={<ProjectDetail />} />
                <Route path="/newProject" element={<NewProject />} />
                <Route path="/newTask/:id" element={<NewProjectTask />} />
                <Route path="/editTask/:id" element={<EditProjectTask />} />
                <Route path="/editProject/:id" element={<EditProject />} />
                <Route path="/NotFound" element={<NotFound />} />
                <Route path="/" element={<Index />} />
              </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
