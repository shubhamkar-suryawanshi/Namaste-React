import logo from '../assets/foodvilla.png';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="list">
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
      <button className="header-btn">Login</button>
    </div>
  );
};

export default Header;
