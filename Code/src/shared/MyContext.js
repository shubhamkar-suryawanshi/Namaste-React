import { createContext } from 'react';

const MyContext = createContext({
  user: { name: 'dummy', email: 'dummy@surya.com' },
});

MyContext.displayName = 'MyContext';

export default MyContext;
