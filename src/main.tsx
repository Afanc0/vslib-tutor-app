import "./index.css"

import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom"

import App from "./App.tsx";
import LessonPost from "./pages/LessonPost/index.ts";

const root = createRoot(document.getElementById("root")!);

root.render(
  <BrowserRouter basename="/vslib-tutor-app/">
    <Routes>
      <Route index element={<App />} />
      <Route path="/:id/:title" element={<LessonPost />} />
    </Routes>
  </BrowserRouter>
)