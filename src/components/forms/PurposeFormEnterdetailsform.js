import React from "react";
import { Button, Form } from "react-bootstrap";
import { Card, Row, Col} from "react-bootstrap";


const Enterdetailsform=(props)=>{
    return(
        <div style={{display:props.DisplayEnterDetails,padding:10, borderWidth:5,borderStyle:"solid",borderColor:"#042042", marginTop:20}}>
        <Row className="ml-auto" style={{marginBottom:20}}>
            <Col md={4} xxl lg="4">
                <div>
                    <Form.Label>Name of individual Land owner/ land owning company/ firm/ LLP etc</Form.Label>
                </div>
                <Form.Control type="text" />
            </Col>
            
            <Col md={4} xxl lg="4">
                <div>
                    <Form.Label>Type of Revenue</Form.Label>
                </div>
                <Form.Control type="text" />
            </Col>
            <Col md={4} xxl lg="4">
                <div>
                    <Form.Label>Name of Revenue estate</Form.Label>
                </div>
                <Form.Control type="text" />
            </Col>
        </Row>
        <Row className="ml-auto" style={{marginBottom:20}}>
            <Col md={4} xxl lg="4">
                <div>
                    <Form.Label>Rectangle No</Form.Label>
                </div>
                <Form.Control type="text" />
            </Col>
            
            <Col md={4} xxl lg="4">
                <div>
                    <Form.Label>Khasra No.</Form.Label>
                </div>
                <Form.Control type="text" />
            </Col>
            <Col md={4} xxl lg="4">
                <div>
                    <Form.Label>Kanal/ Bigha</Form.Label>
                </div>
                <Form.Control type="text" />
            </Col>
        </Row>
        <Row className="ml-auto" style={{marginBottom:20}}>
            <Col md={4} xxl lg="4">
                <div>
                    <Form.Label>Marla/ Biswa</Form.Label>
                </div>
                <Form.Control type="text" />
            </Col>
            
            <Col md={4} xxl lg="4">
                <div>
                    <Form.Label>Sarsai/ Biswansi</Form.Label>
                </div>
                <Form.Control type="text" />
            </Col>
        </Row>
        <Row className="ml-auto" style={{marginBottom:20}}>
            <Col md={4} xxl lg="4">
                <div>
                    <Form.Label>Whether collaboration agreement entered for the Khasra? (Yes/No)</Form.Label>
                </div>
                <Form.Check type="radio" id = "default-radio" label="Yes" name="group1" inline></Form.Check>
                <Form.Check type="radio" id = "default-radio" label="No" name="group1" inline></Form.Check>
            </Col>
            
            <Col md={4} xxl lg="4">
                <div>
                    <Form.Label>Name of the developer company / Firm/ LLP etc. with whom collaboration agreement entered</Form.Label>
                </div>
                <Form.Control type="text" />
            </Col>
            <Col md={4} xxl lg="4">
                <div>
                    <Form.Label>Add Sales Deed/ exchange/ gift Deed, Mutation, Jamabandi, lease/patta</Form.Label>
                </div>
                <Form.Control type="file" />
            </Col>
        </Row>
        <Row className="ml-auto" style={{marginBottom:20}}>
            <Col md={4} xxl lg="4">
                    <div>
                        <Form.Label>Copy of SPA/GPA/ Board Resolution to sign collaboration agreement on behalf of land owner's</Form.Label>
                    </div>
                    <Form.Control type="file" />
                </Col>
            
            <Col md={4} xxl lg="4">
                <div>
                    <Form.Label>Name of authorized signatory on behalf of developer to sign Collaboration agreement</Form.Label>
                </div>
                <Form.Control type="text" />
            </Col>
            <Col md={4} xxl lg="4">
                <div>
                    <Form.Label>Total Applied Area</Form.Label>
                </div>
                <Form.Control type="text" />
            </Col>
        </Row>
    </div>
    )
}

export default Enterdetailsform;