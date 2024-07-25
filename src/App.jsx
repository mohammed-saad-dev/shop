import Landing from "./components/Lnading";
import Navbar from "./components/Navbar";
import "./style/homePage.css";
import { useState } from "react";
function App() {

  const [hide,setHide] = useState("show") // toggle hide and show the navbar 
  const [searchValue, setSearchValue] = useState(''); // input value
  const handleInputChange = (event) => { // the current value of input 
    setSearchValue(event.target.value);
  };

  
  return (
    <div>
      <Navbar hide={hide} searchValue={searchValue} onInputChange={handleInputChange}/> 
      <Landing setHide={setHide} searchValue={searchValue}/>
    </div>
  );
}

export default App
