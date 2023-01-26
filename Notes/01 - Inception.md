# React

It is just a javascript library that someone already wrote for us.

## Library vs Framework
- JS libraries give developers predefined methods and classes to help them work faster and more efficiently.
- On the other hand, the JS framework acts as a framework for developers to construct apps for specific platforms.
- The term "inversion of control" describes the technical distinction between a framework and a library. 
- You have complete control over the application's flow when you use a library. You get to decide when and where you want to call the library.
- While when using a framework, the flow is controlled by the framework itself. It gives you various locations to plug in your code, but it only calls the code you've plugged in when it's needed.


## Writing a message on the page
1. Using HTML
```
  <body>
    <div id="root">
      <h1>Namaste React!</h1>
    </div>
  </body>
```
2. Using JavaScript
```
<body>
    <div id="root"></div>
    <script>
        // Create Element first
        const heading = document.createElement('h1');
        heading.innerHTML = 'Namaste React from JavaScript';
        // Append it
        const root = document.querySelector('#root');
        root.appendChild(heading);
    </script>
</body>
```
3. Using React
```
<body>
    <div id="root">
      <!-- <h1>Namaste React!</h1> -->
    </div>
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>

    <script>
      // Create Element first
      // const heading = document.createElement('h1');
      // heading.innerHTML = 'Namaste React from JavaScript';
      const heading = React.createElement(
        'h1',
        {},
        'Namaste React from React DOM!'
      );
      // // Append it
      // const root = document.querySelector('#root');
      const root = ReactDOM.createRoot(document.querySelector('#root'));
      // root.appendChild(heading);
      root.render(heading);
    </script>
  </body>
```
##  Why is React known as React?
React is named React because of its ability to react to changes in data. i.e React automatically renders the component and changes are reflected so when user see any changes in View , they will react to changes.

## React and React DOM
- One file is React version (The main Core library of React)
- second file is web version of React (We can use react as React Native, React 3D)
- console.log(heading) => Its an Object

## CDN
- A content delivery network (CDN) refers to a geographically distributed group of servers which work together to provide fast delivery of Internet content.
- A CDN allows for the quick transfer of assets needed for loading Internet content including HTML pages, javascript files, stylesheets, images, and videos.
- Advantages
    - Improving website load times
    - Reducing bandwidth costs
    - Increasing content availability and redundancy 
    - Improving website security

## crossorigin

The crossorigin attribute, valid on the `<audio>, <img>, <link>, <script>, and <video>` elements, provides support for CORS, defining how the element handles cross-origin requests, thereby enabling the configuration of the CORS requests for the element's fetched data. Depending on the element, the attribute can be a CORS settings attribute.
- Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. 

## Dev vs Production
- What is difference between react.development.js and react.production.js files via CDN?

React.development is for development reasons. we have Source Maps, debugging and hot reloading ability in those builds. 
The production build, runs in production mode which means this is the code running on your client's machine. In Production code is minified/optimised.

## Client Side vs Server Side

- Client-side rendering(CSR) involves rendering pages directly in the browser using JavaScript. and in Server side, page fetch info from server and then render

## Notes
- If there is anything inside root HTML element in HTML, React will overwrite eveything and render only things which are in script tag



# Live Session
akshaymarch7 — Today at 9:16 PM - discort msg
- Realisation
- Don't go to comfort Zone
- Start making a plan
- Side Hustle of Learning - Everyday fight for it(No Break) 
- Realise it will take time
- Hardwork & HUSTLE & Focus & Warrior
- Start searching for Job & keep failing!
- practice daily
- learn daily

Negociation
- We undervalue ourselfs...prepare yourself for negosiation
- How much I want the job, the company is equally desparate to hire me.
- when they say about budget, its ur time to pitch in...what is ur max? whatt about bonus
- do not close it/ broke relationship
- lemme think about it, I will get back but I was really expecting more based on my skills...waiting is good--> hr will thing uh will get other job...