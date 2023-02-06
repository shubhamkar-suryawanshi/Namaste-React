import { Link } from 'react-router-dom';
import logo from '../assets/foodvilla.png';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="list">
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/contact'}>Contact</Link>
        </li>
        <li>Cart</li>
      </ul>
      <button className="header-btn">Login</button>
    </div>
  );
};

export default Header;
