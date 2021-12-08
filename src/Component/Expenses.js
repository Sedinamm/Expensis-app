import React,{useState} from "react";
import EditExp from "./EditExpenses";
import {Button, Modal, Card, ListGroup, Col} from 'react-bootstrap'
import {deleteExpens} from '../actions/expensesAction'
import {connect} from 'react-redux'


function Expenses(props) {
    const expen= props.expen;
    const [showModal, setShowModal] = useState(false);


    function toggleModal() {
		//sets the showModal state the opposite of what
		//it currently is
		setShowModal(!showModal);
	}


	function deleteAlert() {
		const confirmDelete= window.confirm("Are you sure you want to delete this expenses?");
		// const confirm = window.confirm("Do you want to delete contact");
			if (confirmDelete === false) {
			  alert("Delete was Cancelled");
			} else {
			  props.deleteExpens(expen.id);
			}
	  }
  


    return(
        <>
		<Col md="3">
		<Card style={{ width: '18rem' }}>
  <ListGroup variant="flush">
  <ListGroup.Item><label>Name:</label><h3>{expen.string}</h3></ListGroup.Item>
    <ListGroup.Item><label>Date:</label><h3>{expen.expenses}</h3></ListGroup.Item>
    <ListGroup.Item><label>Category:</label><h4>{expen.items}</h4></ListGroup.Item>
    <ListGroup.Item><label>Amount:</label><h4>{expen.amount}</h4></ListGroup.Item>
  </ListGroup>
</Card>

         <Button variant="info" onClick={() => toggleModal()}>
				EditNote
			</Button>
            
			<Button variant="warning" onClick={() => {deleteAlert()}}>
				DeleteNote
			</Button>
</Col>


            <Modal show={showModal} onHide={() => toggleModal()}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{/*Component to edit user*/}
					<EditExp
						expen={expen}
						// editUser={props.editUser}
						toggleModal={toggleModal}
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={() => toggleModal()}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
        </>
    )
}

const mapDispatch = {
    deleteExpens,
}

export default connect(null, mapDispatch) (Expenses);