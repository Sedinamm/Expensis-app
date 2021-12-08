import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpensesForm from './Component/ExpensesForm';
import ExpensesList from './Component/ExpensesList';
import { Container , Row, Col} from 'react-bootstrap';

function App() {
  const [expens, setExpens] = useState([]);

  function addExpens(expen) {
    setExpens([...expens, expen]);
  }
  function editEpens(newExpen, expenId) {
    const u = expens.map((expen) => {
      if(expenId === expen.id) {
        return newExpen;
      } else {
        return expen;
      }
    })
    setExpens(u)
  }


  function deleteExpens(expenId) {
    const filteredExpens = expens.filter((expen) => {
      return expenId !== expen.id;
    })
    setExpens(filteredExpens);
  }

  return (
    <>
     <Container fluid>
       <Row>
         <Col md="3">
       <ExpensesForm addExpens={addExpens} />
         </Col>
         <Col>
       <ExpensesList expens={expens} deleteExpens={deleteExpens} editEpens= {editEpens} />
         </Col>
       </Row>
     </Container>
    </>

  )
}

export default App;