import { useState, useEffect } from 'react';
import mouse from '../assets/mouse.jpg'
import keyboard from '../assets/key board.jpg'
import monitor from '../assets/monitor.jpg'
import box from '../assets/case.jpg'
function Sections({ searchValue } ) {

  const [card , setCard] = useState([{
    name: "keyboard",
    price: 30,
    image: keyboard,
    unique :0
   },{
    name: "case",
    price: 80,
    image: box,
    unique : 1
    },{
    name: "monitor",
    price: 150,
    image: monitor,
    unique : 2
    },{
    name: "mouse",
    price: 30,
    image: mouse,
    unique : 3
  
    }])

    useEffect(() => {
      setCard(prevCard =>
        prevCard.filter(el =>
          el.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
        )
      );
    }, [searchValue]);


  function deleteFunc(index) {
    setCard(prevCard => prevCard.filter(el => el.unique !== index));
  }
  return (
    <>
      {card.map(({ unique, image, name, price }) => (
        <div key={unique} className="section container">
          <div className="card">
            <img src={image} alt="logo" />
            <p className="title">{name}</p>
            <button className='Delete'>buy for {price}$</button>
            <button onClick={() => deleteFunc(unique)}  className='Delete'>Delete </button>
          </div>
        </div>
      ))}
    </>
  );
}

 

export default Sections;
