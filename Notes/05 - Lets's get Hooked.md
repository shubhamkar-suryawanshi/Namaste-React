## File Structure

1. Grouping by features or 
2. grouping by routes

Don't
1. Avoid too much nesting
2. Don’t overthink it


## Export
1. export default - you can only export only 1 component
2. named export - If you want to export more than one component


## Import

1. default import - uh can change name but don't do it
```
import Header from './components/Header';
```
2. Named Import
```
import {Title} from './compo/Header';
```
Note: If there are multiple components present in Module and all uh did named export, uh can do 
```
import * as Obj from '...'
<!-- and then -->
Obj.Title = ...where title is one of the element/component imported.
```
or 
```
import {Title, Header,...} from './compo/Header';
```
This can be also written as
```
import * as XYZ from './compo/Header';

and in return

< XYZ.Header /> (same as <React.Fregement>)
```
and if one is default and other is named
```
import Header, {Title} from './components/Header';
```

## Building a search bar

- Add input and button tag in body
```
let inputValue = 'XYZ'
<div className="input-container">
    <input type="text" className="input-search" value={inputValue} />
    <button className="input-btn">Search</button>
</div>
```
but it's not working, we are not able to add any value in input box on webpage => html input is different than React input => all elemets work differnt only 
- Local variables like this are not preffered in React, whenevr we have to change any variable inside it.
- This is cz React uses one way data binding

- To work this, we have to make React kind of variable => state variable
- Every component in React maintains a state, so uh can put variable into that state, and create it using useState hook


# Hooks

- React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component.

- Hooks are functions that let you “hook into” React state and lifecycle features from function components.

- "hook into" => To take part, or to become involved. join in. participate. involve.

- Hooks are nothing but normal functions, thats y we call it like useState(), we import it from react library as named import

- Every hook has a specific purpose eg.
- useState is used for creating local state variable, and uh can modify this variable by using function returened by useState
- toggle means true => false => true or 0=>1=>0...ie repeat

## Lets make the Seach work

- once click on button, need to filter the data(restolist) and then update the restolist => make state variable and the default data is restoList which we imported

- input is searchText and the restoList and based on that output, update the list

```
const[restaurants, setRestaurants]= useState(restoList)
const data = filterData(searchText, restaurants)
setRestraunts(data)
```





<!-- JS -->
## JS Study
1. e.target.value ==> synthetic events in javascript