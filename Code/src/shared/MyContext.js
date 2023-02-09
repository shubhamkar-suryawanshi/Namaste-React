import { createContext } from 'react';

const MyContext = createContext({
  user: { name: 'dummy', email: 'dummy@surya.com' },
});

MyContext.dispalyName = 'MyContext';

export default MyContext;
