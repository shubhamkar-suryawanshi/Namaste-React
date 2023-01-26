import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element
const heading = <h1>Namaste React</h1>;

const Hello = () => {
  return (
    <React.Fragment>
      {heading}
      <p>Welcome to the Namaste React</p>
      <p>This is my first component</p>
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
//  Element Rendering
// root.render(heading);
//  Component Rendering
root.render(<Hello />);
