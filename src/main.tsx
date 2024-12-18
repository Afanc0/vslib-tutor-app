import "./index.css"

import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom"

//import App from "./App.tsx";
import Dashboard from "./pages/Dashboard/src/dashboard.tsx";
import LessonContent from "./pages/LessonPost/content-v2/src/lesson-content.tsx";

const root = createRoot(document.getElementById("root")!);

root.render(
  <BrowserRouter basename="/vslib-tutor-app/">
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/:id" element={<LessonContent />} />
    </Routes>
  </BrowserRouter>
)