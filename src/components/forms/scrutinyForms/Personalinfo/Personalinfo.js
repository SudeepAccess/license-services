import React,{useState} from "react";
import { Button, Form } from "react-bootstrap";
import { Card, Row, Col} from "react-bootstrap";
import {AiFillCheckCircle, AiFillCloseCircle} from "react-icons/ai";

const Personalinfo=(props)=>{
    const [uncheckedValue,setUncheckedVlue]=useState([]);
    console.log(uncheckedValue);
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
                        <Form.Check value="Authorized Person Name" type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group1" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="Authorized Person Name" type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group1" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Authorized Mobile No</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="Authorized Mobile No" type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group2" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="Authorized Mobile No" type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group2" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Authorized Mobile No. 2</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="Authorized Mobile No. 2" type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group3" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="Authorized Mobile No. 2"type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group3" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Authorized Email ID</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="Authorized Email ID" type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group4" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="Authorized Email ID" type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group4" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                </Row>
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>PAN No.</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="PAN No." type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group5" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="PAN No." type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group5" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Address 1 </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Address 1" type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group6" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="Address 1" type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group6" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Address 2</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="Address 2" type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group7" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="Address 2" type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group7" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Pincode</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="Pincode" type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group8" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="Pincode" type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group8" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                </Row>
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Village/City.</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="Village/City." type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group9" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="Village/City." type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group9" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Tehsil </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="Tehsil" type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group10" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="Tehsil" type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group10" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>District</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="District" type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group11" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="District" type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group11" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>State</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="State" type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group12" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="State" type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group12" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                </Row>
            </Form.Group>
             <div style={{position:"relative", marginBottom:40}}>
             <Button onClick={()=>props.passUncheckedList({"data":uncheckedValue})}>
                 Submit
             </Button>
         </div>
         <hr></hr>
        </Form>
    )
}

export default Personalinfo;