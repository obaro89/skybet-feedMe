import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EventProvider } from "./contexts/event.context";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <EventProvider>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </EventProvider>
  </BrowserRouter>
);
