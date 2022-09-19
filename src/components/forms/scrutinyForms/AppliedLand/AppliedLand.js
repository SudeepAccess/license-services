import React,{useState} from "react";
import { Button, Form } from "react-bootstrap";
import { Card, Row, Col} from "react-bootstrap";
import {AiFillCheckCircle, AiFillCloseCircle} from "react-icons/ai";
import MigrationAppliedTrue from "./UnderMigrationApllied/MigrationAplliedTrue";

const AppliedLandinfo=(props)=>{
    const [uncheckedValue,setUncheckedVlue]=useState([]);
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
                        <Form.Check value="P_Khasra_wise_information_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group38" inline></Form.Check>
                        <Form.Check 
                            onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                            value="P_Khasra_wise_information_false" 
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
                        <Form.Check value="P_Name_of_individual_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group39" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Name_of_individual_false" 
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
                        <Form.Check  value="P_Type_of_Revenue_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group40" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Type_of_Revenue_false" 
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
                        <Form.Check value="P_Name_of_Revenue_estate_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group41" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Name_of_Revenue_estate_false" 
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
                        <Form.Check value="P_Rectangle_No_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group42" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Rectangle_No_false" 
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
                        <Form.Check value="P_Khasra_No_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group43" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Khasra_No_false" 
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
                        <Form.Check  value="P_Kanal_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group44" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Kanal_false" 
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
                        <Form.Check value="P_Marla_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group45" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Marla_false" 
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
                        <Form.Check value="P_Sarsai_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group46" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Sarsai_false" 
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
                        <Form.Check value="P_Whether_collaboration_agreement_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group47" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Whether_collaboration_agreement_false" 
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
                        <Form.Check  value="P_enclose_collaboration_agreement_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group48" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_enclose_collaboration_agreement_false" 
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
                        <Form.Check value="P_collaboration_agreement_entered_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group49" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_collaboration_agreement_entered_false" 
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
                        <Form.Check value="P_Date_of_registering_collaboration_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group50" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Date_of_registering_collaboration_false" 
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
                        <Form.Check value="P_Date_of_validity_of_collaboration_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group52" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Date_of_validity_of_collaborationt_false" 
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
                        <Form.Check  value="P_collaboration_agreement_irrevocablet_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group53" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_collaboration_agreement_irrevocablett_false" 
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
                        <Form.Check value="P_authorized_signatory_on_behalf_of_land_owner_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group54" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_authorized_signatory_on_behalf_of_land_owner_false" 
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
                        <Form.Check value="P_Copy_of_SPA/GPA/_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group55" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_Copy_of_SPA/GPA/_false" 
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
                        <Form.Check value="P_developer_to_sign_Collaboration_agreement_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group56" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_developer_to_sign_Collaboration_agreement_false" 
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
                        <Form.Check  value="P_collaboration_agreement_irrevocablet_true" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group57" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="P_collaboration_agreement_irrevocablett_false" 
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
                        <Form.Check value="Commercial licence under 3.5%" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group65" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Commercial licence under left over pocket" 
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
                        <Form.Check  value="Developer Typ" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group72" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Developer Type" 
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
                        <Form.Check  value="Third Party Right created" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group78" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Third Party Right created" 
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
                        <Form.Check  value="GairMarusi" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group82" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="GairMarusi" 
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
                        <Form.Check  value="Rehan / Mortgage" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group83" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Rehan / Mortgage" 
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
                        <Form.Check  value="Whether the applied Land is involved in any acquisition" 
                                    type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle size={18}></AiFillCheckCircle>} 
                                    name="group86" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Whether the applied Land is involved in any acquisition" 
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
            </Form.Group>
        </Form>
    )
}

export default AppliedLandinfo;