import { Component } from 'react';
import MyContext from '../shared/MyContext';

class About extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Hi</h1>
        <MyContext.Consumer>
          {({ user }) => {
            return (
              <h3>
                My name is {user.name} and emailID is {user.email}
              </h3>
            );
          }}
        </MyContext.Consumer>

        {/*

        Why this is wrong?

            <MyContext.Consumer>
          {({ user }) => {
            <h3>
              My name is {user.name} and emailID is {user.email}
            </h3>;
          }}
        </MyContext.Consumer>

      */}
      </div>
    );
  }
}

// const About = () => {
//   return <h1>About</h1>;
// };

export default About;
