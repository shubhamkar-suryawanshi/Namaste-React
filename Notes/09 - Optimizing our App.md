# Optimizing our App

Creating our own hook

- Reauabiliy, readiability, maintanable(separation of concern), modularity(we broken down code into meanigful pieces), testable(test each function separately)

- common functions - utils/share folder - utility

- create hook using "use" in small at start

- we use named export only when there are multiple exports. Suppose if do named export to file where uh have 2 or more hooks, but name of file is based on one hook only. So its difficult to understand to other developer that uh have another hook inside that file.

- When, how and why to create own hook

- Why? - Reauabiliy, readiability, maintanablity(separation of concern), testable

- When to create custom hook - When our component don't care about specific part like how its coming, how things working behind but it just want particular output - eg component is fectching the data and also displaying the data so uh can create hook for fecting data and use it in that component.

- The function of Component is to display the things nothing else 

- functional component vs custom hook - functional component returns JSX but hooks returns the variable(value/object/array or does not return anything in some case(useEffect)) - Hook is a piece of JS code which extracts some logic

- Why hook, why not Normal function 
    - We cannot make state variable inside normal function
    - React will not trigger Reconcilliation inside Normal function
    - Cannot use defined hooks inside normal function

- Nomenclature for constants URLs => FETCH_MENU_URL

- Shared folder/file to create reuable functions  

---

## Hook from scratch

- Change the way while you are writting code
- first think, is it possible to write code?
- create ur own library and push it on npm
- always clear the event listner
```
import { useEffect, useState } from 'react';

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // add callback function inside useEffect only
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
};

export default useOnline;
```

---

# Lazy Loading
## Cunking, code spliting, dynamic bundling, lazy loading, on demand loading, dynamic import

- A webpage consists of many components(makemytrip.com) and if we keep all components in one js file(bundler convert it into single js file), it will burst / slowdown app and the application cz size of that js becomes very huge and it does not make sense to load all components to load at initial time

- Simply it keeps different bundles of application in different chunks

- paytm, each icon is different bundle

- So uh have to make logical bundling

- First load only important part (eg in makemytrip, they come to flight book-80% so only load flight page and load others by lazy loading)

- syntax
```
import {lazy} from 'react'
const About = lazy(()=>import("path"))
```

- When uh loading component in demand, React suspends rendering

- even after using `<Suspense>`, it will take few seconds, so to show anything between that time, we use fallback prop in Suspense

- NOTE: 
1. never ever use lazy load component inside another component -> cz it will lazy load after every render
2. Lazy load at top only...below import statement
