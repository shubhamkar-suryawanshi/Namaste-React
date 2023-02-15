import React from 'react';
import { useSelector } from 'react-redux';
import FoodItem from './FoodItem';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  //   const store = useSelector((store) => store); //this is not effecient as it subscribe the whole store and re-render the whole store

  return (
    <div className="">
      <h1 className="font-bold text-3xl shadow-lg p-2 m-2 bg-lime-50">
        Cart Items - {cartItems.length}
      </h1>
      {cartItems.map((item) => (
        <FoodItem key={item.id} {...item} />
      ))}
      {/*<FoodItem {...cartItems[0]} />*/}
    </div>
  );
};

export default Cart;
