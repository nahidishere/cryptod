import React from "react";
import Featured from "./components/Featured/Featured";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Newsletter from "./components/Newsletter/Newsletter";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
