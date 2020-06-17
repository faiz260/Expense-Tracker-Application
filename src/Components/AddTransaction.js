import React, {useState, useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState';

export const AddTransaction = () => {

    const {addTransaction} = useContext(GlobalContext);

    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const submit = (e) => {
       e.preventDefault();
       
       setAmount("");
       setText("");

        const newTransaction = {
           id: Math.floor(Math.random() * 100000),
           text,
           amount: +amount
       }

       addTransaction(newTransaction);
    }

    return (
        <div  className="addTransaction"  >
            <h3>Add Transaction</h3> 
            <hr/>
            <h4>Text</h4>
            <form onSubmit={submit} >
                <input
                 type="text" 
                 value={text}  
                 onChange={(e)=>setText(e.target.value)}
                  placeholder="Enter Text here" ></input>
                <h4>Amount</h4>
                <p>(+ve for Income, -ve for expense)</p>
                <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}  
                 placeholder="Enter Amount here" ></input>
                <br/>
                <br/>
               {/* <Button variant="contained" >Add Transaction</Button  > */}
               <button>Add Transaction</button>
            </form>
        </div>
    )
}
