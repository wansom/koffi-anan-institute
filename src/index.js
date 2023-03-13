import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutRoute from "./pages/about";
import ContactUsRoute from "./pages/contact-us";
import AllNews from "./pages/all-news";
import SingleNews from "./pages/Single-news";
import AllEvents from "./pages/all-events";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about-us" element={<AboutRoute/>}/>
      <Route path="/contact-us" element={<ContactUsRoute/>}/>
      <Route path="/all-news" element={<AllNews/>}/>
      <Route path="/single-news" element={<SingleNews/>}/>
      <Route path="/all-events" element={<AllEvents/>}/>
    </Routes>
  </BrowserRouter>
);
reportWebVitals();
