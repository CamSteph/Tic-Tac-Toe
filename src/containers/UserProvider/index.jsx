import React, { useState, createContext } from 'react';

const UserContext = createContext(undefined);
const UserDispatchContext = createContext(undefined);

const UserProvider = ({children}) => {

  const setUsername = () => {
    const storedUsername = sessionStorage.getItem('username');
    const userWins = sessionStorage.getItem('wins');
    const userLosses = sessionStorage.getItem('losses');
    const userDraws = sessionStorage.getItem('draws');
    if ( storedUsername ) {
      return {
        username: storedUsername,
        wins: Number(userWins) || 0,
        lossess: Number(userLosses) || 0,
        wins: Number(userDraws) || 0,
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