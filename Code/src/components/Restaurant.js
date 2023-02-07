import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../constants';
import useRestaurant from '../Hooks/useRestaurant';
import Shimmer from './Shimmer';

const Restaurant = () => {
  const { resId } = useParams();

  const { restaurant, menus } = useRestaurant(resId);

  // not render anything(early return)
  if (!restaurant) return null;

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="restro">
      <div>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h1>Restaurant Name: {restaurant.name}</h1>
        <h1>Rating: {restaurant.avgRating}</h1>
        <h2>ID: {restaurant.id}</h2>
      </div>

      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(menus).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Restaurant;
