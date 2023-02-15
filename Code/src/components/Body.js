import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

import { filterData } from '../shared/helper';
import useList from '../Hooks/useList';
import useOnline from '../Hooks/useOnline';

const Body = () => {
  const [inputValue, setInputValue] = useState('');

  const { list, filteredList } = useList();

  if (!list) return null;

  // If nothing is matching after filter?
  // if (filteredList.length === 0)
  //   return <h1>Sorry, Your Favorite Restaurant not found</h1>;

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Oops! You are Offline</h1>;
  }

  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <React.Fragment>
      <input
        className="py-1 px-5  ml-3 my-3  border border-gray-400 active:border-gray-400 rounded-l-full"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
      />
      <button
        className="p-1 rounded-r-full border border-gray-400 pr-2 bg-gray-400"
        onClick={() => {
          setFilteredList(filterData(inputValue, list));
        }}
      >
        Search
      </button>
      {/*<div className="body">
        {filteredList.map((r) => (
          <RestaurantCard key={r.data.id} {...r.data} />
        ))}
        </div>*/}
      <div className="flex flex-wrap justify-around">
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
