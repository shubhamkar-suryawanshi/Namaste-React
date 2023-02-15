import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    // after state change, after action, it will have current value of the state and during next action, we will modify this state
  },
  // how to modify cart? -> creating reducers function
  reducers: {
    // when it call -> on dispatch an action - action name?
    // This is place where we tell, what action will call what reducer function
    // addItem: () => {},
    // above addItem is action and followed reducer function
    // this reducer function takes 2 things, state(initial state) and action(data which is coming in) payload
    // write logic inside function
    addItem: (state, action) => {
      state.items.push(action.payload);
      //   whatever coming after button click is action payload
      // state is always previous state
    },
    clearCart: (state) => {
      state.items = [];
    },
    // this reducers functions does not return anything, it directly modify like setState
    removeItem: (state, action) => {
      state.items.pop();
      // change the logic
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
// its actions not action

export default cartSlice.reducer;
