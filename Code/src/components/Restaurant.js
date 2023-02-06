import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../constants';
import Shimmer from './Shimmer';

const Restaurant = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=' +
        id
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="restro">
      <div>
        <img src={IMG_CDN_URL + restaurant.data.cloudinaryImageId} />
        <h1>Restaurant Name: {restaurant.data.name}</h1>
        <h1>Rating: {restaurant.data.avgRating}</h1>
        <h2>ID: {id}</h2>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant.data.menu.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Restaurant;
