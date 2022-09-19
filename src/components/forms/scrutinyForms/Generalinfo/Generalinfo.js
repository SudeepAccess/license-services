import React,{useState} from "react";
import { Button, Form } from "react-bootstrap";
import { Card, Row, Col} from "react-bootstrap";
import {AiFillCheckCircle, AiFillCloseCircle} from "react-icons/ai";


const Genarelinfo=(props)=>{
    const [uncheckedValue,setUncheckedVlue]=useState([]);
    return(
        <Form>
            {/* <div className="justify-content-center" 
                onClick={()=>(displayPurpose==="none")?setDisplayPurposeInfo("block"):setDisplayPurposeInfo("none")} 
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
                <h2 style={{fontSize:20, fontFamily:"Roboto", color:"GrayText"}}>Purpose Information</h2>
            </div> */}
            <Form.Group style={{display:props.displayPurpose}} className="justify-content-center">
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col className="ms-auto" md={4} xxl lg="3">
                        <div>
                            <Form.Label>Purpose:</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Purpose_true" type="radio" id = "default-radio" label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} name="group13" inline></Form.Check>
                        <Form.Check 
                            onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                            value="P_Purpose_false" type="radio" id = "default-radio" label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group13" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>District</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Purpose_District_true" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group14" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Purpose_District_false" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} name="group14" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Development Plan</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Purpose_Development_Plan_true" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group15" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Purpose_Development_Plan_false"
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group15" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Potential Zone</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Purpose_Potential_Zone_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group16" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Purpose_Potential_Zone_false" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group16" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                </Row>
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Developer</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Purpose_Developer_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group17" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Purpose_Developer_false" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group17" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Sector</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="P_Purpose_Sector_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group18" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Purpose_Sector_false" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group18" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Tehsil</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Purpose_Tehsil_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group19" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Purpose_Tehsil_false" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group19" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Village</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Purpose_Village_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group20" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Purpose_Village_false" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group20" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                </Row>
            </Form.Group>
        </Form>
    )
}

export default Genarelinfo;