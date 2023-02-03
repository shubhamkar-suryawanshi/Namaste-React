# Hooks

## useState

- Whenever you change the state variable, React will re-render that particular component.
```
const [title, setTitle] = useState('my App')
console.log('rerender');

function component.....
```
here whenever the title change on click of button or by other event, it will print rerender in console.

- why it rerendr whole component? -> cz to check that variable present anywhere else in that component...here it check 'title' is present anywhere else in this component


Whenever you are typing anything in input field, that many times the component re-rendering.

- cz React is that much fast and if you do the console.log(rerender), and input typed "test" => rerender will print 5 time(1 time during rendering and 4 time during typing test in input box) => simply re-rendering every key press

---
## Micro services

- Many projects inside the one project and they are running on different ports. eg. /webapp/mpp, /brc, /products, may have multiple databases, they can use different tech stack(depends on best use case)...Seperation of Concern (SOC) => One company can use many tech like React, Angular, View...

- How they are connected => all project deploy to differnt ports(/3000 for marketing, /3001 for product) but same domain name (paypal.com)

---

## Exploring the world 

- means UI micro-service talk to other services like backend API, notifications, msges, authentication, logos

- Calling an API is best way to explore the world

- fetch ('')

- where to call api? Inside component -> everytime it will rerender for every small state change(every key press if we have input), so No. 

- What we want? -> As im when the page loads, call the api and fill the data

- 2 ways
    1. page load -> API (300ms) -> render page (in 500ms) => normal JS way
    2. page load -> show something -> meanwhile call api -> update UI once data receive => React way
- Second way is the best way cz of UX as page will available in 50-100 ms (although api call takes 500ms but basic UI is available in 50-100 ms) and in first case, it will be available in 500ms

- React able to do this with hook called useEffect()

- useEffect(()=>{}) -> uh call this function by passing another function to it called callback function. [callback=> It will not call imigietly, here, it will be called whenever useEffect wants to call it.]

- Any component can be rerender when
    1. any state change inside component
    2. when the prop change (eg RestoList will change once API added after 500ms)

## useEffect
- this function takes 2 input, callback function and dependancy array.
- if it does not depend on anything, it will call only once during first render eg
    - No second argument -  no array - render every time
    - empty dependancy array => once after initial render
    - dep array [searchText] => once after initial render + everytime after rerender (my searchText change) 

- first render will happend and after that useEffect will be called

## Shimmer UI

- Dummy components we see before loading API data

## Consitional rendering
```
return (restaurant.lenght === 0) ? (<Shimmer />) : (<><div>API UI write in detail</div></>)
```
## NOTE
1. We can write only expression inside { } in React, not statement
```
{
    const a = 10;
    console.log(a)
}
```
2. We can covert statement into expression using ( )
```
{
    (const a = 10, console.log(a))
}
```

# Concepts

## What are microservices?

- Microservices - also known as the microservice architecture - is an architectural style that structures an application as a collection of services that are

    - Independently deployable
    - Loosely coupled
    - Organized around business capabilities
    - Owned by a small team
    - Highly maintainable and testable

- The microservice architecture enables the rapid, frequent and reliable delivery of large, complex applications. It also enables an organization to evolve its technology stack.

## What is monolithic architecture?

- A monolithic architecture is the traditional unified model for the design of a software program. Monolithic, in this context, means "composed all in one piece"

- eg. A Temple build from single stone

## useEffect

- useEffect is a React Hook that lets you synchronize a component with an external system  (like a chat service). Here, external system means any piece of code that’s not controlled by React,  such as:
    - A timer managed with setInterval() and clearInterval().
    - An event subscription using window.addEventListener() and window.removeEventListener().
    - A third-party animation library with an API like animation.start() and animation.reset().

- If you’re not connecting to any external system, you probably don’t need an Effect.