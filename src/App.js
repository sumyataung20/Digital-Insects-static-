import AppBarComponent from "./components/AppBar";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Benefitcomponent from "./components/Benefits";
import MyComponent from "./components/Chooseyourpath";

const App = () => {
     return (
          <>
               <AppBarComponent />
               <Banner />

               <Cards />

               <Benefitcomponent />
               <MyComponent />
          </>
     );
};

export default App;
