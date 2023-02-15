import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../constants';
import useRestaurant from '../Hooks/useRestaurant';
import Shimmer from './Shimmer';
import { useDispatch } from 'react-redux';
import { addItem } from '../shared/cartSlice';

const Restaurant = () => {
  const { resId } = useParams();

  const { restaurant, menus } = useRestaurant(resId);

  const dispatch = useDispatch();

  // not render anything(early return)
  if (!restaurant) return null;

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="p-3 m-2 flex flex-1 justify-start">
      <div className="w-72 p-5 m-5">
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h1>Restaurant Name: {restaurant.name}</h1>
        <h1>Rating: {restaurant.avgRating}</h1>
        <h2>ID: {restaurant.id}</h2>
      </div>
      {/*  <button
        onClick={() => {
          dispatch(addItem('Bhajji'));
        }}
      >
        Add Item
      </button>*/}

      <div>
        <h1 className="font-bold text-2xl">Menu</h1>
        <ul>
          {Object.values(menus).map((item) => (
            <li key={item.id} className="flex">
              {item.name} -
              <button
                key={item.id}
                onClick={() => {
                  dispatch(addItem(item));
                }}
              >
                Add item
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Restaurant;
