import { useState ,createContext} from 'react';
import mouse from '../assets/mouse.jpg'
import keyboard from '../assets/key board.jpg'
import monitor from '../assets/monitor.jpg'
import box from '../assets/case.jpg'
import React , {useContext} from "react";
import {searchContext} from "../App"

export const itemContext = createContext()

function Sections() {
const   value = useContext(searchContext)
  const [card , setCard] = useState([{
    name: "keyboard",
    price: 30,
    image: keyboard,
    number: 5,
    unique :0
   },{
    name: "case",
    price: 80,
    image: box,
    number: 4,

    unique : 1
    },{
    name: "monitor",
    price: 150,
    image: monitor,
    number: 10,

    unique : 2
    },{
    name: "mouse",
    price: 30,
    image: mouse,
    number: 6,

    unique : 3
  
    }])
    

    const [item, setItem] = useState([
   
    ])



  function deleteFunc(index) {
    setCard(prevCard => prevCard.filter(el => el.unique !== index));
  }

  function addToCart(index){
    setItem([...item,card[index]]);
    console.log(item)
  }

  return (
    <>

      <itemContext.Provider>
        {card.filter((item) => {
      return value.toLowerCase() === '' ? item: item.name.toLowerCase().includes(value); })   
         
      .map(({ unique, image, name, price, number}) => (
        <div key={unique} className="section container">
          <div className="card">
            <img src={image} alt="logo" />
            <p className="title">{name}</p><br />
            <p>{number}</p>
             <button onClick={() => addToCart(unique)} className='Delete'>buy for {price}$</button>
            <button onClick={() => deleteFunc(unique)}  className='Delete'>Delete </button>
          </div>
        </div>
      ))}
      </itemContext.Provider>
      
    </>
  );
}

 

export default Sections;
