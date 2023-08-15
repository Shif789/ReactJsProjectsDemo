import React from "react";

const UserContext = React.createContext("Learning Code");
export const LastNameContext = React.createContext("Any Name");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };

export default UserContext;
