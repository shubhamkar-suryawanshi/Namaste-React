import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/foodvilla.png';
import MyContext from '../shared/MyContext';

const Header = () => {
  const { user } = useContext(MyContext);

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
        <li>
          <Link to={'/faq'}>FAQs</Link>
        </li>
        <li>Cart</li>
        <li>{user.name}</li>
      </ul>
      <button className="header-btn">Login</button>
    </div>
  );
};

export default Header;
