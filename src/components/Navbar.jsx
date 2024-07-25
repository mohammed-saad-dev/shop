import logo from "../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

function Navbar({ hide ,searchValue, onInputChange }){
 
return (
    <nav className={hide} >

        <div className="container">
            <div className="logo">
                <img src={logo} alt="logo"   />
            </div>

            <div>
                <input 
                onChange={onInputChange} 
                value={searchValue}  
                id="search" 
                placeholder="Search" 
                type="text"  />
                <FontAwesomeIcon className="search" icon={faMagnifyingGlass} />
            </div>


            <ul>
                <li> <a href="#3">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">lication</a></li>
            </ul>
        </div>

    </nav>
)
}
 
export default Navbar 