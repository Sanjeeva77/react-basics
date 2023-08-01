import React from "react"
//1.Creating context
const UserContext=React.createContext("Centre for Godd Governance")

const UserProvider=UserContext.Provider
const UserConsumer=UserContext.Consumer

export {UserProvider,UserConsumer}
export default UserContext
