import React,{useState} from "react";
import { Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {editExpens} from '../actions/expensesAction'




function EditExp(props) {
    const [expenses , setExpenses] = useState(props.expen.expenses)
    const [amount , setAmount] = useState(props.expen.amount)
    const [items, setItems] = useState(props.expen.items)
    const [string, setString] = useState(props.expen.string)

    const handleExpensesChange = (e) => {
        setExpenses(e.target.value)
    }

    const handleAmountChange = (e) => {
        setAmount(e.target.value)
    }

    const handleItemChange = (e) => {
        setItems(e.target.value)
    }

    const handleStringChange = (e) => {
        setString(e.target.value)
    }


    function handleSubmit() {
        let  editedExpens = {
            expenses: expenses,
            items: items,
            amount: amount,
            string: string,
            id: props.expen.id,
        }
        props.editExpens(props.expen.id, editedExpens);
        props.toggleModal();
      }

      return(
        <>
        <form >

        <input 
        name="name" 
        type="name" 
        placeholder="Name" 
        value={string} 
        onChange={(e) => handleStringChange(e)} />



        <input 
        name="name" 
        type="name" 
        placeholder="Expenses-Name" 
        value={expenses} 
        onChange={(e) => handleExpensesChange(e)} />

    <select value={items} onChange={(e) => handleItemChange(e)}>
        <option value="select">Select</option>
        <option value="Food and Drink">Food and Drink</option>
            <option value="Accommodation">Accommodation</option>
            <option value="Transportation">Transportation</option>
            <option value="Housing and Rent">Housing and Rent</option>
            <option value="Miscellaneous">Miscellaneous</option>
        </select>


        <input 
        name="amout" 
        type="amount" 
        placeholder="Amount-Spent" 
        value={amount} 
        onChange={(e) => handleAmountChange(e)} />
         <Button onClick={() => handleSubmit()}>Save</Button>
        </form>
        </>
      )
}

const mapDispatch = {
    editExpens,
}

export default connect(null, mapDispatch) (EditExp);