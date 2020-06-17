import React, {useContext} from 'react'
import {Transactions} from './Transactions'
import {GlobalContext} from '../Context/GlobalState';

export const TransactionList = () => {

    const {transactions} = useContext(GlobalContext);

    return (
        <div >
            <h3>History</h3>
            <hr/>
            <div  >
                <ul className="transactionList">
                    {transactions.map(transactions => (<Transactions key={transactions.id}  transactions={transactions} />))}
                </ul>
            </div>
        </div>
    )
}
