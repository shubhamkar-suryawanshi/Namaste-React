import { useState, useEffect } from 'react';
import { FETCH_RESTAURANT_URL, Restaurants } from '../constants';

function useList() {
  // const [list, setList] = useState(Restaurants);
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.696534&lng=74.2421107&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    // console.log(json);
    setList(json.data.cards[2].data.data.cards);
    setFilteredList(json.data.cards[2].data.data.cards);
  }

  return {
    list: list,
    filteredList: filteredList,
  };
}

export default useList;
