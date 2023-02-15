import { useState, useEffect } from 'react';
import { FETCH_MENU_URL } from '../constants';

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState({});
  const [menus, setMenus] = useState({});

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/menu/v4/full?lat=16.696534&lng=74.2421107&menuId=' +
        resId
    );
    const json = await data.json();
    setRestaurant(json.data);
    setMenus(json.data.menu.items);
  }

  return {
    restaurant,
    menus,
  };
};

export default useRestaurant;
