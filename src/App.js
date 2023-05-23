import AppBarComponent from "./components/AppBar";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Benefitcomponent from "./components/Benefits";
import MyComponent from "./components/Chooseyourpath";
import Footer from "./components/Footer";
import React from "react";

const App = () => {
  return (
    <>
      <AppBarComponent />
      <Banner />
      <Cards />
      <Benefitcomponent />
      <MyComponent />

      <Footer />
    </>
  );
};

export default App;
