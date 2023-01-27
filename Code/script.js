import React from 'react';
import ReactDOM from 'react-dom/client';
import { Restaurants, IMG_CDN_URL } from './constants';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://storage.googleapis.com/shy-pub/39943/1622739779895_41546_logo.jpg"
          alt="logo"
        />
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

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
      <h2>{name} </h2>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      {Restaurants.map((r) => (
        <RestaurantCard key={r.data.id} {...r.data} />
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <hr />
      <small>@C This is a app Footer</small>
    </div>
  );
};

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<AppLayout />);
