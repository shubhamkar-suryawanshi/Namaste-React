import React from 'react';
import { useState } from 'react';
import { Restaurants } from '../constants';
import RestaurantCard from './RestaurantCard';

const filterList = (inputValue, list) => {
  const filterData = list.filter((restos) =>
    restos.data.name.includes(inputValue)
  );

  return filterData;
};

const Body = () => {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState(Restaurants);

  return (
    <React.Fragment>
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
      />
      <button
        onClick={() => {
          setList(filterList(inputValue, list));
        }}
      >
        Search
      </button>
      <div className="body">
        {list.map((r) => (
          <RestaurantCard key={r.data.id} {...r.data} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Body;
