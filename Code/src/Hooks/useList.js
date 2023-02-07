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
    const data = await fetch(FETCH_RESTAURANT_URL);
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
