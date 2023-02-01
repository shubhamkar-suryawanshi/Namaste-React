# Building the first App

- Food Ordering app
- First create rough diagram
- Now start building
- first create the layout
- JSX must have only one parent
- React.Fregment is a component exported by the React
- It removes the extra div/any parent tag added in render and put everything inside div#root tag directly(which coming from index.html)
- It is like a empty tag
- also use empty tags <></> => short hand fo React.Fregement
- You can only assign key to it and not any other attribute/style. eg.
```
function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        // Without the `key`, React will fire a key warning
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
```
- In React, we have to write style in form of Object and with camelCase
- You cannot give style inside React.Fregement as it does not exists inside DOM

---

## Header

- Logo - Image imported and given style
- Nav Items - html List items and given CSS

---

## Body

Restraunt cards

- It contains imgs, name, rating, causins
- This data should come from API
- CONFIG DRIVEN UI (eg. In Sweegy website, few offers are running in Maharashtra, other offers are running in Banglore and No offers in Dheli, then according to location, Sweegy will show the offer) Simply you cant build website based on each location
- Way of passing data inside component is called Props

- While building body, he just followed the best approch to understand by everyone
  - Manually typed data by using HTML element inside Bodys' functional component
  - Created object outside manually and use it in bodys' html eg. {resto.name}
  - Copied data from sweegy's website and change the html accordingly eg. {resto[0].data?.name} 

- here the problem is, we have to type data manually, So use props for this

## Props

- props is nothing but argument to function
```
const person = {
  name: 'Surya',
  age: 28,
  address: {
    street: 'Station Road',
    city: 'Kolhapur',
  },
};

function myInfo(para) {
  //para is called 'props' in React
  console.log(para)
  console.log(`My name is ${para.name} and I'm ${para.age} years old (:)`);
}

function myInfo1({ name, age }) {
  console.log(`My name is ${name} and I'm ${age} years old`);
}

const { name, age } = person;
console.log(name);
console.log(age);

myInfo(person); // argument is person object
myInfo1(person);

<!-- Output -->
Object { 
  address : {street: 'Station Road', city: 'Kolhapur'}
  age : 28
  name : "Surya"
  [[Prototype]] : Object
}
Surya
28
My name is Surya and I'm 28 years old (:)
My name is Surya and I'm 28 years old
```

```
<RestaurantCarts restaurent={restoList[0]} /> => {RestaurantCarts(restaurent={restoList[0]})}
```
Props are stored as Object in React (you can see it in console)
```
const Child = (props) => {
  console.log(props);
};

const Parent = () => {
  return (
    <div>
      <PropsTrial name="Subuu" />
    </div>
  );
};

<!-- Output -->
{name: 'Subuu'}
  name: "Subuu"
  [[Prototype]]: Object

```
In JS, if parameter/argument is not object
```
const myName = 'Surya';
function myInfo(para) {
  console.log(para);
  console.log(`My name is ${para}`);
}
myInfo(myName);

<!-- Output -->
Surya
My name is Surya
```
printing the data in props to web
```
const Child = (props) => {
  return <h1>This is trial when prop is string = {props.name}</h1>;
};

const Parent = () => {
  return (
    <div>
      <Child name="Subuu" />
    </div>
  );
};

<!-- Here we use props.name cz props is stored as object and after it print using {} as its JSX expression or we can write any JS inside {} -->

```
Destructuring props
```
const Child = ({ name }) => {
  console.log(name);
  return <h1>This is trial when prop is string = {name}</h1>;
};

const Parent = () => {
  return (
    <div>
      <Child name="Subuu" />
    </div>
  );
};
```
If the prop is other than string, use { }
- NOTE: you can use { } for string also 
```
const Child = ({ name }) => {
  console.log(name);
  return <h1>This is trial when prop is string = {name}</h1>;
};

const Parent = () => {
  return (
    <div>
      <Child name={"Subuu"} />
    </div>
  );
};
```
When the prop is not string,
- The curly braces only need to be used within JSX elements. 

Like this:
`<MyComponent somProp={['something']} />`


In the case above, the {} is the way of saying: "Evaluate the expression that I passed within and pass it as a prop". Within the {} you can pass any valid JavaScript object or expression. 

The above code is the equivalent of this:
```
var myArray = ['something'];
<MyComponent somProp={myArray} />
```
Note that if you pass a string, and specifically for strings, you don't need the curly braces... 

like `<MyComponent somProp="something" />`.

You can do anything in props
```
const Child = ({ name }) => {
  console.log(name);
  return <h1>This is trial of props using directly = {name}</h1>;
};

const Parent = () => {
  const arr = [1, 2, 3];
  return (
    <div>
      <Child name={arr.reduce((acc, curr) => (acc += curr), 0)} />
      <Child name={'Surya'} />
    </div>
  );
};

<!-- Output -->
6
Surya
```

---

Lets see how the code is optimized
1. Normal Code
```
const RestaurantCard = () => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + Restaurants[0].data.cloudinaryImageId} />
      <h2>{Restaurants[0].data.name} </h2>
      <h3>{Restaurants[0].data.cuisines.join(', ')}</h3>
      <h3>{Restaurants[0].data.avgRating} stars</h3>
    </div>
  );
};

<!--  Similar kind of element containing 1 card at every point -->
```
2. By using props
```
const RestaurantCard = (props) => {
  return (
    <div className="card">
      <img
        src={IMG_CDN_URL + props.resto.data.cloudinaryImageId}
        alt={props.resto.data.name}
      />
      <h2>{props.resto.data.name} </h2>
      <h4>{props.resto.data.cuisines.join(', ')}</h4>
      <h4>{props.resto.data.avgRating} stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <RestaurantCard resto={Restaurants[0]} />
      <RestaurantCard resto={Restaurants[1]} />
      <RestaurantCard resto={Restaurants[2]} />
      <RestaurantCard resto={Restaurants[3]} />
      <RestaurantCard resto={Restaurants[4]} />
      <RestaurantCard resto={Restaurants[5]} />
    </div>
  );
};
```
3. Destructuring props - as 'props' word is common, removing it with destructuring
```
const RestaurantCard = ({ resto }) => {
  return (
    <div className="card">
      <img
        src={IMG_CDN_URL + resto.data.cloudinaryImageId}
        alt={resto.data.name}
      />
      <h2>{resto.data.name} </h2>
      <h4>{resto.data.cuisines.join(', ')}</h4>
      <h4>{resto.data.avgRating} stars</h4>
    </div>
  );
};
```
4. Destructring again - resto.data is common, removing it by destructuring again
```
const RestaurantCard = ({ resto }) => {
  const { name, cuisines, cloudinaryImageId, avgRating } = resto.data;
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
      <h2>{name} </h2>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

and body will remains same untill this operation

const Body = () => {
  return (
    <div className="body">
      <RestaurantCard resto={Restaurants[0]} />
      <RestaurantCard resto={Restaurants[1]} />
      <RestaurantCard resto={Restaurants[2]} />
      <RestaurantCard resto={Restaurants[3]} />
      <RestaurantCard resto={Restaurants[4]} />
      <RestaurantCard resto={Restaurants[5]} />
    </div>
  );
};
```
5. Destrcting as params - here the problem is, we have to write each property as props in Parent component 
```
const RestaurantCard = ({ name, cloudinaryImageId }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
      <h2>{name} </h2>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <RestaurantCard
        name={Restaurants[0].data.name}
        cloudinaryImageId={Restaurants[0].data.cloudinaryImageId}
      />
      <RestaurantCard
        name={Restaurants[1].data.name}
        cloudinaryImageId={Restaurants[1].data.cloudinaryImageId}
      />
    </div>
  );
};
```
6. ES6 Rest operator, as restaurant[].data is array
```
const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
      <h2>{name} </h2>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <RestaurantCard {...Restaurants[0].data} />
      <RestaurantCard {...Restaurants[1].data} />
      <RestaurantCard {...Restaurants[2].data} />
      <RestaurantCard {...Restaurants[3].data} />
      <RestaurantCard {...Restaurants[4].data} />
      <RestaurantCard {...Restaurants[5].data} />
    </div>
  );
};
```
7. Get ready for beast - Always map the array (I mean, here data present in the form of array in Restaurants so map the Restaurants)
```
const Body = () => {
  return (
    <div className="body">
      {Restaurants.map((r) => (
        <RestaurantCard key={r.data.id} {...r.data} />
      ))}
    </div>
  );
};
``` 

---

- Comments inside JSX
  - Write inside { } as JS comments
  - { // single line comment} or { /* multiline comment */}
- 3 ways can write React Component
  - `<Title />`
  - `{Title()}`
  - `<Title> </Title>`
- Array.join
- Optional chaining
- Why people in Indusrty prefer to write map? Map is best way to do functional programming

## map vs for-each
- The map() method is used to transform the elements of an array, whereas the forEach() method is used to loop through the elements of an array.
- The map() method returns a new array, whereas the forEach() method does not return a new array.
- The map() method can be used with other array methods, such as the filter() method, whereas the forEach() method cannot be used with other array methods.

---
# Virtual DOM

- It is a representation of the DOM in our code
- Why we need Virtual DOM in React? for Reconciliation
- Reconciliation - The algorithm React uses to diff one tree with another to determine which parts need to be changed.
- Reconciliation uses a 'diff algorithm' to find out the difference between real dom and virtual dom and finds out what needs to be updated and just update that small portion of it.
- It does not rerender whole app. It just rerender small application
- Whenever you have multiple childern with same tags, use keys
- Actually re-rendering the entire app on each change only works for the most trivial apps; in a real-world app, it's prohibitively costly in terms of performance. React has optimizations which create the appearance of whole app re-rendering while maintaining great performance. The bulk of these optimizations are part of a process called reconciliation.
- Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment
- React fiber - new reconciliation engine - responsible for diff

## Key
- A “key” is a special string attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. In other words, we can say that keys are used to give an identity to the elements in the lists
- why we dont use index as key?
- in object, the index is not fixed so not use keys
---

My Code
```
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Restaurants, IMG_CDN_URL } from './constants';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://storage.googleapis.com/shy-pub/39943/1622739779895_41546_logo.jpg"
          alt="logo"
        />
      </div>
      <ul className="list">
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
      <button className="header-btn">Login</button>
    </div>
  );
};

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
      <h2>{name} </h2>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      {Restaurants.map((r) => (
        <RestaurantCard key={r.data.id} {...r.data} />
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <hr />
      <small>@C This is a app Footer</small>
    </div>
  );
};

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<AppLayout />);
```


# Finance

Here is a Simple Financial Plan that works !

1. Health Insurance (min 5 lac)
2. Pure Term Insurance (min 1 Crore)
3. Min 6 months emergency fund in FD
4. Buy Sovereign Gold Bond regularly
5. 2 Mutual Funds - Index largecap and active flexi cap
6. NPS for retirement.

