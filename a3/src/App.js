import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Box from "./Components/Box";


function App() {
  return (
    <div>
      <Header/>
     <Routes>
      <Route path="/" element ={<Home/>}></Route>
      <Route path="/shop" element ={<Shop/>}></Route>

     </Routes>
     <div className="bg-black h-screen p-3">
      
      <div className="  rounded mx-auto max-w-[750px] min-h-[750px] shadow2xl bg-white">
        
      <mid/>
     <Footer/>
     <Box/>
      </div>
     
    </div>
     
     
    </div>
  );
}

export default App;
