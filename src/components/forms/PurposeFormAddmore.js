import React from "react";
import { Button, Form } from "react-bootstrap";
import { Card, Row, Col} from "react-bootstrap";


const PurposeAddform=(props)=>{
    return(
        <>
        
        <div className="ml-auto">
            <h2 style={{fontSize:14,fontWeight:"bold"}}>SL:{props.element}</h2>
        </div>
        <Row className="ml-auto" style={{marginBottom:20}}>
            <Col md={4} xxl lg="4">
                <div>
                    <Form.Label>Name of the land owner <span style={{color:"red"}}>*</span></Form.Label>
                </div>
                <Form.Control type="text" placeholder="Authorized Person Name" />
            </Col>
            <Col md={4} xxl lg="4">
                <div>
                    <Form.Label>Status<span style={{color:"red"}}>*</span></Form.Label>
                </div>
                <Form.Select type="text" defaultValue="Select" placeholder="Tehshil" >
                    <option value="1">individual</option>
                    <option value="2">company</option>
                    <option value="3">firm</option>
                    <option value="3">LLP</option>
                </Form.Select>
            </Col>
            <Col md={4} xxl lg="4">
                <div>
                    <Form.Label>LC-I signed by <span style={{color:"red"}}>*</span></Form.Label>
                </div>
                <Form.Control type="text" placeholder="LC-I signed by" />
            </Col>
        </Row>
        <Row className="ml-auto" style={{marginBottom:20}}>
            <Col md={4} xxl lg="4">
                <div>
                    <Form.Label>If LC-I not signed by self(in case of individual) nature of authorization (GPA/SPA)  <span style={{color:"red"}}>*</span></Form.Label>
                </div>
                <Form.Control type="text" placeholder="If LC-I not signed by self" />
            </Col>
        </Row>
    </>
    )
}

export default PurposeAddform