import React, { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
// import Row from "react-bootstrap/Row";
// import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "../Developer/AddInfo.css";
import "../Developer/Add1.css";
import UploadDocuments from "./UploadDocuments";
import classnames from 'classnames';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import axios from "axios"
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

function AddInfo() {
  const [modal, setmodal] = useState(false);
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("https://apisetu.gov.in/mca/v1/companies/U72200CH1998PTC022006").then((result) => {
      result.json().then((resp) => {
        setData(resp)
      })
    })
  }, [])
  console.warn(data)
  const {
    register,
    handleSumit,
    formState: { error },
  } = useForm([
    { Sr: "", name: "", mobileNumber: "", email: "", PAN: "", Aadhar: "" },
  ]);
  const formSubmit = (data) => {
    console.log("data", data);
  };
  const [FormSubmitted, setFormSubmitted] = useState(false);
  const [showhide, setShowhide] = useState("No");
  const [cin_Number, setCinNo] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [dateOfCorporation, setIncorporation] = useState("");
  const [registeredAddress, setRegistered] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobile] = useState("");
  const [gst_Number, setGST] = useState("");
  const [sharName, setTbName] = useState("");
  const [designition, setDesignition] = useState("");
  const [percentage, setPercetage] = useState("");
  const [uploadPdf, setUploadPDF] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [DirectorData,setDirectorData]=useState([]);
  const handleshow = (e) => {
    const getshow = e.target.value;
    setShowhide(getshow);
  };

  const HandleGetMCNdata=async()=>{
    try{
      if (cin_Number.length===21) {
        const Resp = await axios.get("/mca/v1/companies/U72200CH1998PTC022006", {headers:{
          'Content-Type': 'application/json',
          'X-APISETU-APIKEY':'PDSHazinoV47E18bhNuBVCSEm90pYjEF',
          'X-APISETU-CLIENTID':'in.gov.tcpharyana',
          'Access-Control-Allow-Origin':"*",
        }})

        const Directory = await axios.get("/mca-directors/v1/companies/U72200CH1998PTC022006", {headers:{
          'Content-Type': 'application/json',
          'X-APISETU-APIKEY':'PDSHazinoV47E18bhNuBVCSEm90pYjEF',
          'X-APISETU-CLIENTID':'in.gov.tcpharyana',
          'Access-Control-Allow-Origin':"*",
        }})

        console.log(Resp.data)
        console.log(Directory.data);
        setDirectorData(Directory.data);
        setCompanyName(Resp.data.companyName)
        setIncorporation(Resp.data.dateOfCorporation)
        setEmail(Resp.data.email)
        //console.log(Resp.data.Email)
     setRegistered(Resp.data.registeredAddress)
     setMobile(Resp.data.registeredContactNo)
   //  setGST(Resp.data.GST)

      }
    }catch(error){

      console.log(error.message);

    }
}

useEffect(()=>{
  HandleGetMCNdata();
},[cin_Number])

const postAddInfo=async()=>{

  try{
    const Resp =  await axios.post("http://localhost:8081/user/developer/_registration",
    {headers:{
        'Content-Type': 'application/json',
        'Access-Control-Allow-origin':"*",
    }})
    .then((Resp)=>{
        console.log("FORMDATA",Resp)
        return Resp;
    })

  }catch(error){
    console.log(error)
  }
}

  const [noofRows, setNoOfRows] = useState(1);
  const [aoofRows, setAoOfRows] = useState(1);
  const AddInfoForm = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    let devDetail = {
      cin_Number: cin_Number,
      companyName: companyName,
      dateOfCorporation: dateOfCorporation,
      registeredAddress: registeredAddress,
      email: email,
      mobileNumber: mobileNumber,
      gst_Number: gst_Number,
      sharName: sharName,
      uploadPdf: uploadPdf,
      percentage: percentage,
      designition: designition,
      serialNumber: serialNumber,
    };
    // let form2 = {
    //   TbName: TbName,
    //   Designition: Designition,
    //   Percetage: Percetage,
    //   UploadPDF: UploadPDF,
    // }
    try {
      let res = await axios.post("http://localhost:8081/user/developer/_registration",devDetail,{
        headers:{
          'Content-Type': 'application/json',
          'Access-Control-Allow-origin':"http://localhost:8081",
      }
      }).then((response)=>{
        return response
      });
      console.log("FORMDATA",res)
      
    } catch (err) {
      console.log(err);
    }
    localStorage.setItem("devDetails", JSON.stringify(devDetail));
    devDetail.push();
    // let frmData = JSON.parse(localStorage.getItem("step1a") || "[]");




    useEffect(()=>{
      postAddInfo();
    },[]);
  };

  return (

    // <div>
    // <Nav tabs className='abc'>
    //     <div className='.cont-2'></div>
    //       <NavItem>
    //         <NavLink
    //           className={classnames({ active: this.state.activeTab === '1' })}
    //           onClick={() => { this.toggle('1'); }}
    //         >
    //           Applicant info
    //         </NavLink>
    //       </NavItem>
    //       <NavItem>
    //         <NavLink
    //           className={classnames({ active: this.state.activeTab === '2' })}
    //           onClick={() => { this.toggle('2'); }}
    //         >
    //           Applicant Purpose
    //         </NavLink>
    //       </NavItem>
    //       <NavItem>
    //         <NavLink
    //           className={classnames({ active: this.state.activeTab === '3' })}
    //           onClick={() => { this.toggle('3'); }}
    //         >
    //           Applied Areas
    //         </NavLink>
    //       </NavItem>
    //       <NavItem>
    //         <NavLink
    //           className={classnames({ active: this.state.activeTab === '4' })}
    //           onClick={() => { this.toggle('4'); }}
    //         >
    //           Engineer and Architecture Details
    //         </NavLink>
    //       </NavItem>
    //       <NavItem>
    //         <NavLink
    //           className={classnames({ active: this.state.activeTab === '5' })}
    //           onClick={() => { this.toggle('5'); }}
    //         >
    //         Fees and Charges
    //         </NavLink>
    //       </NavItem>
    //     </Nav>
    // //     </div
    //     {/* <Box> */}
    // {/* <TabContent activeTab={this.state.activeTab}>
    //   <TabPane tabId="5"> */}
    <div>


      <Form onSubmit={AddInfoForm}>
        {/* <div className="container my-5">
        <div className="row mt-4">
          <div className=" col-12 m-auto"> */}

        <div className="happy">
          <div className="bigCard">
            <div className="card">
              <div>
                <h4 className="card-h">
                  {" "}
                  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;Developer
                </h4>
                <h4 className="card-h">
                  {" "}
                  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;1. Developer Details:
                </h4>
              </div>
              <div className="card shadow">
                {/* <div className="card-header">
                <h5 className="card-title"> Developer</h5>
              </div> */}

                <div className="card-body">
                  <div className="row">
                    <div className="col col-4">
                      <div className="form-group">
                        <label htmlFor="name">CIN Number/LLP Pin</label>
                        <input
                          type="text"
                          onChange={(e) => setCinNo(e.target.value)}
                          value={cin_Number}
                          className="form-control"
                        // placeholder=""
                        // {...register("name", {
                        //   required: "Name is required",
                        //   pattern: {
                        //     value: /^[a-zA-Z]+$/,
                        //     message: "Name must be a valid string",
                        //   },
                        //   minLength: {
                        //     value: 3,
                        //     message:
                        //       "Name should be greater than 3 characters",
                        //   },
                        //   maxLength: {
                        //     value: 20,
                        //     message:
                        //       "Name shouldn't be greater than 20 characters",
                        //   },
                        // })}
                        />
                      </div>
                    </div>
                    <div className="col col-4">
                      <div className="form-group">

                        <label htmlFor="name">Company Name/LLP Pin</label>

                        <input
                          type="text"
                          value={companyName}
                          placeholder={companyName}
                          className="form-control"
                        // placeholder=""
                        // {...register("name", {
                        //   required: "Name is required",
                        //   pattern: {
                        //     value: /^[a-zA-Z]+$/,
                        //     message: "Name must be a valid string",
                        //   },
                        //   minLength: {
                        //     value: 3,
                        //     message:
                        //       "Name should be greater than 3 characters",
                        //   },
                        //   maxLength: {
                        //     value: 20,
                        //     message:
                        //       "Name shouldn't be greater than 20 characters",
                        //   },
                        // })}
                        />
                      </div>
                    </div>
                    <div className="col col-4">
                      <div className="form-group">
                        <label htmlFor="name">Date of Incorporation</label>
                        <input
                          type="text"
                          value={dateOfCorporation}
                          placeholder={dateOfCorporation}
                          className="form-control"
                        // placeholder=""
                        // {...register("name", {
                        //   required: "Name is required",
                        //   pattern: {
                        //     value: /^[a-zA-Z]+$/,
                        //     message: "Name must be a valid string",
                        //   },
                        //   minLength: {
                        //     value: 3,
                        //     message:
                        //       "Name should be greater than 3 characters",
                        //   },
                        //   maxLength: {
                        //     value: 20,
                        //     message:
                        //       "Name shouldn't be greater than 20 characters",
                        //   },
                        // })}
                        />
                      </div>
                    </div>

                    <div className="col col-4">
                      <div className="form-group">
                        <label htmlFor="name">Registered Address</label>
                        <input
                          type="text"
                          value={registeredAddress}
                         placeholder={registeredAddress}
                          className="form-control"
                        // name="name"
                        // className={`form-control`}
                        // placeholder=""
                        // {...register("name", {
                        //   required: "Name is required",
                        //   pattern: {
                        //     value: /^[a-zA-Z]+$/,
                        //     message: "Name must be a valid string",
                        //   },
                        //   minLength: {
                        //     value: 3,
                        //     message:
                        //       "Name should be greater than 3 characters",
                        //   },
                        //   maxLength: {
                        //     value: 20,
                        //     message:
                        //       "Name shouldn't be greater than 20 characters",
                        //   },
                        // })}
                        />
                      </div>
                    </div>
                    <div className="col col-4">
                      <div className="form-group ">
                        <label htmlFor="email"> Email </label>
                        <input
                          type="text"
                          value={email}
                         placeholder={email}
                          className="form-control"
                        // name="email"
                        // className={`form-control`}
                        // placeholder=""
                        // {...register("email", {
                        //   required: "Email is required",
                        //   pattern: {
                        //     value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                        //     message: "Email must be a valid email address",
                        //   },
                        // })}
                        />
                        {/* <div className="invalid-feedback">
                          {errors?.email?.message}
                        </div> */}
                      </div>
                    </div>
                    <div className="col col-4">
                      <div className="form-group">
                        <label htmlFor="name">Mobile No.</label>
                        <input
                          type="text"
                          value={mobileNumber}
                          placeholder={mobileNumber}
                          className="form-control"
                        // name="name"
                        // className={`form-control`}
                        // placeholder=""
                        // {...register("name", {
                        //   required: "Name is required",
                        //   pattern: {
                        //     value: /^[a-zA-Z]+$/,
                        //     message: "Name must be a valid string",
                        //   },
                        //   minLength: {
                        //     value: 3,
                        //     message:
                        //       "Name should be greater than 3 characters",
                        //   },
                        //   maxLength: {
                        //     value: 20,
                        //     message:
                        //       "Name shouldn't be greater than 20 characters",
                        //   },
                        // })}
                        />
                        {/* <div className="invalid-feedback">
                          {errors?.name?.message}
                        </div> */}
                      </div>
                    </div>
                    <div className="col col-4">
                      <div className="form-group">
                        <label htmlFor="name">GST No.</label>
                        <input
                          type="text"
                          value={gst_Number}
                         placeholder={gst_Number}
                          className="form-control"
                        // className={`form-control`}
                        // placeholder=""
                        // {...register("name", {
                        //   required: "Name is required",
                        //   pattern: {
                        //     value: /^[a-zA-Z]+$/,
                        //     message: "Name must be a valid string",
                        //   },
                        //   minLength: {
                        //     value: 3,
                        //     message:
                        //       "Name should be greater than 3 characters",
                        //   },
                        //   maxLength: {
                        //     value: 20,
                        //     message:
                        //       "Name shouldn't be greater than 20 characters",
                        //   },
                        // })}
                        />
                        {/* <div className="invalid-feedback">
                          {errors?.name?.message}
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h5 className="card-h">
                {" "}
                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;2. Shareholding Patterns
              </h5>
              <div className="card shadow">
                <div className="card-body">
                  <div className="table-bd">
                    <Table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Sr. No</th>
                          <th>Name</th>
                          <th>Designition</th>
                          <th>Percentage</th>
                          <th>Upload PDF</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[...Array(noofRows)].map((elementInArray, input) => {
                          return (
                            <tr>
                              <td>1</td>
                              <td>
                                <input
                                  type="text"
                                  value={sharName}
                                  placeholder=""
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  value={designition}
                                  placeholder=""
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  value={percentage}
                                  placeholder=""
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="file"
                                  value={uploadPdf}
                                  placeholder=""
                                  class="form-control"
                                />
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </div>
                  {/* <div className="form-group col-md2 mt-4">
                        <button  className="btn btn-success" >Add More
                          
                        </button>
                      </div> */}

                  {/* <button
                      type="button"
                      style={{ float: "left" }}
                      className="btn btn-primary"
                      onClick={() => setNoOfRows(noofRows + 1)}
                    >
                      Add More
                    </button> */}
                  <div>
                    <button
                      type="button"
                      style={{
                        color: "white",
                      }}
                      className="btn btn-primary mt-3"
                      // onClick={() => setNoOfRows(noofRows + 1)}
                      onClick={() => setmodal(true)}
                    >
                      Add More
                    </button>

                    <div>
                      <Modal
                        size="lg"
                        isOpen={modal}
                        toggle={() => setmodal(!modal)}
                      >
                        <ModalHeader
                          toggle={() => setmodal(!modal)}
                        ></ModalHeader>

                        <ModalBody>
                          <div className="card2">
                            <div className="popupcard">
                              {/* <h5 className="card-h">Add/Remove Authorized Users</h5> */}
                              {/* <div className="table-bd">
                                  <Table className="table table-bordered">
                                    <thead>
                                      <tr>
                                        <th>Add More</th>
                                        
                                        
                                        <th> Licence No / year and date of grant of licence </th>
                                        <th>Name of developer *</th>
                                        <th>Purpose of colony </th>
                                        <th>Sector and development plan </th>
                                        <th>Validity of licence including renewals if any</th>
                                        <th>Remove</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {[...Array(noofRows)].map((elementInArray, input) => {
                                        return (
                                          <tr>
                                            <td>
                                              <button
                                                type="button"
                                                style={{ float: "left" }}
                                                className="btn btn-primary"
                                                onClick={() => setNoOfRows(noofRows + 1)}
                                              >
                                                <AddIcon />
                                              </button>
                                            </td>
                                          
                                            <td>
                                              <input
                                                type="text"
                                                name="name[]"
                                                placeholder=""
                                                class="form-control"
                                              />
                                            </td>
                                            <td>
                                              <input
                                                type="text"
                                                name="mobile[]"
                                                placeholder=""
                                                class="form-control"
                                              />
                                            </td>
                                            <td>
                                              <input
                                                type="email"
                                                name="email[]"
                                                placeholder=""
                                                class="form-control"
                                              />
                                            </td>
                                            <td>
                                              <input
                                                type="file"
                                                name="upload"
                                                placeholder=""
                                                class="form-control"
                                              />
                                            </td>
                                            <td>
                                              <input
                                                type="file"
                                                name="upload"
                                                placeholder=""
                                                class="form-control"
                                              />
                                            </td>

                                            <td>
                                              <button
                                                type="button"
                                                style={{ float: "right" }}
                                                className="btn btn-danger"
                                                onClick={() => setNoOfRows(noofRows - 1)}
                                              >
                                                <DeleteIcon />
                                              </button>
                                            </td>
                                          </tr>
                                        );
                                      })}
                                    </tbody>
                                  </Table>
                                </div> */}

                              <form className="text1">
                                <Row>
                                  <Col md={3} xxl lg="4">
                                    <label htmlFor="name" className="text">Name</label>
                                    <input
                                      type="text"
                                      value={sharName}
                                      placeholder=""
                                      class="form-control"
                                    />
                                  </Col>
                                  <Col md={3} xxl lg="4">
                                    <label htmlFor="name" className="text">	Designition</label>
                                    <input
                                      type="text"
                                      value={designition}
                                      placeholder=""
                                      class="form-control"
                                    />
                                  </Col>

                                  <Col md={3} xxl lg="4">
                                    <label htmlFor="name" className="text">Percentage</label>
                                    <input
                                      type="flot"
                                      value={percentage}
                                      placeholder=""
                                      class="form-control"
                                    />
                                  </Col>
                                  {/* </Row><Row> */}
                                  <Col md={3} xxl lg="4">
                                    <label htmlFor="name" className="text">Upload PDF</label>
                                    <input
                                      type="file"
                                      value={uploadPdf}
                                      placeholder=""
                                      class="form-control"
                                    />
                                  </Col>

                                </Row>
                              </form>

                            </div>
                            <div className="submit-btn">
                              <div className="form-group col-md6 mt-6">
                                <button
                                  type="submit"
                                  style={{ float: "right" }}
                                  className="btn btn-success"
                                >
                                  Submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </ModalBody>
                        <ModalFooter
                          toggle={() => setmodal(!modal)}
                        ></ModalFooter>
                      </Modal>
                    </div>
                  </div>
                  {/* <button
                      type="button"
                      style={{ float: "right" }}
                      className="btn btn-danger"
                      onClick={() => setNoOfRows(noofRows - 1)}
                    >
                      Remove
                    </button> */}

                  {/* <div className="form-group">
                        <button type="submit" className="btn btn-success">
                          {" "}
                          Save{" "}
                        </button>
                      </div> */}
                </div>
              </div>
              <h5 className="card-h">
                {" "}
                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;3. Directors Information
              </h5>
              <div className="card shadow">
                <div className="card-body">
                  <div className="table-bd">
                    <Table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Sr. No</th>
                          <th>DIN Number</th>
                          <th>Name</th>
                          <th>PAN Number</th>
                          <th>Upload PDF</th>
                        </tr>
                      </thead>
                      <tbody>
                        {DirectorData.map((elementInArray, input) => {
                          return (
                            <tr key={input}>
                              <td>{input}</td>
                              <td>
                                <input
                                  type="text"
                                  value={elementInArray.din}
                                  placeholder={elementInArray.din}
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  value={elementInArray.name}
                                  placeholder={elementInArray.name}
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  value={elementInArray.contactNumber}
                                  placeholder={elementInArray.contactNumber}
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="file"
                                  value={uploadPdf}
                                  placeholder=""
                                  class="form-control"
                                />
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </div>
                  {/* <div className="form-group col-md2 mt-4">
                        <button  className="btn btn-success" >Add More
                          
                        </button>
                      </div> */}
                  {/* <button
                      type="button"
                      style={{ float: "left" }}
                      className="btn btn-primary"
                      onClick={() => setAoOfRows(aoofRows + 1)}
                    >
                      Add More
                    </button> */}
                  <div>
                    {/* <button
                      type="button"
                      style={{
                        float: "left",
                        backgroundColor: "#0b3629",
                        color: "white",
                      }}
                      className="btn mt-3"
                      onClick={() => setmodal(true)}
                    >
                      Add More
                    </button> */}

                    
                  </div>
                  {/* <button
                    type="button"
                    style={{ float: "right" }}
                    className="btn btn-danger"
                    onClick={() => setAoOfRows(aoofRows - 1)}
                  >
                    Remove
                  </button> */}
                </div>
              </div>
              <div className="form-group col-md2 mt-4">
                <button
                  className="btn btn-success"
                  style={{ float: "right" }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* </div>
        </div>
      </div> */}

      </Form>

    </div>

  );
}

export default AddInfo;
