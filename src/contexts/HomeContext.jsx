import { createContext, useContext } from 'react';

const HomeContext = createContext();

export const useHomeContext = () => {
  const context = useContext(HomeContext);
  return context || {};
};

export default HomeContext;
