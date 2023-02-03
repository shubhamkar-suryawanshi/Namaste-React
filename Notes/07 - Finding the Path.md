
# Finding the Path

## Notes

1. What if the dependancy array is not specified => useEffect not dependant on anything and it will work acc to his default behaviour => after every render of that component, useEffect will be called.

2. Never create Component inside component eg.
```
const PageLayout = () =>{
    const Header = () => {
        abc...
    }
    return ...
}
```
You just call component inside component eg. `<Header />` component inside `<PageLayout />`.
 
- Its cz If you create component inside component, It will create that component everytime when ur parent component re-render.

- Never ever write useState inside if..else and for loop...

3. useState is a hook that react give to create local state variable inside functional component. So never call it outside functional component

4. Shimmer Component

```
const Shimmer = () => {
    return(
        <div className='resto-list'>
            {
                Array(10)
                .fill("")
                .map(
                    ()=><div className='shimmer-card'></div>
                )
            }
        </div>
    )
}
```

# React Router DOM

- npm i react-router-dom
- import { createBrowserRouter, RouterProvider } from 'react-router-dom' to craete routing
- create configuration -> list of paths(which are expressed in objects)
```
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Restaurant />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);
```
- add appRouter as default
```
// root.render(<Restaurant />);
root.render(<RouterProvider router={appRouter} />);
```
- uh can also create Error page although react-router-dom create it by itself. If you create it, you can see the type of error by importing useRouteError hook given by react-router-dom

## Clickable routings

- The problem with ancher tag is once you click on it, it refreshesh the whole page

- So import Link from react-router-com
```
<Link to="/">
    <li>Home</li>
</Link>
<li>
    <a href="/contact">Contact</a>
</li>
<li>
    <Link to="/about">About</Link>
</li>
```

- although uh used Link tag, it will show anchor tag inside inspect html

- SPA - Single page application, when we click on about or contact, it does not reload, it does not make network call and fetch aboutUS page data

- Two types of routing - Client side and server side

- server side - all info of page come from server eg. if we are going to about page, the info will come from server

- our application, we are building client side routing, cz we r not making network call as all our components already in our code. acc to route, we just load that component

---
- Now the problem is, when I went to contact/about page, my header and footer vanished.

- So create childern 

- React-router-dom gives us component called Outlet which will be field by childern specified in default/root component

---
## Dynamic routing

```
path:'restaurant/:id'
```
here, the id is dynamic, and to identify that id, react-router-dom uses useParams hook



## Note
1. While writeing children of children, uh just need to mention as ` path : 'profile' ` and not ` path : '/profile' `
2. also make sure you are importing Outlet into the component
3. separate components cz make our code Moduler, reuable, maintaninable, testable, cleaner