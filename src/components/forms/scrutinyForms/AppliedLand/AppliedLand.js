import React,{useState} from "react";
import { Button, Form } from "react-bootstrap";
import { Card, Row, Col} from "react-bootstrap";
import {AiFillCheckCircle, AiFillCloseCircle} from "react-icons/ai";
import MigrationAppliedTrue from "./UnderMigrationApllied/MigrationAplliedTrue";

const AppliedLandinfo=(props)=>{
    const [uncheckedValue,setUncheckedVlue]=useState([]);
    console.log(uncheckedValue);
    const [migrationApllied,setMigrationApplied] = useState(true);
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
                <Row className="ml-auto" style={{marginBottom:20}}>
                    <Col className="ml-auto" md={4} xxl lg="4">
                        <div>
                            <Form.Label>(i) Khasra-wise information to be provided in the following format</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="Khasra-wise information to be provided in the following format" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group38" inline></Form.Check>
                        <Form.Check 
                            onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                            value="Khasra-wise information to be provided in the following format" 
                            type="radio" 
                            id = "default-radio" 
                            label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                            name="group38" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                </Row>
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Name of individual Land owner/ land owning company/ firm/ LLP etc.</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="Name of individual Land owner/ land owning company/ firm/ LLP etc." 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group39" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Name of individual Land owner/ land owning company/ firm/ LLP etc." 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group39" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Type of Revenue</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Type of Revenue" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group40" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Type of Revenue" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group40" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Name of Revenue estate</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="Name of Revenue estate" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group41" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Name of Revenue estate" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group41" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Rectangle No.</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="Rectangle No." 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group42" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Rectangle No." 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group42" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                </Row>
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Khasra No.</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="Khasra No." 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group43" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Khasra No." 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group43" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Kanal/ Bigha</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Kanal/ Bigha" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group44" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Kanal/ Bigha" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group44" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Marla/ Biswa</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="Marla/ Biswa" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group45" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Marla/ Biswa" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group45" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Sarsai/ Biswansi</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="Sarsai/ Biswansi" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group46" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Sarsai/ Biswansi" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group46" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                </Row>
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Whether collaboration agreement entered for the Khasra? (Yes/No)</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="Whether collaboration agreement entered for the Khasra? (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group47" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Whether collaboration agreement entered for the Khasra? (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group47" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>If yes, enclose collaboration agreement as Annexure.</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="If yes, enclose collaboration agreement as Annexure." 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group48" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="If yes, enclose collaboration agreement as Annexure." 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group48" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Name of the developer company / Firm/ LLP etc. with whom collaboration agreement entered</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="Name of the developer company / Firm/ LLP etc. with whom collaboration agreement entered" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group49" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Name of the developer company / Firm/ LLP etc. with whom collaboration agreement entered" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group49" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Date of registering collaboration agreement</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="Date of registering collaboration agreement" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group50" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Date of registering collaboration agreement" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group51" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                </Row>
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Date of validity of collaboration agreement</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="Date of validity of collaboration agreement" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group52" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Date of validity of collaboration agreement" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group52" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Whether collaboration agreement irrevocable (Yes/No).</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Whether collaboration agreement irrevocable (Yes/No)." 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group53" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Whether collaboration agreement irrevocable (Yes/No)." 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group53" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Name of authorized signatory on behalf of land owner(s)</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="Name of authorized signatory on behalf of land owner(s)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group54" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Name of authorized signatory on behalf of land owner(s)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group54" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Copy of SPA/GPA/ Board Resolution to sign collaboration agreement on behalf of land owner(s)</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="Copy of SPA/GPA/ Board Resolution to sign collaboration agreement on behalf of land owner(s)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group55" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Copy of SPA/GPA/ Board Resolution to sign collaboration agreement on behalf of land owner(s)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group55" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                </Row>
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Name of authorized signatory on behalf of developer to sign Collaboration agreement</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="Name of authorized signatory on behalf of developer to sign Collaboration agreement" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group56" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Name of authorized signatory on behalf of developer to sign Collaboration agreement" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group56" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Whether collaboration agreement irrevocable (Yes/No).</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Whether collaboration agreement irrevocable (Yes/No)." 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group57" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Whether collaboration agreement irrevocable (Yes/No)." 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group58" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Board Resolution to sign collaboration agreement on behalf of Developer as Annexure</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="Board Resolution to sign collaboration agreement on behalf of Developer as Annexure true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group59" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Board Resolution to sign collaboration agreement on behalf of Developer as Annexure false" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group59" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Sale/ exchange/ gift Deed, Mutation, Jamabandi, lease/patta</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="Sale/ exchange/ gift Deed, Mutation, Jamabandi, lease/patta" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group60" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Sale/ exchange/ gift Deed, Mutation, Jamabandi, lease/patta" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group60" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                </Row>
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Registring Authority</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="Registring Authority" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group61" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Registring Authority" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group61" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Total Applied Area</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Total Applied Area" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group62" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Total Applied Area" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group62" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                </Row>
                <h2 style={{fontSize:24}}>Whether licence applied for additional area <span style={{color:"red"}}>*</span></h2>
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>(i) Licence No. of parent licence</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="Licence No. of parent licenc" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group63" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Licence No. of parent licenc" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group63" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>(ii) Area of parent licence in acres</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Area of parent licence in acres" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group64" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Area of parent licence in acres" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group64" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                </Row>
                <h2 style={{fontSize:24}}>Whether licence applied under Migration policy <span style={{color:"red"}}>*</span></h2>
                <Form.Check  
                        onChange={()=>setMigrationApplied(true)}
                        value="yes" 
                        type="radio" 
                        id = "default-radio" 
                        label="YES" 
                        name="group62" inline></Form.Check>
                <Form.Check onChange={()=>setMigrationApplied(false)} 
                        value="no" 
                        type="radio" 
                        id = "default-radio" 
                        label="NO"
                        name="group62" inline></Form.Check>
                
                {(migrationApllied)?
                    <MigrationAppliedTrue></MigrationAppliedTrue>
                    :
                    <div></div>}
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Select commercial licence component type</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="Select commercial licence component type" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group65" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Select commercial licence component type" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group65" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Commercial licence under left over pocket</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check value="Commercial licence under left over pocket" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group70" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Commercial licence under left over pocket" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group70" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                </Row>
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Potential Zone</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Potential Zone" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group66" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Potential Zone" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group66" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Site Location Purpose</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Site Location Purposee" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group67" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Site Location Purpose" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group67" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Development Plan</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Development Plan" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group68" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Development Plan" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group68" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>District</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="District" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group69" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="District" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group69" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                </Row>
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Approach Road Width</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Approach Road Width" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group71" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Approach Road Width" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group71" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Site Location Purpose</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Site Location Purpose" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group72" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Site Location Purpose" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group72" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Specify Others</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Specify Others" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group73" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Specify Others" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group73" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>District</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="District" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group74" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="District" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group74" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                </Row>
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Existing Case No</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Existing Case No" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group75" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Existing Case No" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group75" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                 
                </Row>
                <hr></hr>
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Parent License</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Parent License" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group76" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Parent License" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group76" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                 
                </Row>
                <Row>
                <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Purpose of Colony</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Granted Area (in Acres)</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Area in acres</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Total Area in acres</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>Remarks, if any</Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="3">
                    <div>
                        <Form.Label>License Number</Form.Label><span style={{color:"red"}}>*</span>
                    </div>
                
                    <Form.Control style={{marginTop:10}} readOnly></Form.Control>
                </Col>
                <Col md={4} xxl lg="3">
                    <div>
                        <Form.Label>Developer</Form.Label><span style={{color:"red"}}>*</span>
                    </div>
                    <Form.Control style={{marginTop:10}} readOnly></Form.Control>
                </Col>
                </Row>
                <hr></hr>
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="8">
                        <div>
                            <Form.Label style={{fontSize:24}}>Third Party Right created (Yes/No) </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Third Party Right created" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group77" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Third Party Right created" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group77" inline></Form.Check>
                        
                    </Col>
                 
                </Row>
                <hr></hr>
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="8">
                        <div>
                            <Form.Label style={{fontSize:24}}>Migration </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Migration" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group78" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Migration" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group78" inline></Form.Check>
                        
                    </Col>
                 
                </Row>
                <hr></hr>
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col xxl lg="6">
                        <Form.Label>1. Require Original Layout Plan</Form.Label>
                        <Form.Control type="file"></Form.Control>
                    </Col>
                    <Col xxl lg="6">
                        <Form.Label>2. Require Revised Layout Plan</Form.Label>
                        <Form.Control type="file"></Form.Control>
                    </Col>
                    <Col xxl lg="6">
                        <Form.Label>3. Land Schedule </Form.Label>
                        <Form.Control type="file"></Form.Control>
                    </Col>
                    <Col xxl lg="6">
                        <Form.Label>4. Undertaking form </Form.Label>
                        <Form.Control type="file"></Form.Control>
                    </Col>
                </Row>
                <hr></hr>
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="8">
                        <div>
                            <h2 style={{fontSize:24}}>I. Details of Approach</h2>
                            <Form.Label >(i) Whether approach available to the site as per current approach policy (Yes/No) : </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Whether approach available to the site as per current approach policy (Yes/No) :" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group78" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Whether approach available to the site as per current approach policy (Yes/No) :" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group78" inline></Form.Check>
                        
                    </Col>
                 
                </Row>
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="8">
                        <div>
                            <h2 style={{fontSize:24}}>II. Applied Area details</h2>
                            <Form.Label >
                            Note: The term “Collaboration agreement" shall include all Development agreements/ Joint Venture agreements/ Joint Development agreements/ Memorandum of Understanding etc. and similar agreements registered with competent authority.
                            </Form.Label>
                            <Form.Label>(ii) Any encumbrance with respect to following </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Any encumbrance with respect to following" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group78" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Any encumbrance with respect to following" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group78" inline></Form.Check>
                        
                    </Col>
                 
                </Row>
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>(a) Rehan / Mortgage </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Rehan / Mortgage" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group79" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Rehan / Mortgage" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group79" inline></Form.Check>
                        
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>(b) Patta/Lease (Yes/No) </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Patta/Lease" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group80" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Patta/Lease" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group80" inline></Form.Check>
                        
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>(c) GairMarusi (Yes/No) </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="GairMarusi" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group81" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="GairMarusi" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group81" inline></Form.Check>
                        
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label>(d) Any other, please specify  </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Any other, please specify " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group82" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Any other, please specify " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group82" inline></Form.Check>
                        
                    </Col>
                </Row>
                <hr></hr>
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="8">
                        <div>
                            <Form.Label>(iii) Existing litigation, if any, with respect to applied land including co-sharers and collaborator  </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Existing litigation, if any, with respect to applied land including co-sharers and collaborator" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group83" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Existing litigation, if any, with respect to applied land including co-sharers and collaborator" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group83" inline></Form.Check>
                        
                    </Col>
                  
                </Row>
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="8">
                        <div>
                            <Form.Label>(iv) Court orders, if any, having effect on applied land   </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Court orders, if any, having effect on applied land" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group84" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Court orders, if any, having effect on applied lande" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group84" inline></Form.Check>
                        
                    </Col>
                  
                </Row>
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="8">
                        <div>
                            <Form.Label>(v) Whether the applied Land is involved in any acquisition </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Whether the applied Land is involved in any acquisition" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group85" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Whether the applied Land is involved in any acquisition" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group85" inline></Form.Check>
                        
                    </Col>
                  
                </Row>
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="8">
                        <div>
                            <Form.Label>(vi) Any insolvency/liquidation proceedings against land owner(s)/ collaborating developer </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value=" Any insolvency/liquidation proceedings against land owner(s)/ collaborating developer" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group86" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value=" Any insolvency/liquidation proceedings against land owner(s)/ collaborating developer" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group86" inline></Form.Check>
                        
                    </Col>
                  
                </Row>
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="8">
                        <div>
                            <h4 style={{fontSize:16}}>2. Details of approach</h4>
                            <Form.Label>
                                        (i) Whether approach available to the site as per current approach policy? Yes/No *
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Whether approach available to the site as per current approach policy" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group87" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Whether approach available to the site as per current approach policy" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group87" inline></Form.Check>
                        
                    </Col>
                  
                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="8">
                        <div>
                            <h4 style={{fontSize:16}}>2. Details of approach</h4>
                            <Form.Label>
                            (1A)  Applicants and their ownership:-
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Applicants and their ownership" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group88" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Applicants and their ownership" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group88" inline></Form.Check>
                        
                    </Col>
                  
                </Row>

               
                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}>2. Details of approach</h4>
                            <Form.Label>
                            Name of individual land owner/ land owning company/firm/LLP etc.
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Name of individual land owner/ land owning company/firm/LLP etc." 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group89" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Name of individual land owner/ land owning company/firm/LLP etc." 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group89" inline></Form.Check>
                        
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}>2. Details of approach</h4>
                            <Form.Label>
                            Name of Revenue estate
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Name of Revenue estate" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group90" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Name of Revenue estate" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group90" inline></Form.Check>
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}>2. Details of approach</h4>
                            <Form.Label>
                            Rectangle No.
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Rectangle No." 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group91" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Rectangle No." 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group91" inline></Form.Check>
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}>2. Details of approach</h4>
                            <Form.Label>
                            Killa No.
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Killa No." 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group92" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Killa No." 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group92" inline></Form.Check>
                        
                    </Col>

                  
                  
                </Row>


                

                <Row className="ms-auto" style={{marginBottom:20}}>
                   
                <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}>2. Details of approach</h4>
                            <Form.Label>
                            Type of land (chahi/nehri. Gair Mumkins/others)
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Type of land (chahi/nehri. Gair Mumkins/others)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group93" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Type of land (chahi/nehri. Gair Mumkins/others)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group93" inline></Form.Check>
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}>2. Details of approach</h4>
                            <Form.Label>
                            Area(opt1 option)
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Area(opt1 option)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group94" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Area(opt1 option)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group94" inline></Form.Check>
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}>2. Details of approach</h4>
                            <Form.Label>
                            Area(opt1 option)
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Area(opt1 option)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group94" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Area(opt1 option)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group94" inline></Form.Check>
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}>2. Details of approach</h4>
                            <Form.Label>
                            (a)Kanal-Marla-sarsai
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="(a)Kanal-Marla-sarsai" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group95" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="(a)Kanal-Marla-sarsai" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group95" inline></Form.Check>
                        
                    </Col>
                  
                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="8">
                        <div>
                            <h4 style={{fontSize:16}}>2. Details of approach</h4>
                            <Form.Label>
                            (b)Bigha-biswa-biswansi
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="(b)Bigha-biswa-biswansi" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group96" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="(b)Bigha-biswa-biswansi" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group96" inline></Form.Check>
                        
                    </Col>
                  
                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}>2. Details of approach</h4>
                            <Form.Label>
                            (1A)(i) Whether ownership in order as per revenue documents (Yes/No) :
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Whether ownership in order as per revenue documents (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group97" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Whether ownership in order as per revenue documents (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group97" inline></Form.Check>
                        
                    </Col>
                  
                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}>2. Details of approach</h4>
                            <Form.Label>
                            (1B)  Shajra Plan
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Shajra Plan" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group98" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="(1B)  Shajra Plan" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group98" inline></Form.Check>
                        
                    </Col>
                  
                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <h4 style={{fontSize:16}}>2. Details of approach</h4>
                            <Form.Label>
                            i) As per applied land (Yes/No)*
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="As per applied land (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group99" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="As per applied land (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group99" inline></Form.Check>
                        
                    </Col>

                    <Col md={4} xxl lg="4">
                        <div>
                            <h4 style={{fontSize:16}}>2. Details of approach</h4>
                            <Form.Label>
                            ii) If any revenue rasta abuts to the applied site (Yes/No)*
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value=" If any revenue rasta abuts to the applied site (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group100" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value=" If any revenue rasta abuts to the applied site (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group100" inline></Form.Check>
                        
                    </Col>
                  
                </Row>

                

                <Row className="ms-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <h4 style={{fontSize:16}}>2. Details of approach</h4>
                            <Form.Label>
                            iii) If any water course abuts/passes through the applied site
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="If any water course abuts/passes through the applied site" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group101" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="If any water course abuts/passes through the applied site" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group101" inline></Form.Check>
                        
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <h4 style={{fontSize:16}}>2. Details of approach</h4>
                            <Form.Label>
                            iv)Whether in Compact Block (Yes/No)*
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Whether in Compact Block (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group102" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Whether in Compact Block (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group102" inline></Form.Check>
                        
                    </Col>
                  
                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="4">
                        <div>
                            <h4 style={{fontSize:16}}>2. Details of approach</h4>
                            <Form.Label>
                            (1B)  Acquisition status (Yes/No):
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Acquisition status (Yes/No):" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group104" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Acquisition status (Yes/No):" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group104" inline></Form.Check>
                        
                    </Col>

                    <Col md={4} xxl lg="4">
                        <div>
                            <h4 style={{fontSize:16}}>2. Details of approach</h4>
                            <Form.Label>
                            (1C)  Section 4 notification:-
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="(1C)  Section 4 notification:-" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group104" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="(1C)  Section 4 notification:-" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group104" inline></Form.Check>

                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                        
                    </Col>
                  
                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="4">
                        <div>
                            <h4 style={{fontSize:16}}>2. Details of approach</h4>
                            <Form.Label>
                            (1D)  Section 6 notification:-
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="(1D)  Section 6 notification:-" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group105" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="(1D)  Section 6 notification:-" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group105" inline></Form.Check>

                             <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                        
                    </Col>

                    <Col md={4} xxl lg="4">
                        <div>
                            <h4 style={{fontSize:16}}>2. Details of approach</h4>
                            <Form.Label>
                            (1E)  Date of Award:-
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="(1E)  Date of Award:-" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group106" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="(1E)  Date of Award:-" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group106" inline></Form.Check>

<Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                        
                    </Col>
                  
                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="4">
                        <div>
                            <h4 style={{fontSize:16}}>2. Details of approach</h4>
                            <Form.Label>
                            (1F)  Date of release:-
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="(1F)  Date of release:-" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group107" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="(1F)  Date of release:-" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group107" inline></Form.Check>

<Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                        
                    </Col>

                    <Col md={4} xxl lg="4">
                        <div>
                            <h4 style={{fontSize:16}}>2. Details of approach</h4>
                            <Form.Label>
                            (1G) Status of release/exclusion of land (Yes/No)*
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="(1G) Status of release/exclusion of land (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group108" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="(1G) Status of release/exclusion of land (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group108" inline></Form.Check>
                        
                    </Col>
                  
                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="4">
                        <div>
                            <h4 style={{fontSize:16}}>2. Details of approach</h4>
                            <Form.Label>
                            (1H) Whether details/ orders of release/ exclusion of land uploaded*
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="(1H) Whether details/ orders of release/ exclusion of land uploaded*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group109" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="(1H) Whether details/ orders of release/ exclusion of land uploaded*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group109" inline></Form.Check>
                        
                    </Col>

                    <Col md={4} xxl lg="4">
                        <div>
                            <h4 style={{fontSize:16}}>2. Details of approach</h4>
                            <Form.Label>
                            (1I) Whether land compenstaion received (Yes/No)*
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="(1I) Whether land compenstaion received (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group110" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="(1I) Whether land compenstaion received (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group110" inline></Form.Check>
                        
                    </Col>
                  
                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="4">
                        <div>
                            <h4 style={{fontSize:16}}>2. Details of approach</h4>
                            <Form.Label>
                            B  Site Report :-
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="B  Site Report :-" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group111" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="B  Site Report :-" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group111" inline></Form.Check>
                        
                    </Col>

                    <Col md={4} xxl lg="4">
                        <div>
                            <h4 style={{fontSize:16}}>2. Details of approach</h4>
                            <Form.Label>
                            A. Purpose of the project 
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="A. Purpose of the project " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group112" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="A. Purpose of the project " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group112" inline></Form.Check>

                       <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                        
                    </Col>
                  
                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="8">
                        <div>
                            <h4 style={{fontSize:16}}>B  Location</h4>
                            <Form.Label>
                            a) Revenue Estate of village: *
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="a) Revenue Estate of village: *" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group113" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="a) Revenue Estate of village: *" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group113" inline></Form.Check>

                                    
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                        
                    </Col>

                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="8">
                        <div>
                            <h4 style={{fontSize:16}}>Date of Approach</h4>
                            <Form.Label>
                            C  Surrounding Areas
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="C  Surrounding Areas" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group114" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="C  Surrounding Areas" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group114" inline></Form.Check>

                                    
                        
                        
                    </Col>

                    

                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
              

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}> </h4>
                            <Form.Label>
                            
                             b) North: 
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="North" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group115" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="North" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group115" inline></Form.Check>

                                    
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}> </h4>
                            <Form.Label>
                            
                             b) South: 
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="South" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group116" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="South" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group116" inline></Form.Check>

                                    
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}> </h4>
                            <Form.Label>
                            
                             b) East: 
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="East" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group117" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="East" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group117" inline></Form.Check>

                                    
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}> </h4>
                            <Form.Label>
                            
                             b) West: 
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="West" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group118" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="West" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group118" inline></Form.Check>

                                    
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                        
                    </Col>

                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="8">
                        <div>
                            <h4 style={{fontSize:16}}>Date of Approach</h4>
                            <Form.Label>
                            C  Approach to the site
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Approach to the site" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group119" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="C  Approach to the site" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group119" inline></Form.Check>

                                    
                        
                        
                    </Col>

                    

                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="4">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            Type of Colony
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Type of Colony" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group120" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Type of Colony" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group120" inline></Form.Check>

                                    
<Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                        
                    </Col>

                    <Col md={4} xxl lg="4">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            Approach of Norms
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Approach of Norms" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group121" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Approach of Norms" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group121" inline></Form.Check>

                                    
<Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                        
                    </Col>

                    <Col md={4} xxl lg="4">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            Action
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Action" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group122" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Action" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group122" inline></Form.Check>

                                    
                       <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                        
                    </Col>

                      </Row>

                      <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="8">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            *Whether the applied site is approachable from proposed 18/24 m internal sectoral plan road/sector dividing road.
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="*Whether the applied site is approachable from proposed 18/24 m internal sectoral plan road/sector dividing road." 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group123" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="*Whether the applied site is approachable from proposed 18/24 m internal sectoral plan road/sector dividing road." 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group123" inline></Form.Check>

                                    
                        
                        
                    </Col>

                    

                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="8">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            (iii) Whether approach through marginal land (Yes/No):-
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Whether approach through marginal land (Yes/No):-" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group124" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Whether approach through marginal land (Yes/No):-" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group124" inline></Form.Check>

                                    
                        
                        
                    </Col>

                    

                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="8">
                        <div>
                            <h4 style={{fontSize:16}}>D(ii)   Proposed Approach</h4>
                            <Form.Label>
                            (i) Whether site approachable from any proposed rod of development Plan (Yes/No):-
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Whether site approachable from any proposed rod of development Plan (Yes/No):-" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group125" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="(i) Whether site approachable from any proposed rod of development Plan (Yes/No):-" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group125" inline></Form.Check>

                                    
                        
                        
                    </Col>

                    

                </Row>


                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="8">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            D  Site Condition/Verification 
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="D  Site Condition/Verification " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group126" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="D  Site Condition/Verification " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group126" inline></Form.Check>

                                    
                        
                        
                    </Col>

                    

                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}>(I)  Details of Site</h4>
                            <Form.Label>
                            
                            (a)  Vacant (Yes/No):- 
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="(a)  Vacant (Yes/No):- " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group127" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="(a)  Vacant (Yes/No):- " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group127" inline></Form.Check>

                                    
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}>(I)  Details of Site</h4>
                            <Form.Label>
                                  
                            (b)  Construction:- 
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="(b)  Construction:- " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group128" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="(b)  Construction:- " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group128" inline></Form.Check>

                                    
                        
                        
                    </Col>


                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                                  
                            (i) Type of Construction:-
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="(i) Type of Construction:-" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group129" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="(i) Type of Construction:-" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group129" inline></Form.Check>

                                    
<Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                        
                    </Col>


                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                                  
                            (ii) Area:-
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="(ii) Area:-" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group131" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="(ii) Area:-" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group131" inline></Form.Check>

                                    
<Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                        
                    </Col>


                    

                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="8">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (C)  Any feature passes through/over the applied site:-
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Any feature passes through/over the applied site:-" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group132" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value=" Any feature passes through/over the applied site:-" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group132" inline></Form.Check>

                                    
                        
                        
                    </Col>

                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (i)HT line:(Yes/No):- 
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="HT line:(Yes/No):- " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group133" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="HT line:(Yes/No):- " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group133" inline></Form.Check>

                                    
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (ii) IOC Gas Pipeline:(Yes/No):-
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="(ii) IOC Gas Pipeline:(Yes/No):-" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group134" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="(ii) IOC Gas Pipeline:(Yes/No):-" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group134" inline></Form.Check>

                                    
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (iii) Nallah:(Yes/No):- 
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Nallah:(Yes/No):- " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group135" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Nallah:(Yes/No):-  " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group135" inline></Form.Check>

                                    
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (iv) Any revenue rasta/road:(Yes/No):-
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Any revenue rasta/road:(Yes/No):-" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group136" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Any revenue rasta/road:(Yes/No):-" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group136" inline></Form.Check>

                                    
                        
                        
                    </Col>

                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (v) Any marginal land:(Yes/No):- 
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Any marginal land:(Yes/No):- " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group137" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Any marginal land:(Yes/No):- " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group137" inline></Form.Check>

                                    
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (vi) Any other feature:
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Any other feature:" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group138" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Any other feature:" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group138" inline></Form.Check>

                                    
                        
                        
                    </Col>

                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="8">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            E  Conformity to Development Plan and SectoralPlan:-
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="E  Conformity to Development Plan and SectoralPlan:- :-" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group139" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="E  Conformity to Development Plan and SectoralPlan:- :-" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group139" inline></Form.Check>

                                    
                        
                        
                    </Col>

                    
                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (a) Applicable Fine Development Plan (Yes/No) *
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="(a) Applicable Fine Development Plan (Yes/No) *" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group140" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="(a) Applicable Fine Development Plan (Yes/No) *" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group140" inline></Form.Check>

                                    
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (b) Zone as per Development Plan (Yes/No) *
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="(b) Zone as per Development Plan (Yes/No) *" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group141" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="(b) Zone as per Development Plan (Yes/No) *" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group141" inline></Form.Check>

                                    
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (c) Whether Applied colony in confirming use - (Yes/No) *
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="(c) Whether Applied colony in confirming use - (Yes/No) *" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group142" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="(c) Whether Applied colony in confirming use - (Yes/No) *" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group142" inline></Form.Check>

                                    
                        
                        
                    </Col>

                
                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (d) Total Area of the Sector in acres (Yes/No) *
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="(d) Total Area of the Sector in acres (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group143" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="(d) Total Area of the Sector in acres (Yes/No) *" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group143" inline></Form.Check>

                                    
                        
                        
                    </Col>    

                    
                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (e) Net Planned Area of Sector in acres (Yes/No) *
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="(e) Net Planned Area of Sector in acres (Yes/No) *" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group144" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="(e) Net Planned Area of Sector in acres (Yes/No) *" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group144" inline></Form.Check>

                                    
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (f) Whether the sector is 'Developed Sector'- (Yes/No) 
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="(f) Whether the sector is 'Developed Sector'- (Yes/No) *" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group145" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="(f) Whether the sector is 'Developed Sector'- (Yes/No) *" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group145" inline></Form.Check>

                                    
                        
                        
                     </Col>


                     <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}>(g) :-</h4>
                            <Form.Label>
                            
                            (i) Area under Sector road- (Yes/No) 
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Area under Sector road- (Yes/No) *" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group146" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Area under Sector road- (Yes/No) *" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group146" inline></Form.Check>

                                    
                        
                        
                     </Col>

                     <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (ii) Area under Service road- (Yes/No)
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="(ii) Area under Service road- (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group147" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="(ii) Area under Service road- (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group147" inline></Form.Check>

                                    
                        
                        
                     </Col>

                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="2">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (iii) Area under green belt - (Yes/No) 
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="(iv) Internal Circulation road- (Yes/No) *" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group148" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="(iv) Internal Circulation road- (Yes/No) *" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group148" inline></Form.Check>

                                    
                        
                        
                    </Col>

                    <Col md={4} xxl lg="2">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (v) Any Other (Yes/No) 
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="(v) Any Other (Yes/No) *" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group149" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="(v) Any Other (Yes/No) *" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group149" inline></Form.Check>

                                    
                        
                        
                    </Col>
                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (h) Whether applied site falls under buffer zone/ amenity zone of KMP/KGP expressway(Yes/No) 
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value=" Whether applied site falls under buffer zone/ amenity zone of KMP/KGP expressway(Yes/No) *" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group150" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Whether applied site falls under buffer zone/ amenity zone of KMP/KGP expressway(Yes/No) *" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group150" inline></Form.Check>

                                    
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (I) Whether site is part of any sector (Yes/No) 
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Whether site is part of any sector (Yes/No) *" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group151" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Whether site is part of any sector (Yes/No) *" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group51" inline></Form.Check>

                                    
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (J) Whether any area falling under of alignment of sector road/green belt (Yes/No) 
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Whether any area falling under of alignment of sector road/green belt (Yes/No) *" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group152" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Whether any area falling under of alignment of sector road/green belt (Yes/No) **" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group52" inline></Form.Check>

                                    
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (i) Area under Green belt (Yes/No) 
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="(i) Area under Green belt (Yes/No) *" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group153" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="(i) Area under Green belt (Yes/No) *" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group153" inline></Form.Check>

                    </Col>              
                        
                        
                   

                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (ii) Area under 24/18 mtr road (Yes/No)
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="(ii) Area under 24/18 mtr road (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group154" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="(ii) Area under 24/18 mtr road (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group154" inline></Form.Check>

                                    
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (K) Whether sector road constructed at site or not (Yes/No) 
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Whether sector road constructed at site or not (Yes/No) *" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group155" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Whether sector road constructed at site or not (Yes/No) *" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group155" inline></Form.Check>

                                    
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (L) Whether this road further connects to any other proposed or existing road(Yes/No) 
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Whether this road further connects to any other proposed or existing road(Yes/No) *" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group156" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Whether this road further connects to any other proposed or existing road(Yes/No) *" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group156" inline></Form.Check>

                                    
                        
                        
                    </Col>

                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="8">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            F  Applied site falling under Natural Conservation Zone/ PLPA :-
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="F Applied site falling under Natural Conservation Zone/ PLPA :-" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group157" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="F  Applied site falling under Natural Conservation Zone/ PLPA :-" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group157" inline></Form.Check>

                                    
                        
                        
                    </Col>
                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (i) As per Development Plan (Yes/No)*
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="As per Development Plan (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group158" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="As per Development Plan (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group158" inline></Form.Check>

                                    
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (ii) As per Sub Regional Plan (Yes/No)
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value=" As per Sub Regional Plan (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group159" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value=" As per Sub Regional Plan (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group159" inline></Form.Check>

                                    
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (iii) As per ground truthing report of DLSC (Yes/No)
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="As per ground truthing report of DLSC (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group160" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="As per ground truthing report of DLSC (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group160" inline></Form.Check>

                                    
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                    (iv) As per ground truthing report of SLC (Yes/No)*
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value=" As per ground truthing report of SLC (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group161" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="As per ground truthing report of SLC (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group161" inline></Form.Check>

                                    
                        
                        
                    </Col>
                </Row>


                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (v) Whether NOC from Forest Department Submitted (Yes/No)
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Whether NOC from Forest Department Submitted (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group162" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Whether NOC from Forest Department Submitted (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group162" inline></Form.Check>

                                    
                        
                        
                    </Col>


                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (v) SLC approved by State Govt. (Yes/No)*
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="SLC approved by State Govt. (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group163" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="SLC approved by State Govt. (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group163" inline></Form.Check>

                                    
                        
                        
                    </Col>


                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (B) (i) Whether site falls under Section 4 & 5 of PLPA Act (Yes/No)
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Whether site falls under Section 4 & 5 of PLPA Act (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group164" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Whether site falls under Section 4 & 5 of PLPA Act (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group164" inline></Form.Check>

                                    
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (ii) Whether NOC from Forest Department Submitted (Yes/No)
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Whether NOC from Forest Department Submitted (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group165" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Whether NOC from Forest Department Submitted (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group165" inline></Form.Check>

                                    
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (C) Whether site falls under notification (Yes/No)
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="(C) Whether site falls under notification (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group166" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="(C) Whether site falls under notification (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group166" inline></Form.Check>

                                    
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (D) Whether site falls under notification of MOEFCC (Yes/No)*
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="(D) Whether site falls under notification of MOEFCC (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group167" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="(D) Whether site falls under notification of MOEFCC (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group167" inline></Form.Check>

                      

                                    
                        
                        
                    </Col>

                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}>F  Seniority List :-</h4>
                            <Form.Label>
                            
                            Published Development Plan:
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Published Development Plan:" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group168" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Published Development Plan:" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group168" inline></Form.Check>

<Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>     
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            Sector:
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Sector:" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group169" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Sector:" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group169" inline></Form.Check>

<Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>     
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            Total Area of Sector:
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Total Area of Sector:" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group170" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Total Area of Sector:" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group170" inline></Form.Check>

<Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>     
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            Total NPA of sector:
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Total NPA of sector:" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group171" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Total NPA of sector:" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group171" inline></Form.Check>

<Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>     
                        
                        
                    </Col>

                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="8">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            Type of Colony:
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Type of Colony:" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group172" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Type of Colony:" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group172" inline></Form.Check>

<Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>     
                        
                        
                    </Col>
                </Row>


                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            File No.
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="File No." 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group174" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="File No." 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group174" inline></Form.Check>

<Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>     
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            Date of Application
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Date of Application" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group175" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Date of Application" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group175" inline></Form.Check>

<Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>     
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            Name of developer
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Name of developer" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group176" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Name of developer" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group176" inline></Form.Check>

<Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>     
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            Total Applied area in acres
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Total Applied area in acres" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group177" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Total Applied area in acres" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group177" inline></Form.Check>

<Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>     
                        
                        
                    </Col>
                </Row>


                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            Area falling in respective sector in acres
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Area falling in respective sector in acres" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group178" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Area falling in respective sector in acres" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group178" inline></Form.Check>

<Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>     
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            Area falling undue the Sector road and green belt
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Area falling undue the Sector road and green belt" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group179" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Area falling undue the Sector road and green belt" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group179" inline></Form.Check>

<Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>     
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            Balance area
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Balance area" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group180" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Balance area" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group180" inline></Form.Check>

<Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>     
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            50% of the area falling under the sector road and green belt ( Other than IT & Commercial)
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="50% of the area falling under the sector road and green belt ( Other than IT & Commercial)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group181" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="50% of the area falling under the sector road and green belt ( Other than IT & Commercial)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group181" inline></Form.Check>

<Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>     
                        
                        
                    </Col>

                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            10% of the site area (For IT & Commercial)
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="10% of the site area (For IT & Commercial)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group182" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="10% of the site area (For IT & Commercial)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group182" inline></Form.Check>

<Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>     
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            Calculated NPA in the respective sector in acres
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Calculated NPA in the respective sector in acres" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group183" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Calculated NPA in the respective sector in acres" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group183" inline></Form.Check>

<Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>     
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            Status of application (License granted/ LOI granted/ pending)
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Status of application (License granted/ LOI granted/ pending)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group184" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Status of application (License granted/ LOI granted/ pending)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group184" inline></Form.Check>

<Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>     
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            If license granted then license No. and its date
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="If license granted then license No. and its date" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group185" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="If license granted then license No. and its date" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group185" inline></Form.Check>

<Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>     
                        
                        
                    </Col>
                </Row>


                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            If LOI issued, then date of issuance
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="If LOI issued, then date of issuance" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group186" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="If LOI issued, then date of issuance" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group186" inline></Form.Check>

<Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>     
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            Action
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Action" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group187" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Action" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group187" inline></Form.Check>

<Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>     
                        
                        
                    </Col>

                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}>G  Mandatory Documents:-</h4>
                            <Form.Label>
                            
                            1. Site plan. 
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Site plan. " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group188" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Site plan. " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group188" inline></Form.Check>

<Form.Control type="file" ></Form.Control>     
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            2. Democratic Plan.     
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="2. Democratic Plan." 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group189" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="2. Democratic Plan." 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group189" inline></Form.Check>

<Form.Control type="file" ></Form.Control>     
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            3. Sectoral Plan/Layout Plan.   
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Sectoral Plan/Layout Plan. " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group190" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Sectoral Plan/Layout Plan. " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group190" inline></Form.Check>

<Form.Control type="file" ></Form.Control>     
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            4. Development Plan.     
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="4. Development Plan.  " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group191" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="4. Development Plan.  " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group191" inline></Form.Check>

<Form.Control type="file" ></Form.Control>     
                        
                        
                    </Col>

                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}>H  General Information:-</h4>
                            <Form.Label>
                            
                            Type of colony:
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Type of colony:" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group192" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Type of colony:" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group192" inline></Form.Check>

<Form.Control style={{maxWidth:200,marginTop:10}} readOnly></Form.Control>     
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            Gross area of the colony:
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Gross area of the colony:" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group193" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Gross area of the colony:" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group193" inline></Form.Check>

<Form.Control style={{maxWidth:200,marginTop:10}} readOnly></Form.Control>     
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            
                             Saleable area :
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Saleable area " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group194" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Saleable area " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group194" inline></Form.Check>

<Form.Control style={{maxWidth:200,marginTop:10}} readOnly></Form.Control>     
                        
                        
                    </Col>


                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}>H  General Information:-</h4>
                            <Form.Label>
                            
                            Whether layout signed by professional Architect and Owner (Yes/No)
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Whether layout signed by professional Architect and Owner (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group195" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Whether layout signed by professional Architect and Owner (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group195" inline></Form.Check>    
                        
                        
                    </Col>
                </Row>

            {/* this has some other section which are need to be done */}

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}>F   Deen Dayal Jan Awas Yojna (DDJAY) :-</h4>
                            <Form.Label>
                            
                            (i) Details of frozen plots (50%) (Yes/No)*
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Details of frozen plots (50%) (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group196" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Details of frozen plots (50%) (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group196" inline></Form.Check>

     
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (ii) Whether one organize open space/pocket of min area 0.3 acre proposed in the layout plan- (Yes/No)*
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Whether one organize open space/pocket of min area 0.3 acre proposed in the layout plan- (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group197" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Whether one organize open space/pocket of min area 0.3 acre proposed in the layout plan- (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group197" inline></Form.Check>

     
                        
                        
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (iii) Area of such pocket (In acre):-
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="(iii) Area of such pocket (In acre):-" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group198" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="(iii) Area of such pocket (In acre):-" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group198" inline></Form.Check>

<Form.Control style={{maxWidth:200,marginTop:10}} readOnly></Form.Control>  

     
                        
                        
                    </Col>

                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}>G   Industrial Plotted Colony :-</h4>
                            <Form.Label>
                            
                            Area of colony
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Area of colony" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group199" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Area of colony" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group199" inline></Form.Check>

     
                        
<Form.Control type="file" style={{maxWidth:200,marginTop:10}} ></Form.Control>  
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (ii) Detail of proposed plots under residential component DDJAY - (Yes/No)*
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Detail of proposed plots under residential component DDJAY - (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group200" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Detail of proposed plots under residential component DDJAY - (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group200" inline></Form.Check>

     
                     
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (iii) Detail of proposed plots/area under community facilities in DDJAY - (Yes/No)
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Detail of proposed plots/area under community facilities in DDJAY - (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group201" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Detail of proposed plots/area under community facilities in DDJAY - (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group201" inline></Form.Check>

     
                     
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (iv)Details of plots for Labour dormitories from affordable Industries Housing component - (Yes/No)
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Details of plots for Labour dormitories from affordable Industries Housing component - (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group201" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="(iv)Details of plots for Labour dormitories from affordable Industries Housing component - (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group201" inline></Form.Check>

     
                     
                    </Col>

                 </Row>

                 <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}>G   Industrial Plotted Colony :-</h4>
                            <Form.Label>
                            
                            Area of colony
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Area of colony" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group199" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Area of colony" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group199" inline></Form.Check>

     
                        
<Form.Control type="file" style={{maxWidth:200,marginTop:10}} ></Form.Control>  
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (ii) Detail of proposed plots under residential component DDJAY - (Yes/No)*
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Detail of proposed plots under residential component DDJAY - (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group200" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Detail of proposed plots under residential component DDJAY - (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group200" inline></Form.Check>

     
                     
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (iii) Detail of proposed plots/area under community facilities in DDJAY - (Yes/No)
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Detail of proposed plots/area under community facilities in DDJAY - (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group201" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Detail of proposed plots/area under community facilities in DDJAY - (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group201" inline></Form.Check>

     
                     
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (iv)Details of plots for Labour dormitories from affordable Industries Housing component - (Yes/No)
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Details of plots for Labour dormitories from affordable Industries Housing component - (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group201" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="(iv)Details of plots for Labour dormitories from affordable Industries Housing component - (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group201" inline></Form.Check>

     
                     
                    </Col>
                    </Row>

                    <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (v) Whether you availed permissible commercial component - (Yes/No)*
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value=" Whether you availed permissible commercial component - (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group202" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value=" Whether you availed permissible commercial component - (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group202" inline></Form.Check>

     
                        
 
                    </Col>
                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="8">
                        <div>
                            <h4 style={{fontSize:16}}>H  Commercial Plotted colony :-</h4>
                            <Form.Label>
                            
                            (i) Saleable area (Yes/No)*
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Saleable area (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group203" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Saleable area (Yes/No)*" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group203" inline></Form.Check>

     
                        
 
                    </Col>



                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}>J  New Integrated Licensing Policy :-</h4>
                            <Form.Label>
                            
                            (i) Whether, you want to surrender the 10% area of license colony to Govt. in lieu of providing 10% under EWS and NPNL plots (Yes/No)
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value=" Whether, you want to surrender the 10% area of license colony to Govt. in lieu of providing 10% under EWS and NPNL plots (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group204" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value=" Whether, you want to surrender the 10% area of license colony to Govt. in lieu of providing 10% under EWS and NPNL plots (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group204" inline></Form.Check>

     
                        
 
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (ii)Whether the surrendered area is having minimum 18 mtr independent access (Yes/No)
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Whether the surrendered area is having minimum 18 mtr independent access (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group205" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Whether the surrendered area is having minimum 18 mtr independent access (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group205" inline></Form.Check>

     
                        
 
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (iii)Whether, any pocket proposed to be transferred is less than 1 acre or 10% of licensed area? (Yes/No)
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Whether, any pocket proposed to be transferred is less than 1 acre or 10% of licensed area? (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group206" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Whether, any pocket proposed to be transferred is less than 1 acre or 10% of licensed area? (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group206" inline></Form.Check>

     
                        
 
                    </Col>



                </Row>


                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}>K  Revision of Layout plan :-</h4>
                            <h4 style={{fontSize:16}}>(i)  For In-principle approval :-</h4>
                            <Form.Label>
                            
                            (i)Whether license is valid (Yes/No)
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Whether license is valid (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group207" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Whether license is valid (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group207" inline></Form.Check>

     
                        
 
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (ii)Scrutiny fees deposited (Yes/No)
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Scrutiny fees deposited (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group208" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Scrutiny fees deposited (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group208" inline></Form.Check>

     
                        
 
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (iii)Whether Board resolution submitted or not (Yes/No)
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Whether Board resolution submitted or not (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group209" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Whether Board resolution submitted or not (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group209" inline></Form.Check>

     
                        
 
                    </Col>



                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                           
                            <Form.Label>
                            
                            (iv)Mention the reasons for revision in the layout plan
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Mention the reasons for revision in the layout plan" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group210" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Mention the reasons for revision in the layout plan" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group210" inline></Form.Check>

     
                        
 
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (v)Upload the copy of earlier approved layout plan
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Upload the copy of earlier approved layout plan" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group211" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Upload the copy of earlier approved layout plan" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group211" inline></Form.Check>

     
                        
 
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (vi)Copy of proposed layout plan indicating the changes from approved layout plan
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Copy of proposed layout plan indicating the changes from approved layout plan" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group212" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Copy of proposed layout plan indicating the changes from approved layout plan" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group212" inline></Form.Check>

     
                        
 
                    </Col>



                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                           
                            <Form.Label>
                            
                            (vii)Status of creation of 3rd party rights (Yes/No)
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Status of creation of 3rd party rights (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group213" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Status of creation of 3rd party rights (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group213" inline></Form.Check>

     
                        
 
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (viii)Phasing as disclosed with layout plan/site plan (Yes/No)
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Phasing as disclosed with layout plan/site plan (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group214" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Phasing as disclosed with layout plan/site plan (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group214" inline></Form.Check>

     
                        
 
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <Form.Label>
                            
                            (ix)Undertaking that no change has been made in the phasing
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Undertaking that no change has been made in the phasing" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group215" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Undertaking that no change has been made in the phasing" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group215" inline></Form.Check>

     
                        
 
                    </Col>



                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="8">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                           
                            <Form.Label>
                            
                            (x)Consent of RERA if there is any change in the phasing
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Consent of RERA if there is any change in the phasing" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group216" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Consent of RERA if there is any change in the phasing" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group216" inline></Form.Check>

    
<Form.Control type="file" style={{maxWidth:200,marginTop:10}} ></Form.Control>  
 
                    </Col>

                </Row>


                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}>(ii)  For Final approval :-</h4>
                           
                            <Form.Label>
                            
                            (i)Whether advertisement given in 3 local newspaper (1 Hindi+ 2English) having wider publication in the area (Yes/No)
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Whether advertisement given in 3 local newspaper (1 Hindi+ 2English) having wider publication in the area (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group217" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Whether advertisement given in 3 local newspaper (1 Hindi+ 2English) having wider publication in the area (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group217" inline></Form.Check>

    
  
 
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                           
                            <Form.Label>
                            
                            (ii)Whether intimated each of the allottee through registered post regarding the proposed changed in the layout plan (Yes/No)
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Whether intimated each of the allottee through registered post regarding the proposed changed in the layout plan (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group218" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Whether intimated each of the allottee through registered post regarding the proposed changed in the layout plan (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group218" inline></Form.Check>

    
  
 
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                           
                            <Form.Label>
                            
                            (iii)Whether you hosted the existing approved layout plan & in-principle approved layout on the website of your company/organization (Yes/No)
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Whether you hosted the existing approved layout plan & in-principle approved layout on the website of your company/organization (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group219" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Whether you hosted the existing approved layout plan & in-principle approved layout on the website of your company/organization (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group219" inline></Form.Check>

    
  
 
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                           
                            <Form.Label>
                            
                            (iv)Report any objection from any of the allottee (Yes/No)
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Report any objection from any of the allottee (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group220" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Report any objection from any of the allottee (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group220" inline></Form.Check>

    
  
 
                    </Col>

                   
                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}>(ii)  For Final approval :-</h4>
                           
                            <Form.Label>
                            
                            (v)Whether reply submitted in O/o STP, concerned (Yes/No)
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="(v)Whether reply submitted in O/o STP, concerned (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group221" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="(v)Whether reply submitted in O/o STP, concerned (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group221" inline></Form.Check>

    
  
 
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}>(ii)  For Final approval :-</h4>
                           
                            <Form.Label>
                            
                            (vi)Have you given an advertisement for booking/sale of plots as per in-principle layout plan (Yes/No)
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="(vi)Have you given an advertisement for booking/sale of plots as per in-principle layout plan (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group222" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="(vi)Have you given an advertisement for booking/sale of plots as per in-principle layout plan (Yes/No)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group222" inline></Form.Check>

    
  
 
                    </Col>


                </Row>


                   {/* code left */}
                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="8">
                        <div>
                            <h4 style={{fontSize:16}}>IV. Plans / Project report/ exemptions(To be Integrated with GIS):</h4>
                            <h4 style={{fontSize:16}}>I/We hereby submit the following plans and enclose the relevant documents as Annexures:</h4>
                           
                            <Form.Label>
                            
                            (i) Plans
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value=" Plans" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group223" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value=" Plans" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group223" inline></Form.Check>

    
  
 
                    </Col>
                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="8">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <h4 style={{fontSize:16}}></h4>
                           
                            <Form.Label>
                            
                            (ii) Details of Exemption, if any, from providing the amenity/amenities in the proposed colony and an explanatory note with plans marked A,B,C (so on) as to why the said amenity/amenities are not required to be provided in the colony : 
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="(ii) Details of Exemption, if any, from providing the amenity/amenities in the proposed colony and an explanatory note with plans marked A,B,C (so on) as to why the said amenity/amenities are not required to be provided in the colony : *" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group224" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="(ii) Details of Exemption, if any, from providing the amenity/amenities in the proposed colony and an explanatory note with plans marked A,B,C (so on) as to why the said amenity/amenities are not required to be provided in the colony : *" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group224" inline></Form.Check>

    
  
 
                    </Col>
                </Row>


                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="8">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <h4 style={{fontSize:16}}></h4>
                           
                            <Form.Label>
                            
                            VII. Indemnification: 
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Indemnification: " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group225" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Indemnification:" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group225" inline></Form.Check>

 
                    </Col>
                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="8">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <h4 style={{fontSize:16}}></h4>
                           
                            <Form.Label>
                            
                            VIII. Fee & charges: 
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Fee & charges: " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group226" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value=" Fee & charges: " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group226" inline></Form.Check>

 
                    </Col>
                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <h4 style={{fontSize:16}}></h4>
                           
                            <Form.Label>
                            
                            Fees/Charges details Total area 
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Fees/Charges details Total area *" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group227" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Fees/Charges details Total area * " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group227" inline></Form.Check>

<Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>       

 
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <h4 style={{fontSize:16}}></h4>
                           
                            <Form.Label>
                            
                            Licence Fees 
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Licence Fees " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group228" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Licence Fees  " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group228" inline></Form.Check>

<Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>       

 
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <h4 style={{fontSize:16}}></h4>
                           
                            <Form.Label>
                            
                            Scrutiny Fees 
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Scrutiny Fees " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group229" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Scrutiny Fees  " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group229" inline></Form.Check>

<Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>       

 
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <h4 style={{fontSize:16}}></h4>
                           
                            <Form.Label>
                            
                            Total Fees
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Total Fees" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group230" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Total Fees " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group230" inline></Form.Check>

<Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>       

 
                    </Col>
                </Row>

                <Row className="ms-auto" style={{marginBottom:20}}>
                <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <h4 style={{fontSize:16}}></h4>
                           
                            <Form.Label>
                            
                            Remark(If any)
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Remark(If any)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group231" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Remark(If any)" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group231" inline></Form.Check>

<Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>       

 
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <h4 style={{fontSize:16}}></h4>
                           
                            <Form.Label>
                            
                            
                            Payment Method 
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Payment Method " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group232" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Payment Method " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group232" inline></Form.Check>

<Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>       

 
                    </Col>

                    <Col md={4} xxl lg="3">
                        <div>
                            <h4 style={{fontSize:16}}></h4>
                            <h4 style={{fontSize:16}}></h4>
                           
                            <Form.Label>
                            
                            
                            Select Aggregator 
                            </Form.Label><span style={{color:"red"}}>*</span>
                        </div>
                        <Form.Check  value="Select Aggregator " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group233" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Select Aggregator " 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle size={18}></AiFillCloseCircle>} 
                                    name="group233" inline></Form.Check>

<Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>       

 
                    </Col>
                </Row>





            </Form.Group>
        </Form>
    )
}

export default AppliedLandinfo;