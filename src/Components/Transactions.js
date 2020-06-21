import React, { useContext } from 'react'
import {GlobalContext} from '../Context/GlobalState';

export const Transactions = ({transactions}) => {
    const sign = transactions.amount < 0 ? '-' : '+';
    const {deleteTransaction} = useContext(GlobalContext);

    return (
        <>
         <li className={transactions.amount < 0 ? "negative" : "positive"} >
            <button className="delButton" onClick={()=>deleteTransaction(transactions.id)} >X</button>  
             {transactions.text} <span> {sign}${Math.abs(transactions.amount)}</span> 
        </li>
        </>
    )
}
