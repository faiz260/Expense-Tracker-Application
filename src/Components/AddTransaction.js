import React, {useState, useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { useAlert } from 'react-alert'

export const AddTransaction = () => {

    const alert = useAlert();

    const {addTransaction} = useContext(GlobalContext);

    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const submit = (e) => {
       e.preventDefault();

       if(!text && !amount){
           return(
               alert.show("Fields required !! ")
           )
       }

       if(!text){
         return (
             alert.show("Text Field Required !! ")
         )
       }
       if (!amount) {
           return (
               alert.show("Amount Required !!")
           )
      }

        const newTransaction = {  
                id: Math.floor(Math.random() * 100000),
                text,
                amount: +amount         
       }

       addTransaction(newTransaction);

       setAmount("");
       setText("");
    }


    return (
        <div  className="addTransaction"  >
            <h3>Add Transaction</h3> 
            <hr/>
            <h4>Text</h4>
            <form onSubmit={submit} className="form"  >
                <input
                 type="text" 
                 value={text}  
                 onChange={(e)=>setText(e.target.value)}
                 placeholder="Enter Text here" 
                 ></input>
                <h4>Amount</h4>
                <p>(+ve for Income, -ve for expense)</p>
                <input type="number"
                    value={amount}
                    onChange={(e)=>setAmount(e.target.value)}  
                    placeholder="Enter Amount here" 
                    ></input>
                <br/>
                <br/>
               <button className="addButton" >Add Transaction</button>
            </form>
        </div>
    )
}
