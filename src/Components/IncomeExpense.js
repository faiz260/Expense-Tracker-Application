import React,{useContext} from 'react'
import {
     CardContent
    } from '@material-ui/core/';
import 'fontsource-roboto';
import {GlobalContext} from '../Context/GlobalState';


export const IncomeExpense = () => {

    const {transactions} = useContext(GlobalContext);  
    const amounts = transactions.map(transactions => transactions.amount);
    const income = amounts.filter(item => item > 0).reduce((acc, item)=>(acc += item), 0).toFixed(2);
    const expense = (
        amounts.filter(item=>item < 0).reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2);
    
    
    return (
        <div>
            <div className="income-expense" > 
                <CardContent className="income">
                    <h3 className="digits2">
                        Income
                    </h3>
                    <p>
                    ${income}
                    </p>
                </CardContent>
                <CardContent className="expense">
                    <h3  className="digits2">
                        Expense
                    </h3>
                    <p className="digits1">
                        ${expense}
                    </p>
                </CardContent>
            </div>
        </div>
    )
}
