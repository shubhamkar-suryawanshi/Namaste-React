import { IMG_CDN_URL } from '../constants';

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <div className="w-64 p-3 m-2 text-center shadow-lg">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
      <h2 className="font-bold">{name} </h2>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard;
