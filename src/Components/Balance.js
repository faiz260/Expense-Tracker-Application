import React, {useContext} from 'react'
import {
    CardContent
   } from '@material-ui/core/';
import {GlobalContext} from '../Context/GlobalState';

export const Balance = () => {

    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transactions => transactions.amount)

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2); 

    return (
        <div >
            <div className="balance-div" >
                <CardContent className="balance-head">
                    <h3 className="digits2">
                        Balance
                    </h3>
                </CardContent>
                <CardContent className="balance-amount" >
                <p>
                    ${total}
                    </p>
                </CardContent>
            </div>
        </div>
    )
}
