import Landing from "./components/Lnading";
import Navbar from "./components/Navbar";
import "./style/homePage.css";
import { useState, createContext } from "react";
export const searchContext = createContext()
function App() {

  const [hide,setHide] = useState("show") // toggle hide and show the navbar 
  const [searchValue, setSearchValue] = useState(''); // input value
  const handleInputChange = (event) => { // the current value of input 
    setSearchValue(event.target.value);
  };

  
  return (
    <div>

      <Navbar hide={hide} searchValue={searchValue} onInputChange={handleInputChange}/> 
      <searchContext.Provider value={searchValue}>
        <Landing setHide={setHide}/>
      </searchContext.Provider>
    </div>
  );
}

export default App
