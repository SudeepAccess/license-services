import React,{useState,useEffect}from "react";
import { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { Card, Row, Col} from "react-bootstrap";



const ApllicantForm=(props)=>{

    const[form,setForm]=useState([]);

    const [name,setName]=useState('');
    const[mobile,setMobile]=useState('');
    
    const [FormSubmitted,SetFormSubmitted] = useState(false);
   
    const ApplicantFormSubmitHandler=(e)=>{
        e.preventDefault();
        SetFormSubmitted(true);
        let forms={
            name,
            mobile
        }
        setForm([...form,forms]);
      
    
    };
    useEffect(()=>{
        if (FormSubmitted) {
            props.ApplicantFormSubmit(true);
        }
    },[FormSubmitted])

    // const ApplicantFormHandler=(e)=>{
    //     e.preventDefault();
    //     let forms={
    //         name,
    //         mobile
    //     }
    //     setForm([...form,forms]);
    // }
    
    return(
        <Form onSubmit={ApplicantFormSubmitHandler} autoComplete="off">
            <Form.Group className="justify-content-center" controlId="formBasicEmail">
                <Row className="ml-auto" style={{marginBottom:5}}>
                <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Developer <span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <Form.Select type="text" defaultValue="Select"  >
                        <option value="K.Mishra">K.Mishra</option>
                        <option value="Developer 1">Developer 1</option>
                        <option value="Developer 2">Developer 2</option>
                        </Form.Select>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Authorized Person Name <span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <input type="text" className="form-control" required onChange={(e)=>setName(e.target.value)} value={name}
                        />
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Authorized Mobile No1 <span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <Form.Control type="number" required onChange={(e)=>setMobile(e.target.value)} value={mobile} />
                    </Col>
                  
                </Row>
                <Row className="ml-auto" style={{marginBottom:5}}>
                <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Authorized Mobile No 2 <span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <Form.Control type="number" placeholder="Authorized Mobile No 2" />
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Email ID <span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text"  />
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>PAN No <span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <Form.Control type="number"  />
                    </Col>
                   
                    
                </Row>
                <Row className="ml-auto" style={{marginBottom:5}}>
                <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Address 1 <span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" placeholder="Address 1" />
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Village/City <span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <Form.Select type="text" defaultValue="Select" placeholder="Village/City" >
                            <option value="1">Ballabgarh</option>
                            <option value="2">Village</option>
                            <option value="3">City</option>
                        </Form.Select>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Pincode <span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <Form.Control type="number" placeholder="Pincode" />
                    </Col>
                    
                </Row>
                <Row className="ml-auto" style={{marginBottom:5}}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Tehshil <span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <Form.Select type="text" defaultValue="Select" placeholder="Tehshil" >
                            <option value="1">Tehshil 1</option>
                            <option value="2">Tehshil 2</option>
                            <option value="3">Tehshil 3</option>
                            <option value="3">Tehshil 4</option>
                        </Form.Select>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>District <span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <Form.Select type="text" defaultValue="Select" placeholder="Tehshil" >
                            <option value="1">District 1</option>
                            <option value="2">District 2</option>
                            <option value="3">District 3</option>
                            <option value="3">District 4</option>
                        </Form.Select>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>State <span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <Form.Select type="text" defaultValue="Select" placeholder="Tehshil" >
                            <option value="1">State 1</option>
                            <option value="2">State 2</option>
                            <option value="3">State 3</option>
                            <option value="3">State 4</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row className="ml-auto" style={{marginBottom:5}}>
                <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Status (individual/ company/ firm/ LLP etc.)<span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" disabled readOnly  />
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>LC-I signed by <span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" disabled readOnly  />
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>If LC-I is not signed by self (in case of an individual) nature of authorization (GPA/SPA)<span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" disabled readOnly  />
                    </Col>
                    
                </Row>
                <Row className="ml-auto" style={{marginBottom:5}}>
                <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Permanent address in case of individual/ registered office address in case other than individual<span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" disabled readOnly  />
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Address for communication <span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" disabled readOnly  />
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Name of the authorized person to sign the application<span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" disabled readOnly  />
                    </Col>
                    
                </Row>
                <Row className="ml-auto" style={{marginBottom:5}}>
                <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Email ID for communication<span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" disabled readOnly  />
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Name of individual Land owner/ land-owning company/ firm/ LLP etc. <span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text"   />
                    </Col>
                   
                    
                </Row>
                
            </Form.Group>
            <Button style={{alignSelf:"center", marginTop:20}} variant="primary" type="submit">
                Save as Draft
            </Button>
            <Button style={{alignSelf:"center", marginTop:20,marginLeft:867}}  variant="primary" type="submit">
               Continue
            </Button>
        </Form>
    )
}

export default ApllicantForm;