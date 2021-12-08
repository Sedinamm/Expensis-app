import React, {useState} from "react";
import {v4 as uuid} from 'uuid';
import { addExpens } from "../actions/expensesAction";
import {connect} from 'react-redux';



function ExForm(props) {
    const [expenses , setExpenses] = useState("")
    const [items, setItems] = useState("select")
    const [amount , setAmount] = useState("")
    const [ string , setString] = useState("")

    function handleSubmit(e) {
        e.preventDefault();

       if (expenses && amount) {
           let freshExpenses ={
               expenses: expenses,
               items: items,
               amount: amount,
               string: string,
               id: uuid(),
           };
           props.addNewExpenses(freshExpenses);
           setExpenses("");
           setAmount("");
           setItems("");
           setString("")
       }
    }


    return (
        <>
        <form onSubmit={(e) => handleSubmit(e)}>

        <input 
        name="name" 
        type="name" 
        placeholder="Name" 
        value={string} 
        onChange={(e) => setString(e.target.value)} />
<br/>




        <input 
        name="date" 
        type="date" 
        placeholder="date" 
        value={expenses} 
        onChange={(e) => setExpenses(e.target.value)} />
<br/>
        <select value={items} onChange={(e) => setItems(e.target.value)}>
            <option value="select">Select</option>
            <option value="Food and Drink">Food and Drink</option>
            <option value="Accommodation">Accommodation</option>
            <option value="Transportation">Transportation</option>
            <option value="Housing and Rent">Housing and Rent</option>
            <option value="Miscellaneous">Miscellaneous</option>
        </select>
 <br/>
        <input 
        name="amout" 
        type="number" 
        placeholder="Amount-Spent" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} />
        <input type="submit" />
        </form>
        </>
    )

}

const mapDispatch = {
    addNewExpenses: addExpens
}

export default connect(null, mapDispatch) (ExForm);