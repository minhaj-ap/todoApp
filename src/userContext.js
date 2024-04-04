import React,{createContext,useState} from'react';
const UserContext = createContext({
isLoggedIn:false,
setIsLoggedIn:()=>{}
});
export default UserContext;