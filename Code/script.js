import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
  'h1',
  {
    id: 'heading',
    className: 'heading',
  },
  'Namaste React'
);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(heading);
