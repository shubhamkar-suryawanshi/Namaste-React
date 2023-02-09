# Data is new oil

## 2 types of layer in web application
1. UI layer - View(write inside code - JSX and CSS)
2. Data Layer - (props and states and context...)

these works together, in browser.

- Virtual DOM or DOM is a big object at the end of the day.

- The UI layer is powered by data layer

- how UI render with the data? => state and props of the component

- When we want scope of variable within component then we use state. It is the local variable.

- Prop is value passed from one component to another component. 

- Props are like local state for the parent component

---

- State and props are only 2 things with which we can manage the data? => No, there are more things to it.

- Props Drilling - unecessary components get involved and if we update it, all components rerender and makes our code clutter


## React Developer Tools
- If uh have multiple components, it will show state and props of each component,
component tree

- this is best way to find props and state define fo particular compnent rather than checking the code.

- It also shows the hooks used in that component.

- Created basic faq
```
import { useState } from 'react';

const Section = ({ que, ans }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="faq">
      <h3>{que}</h3>

      {isVisible ? (
        <div>
          <button
            onClick={() => {
              setIsVisible(false);
            }}
          >
            Hide
          </button>
          <p>{ans}</p>
        </div>
      ) : (
        <button
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show
        </button>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <>
      <Section
        que={'What is chatGPT?'}
        ans={
          'It is an advanced AI-powered chatbot. It is built on top of OpenAIs GPT-3 family of large language models and is fine-tuned (an approach to transfer learning) with both supervised and reinforcement learning techniques.'
        }
      />
      <Section
        que={'How chatgpt works?'}
        ans={
          'ChatGPT uses what called a neural network to make sense of writing, and then uses that knowledge to become really good with words.'
        }
      />
      <Section
        que={'How is ChatGPT different from other chatbots?'}
        ans={
          'ChatGPT, unlike other AI chatbots, can answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.'
        }
      />
    </>
  );
};

export default FAQ;

```

- In above FAQ, the control of each section or question is with that question itself so that is why, we are not able to hide other answers when we opened any one. So the best way is, give the control to parent and they will control isVisible and setIsVisible...
---

- What if you want to pass the data from child to parent?

- lifting the state up =>
```
const Section = ({ que, ans, isVisible, setIsVisible }) => {
  return (
    <div className="faq">
      <h3>{que}</h3>

      {isVisible ? (
        <div>
          <button
            onClick={() => {
              setIsVisible(false);
            }}
          >
            Hide
          </button>
          <p>{ans}</p>
        </div>
      ) : (
        <button
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show
        </button>
      )}
    </div>
  );
};

const FAQ = () => {
  const [sectionConfig, setSectionConfig] = useState({
    isWhat: false,
    isHow: false,
    isOther: false,
  });
  return (
    <>
      <Section
        que={'What is chatGPT?'}
        ans={
          'It is an advanced AI-powered chatbot. It is built on top of OpenAIs GPT-3 family of large language models and is fine-tuned (an approach to transfer learning) with both supervised and reinforcement learning techniques.'
        }
        isVisible={sectionConfig.isWhat}
        setIsVisible={() => {
          setSectionConfig({
            isWhat: true,
            isHow: false,
            isOther: false,
          });
        }}
      />
      <Section
        que={'How chatgpt works?'}
        ans={
          'ChatGPT uses what called a neural network to make sense of writing, and then uses that knowledge to become really good with words.'
        }
        isVisible={sectionConfig.isHow}
        setIsVisible={() => {
          setSectionConfig({
            isWhat: false,
            isHow: true,
            isOther: false,
          });
        }}
      />
      <Section
        que={'How is ChatGPT different from other chatbots?'}
        ans={
          'ChatGPT, unlike other AI chatbots, can answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.'
        }
        isVisible={sectionConfig.isOther}
        setIsVisible={() => {
          setSectionConfig({
            isWhat: false,
            isHow: false,
            isOther: true,
          });
        }}
      />
    </>
  );
};

export default FAQ;

```
but this kind of code is called "piece of shit" cz this is not maintanable, nor readable, not reusable

Here is the updated code
```
import { useState } from 'react';

const Section = ({ que, ans, isVisible, setIsVisible, isHidden }) => {
  return (
    <div className="faq">
      <h3>{que}</h3>

      {isVisible ? (
        <div>
          <button
            onClick={() => {
              isHidden(true);
            }}
          >
            Hide
          </button>
          <p>{ans}</p>
        </div>
      ) : (
        <button
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show
        </button>
      )}
    </div>
  );
};

const FAQ = () => {
  const [visibleSection, setVisibleSection] = useState('');
  return (
    <>
      <Section
        que={'What is chatGPT?'}
        ans={
          'It is an advanced AI-powered chatbot. It is built on top of OpenAIs GPT-3 family of large language models and is fine-tuned (an approach to transfer learning) with both supervised and reinforcement learning techniques.'
        }
        isVisible={visibleSection === 'what'}
        setIsVisible={() => {
          setVisibleSection('what');
        }}
        isHidden={() => {
          setVisibleSection('');
        }}
      />
      <Section
        que={'How chatgpt works?'}
        ans={
          'ChatGPT uses what called a neural network to make sense of writing, and then uses that knowledge to become really good with words.'
        }
        isVisible={visibleSection === 'how'}
        setIsVisible={() => {
          setVisibleSection('how');
        }}
        isHidden={() => {
          setVisibleSection('');
        }}
      />
      <Section
        que={'How is ChatGPT different from other chatbots?'}
        ans={
          'ChatGPT, unlike other AI chatbots, can answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.'
        }
        isVisible={visibleSection === 'other'}
        setIsVisible={() => {
          setVisibleSection('other');
        }}
        isHidden={() => {
          setVisibleSection('');
        }}
      />
    </>
  );
};

export default FAQ;

```
---

# Context

You need to store the state which will be accessible to everywhere, the central space known as context

- It is kind of shared state for whole app and any component can used that data

- If we make simple global variables, React is not traking it, no reconcilliation process so no update after render.

- How to use or create context

- create a file by any name(MyContext) in shared folder

```
import {createContext} from 'react'

<!-- Syntax -->
<!-- const UserContext = createContext(takes data which we need all across our application, the default value) -->

const UserContext = createContext({
    user : {
    name: 'abc',
    email: 'xyz@mail.com'
    }
})

export default UserContext;
```
createContext is a function at the end of the day

- Import it with the help of useContext hook where uh want to use it.
```
import {useContext} ...
import UserContext...

const {user} = useContext(UserContext)

and use it anywhere
<h1>{user.name}</h1>
```

then y we need state and props
- context is useState for entire application
- states and props are tight(or bound) to a component. and context is not tight to component. uh can have it at center place
- UserContext.Consumer as a component in class based component and uh have to put everything inside the curly braces
```
<MyContext.Consumer>
    {({ user }) => {
        return (
            <h3>
            My name is {user.name} and emailID is {user.email}
            </h3>
        );
    }}
</MyContext.Consumer>
```
- If we want to change the data, we can create state, take the data from user and update it in all places but to provide updated data, we need to use ".Provider" component like ".Consumer" in the component where uh want to use it. You can use it at parent.
```
const AppLayout = () => {
  const [user, setUser] = useState({
    name: 'Surya',
    email: 'surya@surya.com',
  });
  return (
    // <MyContext.Provider value={user}>
    // replace user with default value

    // <MyContext.Provider value={{
    //   user: {
    //     name: 'dummy',
    //     email: 'dummy@surya.com'
    //   },
    // }}>

    // replace it with useState value.
    <MyContext.Provider
      value={{
        user: user,
      }}
    >
      // with the help of setUser, uh can modify it
      <Header />
      <Outlet />
      <Footer />
    </MyContext.Provider>
  );
};
```

- UserContext.Provider to update data acc to api

- the default name shown in Developer tool extention is Context.Provider, to give name of our choice we do 
`UserContext.dispalyName = "UserContext"` in the place where context is created. Give it before default export


## NOTE: 
### Suppose uh using setState and default value is object. If uh want to modify only one then do destructuring for other
```
onChange={
    (e) => setUser({
        ...user,
        user.email: e.target.value
    })
}
```
