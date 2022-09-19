import React,{useState} from "react";
import { Button, Form } from "react-bootstrap";
import { Card, Row, Col} from "react-bootstrap";
import {AiFillCheckCircle, AiFillCloseCircle} from "react-icons/ai";


const Developerinfo=(props)=>{
    const [uncheckedValue,setUncheckedVlue]=useState([]);
    return(
        <Form>
            {/* <div className="justify-content-center" 
                onClick={()=>(displayGeneral==="none")?setDisplayGeneralInfo("block"):setDisplayGeneralInfo("none")} 
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
                <h2 style={{fontSize:20, fontFamily:"Roboto", color:"GrayText"}}>General Information</h2>
            </div> */}
            <Form.Group style={{display:props.displayGeneral}} className="justify-content-center">
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col className="ms-auto" md={4} xxl lg="3">
                        <div>
                            <Form.Label>Name of the land owner:</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Land_Owner_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group21" inline></Form.Check>
                        <Form.Check 
                            onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                            value="P_Land_Owner_false" 
                            type="radio" id = "default-radio" 
                            label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                            name="group21" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Status(individual/ company/ etc)</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Status_true" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group22" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Status_false" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group22" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>LC-I signed by</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_LC-I_signed_by_true" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group23" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_LC-I_signed_by_false"
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group23" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Nature of authorization</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_nature_of_authorization_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group24" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_nature_of_authorization_false" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group24" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                </Row>
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Land schedule</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Land_schedule_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group25" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Land_schedule_false" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group25" inline></Form.Check>
                        <Button>View</Button>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Copy of Mutation</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="P_Copy_of_Mutation_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group26" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Copy_of_Mutation_false" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group26" inline></Form.Check>
                        <Button>View</Button>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Copy of Jamabandi</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Copy_of_Jamabandi_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group27" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Copy_of_Jamabandi_false" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group27" inline></Form.Check>
                        <Button>View</Button>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Details of lease / patta, if any</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Details_of_lease_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group28" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Purpose_Village_false" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group28" inline></Form.Check>
                        <Button>View</Button>
                    </Col>
                </Row>
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Copy of Sajra Plan</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Copy_of_Sajra_Plan_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group29" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Land_schedule_false" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group29" inline></Form.Check>
                        <Button>View</Button>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Another Copy of Sajra Plan</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="P_Copy_of_Sajra_Plan2_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group30" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Copy_of_Sajra_Plan2_false" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group30" inline></Form.Check>
                        <Button>View</Button>
                    </Col>
                   
                </Row>
                <Row className="ms-auto" style={{marginBottom:20}}>
                        <Col md={4} xxl lg="3">
                            <div>
                                <Form.Label>Name of Developer</Form.Label><span style={{color:"red"}}>*</span>
                            </div>
                            <Form.Check value="P_Name_of_Developer_true" 
                                        type="radio" 
                                        id = "default-radio" 
                                        label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                        name="group31" inline></Form.Check>
                            <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                        value="P_Name_of_Developer_false" 
                                        type="radio" 
                                        id = "default-radio" 
                                        label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                        name="group31" inline></Form.Check>
                            <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                        </Col>
                </Row>
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>(i) Status(individual/ company/ firm/ LLP etc.)</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Developer_Status_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group32" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Developer_Status_false" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group32" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>(ii) Permanent address in case of individual/ registered office address in case other than individual </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Developer_Permanent_address_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group33" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Developer_Permanent_address_false" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group33" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>(iii) Address for the purpose of communication</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Developer_Permanent_address_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group34" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Developer_Permanent_address_false" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group34" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                </Row>
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>(iv) Name of authorized person to sign the application</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Developer_Name_of_authorized_person_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group35" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Developer_Name_of_authorized_person_false" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group35" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>(v) Mobile No. for communication</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Developer_Mobile_No_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group36" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Developer_Mobile_No_false" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group36" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>(vi) Email ID for communication</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="P_Developer_Email_ID_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group37" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Developer_Email_ID_false" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group37" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                </Row>
            </Form.Group>
        </Form>
    )
}

export default Developerinfo;