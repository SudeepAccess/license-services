
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useForm } from "react-hook-form";
import {
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Paper,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button, Form, FormLabel } from "react-bootstrap";
import { Card, Row, Col } from "react-bootstrap";
import Ext from "../Developer/ext";
import UnderTable from "../Developer/underTable2";
import "../Developer/AddInfo.css";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectFinancialCapacity } from "../Redux/Slicer/Slicer";
import { selectCinNumber } from "../Redux/Slicer/Slicer";
import { selectCompanayNAme } from "../Redux/Slicer/Slicer";
import { selectDateOfCorporation } from "../Redux/Slicer/Slicer";
import { selectRegisteredAddress } from "../Redux/Slicer/Slicer";
import { selectEmail } from "../Redux/Slicer/Slicer";
import { selectMobileNumber } from "../Redux/Slicer/Slicer";
import { selectGst_Number } from "../Redux/Slicer/Slicer";
import { selectShareHoldingPatterens } from "../Redux/Slicer/Slicer";
import { selectDirectorsInformation } from "../Redux/Slicer/Slicer";
import { selectmodalAuthUserValuesArray } from "../Redux/Slicer/Slicer";
import { setTechnicalData } from "../Redux/Slicer/Slicer";
import { useDispatch } from "react-redux";

const AppliedDetailForm = (props) => {
  const financialCapacity = useSelector(selectFinancialCapacity)
  const cin_Number = useSelector(selectCinNumber)
  const companyName = useSelector(selectCompanayNAme)
  const dateOfCorporation = useSelector(selectDateOfCorporation)
  const registeredAddress = useSelector(selectRegisteredAddress)
  const email = useSelector(selectEmail)
  const mobileNumber = useSelector(selectMobileNumber)
  const gst_Number = useSelector(selectGst_Number)
  const shareHoldingPatterens = useSelector(selectShareHoldingPatterens)
  const directorsData = useSelector(selectDirectorsInformation);
  const authUserName = useSelector(selectmodalAuthUserValuesArray);

  const [modal, setmodal] = useState(false);
  const [modalColony, setmodalColony] = useState(false);
  const [capacityDevelopColonyHdruAct, setModalCapacityDevelopColonyHdruAct] = useState([]);
  const [modalColonyDevGrpValuesArray, setModalColonyDevGrpValuesArray] = useState([]);
  const [capacityDevelopColonyLawAct, setCapacityDevelopColonyLawAct] = useState([]);
  const [capacityDevelopAColony, setcapacityDevelopAColony] = useState([]);

  const [licenceNumber, setModalLcNo] = useState("");
  const [nameOfDeveloper, setModalDevName] = useState("");
  const [purposeOfColony, setModalPurposeCol] = useState("");
  const [sectorAndDevelopmentPlan, setModalDevPlan] = useState("");
  const [validatingLicence, setModalDevValidity] = useState("");

  
  const [coloniesDeveloped,setColonyDev] = useState("");
  const [area,setColonyArea] = useState("");
  const [purpose,setColonyPurpose] = useState("");
  const [statusOfDevelopment,setColonyStatusDev] = useState("");
  const [outstandingDues,setColonyoutstandingDue] = useState("");

  const [engineerName,setEngineerName] = useState("")
  const [engineerQualification,setEngineerQualification] = useState("")
  const [engineerSign,setEngineerSign] = useState("")
  const [engineerDegree,setEngineerDegree] = useState("")
  const [architectName,setArchitectName] = useState("")
  const [architectQualification,setArchitectQualification] = useState("")
  const [architectSign,setArchitectSign] = useState("")
  const [architectDegree,setArchitectDegree] = useState("")
  const [townPlannerName,setTownPlannerName] = useState("")
  const [townPlannerQualification,setTownPlannerQualification] = useState("")
  const [townPlannerSign,setTownPlannerSign] = useState("")
  const [townPlannerDegree,setTownPlannerDegree] = useState("")
  const [existingDeveloperAgreement,setExistingDev] = useState("")
  const [existingDeveloperAgreementDoc,setExistingDevDoc] = useState("")
  const [technicalCapacity,setTechnicalCapacity] = useState("")
  const [technicalCapacityDoc,setTechnicalCapacityDoc] = useState("")
  const [engineerNameN,setengineerNameN] = useState("")
  const [engineerDocN,setEngineerDocN] = useState("")
  const [architectNameN,setArchitectNameN] = useState("")
  const [architectDocN,setArchitectDocN] = useState("")
  const [uplaodSpaBoard,setUplaodSpaBoard] = useState("")
  const [uplaodSpaBoardDoc,setUplaodSpaBoardDoc] = useState("")
  const [agreementDoc,setAgreementDoc] = useState("")
  const [boardDoc,setBoardDoc] = useState("")
  const [registeredDoc,setRegisteredDoc] = useState("")
  const [boardDocY,setBoardDocY] = useState("")
  const [earlierDocY,setEarlierDocY] = useState("")
  const [boardDocN,setBoardDocN] = useState("")
  const [earlierDocN,setEarlierDocN] = useState("")
  const [technicalAssistanceAgreementDoc,setTechnicalAssistanceAgreementDoc] = useState("")

  
  console.log("AUTHNAME", authUserName);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm([{ XLongitude: "", YLatitude: "" }]);
  const formSubmit = (data) => {
    console.log("data", data);
  };
  const [AppliedDetailFormSubmitted, SetAppliedDetailFormSubmitted] =
    useState(false);
  const AppliedDetailFormSubmitHandler = (e) => {
    e.preventDefault();
    SetAppliedDetailFormSubmitted(true);
  };
  useEffect(() => {
    if (AppliedDetailFormSubmitted) {
      props.AppliedDetailsFormSubmit(true);
    }
  }, [AppliedDetailFormSubmitted]);
  const [showhide, setShowhide] = useState("No");
  const [showhide1, setShowhide1] = useState("no");
  const [showhide0, setShowhide0] = useState("No");
  // const [showhide2, setShowhide2] = useState("No");
  // const [showhide3, setShowhide3] = useState("No");
  // const [showhide4, setShowhide4] = useState("No");
  // const [showhide5, setShowhide5] = useState("No");
  const [showhide6, setShowhide6] = useState("no");

  const handleshow = (e) => {
    const getshow = e.target.value;
    setShowhide(getshow);
  };
  const handleshow0 = (e) => {
    const getshow = e.target.value;
    setShowhide0(getshow);
  };
  const handleshow1 = (e) => {
    const getshow = e.target.value;
    setShowhide1(getshow);
  };
  // const handleshow2 = (e) => {
  //   const getshow = e.target.value;
  //   setShowhide2(getshow);
  // };
  // const handleshow3 = (e) => {
  //   const getshow = e.target.value;
  //   setShowhide3(getshow);
  // };
  // const handleshow4 = (e) => {
  //   const getshow = e.target.value;
  //   setShowhide4(getshow);
  // };
  // const handleshow5 = (e) => {
  //   const getshow = e.target.value;
  //   setShowhide5(getshow);
  // };
  const handleshow6 = (e) => {
    const getshow = e.target.value;
    setShowhide6(getshow);
  };

  const handleChange = (e) => {
    this.setState({ isRadioSelected: true });
  };


  const handleArrayValues = () => {

    if (licenceNumber !== "" && nameOfDeveloper !== "" && purposeOfColony !== "") {

      const values = {
        
          licenceNumber: licenceNumber,
          nameOfDeveloper: nameOfDeveloper,
          purposeOfColony: purposeOfColony,
          sectorAndDevelopmentPlan: sectorAndDevelopmentPlan,
          validatingLicence: validatingLicence
        
      }
      setModalCapacityDevelopColonyHdruAct((prev) => [...prev, values]);
      setmodal(!modal)
    }
    console.log("DevCapacityFirst", capacityDevelopColonyHdruAct);
    localStorage.setItem("DevCapacityDetails", JSON.stringify(capacityDevelopColonyHdruAct))
  }


  const handleColonyDevGrp=()=>{
    const colonyDevValues = {
      
        coloniesDeveloped:coloniesDeveloped,
        area:area,
        purpose:purpose,
        statusOfDevelopment:statusOfDevelopment,
        outstandingDues:outstandingDues
      
      
    }
    setCapacityDevelopColonyLawAct((prev) => [...prev, colonyDevValues]);
    setmodalColony(!modalColony)
    console.log("DevCapacityColony", capacityDevelopColonyLawAct);
  }

  const submitTechdevData = async (e) => {
    e.preventDefault();
    const formDataValues = {
      "developerDetail" :[
        {
          "devDetail":{
            addInfo:{
              financialCapacity:financialCapacity,
              cin_Number:cin_Number,
              companyName:companyName,
              dateOfCorporation:dateOfCorporation,
              registeredAddress:registeredAddress,
              email:email,
              mobileNumber:mobileNumber,
              gst_Number:gst_Number,
              shareHoldingPatterens:shareHoldingPatterens,
              directorsData:directorsData,
            },
            addRemoveAuthoizedUsers:{
              authUserName:authUserName
            },
            capacityDevelopAColony: {
              capacityDevelopColonyHdruAct: capacityDevelopColonyHdruAct,
              capacityDevelopColonyLawAct:capacityDevelopColonyLawAct,
              technicalExpertEngaged:{
                engineerName:engineerName,
                engineerQualification:engineerQualification,
                engineerSign:engineerSign,
                engineerDegree:engineerDegree,
                architectName:architectName,
                architectQualification:architectQualification,
                architectSign:architectSign,
                architectDegree:architectDegree,
                townPlannerName:townPlannerName,
                townPlannerQualification:townPlannerQualification,
                townPlannerSign:townPlannerSign,
                townPlannerDegree:townPlannerDegree,
                existingDeveloperAgreement:existingDeveloperAgreement,
                existingDeveloperAgreementDoc:existingDeveloperAgreementDoc,
                technicalCapacity:technicalCapacity,
                technicalCapacityDoc:technicalCapacityDoc,
                engineerNameN:engineerNameN,
                engineerDocN:engineerDocN,
                architectNameN:architectNameN,
                architectDocN:architectDocN,
                uplaodSpaBoard:uplaodSpaBoard,
                uplaodSpaBoardDoc:uplaodSpaBoardDoc
              },
              designationDirector:{
                agreementDoc:agreementDoc,
                boardDoc:boardDoc
              },
              obtainedLicense:{
                registeredDoc:registeredDoc,
                boardDocY:boardDocY,
                earlierDocY:earlierDocY,
                boardDocN:boardDocN,
                earlierDocN:earlierDocN,
                technicalAssistanceAgreementDoc:technicalAssistanceAgreementDoc
              }
              
              
            },

          }
        }
      ]

      
    }

    try {
      let res = await axios.post("http://localhost:8081/user/developer/_registration",formDataValues,{
        headers:{
          'Content-Type': 'application/json',
          'Access-Control-Allow-origin':"*",
      }
      }).then((response)=>{
        return response
      });
      
      
    } catch (err) {
      console.log(err);
    }

    console.log("FINAL SUBMIT",formDataValues)
    localStorage.setItem("capacity",JSON.stringify(formDataValues));
    setcapacityDevelopAColony((prev) => [...prev, formDataValues]);
    
    // dispatch(setTechnicalData(
    //   formDataValues
    // ))
    
  }
  const jsonobj=localStorage.getItem("capacity") ;
  console.log(JSON.parse(jsonobj));
  

  const [noofRows, setNoOfRows] = useState(1);
  const [noofRow, setNoOfRow] = useState(1);
  const [noofRow1, setNoOfRow1] = useState(1);

  return (
    <>
      {/* <DashboardScreen /> */}
      {/* <div className="container my-5">
        <div className="row mt-4"> */}

      <div className="card-body">
        <div className="bigCard">
          <div className="card">
            <div>
              <h5 className="card-h">
                {" "}
                Capacity of Developer to develop a colony:
              </h5>
            </div>
            <div className="card-body">
              <p>
                1. I/ We hereby submit the following information/ enclose the
                relevant documents:-
              </p>
              <p>
                &nbsp;&nbsp;&nbsp; (i) Whether the Developer/ group company has
                earlier been granted permission to set up a colony under HDRU
                Act, 1975: *{" "}
              </p>
              <div className="form-group">
                <input
                  type="radio"
                  value="Yes"
                  id="Yes"
                  className="mx-2 mt-1"
                  onChange={handleChange}
                  name="Yes"
                  onClick={handleshow0}
                />
                <label for="Yes">Yes</label>

                <input
                  type="radio"
                  value="No"
                  id="No"
                  className="mx-2 mt-1"
                  onChange={handleChange}
                  name="Yes"
                  onClick={handleshow0}
                />
                <label for="No">No</label>
                {showhide0 === "Yes" && (
                  <div className="card-body">
                    {/* <h5 className="card-h">Add/Remove Authorized Users</h5> */}
                    <div className="table-bd">
                      <Table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>S. no</th>
                            <th> Licence No / year and date of grant of licence </th>
                            <th>Name of developer *</th>
                            <th>Purpose of colony </th>
                            <th>Sector and development plan </th>
                            <th>Validity of licence including renewals if any</th>
                            {/* <th>Remove</th> */}
                          </tr>
                        </thead>
                        <tbody>
                          {
                            (capacityDevelopColonyHdruAct.length > 0) ?
                              capacityDevelopColonyHdruAct.map((elementInArray, input) => {
                                return (
                                  <tr>

                                    <td>{input + 1}</td>
                                    <td>
                                      <input
                                        type="text"
                                        value={elementInArray.licenceNumber}
                                        placeholder={elementInArray.licenceNumber}
                                        class="form-control"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        value={elementInArray.nameOfDeveloper}
                                        placeholder={elementInArray.nameOfDeveloper}
                                        class="form-control"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="email"
                                        value={elementInArray.purposeOfColony}
                                        placeholder={elementInArray.purposeOfColony}
                                        class="form-control"
                                      />
                                    </td>
                                    <td>
                                      {/* <input
                                  type="file"
                                  name="upload"
                                  placeholder=""
                                  class="form-control"
                                /> */}
                                      <button className="btn btn-success btn-sm">View</button>
                                    </td>
                                    <td>
                                      {/* <input
                                  type="file"
                                  name="upload"
                                  placeholder=""
                                  class="form-control"
                                /> */}
                                      <button className="btn btn-success btn-sm">View</button>
                                    </td>

                                    {/* <td>
                                <button
                                  type="button"
                                  style={{ float: "right" }}
                                  className="btn btn-danger"
                                  onClick={() => setNoOfRows(noofRows - 1)}
                                >
                                  <DeleteIcon />
                                </button>
                              </td> */}
                                  </tr>
                                )
                              }) : <p>Click on Add more</p>
                          }
                        </tbody>
                      </Table>
                      <div>
                        <button
                          type="button"
                          style={{
                            float: "left",
                            backgroundColor: "#0b3629",
                            color: "white",
                          }}
                          className="btn mt-3"
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


                                  <form className="text1">
                                    <Row>
                                      <Col md={4} xxl lg="4">
                                        <label htmlFor="name" className="text">Licence No / year and date of grant of licence</label>
                                        <input
                                          type="text"
                                          onChange={(e) => setModalLcNo(e.target.value)}
                                          placeholder=""
                                          class="form-control"
                                        />
                                      </Col>
                                      <Col md={4} xxl lg="4">
                                        <label htmlFor="name" className="text">Name of developer *</label>
                                        <input
                                          type="text"
                                          onChange={(e) => setModalDevName(e.target.value)}
                                          placeholder=""
                                          class="form-control"
                                        />
                                      </Col>
                                      <Col md={4} xxl lg="4">
                                        <label htmlFor="name" className="text">Purpose of colony</label>
                                        <input
                                          type="text"
                                          onChange={(e) => setModalPurposeCol(e.target.value)}
                                          placeholder=""
                                          class="form-control"
                                        />
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col md={4} xxl lg="4">
                                        <label htmlFor="name" className="text">Sector and development plan</label>
                                        <input
                                          type="file"
                                          onChange={(e) => setModalDevPlan(e.target.value)}
                                          placeholder=""
                                          class="form-control"
                                        />
                                      </Col>
                                      <Col md={4} xxl lg="4">
                                        <label htmlFor="name" className="text">Validity of licence including renewals if any</label>
                                        <input
                                          type="file"
                                          onChange={(e) => setModalDevValidity(e.target.value)}
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
                                      type="button"
                                      onClick={handleArrayValues}
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

                      <br></br>
                      <br></br>
                    </div>

                  </div>
                )}
              </div>

              <div className="hl"></div>
              <p>
                &nbsp;&nbsp;&nbsp;(ii) Licences/permissions granted to
                Developer/ group company for development of colony under any
                other law/Act as .
              </p>
              <div>
                <div className="card-body">
                  {/* <h5 className="card-h">Add/Remove Authorized Users</h5> */}
                  <div className="table-bd">
                    <Table className="table table-bordered">
                      <thead>
                        <tr>
                          {/* <th>Add More</th> */}
                          <th>S.No</th>
                          <th>Colonies developed</th>
                          <th>Area</th>
                          <th>Purpose</th>
                          <th>Status of development</th>
                          <th>Outstanding Dues</th>
                          {/* <th>Action</th> */}
                        </tr>
                      </thead>
                      <tbody>
                      {
                            (capacityDevelopColonyLawAct.length > 0) ?
                            capacityDevelopColonyLawAct.map((elementInArray, input) => {
                                return (
                            <tr>
                             <td>{input+1}</td>
                              <td>
                                <input
                                  type="text"
                                  value={elementInArray.coloniesDeveloped}
                                  placeholder={elementInArray.coloniesDeveloped}
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  value={elementInArray.area}
                                  placeholder={elementInArray.area}
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="email"
                                  value={elementInArray.purpose}
                                  placeholder={elementInArray.purpose}
                                  class="form-control"
                                />
                              </td>
                              <td>
                                {/* <input
                                  type="file"
                                  name="upload"
                                  placeholder=""
                                  class="form-control"
                                /> */}
                                <button className="btn btn-success btn-sm">View</button>
                              </td>
                              <td>
                                {/* <input
                                  type="file"
                                  name="upload"
                                  placeholder=""
                                  class="form-control"
                                /> */}
                                <button className="btn btn-success btn-sm">View</button>
                              </td>

                              {/* <td>
                      <button
                        type="button"
                        style={{ float: "right" }}
                        className="btn btn-danger"
                        onClick={() => setNoOfRows(noofRows - 1)}
                      >
                        <DeleteIcon />
                      </button>
                    </td> */}
                            </tr>
                                )}
                              ):<p>Click on add more</p>
                  }
                      </tbody>
                    </Table>
                    <div>
                      <button
                        type="button"
                        style={{
                          float: "left",
                          backgroundColor: "#0b3629",
                          color: "white",
                        }}
                        className="btn mt-3"
                        // onClick={() => setNoOfRows(noofRows + 1)}
                        onClick={() => setmodalColony(true)}
                      >
                        Add More
                      </button>

                      <div>
                        <Modal
                          size="lg"
                          isOpen={modalColony}
                          toggle={() => setmodalColony(!modalColony)}
                        >
                          <ModalHeader
                            toggle={() => setmodalColony(!modalColony)}
                          ></ModalHeader>

                          <ModalBody>
                            <div className="card2">
                              <div className="popupcard">
                                <form className="text1">
                                  <Row>
                                    <Col md={4} xxl lg="4">
                                      <label htmlFor="name" className="text">Colonies developed</label>
                                      <input
                                        type="text"
                                        onChange={(e) => setColonyDev(e.target.value)}
                                        placeholder=""
                                        class="form-control"
                                      />
                                    </Col>
                                    <Col md={4} xxl lg="4">
                                      <label htmlFor="name" className="text">Area</label>
                                      <input
                                        type="number"
                                        onChange={(e) => setColonyArea(e.target.value)}
                                        placeholder=""
                                        class="form-control"
                                      />
                                    </Col>
                                    <Col md={4} xxl lg="4">
                                      <label htmlFor="name" className="text">Purpose</label>
                                      <input
                                        type="text"
                                        onChange={(e) => setColonyPurpose(e.target.value)}
                                        placeholder=""
                                        class="form-control"
                                      />
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col md={4} xxl lg="4">
                                      <label htmlFor="name" className="text">Status of development</label>
                                      <input
                                        type="file"
                                        onChange={(e) => setColonyStatusDev(e.target.value)}
                                        placeholder=""
                                        class="form-control"
                                      />
                                    </Col>
                                    <Col md={4} xxl lg="4">
                                      <label htmlFor="name" className="text">Outstanding Dues</label>
                                      <input
                                        type="file"
                                        onChange={(e) => setColonyoutstandingDue(e.target.value)}
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
                                    type="button"
                                    style={{ float: "right" }}
                                    className="btn btn-success"
                                    onClick={handleColonyDevGrp}
                                  >
                                    Submit
                                  </button>
                                </div>
                              </div>
                            </div>
                          </ModalBody>
                          <ModalFooter
                            toggle={() => setmodalColony(!modalColony)}
                          ></ModalFooter>
                        </Modal>
                      </div>
                    </div>
                    <br></br>
                    <br></br>
                  </div>
                </div>
              </div>

              <div className="hl"></div>
              <p>
                &nbsp;&nbsp;&nbsp;(iii) Whether any technical expert(s) engaged
              </p>

              <div className="form-group">
                <input
                  type="radio"
                  value="Yes"
                  id="Yes"
                  className="mx-2 mt-1"
                  onChange={handleChange}
                  name="Yes"
                  onClick={handleshow1}
                />
                <label for="Yes">Yes</label>

                <input
                  type="radio"
                  value="No"
                  id="No"
                  className="mx-2 mt-1"
                  onChange={handleChange}
                  name="Yes"
                  onClick={handleshow1}
                />
                <label for="No">No</label>
                {showhide1 === "Yes" && (
                  <div className="row ">
                    <div className="form-group row">
                      <div className="col-sm-12">
                        <div className="table-bd">
                          <Table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>S.No</th>
                                <th>Professional </th>
                                <th>Qualification</th>
                                <th>Signature</th>
                                <th>Annexure</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>
                                  <input
                                   typr="text"
                                   onChange={(e) => setEngineerName(e.target.value)}
                                   placeholder="Name of Engineer"
                                   class="form-control"
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    onChange={(e) => setEngineerQualification(e.target.value)}
                                    placeholder=""
                                    class="form-control"
                                  />
                                </td>

                                <td>
                                  <input
                                    type="file"
                                    onChange={(e) => setEngineerSign(e.target.value)}
                                    placeholder=""
                                    class="form-control"
                                  />
                                </td>
                                <td align="center" size="large">
                                <input
                                    type="file"
                                    onChange={(e) => setEngineerDegree(e.target.value)}
                                    placeholder=""
                                    class="form-control"
                                  />
                                </td>
                              </tr>

                              <tr>
                                <td>2</td>
                                <td> 
                                <input
                                   typr="text"
                                   onChange={(e) => setArchitectName(e.target.value)}
                                   placeholder="Name of Architect"
                                   class="form-control"
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    onChange={((e) => setArchitectQualification(e.target.value))}
                                    placeholder=""
                                    class="form-control"
                                  />
                                </td>

                                <td>
                                  <input
                                    type="file"
                                    onChange={((e) => setArchitectSign(e.target.value))}
                                    placeholder=""
                                    class="form-control"
                                  />
                                </td>
                                <td align="center" size="large">
                                  <input
                                    type="file"
                                    onChange={((e) => setArchitectDegree(e.target.value))}
                                    class="form-control"
                                  />
                                </td>
                              </tr>

                              <tr>
                                <td>3</td>
                                <td> 
                                <input
                                    type="text"
                                    onChange={((e) => setTownPlannerName(e.target.value))}
                                    placeholder="Name of Town Planner"
                                    class="form-control"
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    onChange={((e) => setTownPlannerQualification(e.target.value))}
                                    placeholder=""
                                    class="form-control"
                                  />
                                </td>

                                <td>
                                  <input
                                    type="file"
                                    onChange={((e) => setTownPlannerSign(e.target.value))}
                                    placeholder=""
                                    class="form-control"
                                  />
                                </td>
                                <td align="center" size="large">
                                <input
                                    type="file"
                                    onChange={((e) => setTownPlannerDegree(e.target.value))}
                                    placeholder=""
                                    class="form-control"
                                  />
                                </td>
                              </tr>
                              
                            </tbody>
                          </Table>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {showhide1 === "No" && (
                  <div className="row ">
                    <div className="form-group row">
                      {/* <label className="col-sm-3 col-form-label">Company</label> */}
                      <div className="col-sm-12">
                        <div className="table-bd">
                          <Table className="table table-bordered" size="sm">
                            <thead>
                              <tr>
                                <th>S.No.</th>
                                <th>Professional </th>
                                <th> Annexure</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td> 1 &nbsp;&nbsp;</td>
                                <td>
                                  {" "}
                                  Agreement with existing colonizer/developer
                                    who has already developed a colony
                                  {/* <input
                                    type="text"
                                    onChange={((e) => setExistingDev(e.target.value))}
                                    placeholder=""
                                  /> */}
                                </td>
                                <td align="center" size="large">
                                <input
                                    type="file"
                                    onChange={((e) => setExistingDevDoc(e.target.value))}
                                    placeholder=""
                                    class="form-control"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td> 2&nbsp;&nbsp; </td>
                                <td>
                                <input
                                    type="text"
                                    onChange={((e) => setTechnicalCapacity(e.target.value))}
                                    placeholder="Technical Capacity"
                                    class="form-control"
                                  />
                                </td>
                                <td align="center" size="large">
                                  <input
                                    type="file"
                                    onChange={((e) => setTechnicalCapacityDoc(e.target.value))}
                                    placeholder=""
                                    class="form-control"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td> 3 &nbsp;&nbsp;</td>
                                {/* <td colSpan={2}>Larry the Bird</td> */}
                                <td>
                                  <input 
                                    type="text"
                                    placeholder="Name of Engineer"
                                    onChange={((e)=> setengineerNameN(e.target.value))}
                                    class="form-control"
                                  />
                                </td>
                                <td align="center" size="large">
                                <input
                                    type="file"
                                    onChange={((e) => setEngineerDocN(e.target.value))}
                                    placeholder=""
                                    class="form-control"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td> 4&nbsp;&nbsp; </td>
                                <td>
                                <input 
                                    type="text"
                                    placeholder="Name of Architect"
                                    onChange={((e)=> setArchitectNameN(e.target.value))}
                                    class="form-control"
                                  />
                                </td>
                                <td align="center" size="large">
                                <input
                                    type="file"
                                    onChange={((e) => setArchitectDocN(e.target.value))}
                                    placeholder=""
                                    class="form-control"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td> 5&nbsp;&nbsp; </td>
                                <td>
                                  {/* <input
                                  type="text"
                                  onChange={((e) => setUplaodSpaBoard(e.target.value))} 
                                  placeholder=""
                                  class="form-control"
                                  /> */}
                                  Upload SPA/GPA/ Board Resolution to sign
                                  collaboration agreement on behalf of land
                                  owner(s)
                                </td>
                                <td align="center" size="large">
                                  <input 
                                    type="file"
                                    class="form-control"
                                    onChange={((e)=> setUplaodSpaBoardDoc(e.target.value))}
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>
                      </div>
                    </div>

                    {/* <input type="text" className="form-control" /> */}
                  </div>
                )}
              </div>

              <div className="hl"></div>
              <p>
                &nbsp;&nbsp;&nbsp;(iv) If director/partner of the proposed
                developer company/firm also holds designation of
                director/partner in any other company/firm who has already
                obtained license(s) under act of 1975:
              </p>

              <div className="form-group">
                <input
                  type="radio"
                  value="Yes"
                  id="Yes"
                  className="mx-2 mt-1"
                  onChange={(e)=>handleChange(e.target.value)}
                  name="Yes"
                  onClick={handleshow}
                />
                <label for="Yes">Yes</label>

                <input
                  type="radio"
                  value="No"
                  id="No"
                  className="mx-2 mt-1"
                  onChange={(e)=>handleChange(e.target.value)}
                  name="Yes"
                  onClick={handleshow}
                />
                <label for="No">No</label>
                {showhide === "Yes" && (
                  <div className="row ">
                    <div className="form-group row">
                      <div className="col-sm-12">
                        <Col xs="12" md="12" sm="12">
                          <Table className="table table-bordered" size="sm">
                            <thead>
                              <tr>
                                <th>S.No.</th>
                                <th>Professional </th>
                                <th> Annexure</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td> 1 &nbsp;&nbsp;</td>
                                <td>
                                  {" "}
                                  Agreement between the entities to provide
                                  technical assistance
                                </td>
                                <td align="center" size="large">
                                  <input
                                    type="file"
                                    onChange={((e) => setAgreementDoc(e.target.value))}
                                    class="form-control"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td> 2&nbsp;&nbsp; </td>
                                <td>
                                  Board resolutions of authorized signatory of
                                  firm/company provided technical assistance
                                </td>
                                <td align="center" size="large">
                                <input
                                    type="file"
                                    onChange={((e) => setBoardDoc(e.target.value))}
                                    class="form-control"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </Col>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="hl"></div>
              <p>
                2. In case of technical capacity sought from another
                company/firm who has already obtained license(s) under act of
                1975 or outside Haryana:
              </p>
              <div className="form-group">
                <input
                  type="radio"
                  value="Yes"
                  id="Yes"
                  className="mx-2 mt-1"
                  onChange={handleChange}
                  name="Yes"
                  onClick={handleshow6}
                />
                <label for="Yes">Yes</label>

                <input
                  type="radio"
                  value="No"
                  id="No"
                  className="mx-2 mt-1"
                  onChange={handleChange}
                  name="Yes"
                  onClick={handleshow6}
                />
                <label for="No">No</label>
                {showhide6 === "Yes" && (
                  <div className="row ">
                    <div className="form-group row">
                      <div className="col-sm-12">
                        <Col xs="12" md="12" sm="12">
                          <div>
                            <Table className="table table-bordered" size="sm">
                              <thead>
                                <tr>
                                  <th>S.No.</th>
                                  <th>Agreement*</th>
                                  <th>Annexure </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td> 1 </td>
                                  <td> Registered and Irrevocable Agreement</td>
                                  <td align="center" size="large">
                                    <input 
                                      type="file"
                                      onChange={((e)=> setRegisteredDoc(e.target.value))}
                                      class="form-control"
                                    />
                                  </td>
                                </tr>

                                <tr>
                                  <td> 2 </td>
                                  <td>
                                    Board resolutions of authorized signatory of
                                    firm/company provided technical assistance
                                  </td>
                                  <td align="center" size="large">
                                    <input 
                                      type="file"
                                      onChange={((e)=> setBoardDocY(e.target.value))}
                                      class="form-control"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td> 3 </td>

                                  <td>
                                    Auto populate details of earlier license(s)
                                    granted to existing developer company/firm
                                    to set up a colony under act of 1975.
                                  </td>
                                  <td align="center" size="large">
                                    <input 
                                      type="file"
                                      onChange={((e)=> setEarlierDocY(e.target.value))}
                                      class="form-control"
                                    />
                                  </td>
                                </tr>
                              </tbody>{" "}
                            </Table>
                          </div>
                        </Col>
                      </div>
                    </div>
                  </div>
                )}
                {showhide6 === "No" && (
                  <div className="row ">
                    <div className="form-group row">
                      <div className="col-sm-12">
                        <div>
                          <Table className="table table-bordered" size="sm">
                            <thead>
                              <tr>
                                <th>S.No.</th>
                                <th>Agreement*</th>
                                <th>Annexure </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td> 1 </td>
                                <td>
                                  Agreement between the entities to provide
                                  technical assistance
                                </td>
                                <td align="center" size="large">
                                  <input 
                                    type="file"
                                    onChange={((e)=> setTechnicalAssistanceAgreementDoc(e.target.value))}
                                    class="form-control"
                                  />
                                </td>
                              </tr>

                              <tr>
                                <td> 2 </td>
                                <td>
                                  Board resolutions of authorized signatory of
                                  firm/company provided technical assistance
                                </td>
                                <td align="center" size="large">
                                <input 
                                      type="file"
                                      onChange={((e)=> setBoardDocN(e.target.value))}
                                      class="form-control"
                                    />
                                </td>
                              </tr>
                              <tr>
                                <td> 3 </td>

                                <td>
                                  Auto populate details of earlier license(s)
                                  granted to existing developer company/firm to
                                  set up a colony under act of 1975.
                                </td>
                                <td align="center" size="large">
                                <input 
                                      type="file"
                                      onChange={((e)=> setEarlierDocN(e.target.value))}
                                      class="form-control"
                                    />
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>
              {/* </Col> */}
            </div>
            <div className="form-group col-md2 mt-4">
              <button className="btn btn-success" style={{ float: "right" }} onClick={submitTechdevData} >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AppliedDetailForm;
// export default UploadDocuments;
