import logo from "../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navbar({ hide, searchValue, onInputChange }) {
    return (
        <nav className={hide}>
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="Company Logo" />
                </div>

                <div>
                    <input 
                        onChange={onInputChange} 
                        value={searchValue}  
                        id="search" 
                        placeholder="Search" 
                        type="text"  
                    />
                    <FontAwesomeIcon className="search" icon={faMagnifyingGlass} />
                </div>

                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="#">About Us</Link></li>
                    <li><Link to="#">Application</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
