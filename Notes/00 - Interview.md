## Framework Vs Library

- Library gives  developers predefined methods and classes which help to work faster and efficient. It also gives complete control of application flow by which we can decide when and where to call specific function and method.
- On other hand, in framework the flow is controlled by framework itslef.
- The intent of framework is to reduce  complexity of software developement process while Intent of library is to provide reusable software functionality.
- React only takes care of View part while Angular takes care of MVC
---
## Why is React known as React?
- React is named React because of its ability to react to changes in data.
---
## Why we use arrow function in React?
- Main benefit: No binding of ‘this’
    - In classic function expressions, the this keyword is bound to different values based on the context in which it is called. With arrow functions however, this is lexically bound. It means that it usesthis from the code that contains the arrow function.
- When you should not use Arrow Functions
    1. Object methods
    2. Callback functions with dynamic context\
    If you need your context to be dynamic, arrow functions are not the right choice. Take a look at this event handler below:
    ```
    var button = document.getElementById('press');
    button.addEventListener('click', () => {
    this.classList.toggle('on');
    });
    ```
    - If we click the button, we would get a TypeError. It is because this is not bound to the button, but instead bound to its parent scope.

- When you should use them
    - Arrow functions shine best with anything that requires this to be bound to the context, and not the function itself.

---

## During interview uh have to give smart answers
- uh code better than other react developers
- everybody is giving normal answers
- make online-offline => I will create hook for this
- image heavy side so will use cdn to store images