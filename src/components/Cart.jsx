import React, { useState } from 'react'
// import Navbar from './Navbar'
// import mouse from '../assets/mouse.jpg'
// import keyboard from '../assets/key board.jpg'
// import monitor from '../assets/monitor.jpg'
// import box from '../assets/case.jpg'
import logo from "../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import React , {useContext} from "react";
import {itemsContext} from "../App"

function Cart() {
  

  function deleteFunc(index) {
    setItem(prevCard => prevCard.filter(el => el.unique !== index));
  }

  return (
    <>
     <nav>

      <div className="container">
          <div className="logo">
              <img src={logo} alt="logo"   />
          </div>
          <div>
              <input 
              id="search" 
              placeholder="Search" 
              type="text"  />
              <FontAwesomeIcon className="search" icon={faMagnifyingGlass} />
          </div>

          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="#">About us</Link></li>
              <li><Link to="#">lication</Link></li>
          </ul>
      </div>

</nav>
    <h1>this cart page </h1>




    {item.map(({ unique, image, name, price, number}) => (
        <div key={unique} className="section container">
          <div className="card">
            <img src={image} alt="logo" />
            <p className="title">{name}</p><br />
            <p>{number}</p>
            <button onClick={() => deleteFunc(unique)}  className='Delete'>Delete </button>
          </div>
        </div>
      ))}
    </>
  )
}

export default Cart


// images 
// search value 