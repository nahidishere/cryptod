import React from "react";
import { Routes, Route } from "react-router-dom";
import AllCryptoCurrency from "./Pages/AllCryptoCurrency/AllCryptoCurrency";
import Home from "./Pages/Home/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-cryptocurrency" element={<AllCryptoCurrency />} />
      </Routes>
    </>
  );
}

export default App;
