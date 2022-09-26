import React, { useState, useEffect } from "react";
import { Button, Form, Collapse } from "react-bootstrap";
import { Card, Row, Col } from "react-bootstrap";
import PurposeAddform from "./PurposeFormAddmore";
import ParentLicenceAddform from "./PurposeFormAddParentLicence";
import { useForm } from "react-hook-form";
import Typography from '@material-ui/core/Typography'
import Modal from 'react-bootstrap/Modal';
import Box from '@material-ui/core//Box';
import { TableRow, TableHead, TableContainer, TableCell, TableBody, Table, Paper } from '@material-ui/core';
import { blue, grey } from "@material-ui/core/colors";
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { ContentCutOutlined } from "@mui/icons-material";
import CalculateIcon from '@mui/icons-material/Calculate';
import InfoIcon from '@mui/icons-material/Info';
import DDJAYForm from "./DDJAY";
import {setDisplayDDAJForm  } from "../../Redux/Slicer/Slicer";
import { useDispatch } from "react-redux";



const ApllicantPuropseForm = (props) => {
    const [form, setForm] = useState([]);
    const [purpose, setPurpose] = useState('');
    const [district2, setDistrict2] = useState('');
    const [tehsil, setTehsil] = useState('');
    const [revenueName, setRevenueName] = useState('');
    const [khewat, setKhewat] = useState('');
    const [mustil, setMustil] = useState('');
    const [killa, setKilla] = useState('');
    const [sector, setSector] = useState('');
    const [kanal, setKanal] = useState('');
    const [marla, setMarla] = useState('');
    const [village2, setVillage2] = useState('');
    const [Khasra, setKhasra] = useState('');
    const [khatoni, setKhatoni] = useState('');
    const [Rectangle, setRectangle] = useState('');
    const [kanalBigha, setKanalBigha] = useState('');
    const [marlaBiswa, setmarlaBiswa] = useState('');
    const [sarsai, setsarsai] = useState('');
    const [colKhasra, setcolKhasra] = useState('');
    const [developerLlp, setDeveloperLlp] = useState('');
    const [registeringdate, setRegisteringDate] = useState('');
    const [validitydate, setvaliditydate] = useState('');
    const [colirrevocialble, setColIrrevociable] = useState('');
    const [authSignature, setAuthSignature] = useState('');
    const [nameAuthSign, setNameAuthSign] = useState('');
    const [registerAuthority, setRegisterauthority] = useState('');
    const [totalAppliedArea, setTotalAppliedArea] = useState('')
    const [details, setDetails] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [PurposeformSubmitted, SetPurposeformSubmitted] = useState(false);
    const [PurposeAdd, SetPurposeAdd] = useState([<PurposeAddform element="1"></PurposeAddform>]);
    const [EnterdetailsShow, SetEnterdetailsShow] = useState(false);
    const [DisplayEnterdetails, SetDisplayEnterdetails] = useState("none");
    const [districtData, setDistrictData] = useState([]);
    const [tehsilData, setTehsilData] = useState([]);
    const [revenueData, setRevenuStateData] = useState([]);
    const [mustilData, setMustilData] = useState([]);
    const [killaData, setKillaData] = useState([]);
    const [ParentAdd, SetParentAdd] = useState([<ParentLicenceAddform element="1"></ParentLicenceAddform>]);
    const HandleEnterDetails = () => {
        if (EnterdetailsShow) {
            SetEnterdetailsShow(false);
            SetDisplayEnterdetails("none")
        } else {
            SetEnterdetailsShow(true);
            SetDisplayEnterdetails("block");
        }
    }
    const [purposeDd,setSelectPurpose] = useState("01");
    const setSelectPurposeDd = (e) => {
        const purposeSelected = e.target.value;
        console.log("purpose", purposeSelected)
        localStorage.setItem("purpose", purposeSelected)
    }
    const [showhide1, setShowhide1] = useState("No");
    const handleshow1 = e => {
        const getshow = e.target.value;
        setShowhide1(getshow);
    }
    const [showhide2, setShowhide2] = useState("No");
    const handleshow2 = e => {
        const getshow = e.target.value;
        setShowhide2(getshow);
    }
    const[displayDdjayForm,setDisplayDdjayForm]=useState(
        {display:"none"}
    )
    const [displayCommercial,setDisplayCommercial]=useState(
        {display:"none"}
    )
    const dispatch=useDispatch();
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 900,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const styles = {
        borderBottom: '0.5px solid',
        borderRight: 0,

        borderTop: 0,
        borderLeft: 0,
        bgcolor: 'background.paper',
    }
  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const PurposeFormSubmitHandler = (e) => {
        e.preventDefault();
        SetPurposeformSubmitted(true);
        let forms = {
            purpose: purpose,
            district2: district2,
            revenueName: revenueName,
            khewat: khewat,
            mustil: mustil,
            killa: killa,
            sector: sector,
            kanal: kanal,
            marla: marla,
            village2: village2,
            Khasra: Khasra,
            khatoni: khatoni,
            tehsil: tehsil
            //   "data": {"Rectangle":"","kanalBigha":"","marlaBiswa":"","sarsai":"","colKhasra":"","developerLlp":"","registeringdate":"","validitydate":"","colirrevocialble":"","authSignature":"","nameAuthSign":"","registerAuthority":"","totalAppliedArea":""},
        }
        // console.log("FRMDATA",forms);
        localStorage.setItem('step2', JSON.stringify(forms))
        // form.push(forms)
        let frData = JSON.parse(localStorage.getItem('step2') || "[]")

    };

    const DistrictApiCall = async () => {
        try {
            const postDistrict = {
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
                }
            }
            // const Resp = await axios.post(URL_MDMS+"/egov-mdms-service/v1/_search",
            const Resp = await axios.post("/egov-mdms-service/v1/_district",
                postDistrict,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-origin': "*",
                    }
                })
                .then((Resp) => {
                    console.log("DISTRICTLIST", Resp)
                    return Resp;
                })
            setDistrictData(Resp.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    console.log("state data", districtData)
    const getTehslidata = async () => {
        if (district2 !== "") {
            const datatopost = {
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
                }

            }

            try {
                const Resp = await axios.post("/egov-mdms-service/v1/_tehsil?dCode=" + district2, datatopost, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-origin': "*",
                    }
                }).then((response) => {
                    return response
                });
                setTehsilData(Resp.data)
            } catch (error) {
                console.log(error.message);
            }
        }
    }

    const getRevenuStateData = async () => {
        if (tehsil !== "") {
            const datatopost = {
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
                }

            }

            try {
                const Resp = await axios.post("/egov-mdms-service/v1/_village?" + "dCode=" + district2 + "&" + "tCode=" + tehsil, datatopost, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-origin': "*",
                    }
                }).then((response) => {
                    return response
                });
                setRevenuStateData(Resp.data)
            } catch (error) {
                console.log(error.message);
            }
        }
    }

    const getMustilData = async () => {
        if (revenueName !== "") {
            const datatopost = {
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
                }

            }

            try {
                const Resp = await axios.post("/egov-mdms-service/v1/_must?" + "dCode=" + district2 + "&" + "tCode=" + tehsil + "&NVCode=" + revenueName, datatopost, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-origin': "*",
                    }
                }).then((response) => {
                    return response
                });
                setMustilData(Resp.data);
                console.log("MUSTDATA", Resp.data)
            } catch (error) {
                console.log(error.message);
            }
        }
    }
    const getKillaData = async () => {
        if (mustil !== "") {
            const datatopost = {
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
                }

            }

            try {
                const Resp = await axios.post("egov-mdms-service/v1/_khasra?" + "dCode=" + district2 + "&" + "tCode=" + tehsil + "&NVCode=" + revenueName + "&murba=" + mustil, datatopost, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-origin': "*",
                    }
                }).then((response) => {
                    return response
                });
                setKillaData(Resp.data);
                console.log("KILLADATA", Resp.data)
            } catch (error) {
                console.log(error.message);
            }
        }
    }
    useEffect(() => {
        DistrictApiCall();
    }, []);


    useEffect(() => {
        getTehslidata();
    }, [district2])

    useEffect(() => {
        getRevenuStateData();
    }, [district2, tehsil])

    useEffect(() => {
        getMustilData();
    }, [district2, tehsil, revenueName])


    useEffect(() => {
        getKillaData();
    }, [district2, tehsil, revenueName])

    useEffect(() => {
        if (PurposeformSubmitted) {
            props.PurposeForm(true);
        }
    }, [PurposeformSubmitted]);
    const handleKhewatChange = event => {

        setKhewat(event.target.value);
    };

    const handleKanalChange = event => {

        setKanal(event.target.value);
    };
    const handleMarlaChange = event => {

        setMarla(event.target.value);
    };
    const handleKhasraChange = event => {

        setKhasra(event.target.value);
    };
    const handleKhatoniChange = event => {

        setKhatoni(event.target.value);
    };
    const handlerectangleChange = event => {
        setRectangle(event.target.value);
    }
    const AddMorfield = () => {
        if (PurposeAdd.length === 10) {
            return
        }
        SetPurposeAdd((forms) => [...forms, <PurposeAddform element={PurposeAdd.length + 1}></PurposeAddform>]);
    };
    const RemoveMorfield = () => {
        if (PurposeAdd.length === 1) {
            return
        };

        let indexelm = PurposeAdd.length - 1;
        console.log(indexelm);
        PurposeAdd.pop();
        console.log(PurposeAdd);
        SetPurposeAdd(PurposeAdd);

    };

    const AddMorParentfield = () => {
        if (ParentAdd.length === 10) {
            return
        }
        SetParentAdd((forms) => [...forms, <ParentLicenceAddform element={ParentAdd.length + 1}></ParentLicenceAddform>])
    };
    const RemoveMoreParentfield = () => {
        if (ParentAdd.length === 1) {
            return
        };

        let indexelm = ParentAdd.length - 1;
        console.log(indexelm);
        ParentAdd.pop();
        console.log(ParentAdd);
    }
    const [open, setOpen] = useState(false);
    const handleChange = (e) => {
        this.setState({ isRadioSelected: true });

    }
    const [showhide, setShowhide] = useState("No");
    const handleshow = e => {
        const getshow = e.target.value;
        setShowhide(getshow);
    };
    const handleChangePurpose=(e)=>{
        setSelectPurpose(e.target.value)
        if(e.target.value==="08"){
            // setDisplayCommercial({display:"none"})
            console.log("handleChangePurpose")
            if (displayDdjayForm.display==="none" ) {
                setDisplayDdjayForm({display:"block"});
                const data = {"displayDdjayForms": {displayDdjayForms:"block"}}
               
               dispatch(setDisplayDDAJForm(data)) 
            }
            else{
                setDisplayDdjayForm({display:"none"});
                const data = {"displayDdjayForms": {displayDdjayForms:"none"}}
               dispatch(setDisplayDDAJForm(data)) 
            }
        
        }
        // else if (e.target.value==="01") {
        //     setDisplayDdjayForm({display:"none"});
        //     setDisplayCommercial({display:"block"});
        // }
    }

    
    return (
        <Form onSubmit={PurposeFormSubmitHandler}>
            <Form.Group className="justify-content-center" controlId="formBasicEmail">
                <Row className="ml-auto" style={{ marginBottom: 5 }}>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label><b>Puropse Of License</b> <span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Select type="text" defaultValue={purposeDd} placeholder="Puropse"  onChange={handleChangePurpose} value={purposeDd} >

                            <option value="01">Plotted Commercial</option>
                            <option value="02">Group Housing Commercial</option>
                            <option value="03">AGH </option>
                            <option value="04">Commercial Integrated </option>
                            <option value="05">Commercial Plotted</option>
                            <option value="06">Industrial Colony Commercial</option>
                            <option value="07" >IT Colony Commercial</option>
                            <option value="08" >DDJAY</option>
                            <option value="12">TOD Group housing</option>
                        </Form.Select>
                    </Col>
                    <div className="col col-3">
                            <label htmlFor="potential"><h6><b>Potential Zone:</b></h6></label>
                            <select className="form-control" id="potential"
                                name="potential" 
                            >
                                <option value="" >--Potential Zone--
                                </option>
                                <option value="K.Mishra">Hyper</option>
                                <option value="potential 1">High I</option>
                                <option value="potential 2">High II</option>
                                <option value="potential 2">Medium</option>
                                <option value="potential 2">Low I</option>
                                <option value="potential 2">Low II</option>
                            </select>
                        
                        </div>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label><b>District</b> <span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Select type="text" defaultValue="Select" placeholder="District" onChange={(e) => setDistrict2(e.target.value)} value={district2}>
                            {(districtData !== undefined && districtData.length > 0) ?
                                (districtData.map((el, i) =>
                                    <option value={el.districtCode}>{el.districtName}</option>)) :
                                <option value="1">no district</option>}


                        </Form.Select>
                    </Col>
                    <Col md={4} xxl lg="3">
                        <div>
                            <Form.Label><b>State </b><span style={{ color: "red" }}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" defaultValue="Haryana" disabled  >

                        </Form.Control>
                    </Col>
                   

                </Row>

                {/* <Row className="ml-auto" style={{marginBottom:5}}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Name of Revenue estate</Form.Label>
                        </div>
                        <Form.Select type="text" defaultValue="Select" onChange={(e)=>setRevenueName(e.target.value)} value={revenueName} >
                        <option>revenuestate 1</option>
                                                        <option>revenuestate 2</option>
                                                        <option>revenuestate 3</option>
                                                        <option>revenuestate 4</option>
                                                        <option>revenuestate 5</option>
                        </Form.Select>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Khewat <span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text"  minLength={1} maxLength={10} pattern="[0-9]*"
                        onChange={(e)=>setKhewat(e.target.value)} value={khewat} onChange1={handleKhewatChange} >
                        {errors.khewat && <p></p>} 
                        </Form.Control>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Mustil /Killa No.<span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <Form.Select type="text" defaultValue="Select" placeholder="Tehshil"   onChange={(e)=>setMustil(e.target.value)} value={mustil} >
                           
                        <option>mustil 1</option>
                                                        <option>mustil 2</option>
                                                        <option>mustil 3</option>
                                                        <option>mustil 4</option>
                                                        <option>mustil 5</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row className="ml-auto" style={{marginBottom:5}}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Killa<span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text"  
                        onChange={(e)=>setKilla(e.target.value)} value={killa} >
                           
                        </Form.Control>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Sector</Form.Label>
                        </div>
                        <Form.Select type="text" defaultValue="Select" placeholder="Developer"  onChange={(e)=>setSector(e.target.value)} value={sector} >
                            <option value="1">12</option>
                            <option value="2">14</option>
                            <option value="3">15</option>
                            <option value="3">16</option>
                        </Form.Select>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Area in Kanal<span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text"   minLength={1} maxLength={10}  pattern="[0-9]*"
                        onChange={(e)=>setKanal(e.target.value)} value={kanal} onChange1={handleKanalChange} >
                        {errors.kanal && <p></p>} 
                           
                        </Form.Control>
                    </Col>
                </Row>
                <Row className="ml-auto" style={{marginBottom:5}}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Area in Marla<span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" minLength={1} maxLength={10}  pattern="[0-9]*"
                        onChange={(e)=>setMarla(e.target.value)} value={marla} onChange1={handleMarlaChange} >
                        {errors.marla && <p></p>} 
                           
                           
                        </Form.Control>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Name of Land Owner</Form.Label>
                        </div>
                        <Form.Control type="text" disabled >
                           
                        </Form.Control>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Village<span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <Form.Select type="text" defaultValue="Select" placeholder="Tehshil"  onChange={(e)=>setVillage2(e.target.value)} value={village2} >
                           
                        <option>village 1</option>
                                                        <option>village 2</option>
                                                        <option>village 3</option>
                           </Form.Select>
                    </Col>
                </Row>
                <Row className="ml-auto" style={{marginBottom:5}}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Khasra No. / Khewat<span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text"  minLength={1} maxLength={20}  pattern="[0-9]*"
                        onChange={(e)=>setKhasra(e.target.value)} value={Khasra} onChange1={handleKhasraChange} >
                        {errors.Khasra && <p></p>} 
                           
                        </Form.Control>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Khatoni No</Form.Label>
                        </div>
                        <Form.Control type="text"  minLength={1} maxLength={20}  pattern="[0-9]*"
                        onChange={(e)=>setKhatoni(e.target.value)} value={khatoni} onChange1={handleKhatoniChange} >
                        {errors.khatoni && <p></p>} 
                           
                           
                        </Form.Control>
                    </Col>
                   
                </Row> */}


                {/* <div className="ml-auto" style={{marginTop:20}}>
                    <h2 style={{fontSize:24}}>I. General Information:</h2>
                    <p>1. Name and status of the land owner (individual/ company/ firm/ LLP etc.) be provided in the following table:-</p>
                </div>

                {PurposeAdd.map((el,i)=>el)}
                <Col className="ml-auto" style={{display:"flex"}}>
                <Button onClick={AddMorfield} style={{marginTop:10, marginRight:10}}>Add More</Button>
                <Button variant="danger" onClick={RemoveMorfield} style={{marginTop:10}}>Remove</Button>
                </Col>
                <div className="ml-auto" style={{marginTop:20}}>
                    <h4  style={{fontSize:20}}>(Enclose the following documents as Annexures)</h4>
                </div>

                <Row className="ml-auto" style={{marginBottom:5}}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Land schedule</Form.Label>
                        </div>
                        <Form.Control type="file"></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Copy of Mutation</Form.Label>
                        </div>
                        <Form.Control type="file"></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Copy of Jamabandi</Form.Label>
                        </div>
                        <Form.Control type="file"></Form.Control>
                    </Col>
                </Row>
                <Row className="ml-auto" style={{marginBottom:5}}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Details of lease / patta, if any</Form.Label>
                        </div>
                        <Form.Control type="file"></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Copy of Sajra Plan</Form.Label>
                        </div>
                        <Form.Control type="file"></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Another Copy of Sajra Plan</Form.Label>
                        </div>
                        <Form.Control type="file"></Form.Control>
                    </Col>
                </Row>
                <div className="ml-auto">
                    <h4 style={{fontSize:16, marginTop:10}}>2. Name of Developer</h4>
                </div>
                <Row className="ml-auto" style={{marginBottom:5}}>
                    <Col md={4} xxl lg="4">
                        <Form.Select type="text" defaultValue="Select" placeholder="Tehshil" >
                            <option value="1">Developer 1</option>
                            <option value="2">Developer 2</option>
                            <option value="3">Developer 3</option>
                            <option value="3">Developer 4</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row className="ml-auto" style={{marginBottom:5}}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>(i) Status (please specify whether individual/ company/ firm/ LLP etc.)</Form.Label>
                        </div>
                        <Form.Select type="text" defaultValue="Select" placeholder="Tehshil" >
                            <option value="1">Company</option>
                            <option value="2">Manager</option>
                        </Form.Select>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>(ii) Permanent address in case of individual/ registered office address in case other than individual</Form.Label>
                        </div>
                        <Form.Control type="text" placeholder="Permanent address in case of individual" />
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>(iii) Address for the purpose of communication</Form.Label>
                        </div>
                        <Form.Control type="text" placeholder="Address for the purpose of communication" />
                    </Col>
                    
                </Row>
                <Row className="ml-auto" style={{marginBottom:5}}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>(iv) Name of authorized person to sign the application</Form.Label>
                        </div>
                        <Form.Control type="text" placeholder="Permanent address in case of individual" />
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>(v) Mobile No. for communication</Form.Label>
                        </div>
                        <Form.Control type="text" placeholder="Permanent address in case of individual" />
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>(vi) Email ID for communication</Form.Label>
                        </div>
                        <Form.Control type="text" placeholder="Address for the purpose of communication" />
                    </Col>
                    
                </Row> */}
                {/* <div class="my-3">
                                            <p style="margin-bottom:0.5rem;">(Enclose the following documents as
                                                Annexures)</p>
                                             <button class="btn btn-primary" data-toggle="modal" data-target="#appPurpose">Upload Documents</button>
                                            <div class="form-row">
                                                <div class="form-group col-md-4 mb-2">
                                                    <label class="font-weight-bold text-black ">Land schedule
                                                    </label>
                                                    <button class="btn btn-primary">View Document</button>
                                                </div>
                                                <div class="form-group col-md-4 mb-2">
                                                    <label class="font-weight-bold text-black ">Copy of Mutation
                                                    </label>
                                                    <button class="btn btn-primary">View Document</button>
                                                </div>
                                                <div class="form-group col-md-4 mb-2">
                                                    <label class="font-weight-bold text-black ">Copy of Jamabandi
                                                    </label>
                                                    <button class="btn btn-primary">View Document</button>
                                                </div>
                                                <div class="form-group col-md-4 mb-2">
                                                    <label class="font-weight-bold text-black ">Details of lease /
                                                        patta, if any </label>
                                                    <button class="btn btn-primary">View Document</button>
                                                </div>
                                                <div class="form-group col-md-4 mb-2">
                                                    <label class="font-weight-bold text-black ">Copy of Sajra
                                                        Plan</label>
                                                    <button class="btn btn-primary">View Document</button>
                                                </div>
                                                <div class="form-group col-md-4 mb-2">
                                                    <label class="font-weight-bold text-black ">Another Copy of
                                                        Sajra Plan</label>
                                                    <button class="btn btn-primary">View Document</button>
                                                </div>
                                            </div>
                                        </div> */}
                <div className="ml-auto" style={{ marginTop: 20 }}>
                    <h2 style={{ fontSize: 24 }}>2. Details of applied land:</h2>
                    <p>Note: The term “Collaboration agreement" shall include all Development agreements/ Joint Venture agreements/ Joint Development agreements/ Memorandum of Understanding etc. and similar agreements registered with competent authority.</p>
                    <p><b>(i) Khasra-wise information to be provided in the following format:</b></p>
                </div>
                <div className="ml-auto">
                    <Button variant="primary" onClick={handleShow}>
                        Enter Details
                    </Button>
                    <div >
                        <Modal  {...props}
                            size="xl"
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                        >

                            <Modal.Header closeButton>

                            </Modal.Header>

                            <Modal.Body>

                                <Row className="ml-auto mb-3" >
                                    <Col md={4} xxl lg="4">
                                        <div>
                                            <Form.Label><h6><b>Tehsil</b></h6></Form.Label>
                                        </div>
                                        <Form.Select type="text" defaultValue="Select" value={tehsil} onChange={(e) => setTehsil(e.target.value)}>
                                            {(tehsilData !== undefined && tehsilData.length > 0) ?
                                                (tehsilData.map((el, i) =>
                                                    <option value={el.code}>{el.name}</option>)) :
                                                <option value="1">--Select Tehsil--</option>}
                                        </Form.Select>
                                    </Col>
                                    <Col md={4} xxl lg="4">
                                        <div>
                                            <Form.Label><h6><b>Name of Revenue estate</b></h6></Form.Label>
                                        </div>
                                        <Form.Select type="text" defaultValue="Select" onChange={(e) => setRevenueName(e.target.value)} value={revenueName} >
                                            {(revenueData !== undefined && revenueData.length > 0) ?
                                                (revenueData.map((el, i) =>
                                                    <option value={el.code}>{el.name}</option>)) :
                                                <option value="1">--Select Revenue State--</option>}
                                        </Form.Select>
                                    </Col>
                                    <Col md={4} xxl lg="4">
                                        <div>
                                            <Form.Label><h6><b>Rectangle No./Mustil</b></h6><i class=" fa fa-calculator"></i></Form.Label>
                                        </div>
                                        <Form.Select type="text" defaultValue="Select" placeholder="Tehshil" onChange={(e) => setMustil(e.target.value)} value={mustil} >
                                            {console.log("jjj", mustilData)}
                                            {(mustilData !== undefined && mustilData.length > 0) ?
                                                (mustilData.map((el, i) =>
                                                    <option value={el}>{el}</option>)) :
                                                <option value="1">--Select Mustil--</option>}
                                        </Form.Select>
                                    </Col>

                                </Row><br></br>
                                <Row className="ml-auto mb-3" >
                                    <Col md={4} xxl lg="4">
                                        <div>
                                            <label ><h6><b>Sector</b></h6> </label>
                                            <input type="number" className="form-control" />
                                        </div>
                                    </Col>

                                    <Col md={4} xxl lg="4">
                                        <div>
                                            <label ><h6><b>Consolidation Type</b></h6> </label>
                                            <Form.Select type="select" defaultValue="Select"  >
                                                <option>Consolidated</option>
                                                <option>Non Consolidated</option>
                                            </Form.Select>
                                        </div>
                                    </Col>

                                </Row>
                                <table className="table table-bordered" style={{ backgroundColor: "rgb(251 251 253))" }}>
                                    <thead>
                                        <tr>
                                            <th><b>Killa</b></th>
                                            <th><b>Khewat</b></th>
                                            <th><b>Area in Kanal</b>&nbsp;&nbsp;<CalculateIcon color="primary" /></th>
                                            <th><b>Area in Marla</b>&nbsp;&nbsp;<CalculateIcon color="primary" /></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> <TextField id="standard-basic" variant="standard" /></td>
                                            <td> <TextField id="standard-basic" variant="standard" /></td>
                                            <td> <TextField id="standard-basic" variant="standard" /></td>
                                            <td>  <TextField id="standard-basic" variant="standard" /></td>
                                        </tr>
                                    </tbody>
                                </table>

                                <Row className="ml-auto mb-3" >
                                    <Col md={4} xxl lg="6">
                                        <div>
                                            <label ><h6><b>Name of Land Owner</b></h6> </label>

                                        </div>
                                    </Col>
                                    <Col md={4} xxl lg="6">
                                        <input type="text" className="form-control" />

                                    </Col>
                                </Row>
                                <Row className="ml-auto mb-3" >

                                    <div className="col col-12">
                                        <h6 data-toggle="tooltip" data-placement="top" title="Whether collaboration agreement entered for the Khasra?(yes/no)"><b>(h)&nbsp;Collaboration agreement&nbsp;<InfoIcon style={{color:"blue"}}/> </b>&nbsp;&nbsp;
                                      
                                                                <input type="radio" value="Yes" id="Yes"
                                                                    onChange={handleChange} name="Yes" onClick={handleshow1} />&nbsp;&nbsp;
                                                                <label for="Yes"><h6><b>Yes</b></h6></label>&nbsp;&nbsp;
                                                                <input type="radio" value="No" id="No"
                                                                    onChange={handleChange} name="Yes" onClick={handleshow1} />&nbsp;&nbsp;
                                                                <label for="No"><h6><b>No</b></h6></label></h6>
                                        {
                                            showhide1 === "Yes" && (
                                                <div className="row "  >
                                                    <div className="col col-4">
                                                        <label for="parentLicense" className="font-weight-bold"><h6><b>Name of the developer company / Firm/ LLP etc. with whom collaboration agreement entered</b></h6></label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="col col-4" style={{ marginTop: 15 }}>
                                                        <label for="parentLicense" className="font-weight-bold"><h6><b>Date of registering collaboration agreement</b></h6></label>
                                                        <input type="date" className="form-control" />

                                                    </div>
                                                    <div className="col col-4" style={{ marginTop: 15 }}>
                                                        <label for="parentLicense" className="font-weight-bold"><h6><b>Date of validity of collaboration agreement</b></h6></label>
                                                        <input type="date" className="form-control" />

                                                    </div>
                                                    <div className="col col-4" style={{ marginTop: 35 }}>
                                                        <label for="parentLicense" className="font-weight-bold"><h6><b>Whether collaboration agreement irrevocable (Yes/No)</b></h6></label><br></br>
                                                        <input type="radio" value="Yes" id="Yes1"
                                                            onChange={handleChange} name="Yes" />&nbsp;&nbsp;
                                                        <label for="Yes"><h6>Yes</h6></label>&nbsp;&nbsp;

                                                        <input type="radio" value="No" id="No1"
                                                            onChange={handleChange} name="Yes" />&nbsp;&nbsp;
                                                        <label for="No"><h6>No</h6></label>
                                                    </div>

                                                    <div className="col col-4" style={{ marginTop: 35 }}>
                                                        <label for="parentLicense" className="font-weight-bold"><h6><b>Name of authorized signatory on behalf of land owner(s)</b></h6></label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="col col-4" style={{ marginTop: 15 }}>
                                                        <label for="parentLicense" className="font-weight-bold"><h6><b>Name of authorized signatory on behalf of developer to sign Collaboration agreement</b></h6></label>
                                                        <input type="date" className="form-control" />

                                                    </div>
                                                    <div className="col col-4" style={{ marginTop: 20 }}>
                                                        <label for="parentLicense" className="font-weight-bold"><h6><b>Registring Authority</b></h6></label><br></br>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="col col-4" style={{ marginTop: 15 }}>
                                                        <label for="parentLicense" className="font-weight-bold"><h6><b>Registring Authority document</b></h6></label><br></br>
                                                        <input type="file" className="form-control" />
                                                    </div>
                                                </div>

                                            )}

                                    </div>
                                </Row>
                            </Modal.Body>
                            <Modal.Footer >

                                <Button variant="primary">Submit</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
                <br></br>

                <div className="applt" style={{ overflow: "auto" }}>
                    <table className="table table-bordered" style={{ backgroundColor: "rgb(251 251 253))", overflow: "auto" }}>
                        <thead>
                            <tr>
                                <th>Tehsil</th>
                                <th>Revenue estate</th>
                                <th>Rectangle No.</th>
                                <th>Killa</th>
                                <th>Land owner</th>
                                <th>Consolidation Type</th>
                                <th>Kanal</th>
                                <th>Marla</th>
                                <th>Sarsai</th>
                                <th>Bigha</th>
                                <th>Biswa</th>
                                <th>Biswansi</th>
                                <th>Area &nbsp;&nbsp;<CalculateIcon color="primary" /></th>
                                <th>  <h6 data-toggle="tooltip" data-placement="top" title="Whether collaboration agreement entered for the Khasra?(yes/no)"><b>Collaboration agreement&nbsp;&nbsp;<InfoIcon style={{color:"blue"}}/> </b>&nbsp;&nbsp;</h6>
                                </th>
                                {/* <th> {
                                            showhide2==="Yes" && (
                                                <div className="row "  >
                                               <div className="col col-4">
                                                    <label for="parentLicense" className="font-weight-bold">Name of the developer company / Firm/ LLP etc. with whom collaboration agreement entered</label>
                                                   
                                                    </div>
                                                   
                                                </div>)}</th>
                                                <th> {
                                            showhide2==="Yes" && (
                                                <div className="row "  >
                                               <div className="col col-4">
                                                    <label for="parentLicense" className="font-weight-bold">Date of registering collaboration agreement</label>
                                                   
                                                    </div>
                                                   
                                                </div>)}</th>
                                                <th> {
                                            showhide2==="Yes" && (
                                                <div className="row "  >
                                               <div className="col col-4">
                                                    <label for="parentLicense" className="font-weight-bold">Date of validity of collaboration agreement</label>
                                                   
                                                    </div>
                                                   
                                                </div>)}</th> */}
                                {/* <th>Name of the developer company / Firm/ LLP etc. with whom
                                    collaboration agreement entered</th>
                                <th>Date of registering collaboration agreement</th>
                                <th>Date of validity of collaboration agreement</th>
                                <th>Whether collaboration agreement irrevocable (Yes/No)</th>
                                <th>Name of authorized signatory on behalf of land owner(s)</th>
                                
                                <th>Name of authorized signatory on behalf of developer to sign
                                    Collaboration agreement</th>
                                
                                <th>Registring Authority</th> */}

                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td ><input type="text" className="form-control" disabled/></td>
                                <td ><input type="text" className="form-control"disabled /></td>
                                <td ><input type="text" className="form-control"disabled /></td>
                                <td class="text-center"><input type="text" className="form-control"disabled /></td>
                                <td class="text-center"><input type="text" className="form-control" disabled/></td>
                                <td class="text-center"> <input type="text" className="form-control"disabled /> </td>
                                <td class="text-center"><input type="text" className="form-control" disabled/></td>
                                <td class="text-center"><input type="text" className="form-control" disabled/></td>
                                <td class="text-center"><input type="text" className="form-control" disabled/></td>
                                <td class="text-center"><input type="text" className="form-control" disabled/></td>
                                <td class="text-center"><input type="text" className="form-control" disabled/></td>
                                <td class="text-center"><input type="text" className="form-control" disabled/></td>
                                <td class="text-center"><input type="text" className="form-control"disabled /></td>
                                <td class="text-center"> <input type="text" className="form-control"disabled /></td>
                                {/* <td>{
                                            showhide2==="Yes" && (
                                                
                                                    <input type="text" className="form-control"/>
                                                   )}</td>
                                                      <td>{
                                            showhide2==="Yes" && (
                                                
                                                    <input type="text" className="form-control"/>
                                                   )}</td>
                                                      <td>{
                                            showhide2==="Yes" && (
                                                
                                                    <input type="text" className="form-control"/>
                                                   )}</td> */}


                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* <div className="col-md-12 mb-3">
                                        <h4 class="text-black">5. Documents required in Migration:- <span
                                                class="text-danger"><b>*</b></span></h4>
                                        <div class="rounded border shadow-sm p-2 mb-3"> 
                                            <p><b>1. Approved Layout of Plan/ Site plan for(GH)Showing Area(s)/Proposed
                                                    migration</b> &nbsp;&nbsp;&nbsp;

                                                <button class="btn btn-info d-none"><i class="fa fa-eye"></i></button>
                                                <button class="btn btn-info"><i class="fa fa-upload"></i></button>
                                            </p>
                                            <p><b>2. Proposed Layout of Plan /site plan for area applied for
                                                    migration.</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <button class="btn btn-info d-none"><i class="fa fa-eye"></i></button>
                                                <button class="btn btn-info"><i class="fa fa-upload"></i></button>
                                            </p>
                                            <p><b>3. Revised Land Schedule </b>&nbsp;&nbsp;&nbsp;
                                                <button class="btn btn-info d-none"><i class="fa fa-eye"></i></button>
                                                <button class="btn btn-info"><i class="fa fa-upload"></i></button>
                                            </p> 
                    </div>
                    </div> */}

            </Form.Group>
            <Button style={{ alignSelf: "center", marginTop: 20 }} variant="primary" type="submit">
                Save as Draft
            </Button>
            <Button style={{ alignSelf: "center", marginTop: -48, marginLeft: 958 }} variant="primary" type="submit">
                Continue
            </Button>
        </Form>

    )
}

export default ApllicantPuropseForm;