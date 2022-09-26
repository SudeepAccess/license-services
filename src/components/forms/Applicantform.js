

import React, { useState, useEffect } from "react";
import { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { Card, Row, Col } from "react-bootstrap";
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { selectAurthorizedUserValuesArray } from "../../Redux/Slicer/Slicer";
// const baseURL = "http://10.1.1.18:8094/egov-mdms-service/v1/_search?tenant_id=hr";
// const URL_MDMS = process.env.REACT_APP_MDMS
const ApllicantForm = (props) => {

    const [post, setPost] = useState([]);
    // const [form, setForm] = useState([]);
    const [developer, setDeveloper] = useState('');
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [mobile2, setMobile2] = useState('');
    const [email, setEmail] = useState('');
    const [pan, setPan] = useState('');
    const [address, setAddress] = useState('');
    const [village1, setvillage1] = useState('');
    const [pincode, setPincode] = useState('');
    const [tehsil, setTehsil] = useState('');
    const [district, setDistrict] = useState('');
    const [state, setState] = useState('');
    const [nameOwner, setnameOwner] = useState('');
    const [FormSubmitted, SetFormSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const aurthorizedUserData = JSON.parse(localStorage.getItem("data_user"));

    const handleNameChange = event => {
        setName(event.target.value);

    };

    const handleMobileChange = event => {

        setMobile(event.target.value);
    };
    const handleEmailChange = event => {

        setEmail(event.target.value);
    };
    const handlePanChange = event => {

        setPan(event.target.value);
    };
    const handleAddressChange = event => {

        setAddress(event.target.value);
    };
    const handlePinChange = event => {

        setPincode(event.target.value);
    };
    const handleNameOwnerChange = event => {

        setnameOwner(event.target.value);
    };

    const[employeeName,employeedata]=useState([]);

    const ApplicantFormSubmitHandler = async(e) => {
        e.preventDefault();
     

        SetFormSubmitted(true);

        let forms = {
            developer: developer,
            name: name,
            mobile: mobile,
            mobile2: mobile2,
            email: email,
            pan: pan,
            address: address,
            village1: village1,
            pincode: pincode,
            tehsil: tehsil,
            district: district,
            state: state,
            nameOwner: nameOwner

        }
        // console.log("FRMDATA",forms);
        localStorage.setItem('step1', JSON.stringify(forms))
        // form.push(forms)
        let frmData = JSON.parse(localStorage.getItem('step1') || "[]")
    };
    // function callApi() {
    //     fetch("http://10.1.1.18:8094/egov-mdms-service/v1/_search")
    //     .then(response => response.text())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));
    //   }
    const HandleGetMCNdata=async(tenentId)=>{
        try{
            const abc =  
            {
              "RequestInfo": {
                  "apiId": "Rainmaker",
                  "ver": "v1",
                  "ts": 0,
                  "action": "_search",
                  "did": "",
                  "key": "",
                  "msgId": "090909",
                  "requesterId": "",
                  "authToken": ""
              },
              "MdmsCriteria": {
                  "tenantId": "hr",
                  "moduleDetails": [
                      {
                          "moduleName": "common-masters",
                          "masterDetails": [
                              {
                                  "name": "Department"
                              },
                              {
                                  "name": "Designation"
                              },
                              {
                                  "name": "StateInfo"
                              },
                              {
                                  "name": "wfSlaConfig"
                              }
                          ]
                      },
                      {
                          "moduleName": "tenant",
                          "masterDetails": [
                              {
                                  "name": "tenants"
                              },
                              {
                                  "name": "citymodule"
                              }
                          ]
                      },
                      {
                          "moduleName": "DIGIT-UI",
                          "masterDetails": [
                              {
                                  "name": "ApiCachingSettings"
                              }
                          ]
                      }
                  ]
              }
          }
          
            // const Resp = await axios.post(URL_MDMS+"/egov-mdms-service/v1/_search",
       const Resp =  await axios.post("/egov-mdms-service/v1/_search",
            abc,
            {headers:{
              'Content-Type': 'application/json',
              'Access-Control-Allow-origin':"*",
            }})
            .then((Resp)=>{
                console.log("ghr",Resp)
            })
          
        }
    catch(error){
      console.log(error.message);
    }
}

useEffect(()=>{
  HandleGetMCNdata();
},[])
    
    useEffect(() => {
        if (FormSubmitted) {
            props.ApplicantFormSubmit(true);
        }
       

    }, [FormSubmitted])
    // useEffect(() => {
    //     axios.get(`${baseURL}/1`).then((response) => {
    //       setPost(response.data);
    //     });
    //   }, []);

    //   function createPost() {
    //     axios
    //       .post(baseURL, {
    //         Description: "Hello World!",
    //         body: "This is a new post."
    //       })
    //       .then((response) => {
    //         setPost(response.data);
    //       });
    //   }
    
    //   if (!post) return "No post!"

    useEffect(()=>{
        if (aurthorizedUserData!==undefined && aurthorizedUserData !== null) {
            console.log("authorized user data",aurthorizedUserData.aurthorizedUserInfoArray[0].name)
        }
    },[aurthorizedUserData]);

    return (
        <Form onSubmit={ApplicantFormSubmitHandler} autoComplete="off">
            <Form.Group className="justify-content-center" controlId="formBasicEmail">
                <Row className="ml-auto" style={{ marginBottom: 5 }}>
               <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label><b>Developer</b> <span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Select type="text" defaultValue="Select"  onChange={(e) => setDeveloper(e.target.value)} value={developer} >
                            <option value="K.Mishra">K.Mishra</option>
                            <option value="Developer 1">Developer 1</option>
                            <option value="Developer 2">Developer 2</option>
                        </Form.Select>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label><b>Authorized Person Name </b><span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" className="form-control"  pattern="[A-Za-z]*" name="authorizedPerson" minLength={10} maxLength={99}

                            onChange={(e) => setName(e.target.value)} 
                            placeholder={(aurthorizedUserData!==null && aurthorizedUserData!==undefined)?
                                aurthorizedUserData.aurthorizedUserInfoArray[0].name:"N/A"}
                                onChange1={handleNameChange} value=
                                {(aurthorizedUserData!==null && aurthorizedUserData!==undefined)?
                                    aurthorizedUserData.aurthorizedUserInfoArray[0].name:"N/A"} disabled/>
                        {errors.name && <p>Please check the First Name</p>}
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label><b>Authorized Mobile No1</b> <span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" className="form-control"  pattern="[0-9]*" name="authorizedmobile" maxLength={10}

                            onChange={(e) => setMobile(e.target.value)} 
                            placeholder={(aurthorizedUserData!==null && aurthorizedUserData!==undefined)?
                                aurthorizedUserData.aurthorizedUserInfoArray[0].mobile:"N/A"}
                            onChange1={handleMobileChange} value={(aurthorizedUserData!==null && aurthorizedUserData!==undefined)?
                                aurthorizedUserData.aurthorizedUserInfoArray[0].mobile:"N/A"}disabled />
                        {errors.mobile && <p>Please check the First Name</p>}


                    </Col>

                </Row><br></br>
                <Row className="ml-auto" style={{ marginBottom: 5 }}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label><b>Authorized Mobile No 2 </b><span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" placeholder="Authorized Mobile No 2" onChange={(e) => setMobile2(e.target.value)} value={mobile2} />
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label><b>Email ID</b> <span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" name="authorizedEmail" maxLength={25} pattern="[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]*"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={(aurthorizedUserData!==null && aurthorizedUserData!==undefined)?
                                aurthorizedUserData.aurthorizedUserInfoArray[0].email:"N/A"}
                            onChange1={handleEmailChange} 
                            value={(aurthorizedUserData!==null && aurthorizedUserData!==undefined)?
                                aurthorizedUserData.aurthorizedUserInfoArray[0].email:"N/A"} disabled/>
                        {errors.email && <p>Please check the First Name</p>}
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label><b>PAN No </b><span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text"  name="authorizedPan" maxLength={10} pattern="[a-z]+[0-9]+[0-9]*"
                            onChange={(e) => setPan(e.target.value)} 
                            placeholder={(aurthorizedUserData!==null && aurthorizedUserData!==undefined)?
                                aurthorizedUserData.aurthorizedUserInfoArray[0].pan:"N/A"}
                             onChange1={handlePanChange}
                             value={(aurthorizedUserData!==null && aurthorizedUserData!==undefined)?
                                aurthorizedUserData.aurthorizedUserInfoArray[0].pan:"N/A"} disabled/> 
                        {errors.pan && <p>Please check the First Name</p>}
                    </Col>


                </Row><br></br>
                <Row className="ml-auto" style={{ marginBottom: 5 }}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label><b>Address 1</b> <span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" placeholder="Address 1"  name="authorizedAddress" minLength={4} maxLength={30} pattern="[A-Za-z]+[0-9]*"
                            onChange={(e) => setAddress(e.target.value)} value={address} onChange1={handleAddressChange} />
                        {errors.address && <p>Please check the First Name</p>}
                    </Col>
                    <Col md={4} xxl lg="4">
                 
                            {/* <Form.Label><b>Village/City </b><span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <input type="text" className="form-control"list="data1"/>
                        <datalist id="data1">
                            {
                                employeeName.map(result=>
                                    {
                                        <option>{result.employee_name}</option>
                                    })
                            }
                        </datalist> */}
                        <div>
                            <Form.Label><b>Village/City </b><span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Select type="text" defaultValue="Select" placeholder="Village/City"  onChange={(e) => setvillage1(e.target.value)} value={village1}>
                            <option value="1">Ballabgarh</option>
                            <option value="2">Village</option>
                            <option value="3">City</option>
                        </Form.Select>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label><b>Pincode</b> <span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" placeholder="Pincode"pattern="[0-9]*" name="authorizedPinCode" maxLength={6}
                            onChange={(e) => setPincode(e.target.value)} value={pincode} onChange1={handlePinChange} />
                        {errors.pincode && <p>Please check the First Name</p>}
                    </Col>

                </Row><br></br>
                <Row className="ml-auto" style={{ marginBottom: 5 }}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label><b>Tehshil </b><span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Select type="text" defaultValue="Select" placeholder="Tehshil" required onChange={(e) => setTehsil(e.target.value)} value={tehsil} >
                            <option value="1">Tehshil 1</option>
                            <option value="2">Tehshil 2</option>
                            <option value="3">Tehshil 3</option>
                            <option value="3">Tehshil 4</option>
                        </Form.Select>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label><b>District</b> <span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Select type="text" defaultValue="Select" placeholder="Tehshil" required onChange={(e) => setDistrict(e.target.value)} value={district} >
                            <option value="1">District 1</option>
                            <option value="2">District 2</option>
                            <option value="3">District 3</option>
                            <option value="3">District 4</option>
                        </Form.Select>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label><b>State</b> <span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Select type="text" defaultValue="Select" placeholder="Tehshil" required onChange={(e) => setState(e.target.value)} value={state}  >
                            <option value="1">State 1</option>
                            <option value="2">State 2</option>
                            <option value="3">State 3</option>
                            <option value="3">State 4</option>
                        </Form.Select>
                    </Col>
                </Row><br></br>
                <Row className="ml-auto" style={{ marginBottom: 5 }}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label><b>Status (Individual/ Company/ Firm/ LLP etc.)</b><span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" disabled readOnly />
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label><b>LC-I signed by </b><span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" disabled readOnly />
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label><b>Address for communication</b> <span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" disabled readOnly />
                    </Col>
                 

                </Row><br></br>
                <Row className="ml-auto" style={{ marginBottom: 5 }}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label><b>Permanent address in case of individual/ registered office address in case other than individual</b><span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" disabled readOnly />
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label><b>If LC-I is not signed by self (in case of an individual) nature of authorization (GPA/SPA)</b><span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" disabled readOnly />
                    </Col>
                    <Col md={4} xxl lg="4" style={{marginTop:45}}>
                        <div>
                            <Form.Label><b>Email ID for communication</b><span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" disabled readOnly />
                    </Col>
                

                </Row><br></br>
                <Row className="ml-auto" style={{ marginBottom: 5 }}>
                <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label><b>Name of the authorized person to sign the application</b><span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" disabled readOnly />
                    </Col>
                    {/* <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label><b>Name of individual Land owner/ land-owning company/ firm/ LLP etc.</b> <span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text"  pattern="[A-Za-z]*" minLength={4}
                            onChange={(e) => setnameOwner(e.target.value)} value={nameOwner} onChange1={handleNameOwnerChange} />
                        {errors.nameOwner && <p></p>}
                    </Col> */}


                </Row>

            </Form.Group>
            <Button style={{ alignSelf: "center", marginTop: 20 }} variant="primary" type="submit">
                Save as Draft
            </Button>
            <Button style={{ alignSelf: "center", marginTop: -45, marginLeft: 979 }} variant="primary" type="submit">
                Continue
            </Button>
        </Form>
    )
}

export default ApllicantForm;