# Foundation

## Writting own script in package.json

- `"start" : "parcel index.html"`
  then in console do, `npm run start`
- `"build" : "parcel build index.html"`
- Why we skip npx?
  - npx is exactly npm, it just executing the package without downloading it
  - npm commands where used when uh want ur things to be installed in ur project and npx is only for executing
  - npx == npm run
  - shortcut for `npm run start` is `npm start`

## Parcel

parcel does not remove console.log, uh have to configure ur project to remove console.log

- for that use `babel-plugin-transform-remove-console`
- install as dev dependancy
- putting package inside project does not mean we will able to use it, we need to configure it
- read doc, they given it...
  create file called '.babelrc'

## NOTE: 
1. Now it will run, before that delete dust folder before every build as it stores lots of temparary files
2. Render means updating any particular thing in the dom and Re-Render means updating it again in the DOM

It will not give the good performance

- If we give keys to the childern, then React didn't need to re-render everything in dom, it just reder acc to key

## How React.createElement works

- Its imported at the top and its exported in node modules folder(export thing is already written by facebook developers)
- React.createElement => Object => HTML (DOM)

## JSX

JSX not means JavaScript XML

- It is called JSX, and it is a syntax extension to JavaScript
- JSX may remind you of a template language, but it comes with the full power of JavaScript
- JSX produces React “elements”
- The Recat purpose is to write HTML with the power of JS, in a better way
- React came up with the philosophy that they will update the HTML using JavaScript, cz JS is very performant, amazing langauge
- JSX is not HTML inside JS, its just a fancy way of writing JS with HTML like syntax

```
to JSX

const heading1 = React.createElement(
  'h1',
  {
    id:'title',
    key:'h1'
  },
  "Namaste React"
);

IS EQUAL TO

const heading2 = <h1 id='title' key='h2' > Namaste React </h1>

IS SIMILAR TO (when we use multiple lines)

const heading2 = (
  <h1 id='title' key='h2'>
  Namaste React
  </h1>
);
```

Babel converts that HTML like code to React element

- JSX => React.createElement => Object => HTML (DOM)

Input to babel

```
const heading = <h1 id='hard'>Hello Sweety</h1>
```

output from babel

```
const heading1 = React.createElement(
  'h1',
  {
    id:'hard',
  },
  "Hello Sweety"
);
```

- Babel is not developed by React
- Difference between HTML and JSX??

JSX Advantages

- Readability
- Developer Experience
- Syntactic sugar
- less code
- maintanability

Babel comes as a dependancy along with parcel

## React Element

A variable in JS is React Element if we use JSX

```
const heading = <h1 id='hard'>Hello Sweety</h1>
```
- HTML Element - `<h1>Head</h1>`
- JS Element - a variable 
---

# React Components

## Functional Component

- new way of writing code
- functional components are the JS functions which returns some piece of JSX or React Element or composition of React Element or Component itself

```
const HeaderComponent = () => {
  return <h1> Hello Sweety </h1>
}
```

```
Multiple lines
const HeaderComponent = () => {
  return (
   <div>
      <h1> Hello Sweety </h1>
      <h2> Hope uh are enjoing time with me </h2>
   </div>
  );
};
```

```
Multiple lines but COOL way
const HeaderComponent = () => (
  <div>
    <h1> Hello Sweety </h1>
    <h2> Hope uh are enjoing time with me </h2>
  </div>
);
```

- Componet names must start with Capital letter - convention but not mandetory

## Rendering

- Element Rendering - its just an object

```
const heading = <h1 id='hard'>Hello Sweety</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
```

- Component Rendering - its just a function

```
const HeaderComponent = () => (
  <div>
    <h1> Hello Sweety </h1>
    <h2> Hope uh are enjoing time with me </h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderComponent />);
```

## React element inside the Component

```
const heading = <h1> I Love You</h1>;

const HeaderComponent = () => (
  <div>
    <h1> Sweety</h1>
    {heading}
    <h1> Hope you are enjoying great time with me on bed </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeaderComponent />);
```

## If we convert element to component

```
const Heading = () => <h1> I Love You</h1>;
const HeaderComponent = () => (
  <div>
    <h1> Sweety</h1>
    <Heading /> // this is called "Component Composition/ Composing Components" => Component inside a Component
    {Heading()} // this will also work
    <h1> Hope you are enjoying great time with me on bed </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeaderComponent />);
```

## NOTE: 
1. Whenever you are writing JSX, just put `{}` and write any piece of JavaScript code inside it
2. JSX prevent us from the ciber attack, called sanitisation.

## What is Babel?

- Babel is a JavaScript compiler
- Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Here are the main things Babel can do for you:
  - Transform syntax
  - Polyfill features that are missing in your target environment (through a third-party polyfill such as core-js)
  - Source code transformations (codemods) and more! 

```
// Babel Input: ES2015 arrow function
[1, 2, 3].map(n => n + 1);

// Babel Output: ES5 equivalent
[1, 2, 3].map(function(n) {
  return n + 1;
});
```
## Doubts

- JSX will not work if babel is not there
- Why we need React Component as we have elements -> to use props and all such functionalities
- at the end API is function only, its a jargan eg. createElement API
- {{ means object}} inside react component, first bracket is for telling react that it is JS code and second bracket is for object.
- this will also works `root.render(HeaderComponent ());` but will not show as react component in react extention.
