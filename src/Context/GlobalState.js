import React, {createContext, useReducer} from "react";
import MyReducer from './MyReducer'

const initialState = {
    transactions: []
}
  
export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(MyReducer, initialState);

    function deleteTransaction(id) {
        dispatch({
            type:"DELETE_TRANSACTION",
            payload :id
        })       
    }

    function addTransaction(transactions) {
        dispatch({
            type:"ADD_TRANSACTION",
            payload: transactions
        })       
    }


    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }} >
            {children}
        </GlobalContext.Provider>
    )
}