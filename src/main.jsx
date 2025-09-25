import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Test from "./test.jsx";
import Test2 from "./test2.jsx";
import Test3 from "./test3.jsx";
import Prop from "./prop.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home.jsx";
import Review from "./page/review.jsx";
import Contact from "./page/contact.jsx";
import About from "./page/about.jsx";
import Login from "./page/login.jsx";
import Test4 from "./test4.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Test/> */}
    {/* <Test2/>
    <Test3/> */}
    {/* <Prop/> */}
    {/* <Test4/> */}

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/review" element={<Review />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
