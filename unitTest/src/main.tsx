import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AllPizza from "./pages/AllPizza";
import Kosar from "./pages/Kosar";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllPizza />} />
        <Route path="/kosar" element={<Kosar />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
