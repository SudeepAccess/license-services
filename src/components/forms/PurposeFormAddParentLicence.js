import React from "react";
import { Button, Form } from "react-bootstrap";
import { Card, Row, Col} from "react-bootstrap";


const ParentLicenceAddform=(props)=>{
    return(
        <>
        
        <div className="ml-auto">
            <h2 style={{fontSize:14,fontWeight:"bold"}}>SL:{props.element}</h2>
        </div>
        <Row className="ml-auto" style={{marginBottom:20}}>
            <Col md={4} xxl lg="4">
                <div>
                    <Form.Label>License Number</Form.Label>
                </div>
                <Form.Control type="text" />
            </Col>
            <Col md={4} xxl lg="4">
                <div>
                    <Form.Label>Developer</Form.Label>
                </div>
                <Form.Control type="text" />
            </Col>
            <Col md={4} xxl lg="4">
                <div>
                    <Form.Label>Purpose of Colony </Form.Label>
                </div>
                <Form.Control type="text"  />
            </Col>
        </Row>
        <Row className="ml-auto" style={{marginBottom:20}}>
            <Col md={4} xxl lg="4">
                <div>
                    <Form.Label>Granted Area (in Acres)</Form.Label>
                </div>
                <Form.Control type="text" />
            </Col>
            <Col md={4} xxl lg="4">
                <div>
                    <Form.Label>Area in acres</Form.Label>
                </div>
                <Form.Control type="text" />
            </Col>
            <Col md={4} xxl lg="4">
                <div>
                    <Form.Label>Total Area in acres </Form.Label>
                </div>
                <Form.Control type="text"  />
            </Col>
            <Col md={4} xxl lg="4">
                <div>
                    <Form.Label>Remarks, if any </Form.Label>
                </div>
                <Form.Control type="text"  />
            </Col>
        </Row>
    </>
    )
}

export default ParentLicenceAddform