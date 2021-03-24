import React from 'react'

const UserContext = React.createContext();

//every context created with React.createContext comes with Provider and consumer
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export {UserProvider,UserConsumer}