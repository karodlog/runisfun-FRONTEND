import { createContext, useState} from "react";

export const UserContext = createContext()

export const UserContextProvider = (props)=>{

const [modalState, setmodalState] = useState({
    loginModal: false,
    registerModal: false
});


const toggleModals = modal =>{
    if(modal === "login"){
        setmodalState({
            registerModal: false,
            loginModal: true
        })
    }
    if(modal === "register"){
        setmodalState({
            registerModal: true,
            loginModal: false
        })
    }
    if(modal === "close"){
        setmodalState({
            registerModal: false,
            loginModal: false
        })
    }
}
    return(
        <UserContext.Provider value= {{modalState, toggleModals}}>
            {props.children}
        </UserContext.Provider>
    )
}