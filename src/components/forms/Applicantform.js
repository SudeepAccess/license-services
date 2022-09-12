

import React, { useState, useEffect } from "react";
import { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { Card, Row, Col } from "react-bootstrap";
import axios from 'axios';
import { useForm } from "react-hook-form";



const ApllicantForm = (props) => {

    const url ='localhost:8094/egov-mdms-service/v1/_search';
    const [form, setForm] = useState([]);
    const [developer, setDeveloper] = useState('');
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [mobile2, setMobile2] = useState('');
    const [email, setEmail] = useState('');
    const [pan, setPan] = useState('');
    const [address, setAddress] = useState('');
    const [village, setVillage] = useState('');
    const [pincode, setPincode] = useState('');
    const [tehsil, setTehsil] = useState('');
    const [district, setDistrict] = useState('');
    const [state, setState] = useState('');
    const [nameOwner, setnameOwner] = useState('');



    const [FormSubmitted, SetFormSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false)

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

    const ApplicantFormSubmitHandler = async(e) => {
        e.preventDefault();
        try{
            const resp = await axios.post(url,{district:district,state:state,village:village});
            console.log(resp.data)
        }catch (error){
             console.log(error.response)
        }


        SetFormSubmitted(true);

        let forms = {
            developer: developer,
            name: name,
            mobile: mobile,
            mobile2: mobile2,
            email: email,
            pan: pan,
            address: address,
            village: village,
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
    useEffect(() => {
        if (FormSubmitted) {
            props.ApplicantFormSubmit(true);
        }
    }, [FormSubmitted])

    return (
        <Form onSubmit={ApplicantFormSubmitHandler} autoComplete="off">
            <Form.Group className="justify-content-center" controlId="formBasicEmail">
                <Row className="ml-auto" style={{ marginBottom: 5 }}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Developer <span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Select type="text" defaultValue="Select" required onChange={(e) => setDeveloper(e.target.value)} value={developer} >
                            <option value="K.Mishra">K.Mishra</option>
                            <option value="Developer 1">Developer 1</option>
                            <option value="Developer 2">Developer 2</option>
                        </Form.Select>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <label>Authorized Person Name <span style={{ color: "red" }}>*</span></label>
                        </div>
                        <Form.Control type="text" className="form-control" required pattern="[A-Za-z]*" name="authorizedPerson" minLength={10} maxLength={99}

                            onChange={(e) => setName(e.target.value)} onChange1={handleNameChange} value={name} />
                        {errors.name && <p>Please check the First Name</p>}
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Authorized Mobile No1 <span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" className="form-control" required pattern="[0-9]*" name="authorizedmobile" maxLength={10}

                            onChange={(e) => setMobile(e.target.value)} onChange1={handleMobileChange} value={mobile} />
                        {errors.mobile && <p>Please check the First Name</p>}


                    </Col>

                </Row>
                <Row className="ml-auto" style={{ marginBottom: 5 }}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Authorized Mobile No 2 <span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Control type="number" placeholder="Authorized Mobile No 2" onChange={(e) => setMobile2(e.target.value)} value={mobile2} />
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Email ID <span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" required name="authorizedEmail" maxLength={25} pattern="[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]*"
                            onChange={(e) => setEmail(e.target.value)} value={email} onChange1={handleEmailChange} />
                        {errors.email && <p>Please check the First Name</p>}
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>PAN No <span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" required name="authorizedPan" maxLength={10} pattern="[a-z]+[0-9]+[0-9]*"
                            onChange={(e) => setPan(e.target.value)} value={pan} onChange1={handlePanChange} />
                        {errors.pan && <p>Please check the First Name</p>}
                    </Col>


                </Row>
                <Row className="ml-auto" style={{ marginBottom: 5 }}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Address 1 <span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" placeholder="Address 1" required name="authorizedAddress" minLength={4} maxLength={30} pattern="[A-Za-z]+[0-9]*"
                            onChange={(e) => setAddress(e.target.value)} value={address} onChange1={handleAddressChange} />
                        {errors.address && <p>Please check the First Name</p>}
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Village/City <span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Select type="text" defaultValue="Select" placeholder="Village/City" required onChange={(e) => setVillage(e.target.value)} value={village}>
                            <option value="1">Ballabgarh</option>
                            <option value="2">Village</option>
                            <option value="3">City</option>
                        </Form.Select>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Pincode <span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" placeholder="Pincode" required pattern="[0-9]*" name="authorizedPinCode" maxLength={6}
                            onChange={(e) => setPincode(e.target.value)} value={pincode} onChange1={handlePinChange} />
                        {errors.pincode && <p>Please check the First Name</p>}
                    </Col>

                </Row>
                <Row className="ml-auto" style={{ marginBottom: 5 }}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Tehshil <span style={{ color: "red" }}>*</span></Form.Label>
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
                            <Form.Label>District <span style={{ color: "red" }}>*</span></Form.Label>
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
                            <Form.Label>State <span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Select type="text" defaultValue="Select" placeholder="Tehshil" required onChange={(e) => setState(e.target.value)} value={state}  >
                            <option value="1">State 1</option>
                            <option value="2">State 2</option>
                            <option value="3">State 3</option>
                            <option value="3">State 4</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row className="ml-auto" style={{ marginBottom: 5 }}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Status (individual/ company/ firm/ LLP etc.)<span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" disabled readOnly />
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>LC-I signed by <span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" disabled readOnly />
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>If LC-I is not signed by self (in case of an individual) nature of authorization (GPA/SPA)<span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" disabled readOnly />
                    </Col>

                </Row>
                <Row className="ml-auto" style={{ marginBottom: 5 }}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Permanent address in case of individual/ registered office address in case other than individual<span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" disabled readOnly />
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Address for communication <span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" disabled readOnly />
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Name of the authorized person to sign the application<span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" disabled readOnly />
                    </Col>

                </Row>
                <Row className="ml-auto" style={{ marginBottom: 5 }}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Email ID for communication<span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" disabled readOnly />
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Name of individual Land owner/ land-owning company/ firm/ LLP etc. <span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" required pattern="[A-Za-z]*" minLength={4}
                            onChange={(e) => setnameOwner(e.target.value)} value={nameOwner} onChange1={handleNameOwnerChange} />
                        {errors.nameOwner && <p></p>}
                    </Col>


                </Row>

            </Form.Group>
            <Button style={{ alignSelf: "center", marginTop: 20 }} variant="primary" type="submit">
                Save as Draft
            </Button>
            <Button style={{ alignSelf: "center", marginTop: 20, marginLeft: 867 }} variant="primary" type="submit">
                Continue
            </Button>
        </Form>
    )
}

export default ApllicantForm;