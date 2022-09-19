import React,{useState} from "react";
import { Button, Form } from "react-bootstrap";
import { Card, Row, Col} from "react-bootstrap";
import {AiFillCheckCircle, AiFillCloseCircle} from "react-icons/ai";

const Personalinfo=(props)=>{
    const [uncheckedValue,setUncheckedVlue]=useState([]);
    return(
        <Form>
             {/* <div className="justify-content-center" 
                style={{
                    width:"100%", 
                    height:40,
                    backgroundColor:"aliceblue",
                    padding:5,
                    borderColor:"darkblue", 
                    borderWidth:2, 
                    borderBlockStyle:"solid", 
                    borderRadius:5,
                    marginBottom:10
                }}>
                <h2 style={{fontSize:20, fontFamily:"Roboto", color:"GrayText"}}>Personal Information</h2>
            </div> */}
            <Form.Group style={{display:props.displayPersonal}} className="justify-content-center">
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col className="ms-auto" md={4} xxl lg="3">
                        <div>
                            <Form.Label>Authorized Person Name</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Name_true" type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group1" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="P_Name_false" type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group1" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Authorized Mobile No</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Mobile_true" type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group2" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="P_Mobile_false" type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group2" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Authorized Mobile No. 2</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Mobile2_true" type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group3" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="P_Mobile2_false"type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group3" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Authorized Email ID</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Email_true" type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group4" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="P_Email_false" type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group4" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                </Row>
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>PAN No.</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Pan_true" type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group5" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="P_Pan_false" type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group5" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Address 1 </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="P_Address1_true" type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group6" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="P_Address1_false" type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group6" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Address 2</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Address2_true" type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group7" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="P_Address2_false" type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group7" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Pincode</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Pincode_true" type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group8" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="P_Pincode_false" type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group8" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                </Row>
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Village/City.</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Village_true" type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group9" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="P_Village_false" type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group9" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Tehsil </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Tehsil_true" type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group10" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="P_Tehsil_false" type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group10" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>District</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_District_true" type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group11" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="P_District_false" type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group11" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>State</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_State_true" type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group12" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="P_State_false" type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group12" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                </Row>
            </Form.Group>
        </Form>
    )
}

export default Personalinfo;