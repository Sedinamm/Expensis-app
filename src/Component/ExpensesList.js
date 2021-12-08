import React from "react";
import Expenses from "./Expenses";
import {connect} from 'react-redux'
import { Container,  Row} from "react-bootstrap";


function ExpensList(props) {
    return (
        <div>
            {props.expens.map((expen) => {
                return(

                    <Container>
                        <Row>
                    <Expenses 
                    expen={expen}
                    key={expen.id}
                    deleteExpens= {props.deleteExpens}
                    editExpens= {props.editExpens}
                     />
                     </Row>
                     </Container>
                )
            })}
        </div>
    )
}

const mapState = (state) => {
    return{
        expens: state.expens,
    }
}

export default connect(mapState) (ExpensList);