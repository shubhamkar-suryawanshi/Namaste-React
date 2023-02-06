import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Restaurants } from '../constants';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

const filterData = (inputValue, list) => {
  const filterD = list.filter((restos) =>
    restos.data.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  return filterD;
};

const Body = () => {
  const [inputValue, setInputValue] = useState('');
  // const [list, setList] = useState(Restaurants);
  const [allList, setAllList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    // console.log(json);
    setAllList(json.data.cards[2].data.data.cards);
    setFilteredList(json.data.cards[2].data.data.cards);
  }

  // not render anything(early return)
  if (!allList) return null;

  // If nothing is matching after filter?
  // if (filteredList.length === 0)
  //   return <h1>Sorry, Your Favorite Restaurant not found</h1>;

  return allList.length === 0 ? (
    <Shimmer />
  ) : (
    <React.Fragment>
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
      />
      <button
        onClick={() => {
          setFilteredList(filterData(inputValue, allList));
        }}
      >
        Search
      </button>
      {/*<div className="body">
        {filteredList.map((r) => (
          <RestaurantCard key={r.data.id} {...r.data} />
        ))}
        </div>*/}
      <div className="body">
        {filteredList.map((r) => {
          return (
            <Link to={'/restaurant/' + r.data.id} key={r.data.id}>
              <RestaurantCard {...r.data} />
            </Link>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Body;
