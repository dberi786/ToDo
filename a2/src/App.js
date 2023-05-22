import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
      <Route path="/Home" element ={<Home/>}></Route>
      <Route path="/Shop" element ={<Shop/>}></Route>

     </Routes>
     
     <Footer/>
    </div>
  );
}

export default App;
