
import { createContext } from "react";

export const cartContext = createContext([[], function() {}]);

// context is used to pass data without using props, usually in app level state i..e authenticator, global config
//props drilling is when data is passed down multiple levels making code unreadible 
// context allows data to be passed across components, while use state needs manual pass state and setter 
// functions down
