import React from "react";
import Header from "./Layouts/Header/Header";
import Footer from "./Layouts/Footer/Footer";
import "./App.css";
import "./Assets/Fonts/Montserrat-Bold.ttf";
import Calculator from "./Components/Calculator";

function App() {
  return (
    <>
      <Header />
      <Calculator />
      <Footer />
    </>
  );
}

export default App;
