import AppBarComponent from "./components/AppBar";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Benefitcomponent from "./components/Benefits";
import MyComponent from "./components/Chooseyourpath";
import ScrollableTable from "./components/ScrollCards";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <AppBarComponent />
      <Banner />
      <Cards />
      <Benefitcomponent />
      <MyComponent />
      <ScrollableTable />
      <Footer />
    </>
  );
};

export default App;
