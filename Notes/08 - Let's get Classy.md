## Why React is so popular now a days also?
Because React made Developer Community happy by constantly simplifing the things to write code

# Let's get Classy

- Way to create component
```
import React from 'react'
const Profile extends React.Component{
    render(){
        return (some JSX)
    }
}
```
or 
```
import React,{Component} from 'react'
const Profile extends Component{
    render(){
        return (some JSX)
    }
}
```
NOTE: You can not create classbased component in Render method

## Props
- Suppose, the name={'Surya'} is prop passed
```
Functional 
const ProfileFun = (props) => {
  return (
    <div>
      <h1>Profile Function</h1>
      <h2>Name:{props.name}</h2>
    </div>
  );
};
```
```
Class
class Profile extends Component {
  render() {
    return (
      <div>
        <h1>Profile Class</h1>
        <h2>Name:{this.props.name}</h2>
      </div>
    );
  }
}
```
in Class, react collects all the props and attached to Profile class(this class instance)

## State
```
Functional Component
const ProfileFun = (props) => {
    const [count] = useState(0);
  return ()
}
```
Constructor
- The constructor method is a special method of a class for creating and initializing an object instance of that class.
-  super(props) - The super keyword is used to call the constructor of its parent class(in JS class based component, parent class is Component or React.Component) to access the parent's properties and methods.

```
class Profile extends Component {
    constructor(props){
        super(props);

        this.state = {
            count:0,
            count2:0,
        }
    }
  render() {
    return(
      <div>
        <h1>Profile Class</h1>
        <h2>Name:{this.state.count}</h2>
      </div>
        );
    }

    [OR]

    const {count} = this.state
    return(
      <div>
        <h1>Profile Class</h1>
        <h2>Name:{count}</h2>
      </div>
        );
    }
}
```
- States are initilize in the this.state as an object key-value pairs.
- State change
```
Functional Component

const ProfileFun = (props) => {
    const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Profile Function</h1>
      <h2>Name:{props.name}</h2>
      <h1>{count}</h1>
      <button onClick={()=>setCount(1)}>Counter</button>
    </div>
  );
};
```
```
class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 0,
    };
  }
  render() {
    const { count1, count2 } = this.state;
    return (
      <div>
        <h1>Profile Class</h1>
        <h2>Name:{this.state.count}</h2>
        <h1>
          {count1}
          {count2}
        </h1>
        <button
          onClick={() => {
            this.setState({
              count1: 1,
              count2: 2,
            });
          }}
        >
          Counter
        </button>
      </div>
    );
  }
}
```

## LifeCycle
- what sequence the methods calls
- constructor and render both are life-cycle methods.
- if we write console.log in constructor and render, first constrctor will print after render will print.
- See how the flow = constrctor -> render

- API call in functional component -> in useEffect cz we want to render whatever we have in default state and after call, the data will change as per API - render -> update

- componentDidMount will render after initial render(similar to useEffect)

- See how the flow = constrctor -> render -> componentDidMount 

- componentDidMount is best place to make API call

- See how the with child = 
  1. Parent-constrctor -> 
  2. Parent-render -> 
  3. Child-constrctor -> 
  4. Child-render ->
  5. Child-componentDidMount ->
  6. Parent-componentDidMount
  - After complition of child lifecycle only, parent will be call

- See how the with two child = 
  1. Parent-constrctor -> 
  2. Parent-render -> 
  3. first Child-constrctor -> 
  4. first Child-render ->
  5. second Child-constrctor -> 
  6. second Child-render ->
  7. first Child-componentDidMount ->
  8. second Child-componentDidMount ->
  9. Parent-componentDidMount

- Why this? `https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/`
- Rendering will happen in two phase. 1. Render phase(Constructor and render) 2. Commit phase(componentDidMount)
- basically, after initial render(first phase), the html is generated and after 2nd phase, html is updated
- its cz commit phase include calling external data, so it takes time so react complete phase1 first and then only go to second phase
- if there is asnyc operation in child, it will take more time to render so parent componentdidmount will print first and the async data will print and then setState will rerender the render part again => updating cycle from image

- mount will called after first render and update will be called after every next render

- See how the flow in child component having API call = 
  1. constrctor -> 
  2. render ->
  3. Child-componentDidMount ->
  4. API call
  5. setState
  6. Update cycle
  7. rerender component
  8. componentDidUpdate
  9. componentWillUnmount if we went to other subpage
---
dependancy array
```
functional component

useEffect(()=>{
  //API
}, [count1, count2])
```
Class Component
```
componentDidMount(prevProps, prevState){
  if(this.state.count1 !== prevState.count1 ||    this.state.count2 !== prevState.count2){
    //code...
  }
}
```
and in case of different useEffect, if-else conditional will be different

- At the end, uh need to unmount the things cz events will run continuously untill uh stoped it
```
componentWillUnmount(){
  clearInterval(this.unclearedtimer...)
}
```
---
In case of functional component, how will you destroy that task?
- using return inside useEffect - this is called when we unmounting
```
useEffect(()=>{
  setInterval(()=>{
    console.log('Namaste React OP')
  }, 1000)

  return () => {
    // It will called only when we change to another sub-page
  }

}, [])
```

NOTES:
1. ComponentDidUpdate only happend if there is any state change. If no state, then it will not even render.
2. ComponentWillUnmount - cleanup
3. Why we should not use async keyword with useEffect?\
=> The async function returns promise and the useEffect doesn't expect callback function to return promise. It should return nothing or a function.