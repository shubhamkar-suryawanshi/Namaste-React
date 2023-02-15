import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../assets/foodvilla.png';
import MyContext from '../shared/MyContext';

const Header = () => {
  const { user } = useContext(MyContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex items-center justify-between shadow-lg">
      <div className="logo">
        <img className="w-32" src={logo} alt="logo" />
      </div>
      <ul className="flex ">
        <li className="px-3">
          <Link to={'/'}>Home</Link>
        </li>
        <li className="px-3">
          <Link to={'/about'}>About</Link>
        </li>
        <li className="px-3">
          <Link to={'/contact'}>Contact</Link>
        </li>
        <li className="px-3">
          <Link to={'/faq'}>FAQs</Link>
        </li>
        <li className="px-3">
          <Link to={'/cart'}>Cart - {cartItems.length}</Link>
        </li>
        <li className="px-3">{user.name}</li>
      </ul>
      <button className="header-btn">Login</button>
    </div>
  );
};

export default Header;
