import React,{useState} from "react";
import { Button, Form } from "react-bootstrap";
import { Card, Row, Col} from "react-bootstrap";
import {AiFillCheckCircle, AiFillCloseCircle} from "react-icons/ai";


const Developerinfo=(props)=>{
    const[vacant,setVacant]=useState('');
    const[construction,setConstruction]=useState('');
    const[typeCons,setTypeCons]=useState('');
    const[ht,setHt]=useState('');
    const[htRemark,setHtRemark]=useState('');
    const[gas,setGas]=useState('');
    const[gasRemark,setGasRemark]=useState('');
    const[nallah,setNallah]=useState('');
    const[nallahRemark,setNallahremark]=useState('');
    const[road,setRoad]=useState('');
    const[roadWidth,setRoadwidth]=useState('');
    const[land,setLand]=useState('');
    const[landRemark,setLandRemark]=useState('');
    const[layoutPlan,setLayoutPlan]=useState('');
    const handleChange=(e)=>{
        this.setState({ isRadioSelected: true });
       
     }
   
     const [showhide1,setShowhide1]=useState("No");
     const [showhide2,setShowhide2]=useState("No");
     const [showhide3,setShowhide3]=useState("No");
     const [showhide4,setShowhide4]=useState("No");
     const [showhide5,setShowhide5]=useState("No");
     const [showhide6,setShowhide6]=useState("No");
     const [showhide7,setShowhide7]=useState("No");
     const [showhide8,setShowhide8]=useState("No");
     const [showhide9,setShowhide9]=useState("No");
     const [showhide0,setShowhide0]=useState("No");
     const handleshow=e=>{
        const getshow=e.target.value;
        setShowhide1(getshow);
    }
    const handleshow1=e=>{
        const getshow=e.target.value;
        setShowhide2(getshow);
    }
    const handleshow2=e=>{
        const getshow=e.target.value;
        setShowhide3(getshow);
    }
    const handleshow3=e=>{
        const getshow=e.target.value;
        setShowhide4(getshow);
    }
    const handleshow4=e=>{
        const getshow=e.target.value;
        setShowhide4(getshow);
    }
    const handleshow5=e=>{
        const getshow=e.target.value;
        setShowhide5(getshow);
    }
    const handleshow6=e=>{
        const getshow=e.target.value;
        setShowhide6(getshow);
    }
    const handleshow7=e=>{
        const getshow=e.target.value;
        setShowhide7(getshow);
    }
    const handleshow8=e=>{
        const getshow=e.target.value;
        setShowhide8(getshow);
    }
    const handleshow9=e=>{
        const getshow=e.target.value;
        setShowhide9(getshow);
    }
    const handleshow0=e=>{
        const getshow=e.target.value;
        setShowhide0(getshow);
    }
    const [uncheckedValue,setUncheckedVlue]=useState([]);
    console.log(uncheckedValue);
    return(
        <Form ref={props.developerInfoRef}>
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
                    <Col className="ms-auto" md={4} xxl lg="6">
                            <Form.Label><b>(i)Whether licence applied for additional area ?</b></Form.Label>&nbsp;&nbsp;
                        <Form.Check value="Yes" 
                                    type="radio"  onChange1={handleChange} onClick={handleshow}
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group41" inline></Form.Check>
                        <Form.Check 
                            onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                            value="No" 
                            type="radio" id = "default-radio"  onChange1={handleChange} onClick={handleshow}
                            label={<AiFillCloseCircle class="fa fa-times text-danger"  size={18}></AiFillCloseCircle>} 
                            name="group41" inline></Form.Check> <br></br>
                            <input type="radio" value="Yes" id="Yes"  
                            onChange1={handleChange} name="Yes" onClick={handleshow} />
                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                            <input type="radio" value="No" id="No"
                            onChange1={handleChange} name="Yes" onClick={handleshow}/>
                            <label for="No">No</label>
                            {
                        showhide1==="Yes" && (
                            <div className="row " >
                                    <div className="col col">
                                        <label for="parentLicense" className="font-weight-bold">License No. of Parent License </label>
                                       <input type="text" className="form-control"/>
                                    </div>
                                </div> 

                        )
                    }
                    </Col>
                    <Col md={4} xxl lg="6">
                      
                            <Form.Label><b>(ii)Whether licence applied under Migration policy?</b></Form.Label>&nbsp;&nbsp;
                       
                        <Form.Check value="Whether licence applied under Migration policy" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group42" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Whether licence applied under Migration policy" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group42" inline></Form.Check><br></br>
                       <input type="radio" value="Yes" id="Yes"  
                            onChange1={handleChange} name="Yes"  />
                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                            <input type="radio" value="No" id="No"
                            onChange1={handleChange} name="Yes"/>
                            <label for="No">No</label>
                    </Col>
                </Row>
                <hr></hr>
                           <div className="row">
                               <div className="col col-3">
                                   <div className="form-group">
                                       <label htmlFor="potential"><b>Potential Zone</b></label>&nbsp;&nbsp;
                                       <Form.Check value="Potential Zone" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group43" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Potential Zone" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group43" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                                   </div>
                               </div>
                               <div className="col col-3">
                                   <div className="form-group">
                                       <label htmlFor="locPurpose"><b>Site Location Purpose</b></label>&nbsp;&nbsp;
                                       <Form.Check value="Site Location Purpose" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group44" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Site Location Purpose" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group44" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                                   </div>
                               </div>
                               <div className="col col-3">
                                   <div className="form-group">
                                       <label htmlFor="approach"><b>Approach Type (type of Policy)</b></label>&nbsp;&nbsp;
                                       <Form.Check value="Approach Type " type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group45" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Approach Type " type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group45" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                                   </div>
                               </div>
                               <div className="col col-3">
                                   <div className="form-group ">
                                       <label htmlFor="roadwidth"><b>Approach Road Width</b> </label>&nbsp;&nbsp;
                                       <Form.Check value="Approach Road Width " type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group46" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Approach Road Width" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group46" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                                   </div>
                               </div>
                             
                           </div><br></br>
                           <div className="row">
                           <div className="col col-3">
                                   <div className="form-group ">
                                       <label htmlFor="specify"><b>Specify Others</b></label>&nbsp;&nbsp;
                                       <Form.Check value="Specify Others" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group47" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Specify Others" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group47" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                                   </div>
                               </div> 
                               <div className="col col-3">
                                   <div className="form-group ">
                                       <label htmlFor="existingcase"><b>Existing Case No.</b></label>&nbsp;&nbsp;
                                       <Form.Check value="Existing Case No." type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group48" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Existing Case No." type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group48" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                                   </div>
                               </div>
                               <div className="col col-3">
                                   <div className="form-group ">
                                       <label htmlFor="typeland"><b>Type of land</b> </label>&nbsp;&nbsp;
                                       <Form.Check value="Type of land" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group49" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Type of land" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group49" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                                   </div>
                               </div>
                               <div className="col col-3 ">
                         <label htmlFor="typeland"><b>Third-party right created</b> </label>&nbsp;&nbsp;
                         <Form.Check value="Third-party right created" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group50" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Third-party right created" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group50" inline></Form.Check>
                        <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                               </div>
                           </div>
                           <hr></hr>
                           <h5 className="text-black"><b>2. Any encumbrance with respect to following :</b></h5><br></br>
                  <div className="row">
                  <div className="col col-3 ">
                              
                              <h6 ><b>(a)Rehan / Mortgage</b> &nbsp;&nbsp;
                              <Form.Check value="Rehan" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group43" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Rehan" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group43" inline></Form.Check></h6>
                                   
                       <input type="radio" value="Yes" id="Yes"  
                            onChange1={handleChange} name="Yes"  />
                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                            <input type="radio" value="No" id="No"
                            onChange1={handleChange} name="Yes"/>
                            <label for="No">No</label>
                   </div>
                   <div className="col col-3 ">
                              
                              <h6 ><b>(b)Patta/Lease</b> &nbsp;&nbsp;
                              <Form.Check value="Patta" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group44" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Patta" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group44" inline></Form.Check></h6>
                                  
                       <input type="radio" value="Yes" id="Yes"  
                            onChange1={handleChange} name="Yes"  />
                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                            <input type="radio" value="No" id="No"
                            onChange1={handleChange} name="Yes"/>
                            <label for="No">No</label>
                   </div>
                   <div className="col col-3 ">
                              
                              <h6 ><b>(c)GairMarusi</b>&nbsp;&nbsp;
                              <Form.Check value="GairMarusi" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group45" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="GairMarusi" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group45" inline></Form.Check></h6>
                                   
                       <input type="radio" value="Yes" id="Yes"  
                            onChange1={handleChange} name="Yes"  />
                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                            <input type="radio" value="No" id="No"
                            onChange1={handleChange} name="Yes"/>
                            <label for="No">No</label>
                   </div>
                   <div className="col col-3 ">
                              
                              <h6 ><b>(d)Any other, please specify</b> &nbsp;&nbsp;
                              <Form.Check value="Any other, please specify" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group46" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Any other, please specify" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group46" inline></Form.Check> </h6>
                                   
                       <input type="radio" value="Yes" id="Yes"  
                            onChange1={handleChange} name="Yes"  />
                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                            <input type="radio" value="No" id="No"
                            onChange1={handleChange} name="Yes"/>
                            <label for="No">No</label>
                   </div>
                                  
                    </div>
                    <hr/>
                    <h6 ><b>(ii) Existing litigation, if any, concerning applied land including co-sharers and collaborator</b>&nbsp;&nbsp;
                    <Form.Check value=" Existing litigation" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group47" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value=" Existing litigation" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group47" inline></Form.Check></h6>
                                    
                       <input type="radio" value="Yes" id="Yes"  
                            onChange1={handleChange} name="Yes"  />
                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                            <input type="radio" value="No" id="No"
                            onChange1={handleChange} name="Yes"/>
                            <label for="No">No</label>
                   <hr/>
                    <h6 ><b>(iii) Court orders, if any, affecting applied land</b>&nbsp;&nbsp;
                    <Form.Check value=" Court orders" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group48" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value=" Court orders" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group48" inline></Form.Check></h6>
                                      <input type="radio" value="Yes" id="Yes"  
                            onChange1={handleChange} name="Yes"  />
                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                            <input type="radio" value="No" id="No"
                            onChange1={handleChange} name="Yes"/>
                            <label for="No">No</label>
                   <hr/>
                    <h6 ><b>(iv) Any insolvency/liquidation proceedings against the land owner(s)/ collaborating developed :</b>&nbsp;&nbsp;
                    <Form.Check value=" Any insolvency" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group49" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="  Any insolvency" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group49" inline></Form.Check></h6>
                                      <input type="radio" value="Yes" id="Yes"  
                            onChange1={handleChange} name="Yes"  />
                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                            <input type="radio" value="No" id="No"
                            onChange1={handleChange} name="Yes"/>
                            <label for="No">No</label>
                   <hr/>
                   <h5 className="text-black"><b>3.Shajra Plan</b></h5>
                   <div className="row">
                        <div className="col col-3 ">
                                    <h6 ><b>(a)As per applied land (Yes/No)</b> &nbsp;&nbsp;
                                    <Form.Check value=" As per applied land " type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group50" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="As per applied land " type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group50" inline></Form.Check></h6>
                                    <input type="radio" value="Yes" id="Yes"  
                            onChange1={handleChange} name="Yes"  />
                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                            <input type="radio" value="No" id="No"
                            onChange1={handleChange} name="Yes"/>
                            <label for="No">No</label>
                        </div>
                        
                        <div className="col col-3 ">
                                    <h6 ><b>(b)If any revenue rasta abuts to the applied site (Yes/No)</b> &nbsp;&nbsp;
                                    <Form.Check value=" revenue rasta " type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group51" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="revenue rasta" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group51" inline></Form.Check></h6>
                        
                        <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes"onClick={handleshow1}  />
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes" onClick={handleshow1}/>
                                            <label for="No">No</label>
                                            {
                                            showhide2==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col">
                                                            <label for="parentLicense" className="font-weight-bold"> Width of revenue rasta </label>
                                                            <input type="number" className="form-control"/>
                                                        </div>
                                                       
                                                    </div> 

                                            )
                                        }
                                        </div>
                      
                        <div className="col col-3 ">
                                    
                                    <h6 ><b>(c)Any watercourse abuts/passes through the applied site (Yes/No)</b> &nbsp;&nbsp;
                                    <Form.Check value=" Yes" type="radio" 
                                    id = "default-radio" onChange1={handleChange} onClick={handleshow2}
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group53" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="No " type="radio" 
                                    id = "default-radio" onChange1={handleChange} onClick={handleshow2}
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group53" inline></Form.Check></h6>
                                     <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes" onClick={handleshow2} />
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes" onClick={handleshow2}/>
                                            <label for="No">No</label>
                                            {
                                            showhide3==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col">
                                                            <label for="parentLicense" className="font-weight-bold"> Rev. rasta width </label>
                                                            <input type="number" className="form-control"/>
                                                        </div>
                                                       
                                                    </div> 

                                            )
                                        }
                                           
                        </div>
                        <div className="col col-3 ">
                                    
                                    <h6 ><b>(d)Whether in Compact Block (Yes/No)</b> &nbsp;&nbsp;
                                    <Form.Check value=" Compact Block" type="radio" 
                                    id = "default-radio" onChange1={handleChange} onClick={handleshow2}
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group55" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Compact Block " type="radio" 
                                    id = "default-radio" onChange1={handleChange} onClick={handleshow2}
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group55" inline></Form.Check></h6>
                                     <input type="radio" value="Yes" id="Yes"  
                            onChange1={handleChange} name="Yes"  />
                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                            <input type="radio" value="No" id="No"
                            onChange1={handleChange} name="Yes"/>
                            <label for="No">No</label>
                        </div>
                   <br></br>
                   <div className="row">
                        <div className="col col-3 ">
                                    
                                    <h6 ><b>(e)If any other owners' land is sandwiched within applied land (Yes/No)</b> &nbsp;&nbsp;
                                    <Form.Check value=" sandwiched" type="radio" 
                                    id = "default-radio" onChange1={handleChange} onClick={handleshow2}
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group56" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="sandwiched " type="radio" 
                                    id = "default-radio" onChange1={handleChange} onClick={handleshow2}
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group56" inline></Form.Check></h6>
                                     <input type="radio" value="Yes" id="Yes"  
                            onChange1={handleChange} name="Yes"  />
                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                            <input type="radio" value="No" id="No"
                            onChange1={handleChange} name="Yes"/>
                            <label for="No">No</label>
                        </div>
                        <div className="col col-3 ">
                                    
                                    <h6 ><b>(f)Acquisition status (Yes/No)</b> &nbsp;&nbsp;
                                    <Form.Check value=" Yes" type="radio" 
                                    id = "default-radio" onChange1={handleChange} onClick={handleshow2}
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group57" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="No" type="radio" 
                                    id = "default-radio" onChange1={handleChange} onClick={handleshow2}
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group57" inline></Form.Check></h6>
                               <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes" onClick={handleshow3} />
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes" onClick={handleshow3}/>
                                            <label for="No">No</label>
                                            {
                                            showhide4==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col">
                                                            <label for="parentLicense" className="font-weight-bold">Remark</label>
                                                            <input type="text" className="form-control"/>
                                                        </div>
                                                       
                                                    </div> 

                                            )
                                        }
                        </div>
                        <div className="col col-3 ">
                                    
                                    <h6 ><b>(g)Whether details/orders of release/exclusion of land uploaded</b> &nbsp;&nbsp;
                                    <Form.Check value=" release/exclusion" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group59" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="release/exclusion" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group59" inline></Form.Check></h6>
                                     <input type="radio" value="Yes" id="Yes"  
                            onChange1={handleChange} name="Yes"  />
                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                            <input type="radio" value="No" id="No"
                            onChange1={handleChange} name="Yes"/>
                            <label for="No">No</label>
                        </div>
                        <div className="col col-3 ">
                                    
                                    <h6 ><b>(h) Whether land compensation received</b>&nbsp;&nbsp;
                                    <Form.Check value=" land compensation" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group60" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="land compensation" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group60" inline></Form.Check></h6>
                                     <input type="radio" value="Yes" id="Yes"  
                            onChange1={handleChange} name="Yes"  />
                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                            <input type="radio" value="No" id="No"
                            onChange1={handleChange} name="Yes"/>
                            <label for="No">No</label>
                        </div>
                    </div>
                    </div>
                    <hr/>
                    <hr/>
                    <div className="row">
                        <div className="col col-3">
                                        <div className="form-group ">
                                            <label ><b>Date of section 4 notification</b> </label>&nbsp;&nbsp;
                                            <Form.Check value=" Date of section 4 notification" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group61" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Date of section 4 notification" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group61" inline></Form.Check>
                                    <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                                        </div>
                         </div>
                         <div className="col col-3">
                                        <div className="form-group ">
                                            <label><b>Date of section 6 notification</b></label>&nbsp;&nbsp;
                                            <Form.Check value=" Date of section 6 notification" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group62" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Date of section 6 notification" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group62" inline></Form.Check>
                                    <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                                        </div>
                         </div>
                         <div className="col col-3">
                                        <div className="form-group">
                                            <label><b>Status of release</b></label>&nbsp;&nbsp;
                                            <Form.Check value="Status of release" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group63" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Status of release" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group63" inline></Form.Check>
                                    <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                                        </div>
                         </div>
                         <div className="col col-3">
                                        <div className="form-group ">
                                            <label ><b>Date of Award</b></label>&nbsp;&nbsp;
                                            <Form.Check value="Date of Award" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group64" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Date of Award" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group64" inline></Form.Check>
                                    <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                                        </div>
                         </div>    
                    </div><br></br>
                    <div className="row">
                         <div className="col col-3">
                                        <div className="form-group ">
                                            <label htmlFor="releasedate"><b>Date of Release</b> </label>&nbsp;&nbsp;
                                            <Form.Check value="Date of Release" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group65" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Date of Release" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group65" inline></Form.Check>
                                    <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                                        </div>
                         </div>
                         <div className="col col-3">
                                        <div className="form-group ">
                                            <label htmlFor="sitedetails"><b>Site Details</b></label>&nbsp;&nbsp;
                                            <Form.Check value="Site Details" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group66" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Site Details" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group66" inline></Form.Check>
                                    <Form.Control style={{maxWidth:200, marginTop:10}} readOnly></Form.Control>
                                        </div>
                         </div>
                     </div>
                     <hr/>
                     <div className="row">
                        <div className="col col-12 ">
                                    
                                    <h6 ><b>whether the applied site is approachable from the proposed 18/24 m internal sectoral plan road/sector dividing road. (yes/no)</b>&nbsp;&nbsp;
 <Form.Check value="approachable" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group67" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="approachable" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group67" inline></Form.Check></h6>
                                     <input type="radio" value="Yes" id="Yes"  
                            onChange1={handleChange} name="Yes"  />
                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                            <input type="radio" value="No" id="No"
                            onChange1={handleChange} name="Yes"/>
                            <label for="No">No</label>
                                  
                        </div>
                     </div>
                    <hr/>
                    <h5 className="text-black"><b>4.Site condition</b></h5>
                    <div className="row">
                        <div className="col col-3">
                                    
                                    <h6 ><b>(a)vacant: (Yes/No)</b> <Form.Check value="vacant" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group68" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="vacant" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group68" inline></Form.Check></h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes"  />
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes"/>
                                            <label for="No">No</label>
                        </div>
                        <div className="col col-3">
                                    
                                    <h6 onChange={(e)=>setConstruction(e.target.value)} value={construction}><b>(b)Construction: (Yes/No)</b>
 </h6>      
 <Form.Check value="Construction" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group69" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Construction" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group69" inline></Form.Check>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes"  onClick={handleshow4} />
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes"  onClick={handleshow4}/>
                                            <label for="No">No</label>
                                            {
                                            showhide4==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col">
                                                            <label for="parentLicense" className="font-weight-bold">Type of Construction</label>
                                                            <input type="text" className="form-control"/>
                                                        </div>
                                                       
                                                    </div> 

                                            )
                                        }
                        </div>
                        <div className="col col-3">
                                    
                                    <h6 onChange={(e)=>setHt(e.target.value)} value={ht}><b>(c)HT line:(Yes/No)</b>
 </h6><Form.Check value="HT" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group70" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="HT" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group70" inline></Form.Check>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes" onClick={handleshow5}  />
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes" onClick={handleshow5}/>
                                            <label for="No">No</label>
                                            {
                                            showhide5==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col">
                                                            <label for="parentLicense" className="font-weight-bold">HT Remarks</label>
                                                            <input type="text" className="form-control"/>
                                                        </div>
                                                       
                                                    </div> 

                                            )
                                        }
                        </div>
                        <div className="col col-3">
                                    
                                    <h6 onChange={(e)=>setGas(e.target.value)} value={gas}><b>(d) IOC Gas Pipeline:(Yes/No)</b>
 </h6><Form.Check value=" IOC" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group71" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value=" IOC" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group71" inline></Form.Check>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes"onClick={handleshow6}  />
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes"onClick={handleshow6}/>
                                            <label for="No">No</label>
                                            {
                                            showhide6==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col">
                                                            <label for="parentLicense" className="font-weight-bold">IOC Remarks</label>
                                                            <input type="text" className="form-control"/>
                                                        </div>
                                                       
                                                    </div> 

                                            )
                                        }
                        </div>
                     </div><br></br>
                     <div className="row ">
                        <div className="col col-3">
                                    
                                    <h6 onChange={(e)=>setNallah(e.target.value)} value={nallah}><b>(e)Nallah:(Yes/No)</b> </h6>
                                    <Form.Check value="Nallah" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group72" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="Nallah" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group72" inline></Form.Check>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes" onClick={handleshow7} />
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes" onClick={handleshow7}/>
                                            <label for="No">No</label>
                                            {
                                            showhide7==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col">
                                                            <label for="parentLicense" className="font-weight-bold">Nallah Remarks</label>
                                                            <input type="text" className="form-control"/>
                                                        </div>
                                                       
                                                    </div> 

                                            )
                                        }
                        </div>
                        <div className="col col-3">
                                    
                                    <h6 onChange={(e)=>setRoad(e.target.value)} value={road}><b>(f)Any revenue rasta/road:(Yes/No)</b>
 </h6>  <Form.Check value="revenue" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group73" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="revenue" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group73" inline></Form.Check>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes"onClick={handleshow8}  />
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes"onClick={handleshow8}/>
                                            <label for="No">No</label>
                                            {
                                            showhide8==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col">
                                                            <label for="parentLicense" className="font-weight-bold">Width</label>
                                                            <input type="text" className="form-control"/>
                                                        </div>
                                                       
                                                    </div> 

                                            )
                                        }
                        </div>
                        <div className="col col-3">
                                    
                                    <h6 onChange={(e)=>setLand(e.target.value)} value={land}><b>(g)Any marginal land:(Yes/No)</b>
</h6> <Form.Check value="marginal" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group74" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="marginal" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group74" inline></Form.Check>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes" onClick={handleshow9} />
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes"onClick={handleshow9}/>
                                            <label for="No">No</label>
                                            {
                                            showhide9==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col">
                                                            <label for="parentLicense" className="font-weight-bold">Remark</label>
                                                            <input type="text" className="form-control"/>
                                                        </div>
                                                       
                                                    </div> 

                                            )
                                        }
                        </div>
                        <div className="col col-3">
                                    
                                    <h6 onChange={(e)=>setLayoutPlan(e.target.value)} value={layoutPlan}><b>(h) Whether any utility line passing through the site is incorporated/adjusted in the layout plan (Yes/No)</b>

 </h6><Form.Check value="utility" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle  class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group75" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                                    value="utility" type="radio" 
                                    id = "default-radio" 
                                    label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} 
                                    name="group75" inline></Form.Check>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes" onClick={handleshow0} />
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes" onClick={handleshow0}/>
                                            <label for="No">No</label>
                                            {
                                            showhide0==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col">
                                                            <label for="parentLicense" className="font-weight-bold">Width of row</label>
                                                            <input type="text" className="form-control"/>
                                                        </div>
                                                       
                                                    </div> 

                                            )
                                        }
                        </div>
                     </div>
                      
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

export default Developerinfo;