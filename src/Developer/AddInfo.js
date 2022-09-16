import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
// import { Card } from "react-bootstrap";
import {useForm } from "react-hook-form";
import "../Developer/AddInfo.css";
import "../Developer/Add1.css";
import UploadDocuments from "./UploadDocuments";

function AddInfo() {
  const { register, handleSumit,formState: { error }, } = useForm([
    { Sr: "", Name: "", Mobile: "", Email: "", PAN: "", Aadhar: "" },
  ]);
  const formSubmit = (data) => {
    console.log("data", data);
  };
  const[FormSubmitted, setFormSubmitted] = useState(false);
  const [showhide, setShowhide] = useState("No");
  const [cinNo,setCinNo]=useState("");
  const [companyName,setCompanyName]=useState("");
  const [Incorporation,setIncorporation]=useState("");
  const [Registered,setRegistered]=useState("");
  const [Email,setEmail]=useState("");
  const [Mobile,setMobile]=useState("");
  const [GST,setGST]=useState("");
  const [TbName,setTbName]=useState("");
  const [Designition,setDesignition]=useState("");
  const [Percetage,setPercetage]=useState("");
  const [UploadPDF,setUploadPDF]=useState("");

  const handleshow = (e) => {
    const getshow = e.target.value;
    setShowhide(getshow);
  };

  const [noofRows, setNoOfRows] = useState(0);
  const [aoofRows, setAoOfRows] = useState(1);
const AddInfoForm=(e)=>{
  e.preventDefault();
  setFormSubmitted(true);
  let forms={
    cinNo:cinNo,
    companyName:companyName,
    Incorporation:Incorporation,
    Registered:Registered,
    Email:Email,
    Mobile:Mobile,
    GST:GST,
    TbName:TbName,
    Designition:Designition,
    Percetage:Percetage,
    UploadPDF:UploadPDF, 
  }
  localStorage.setItem('step1',JSON.stringify(forms))
  let frmData = JSON.parse(localStorage.getItem('step1')|| "[]")
};
  function handleKeyPress() {
        console.log( "You pressed a key." )
    }
    var myHeaders = new Headers();
myHeaders.append("accept", "application/json");
myHeaders.append("X-APISETU-APIKEY", "PDSHazinoV47E18bhNuBVCSEm90pYjEF");
myHeaders.append("X-APISETU-CLIENTID", "in.gov.tcpharyana");
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    function callApi() {
      fetch("https://apisetu.gov.in/mca/v1/companies/U72200CH1998PTC022006", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    }

  return (
    <Form onSubmit={AddInfoForm}>
    <div className="container my-5">
      <div className="row mt-4">
        <div className=" col-12 m-auto">
        <div  className="happy">
          
            <div className="card">
              <div>
                <h4 className="card-h">  &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;Developer</h4>
                <h4 className="card-h"> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;1. Developer Details:</h4>
              </div>
              <div className="card shadow">
                {/* <div className="card-header">
                <h5 className="card-title"> Developer</h5>
              </div> */}

                <div className="card-body">
                  <div className="row">
                    <div className="col col-4">
                      <div className="form-group">
                        <label htmlFor="name" >CIN Number/LLP Pin</label>
                        <input
                          type="text" onKeyPress={(e) => handleKeyPress(e)} onClick={callApi} 
                          onChange={(e) => setCinNo(e.target.value)} value={cinNo}
                       
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
                          onChange={(e) => setCompanyName(e.target.value)} value={companyName}
                       
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
                          type="date"
                          onChange={(e) => setIncorporation(e.target.value)} value={Incorporation}
                       
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
                          onChange={(e) => setRegistered (e.target.value)} value={Registered}
                       
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
                          onChange={(e) => setEmail (e.target.value)} value={Email}
                       
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
                          onChange={(e) => setMobile (e.target.value)} value={Mobile}
                       
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
                          onChange={(e) => setGST (e.target.value)} value={GST}
                       
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
              <h5 className="card-h"> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;2. Shareholding Patterns</h5>
              <div className="card shadow">
                <div className="card-body">
                  <div className="table-bd">
                    <Table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Sr. No</th>
                          <th>Name</th>
                          <th>Designition</th>
                          <th>Percetage</th>
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
                                  name="name[]"
                                  onChange={(e) => setTbName (e.target.value)} value={TbName}
                       
                       className="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  name="mail[]"
                                  placeholder=""
                                  onChange={(e) => setDesignition (e.target.value)} value={Designition}
                       
                       className="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="date"
                                  name="date"
                                  placeholder=""
                                  onChange={(e) => setPercetage (e.target.value)} value={Percetage}
                       
                       className="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="file"
                                  name="upload"
                                  placeholder=""
                                  onChange={(e) => setUploadPDF (e.target.value)} value={UploadPDF}
                       
                       className="form-control"
                                />
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </div>
                  <button
                    type="button"
                    style={{ float: "left" }}
                    className="btn btn-primary"
                    onClick={() => setNoOfRows(noofRows + 1)}
                  >
                    Add More
                  </button>
                  <button
                    type="button"
                    style={{ float: "right" }}
                    className="btn btn-danger"
                    onClick={() => setNoOfRows(noofRows - 1)}
                  >
                    Remove
                  </button>

                  {/* <div className="form-group">
                        <button type="submit" className="btn btn-success">
                          {" "}
                          Save{" "}
                        </button>
                      </div> */}
                </div>
              </div>
              <h5 className="card-h"> &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;3. Directors Information</h5>
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
                        {[...Array(aoofRows)].map((elementInArray, input) => {
                          return (
                            <tr>
                              <td>1</td>
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
                                  name="mail[]"
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
                                  type="file"
                                  name="upload"
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
                  <button
                    type="button"
                    style={{ float: "left" }}
                    className="btn btn-primary"
                    onClick={() => setAoOfRows(aoofRows + 1)}
                  >
                    Add More
                  </button>
                  <button
                    type="button"
                    style={{ float: "right" }}
                    className="btn btn-danger"
                    onClick={() => setAoOfRows(aoofRows - 1)}
                  >
                    Remove
                  </button>
                </div>
                
              </div>
              <div className="form-group col-md2 mt-4">
                        <button  className="btn btn-success"  style={{ float: "right" }}>Submit
                          
                        </button>
                    
                      </div>
            </div>
            
        
          </div>
        </div>
      </div>
    </div>
    </Form>
  );
}

export default AddInfo;
