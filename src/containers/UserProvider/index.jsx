import React, { useState, createContext } from 'react';

const UserContext = createContext(undefined);
const UserDispatchContext = createContext(undefined);

const UserProvider = ({children}) => {

  const setUsername = () => {
    const storedUsername = sessionStorage.getItem('username');
    if ( storedUsername ) {
      return {
        username: storedUsername,
      }
    }
    return {};
  };

  const [userDetails, setUserDetails] = useState(setUsername());

  return (
    <UserContext.Provider value={userDetails}>
      <UserDispatchContext.Provider value={setUserDetails}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext, UserDispatchContext };