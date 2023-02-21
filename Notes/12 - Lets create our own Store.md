# Redux

- Redux is used to manage data layer of the application. ie for data management
- to manage large data - large scale big application, we use redux instead of context.
- Insted of creating multiple context, we use only one redux store to store everything.
- We create logical separation inside our store called slices(user, authentication, theme, card, ...). Slice is portion of the store.
- Our component cannot directly modify the store or slice of store eg. onClick, data will not change like useState.
- for that, we need to "dispach an action(addItem), which call a function(normal JS function) and that function will modify a store/slice
- Why we cant modify directly? -> when there is large application, we dont want a random component randemly modify the store. We need to keep track of everything. We are braking it in the standard process.It adds Modularity(every step have its own responsibility) - separation of concerns

### When we click on the + button, it Dispaches an Action(and pass the payload), which calls the Reducer function, which updates the Slice of the Store.

! [Redux](../Code/src/assets/redux.png)

This is only for writting in the store. To read from the store, we use "Selector"(Subscribing to the store=in sync with store). It will give info to update UI.

---
- npm i @reduxjs/toolkit => Manage and maintain the store - Core of redux
- npm i react-redux => bridge between redux and react

- Create store in shared folder which contains slices. 
```
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({});

export default store;
```
Now, provide the access of store to whole app or specific part where uh want to use redux.(same as MyContext.Provider)
```
<Provider store={store}>  //store is the prop
    <Header>
    .
    .
    .
</Provider>
```
Now, create slices of the store, uh can create it inside store.js or separately.
```
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
```
Now update the store with created slice
```
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    //name of the slice: slice
  },
});

export default store;
```

Steps -
1. Create store - configureStore() - RTK
2. Provide my store to app
    `<Provider store={myStore}> import from react-redux`
3. Slice - RTK - createStore({
    name:
    initiailState:
    reducers:{
        addItem:(state, action)=>{state=action.payload}
    }
}) 
4. put that slice into store -
{
    reducer:{
        cart: cartSlice,
        user: userSlice
    }
}
---
Now subscribe to the store to read from slice/store
```
useSelector - react-redux
  const cartItems = useSelector((store) => store.cart.items);
```
## Redux dev tools