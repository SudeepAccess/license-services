
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
import { useSelector } from "react-redux";
import { selectmodalAuthUserValuesArray } from "../Redux/Slicer/Slicer";
import {setTechnicalData} from "../Redux/Slicer/Slicer";
import { useDispatch } from "react-redux";

const AppliedDetailForm = (props) => {
  const [modal, setmodal] = useState(false);
  const [modalDevGrpValuesArray, setModalDevGrpValuesArray] = useState([]);
  const authUserName=useSelector(selectmodalAuthUserValuesArray);
  console.log("AUTHNAME",authUserName);
 
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


  const [lic_number,setModalLcNo] = useState("");
  const [dev_name,setModalDevName] = useState("");
  const [purpose_Colony,setModalPurposeCol] = useState("");
  const [dev_plan,setModalDevPlan] = useState("");
  const [dev_validity,setModalDevValidity] = useState("");
  const handleArrayValues=()=>{
  
    if (lic_number!=="" && dev_name!=="" && purpose_Colony!=="") {
      
      const values ={
        modalDevGrpValuesArray:{
          lic_number:lic_number,
          dev_name:dev_name,
          purpose_Colony:purpose_Colony,
          dev_plan:dev_plan,
          dev_validity:dev_validity
        }
      }


      
      setModalDevGrpValuesArray((prev)=>[...prev,values]);
      setmodal(!modal)
    }
    console.log("DevCapacity",modalDevGrpValuesArray);
  localStorage.setItem("DevCapacityDetails",JSON.stringify(modalDevGrpValuesArray))
  }

  const submitTechdevData=()=>{ 
    dispatch(setTechnicalData(
      values
    ))

  }


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
                          (modalDevGrpValuesArray.length>0)?
                          modalDevGrpValuesArray.map((elementInArray, input) => {
                            return (
                            <tr>
                             
                             <td>{input+1}</td>
                              <td>
                                <input
                                  type="text"
                                  value={elementInArray.modalDevGrpValuesArray.lic_number}
                                  placeholder={elementInArray.modalDevGrpValuesArray.lic_number}
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  value={elementInArray.modalDevGrpValuesArray.dev_Name}
                                  placeholder={elementInArray.modalDevGrpValuesArray.dev_name}
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="email"
                                  value={elementInArray.modalDevGrpValuesArray.purpose_Colony}
                                  placeholder={elementInArray.modalDevGrpValuesArray.purpose_Colony}
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
                          }):<p>Click on Add more</p>
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
                                                onChange={(e)=>setModalLcNo(e.target.value)}
                                                placeholder=""
                                                class="form-control"
                                              />
                                            </Col>
                                            <Col md={4} xxl lg="4">
                                              <label htmlFor="name" className="text">Name of developer *</label>
                                              <input
                                                type="text"
                                                onChange={(e)=>setModalDevName(e.target.value)}
                                                placeholder=""
                                                class="form-control"
                                              />
                                            </Col>
                                            <Col md={4} xxl lg="4">
                                              <label htmlFor="name" className="text">Purpose of colony</label>
                                              <input
                                                type="text"
                                                onChange={(e)=>setModalPurposeCol(e.target.value)}
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
                                                onChange={(e)=>setModalDevPlan(e.target.value)}
                                                placeholder=""
                                                class="form-control"
                                              />
                                            </Col>
                                            <Col md={4} xxl lg="4">
                                              <label htmlFor="name" className="text">Validity of licence including renewals if any</label>
                                              <input
                                                type="file"
                                                onChange={(e)=>setModalDevValidity(e.target.value)}
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
                <UnderTable />
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
                                <td>Name of Engineer</td>
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
                                    type="file"
                                    name="upload"
                                    placeholder=""
                                    class="form-control"
                                  />
                                </td>
                                <td align="center" size="large">
                                  <FileUploadIcon />
                                </td>
                              </tr>

                              <tr>
                                <td>2</td>
                                <td> Name of Architect</td>
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
                                    type="file"
                                    name="upload"
                                    placeholder=""
                                    class="form-control"
                                  />
                                </td>
                                <td align="center" size="large">
                                  <FileUploadIcon />
                                </td>
                              </tr>

                              <tr>
                                <td>3</td>
                                <td> Name of Town Planner</td>
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
                                    type="file"
                                    name="upload"
                                    placeholder=""
                                    class="form-control"
                                  />
                                </td>
                                <td align="center" size="large">
                                  <FileUploadIcon />
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
                                </td>
                                <td align="center" size="large">
                                  <FileUploadIcon />
                                </td>
                              </tr>
                              <tr>
                                <td> 2&nbsp;&nbsp; </td>
                                <td>Technical capacity</td>
                                <td align="center" size="large">
                                  <FileUploadIcon />
                                </td>
                              </tr>
                              <tr>
                                <td> 3 &nbsp;&nbsp;</td>
                                {/* <td colSpan={2}>Larry the Bird</td> */}
                                <td>Name of Engineer</td>
                                <td align="center" size="large">
                                  <FileUploadIcon />
                                </td>
                              </tr>
                              <tr>
                                <td> 4&nbsp;&nbsp; </td>
                                <td> Name of Architect</td>
                                <td align="center" size="large">
                                  <FileUploadIcon />
                                </td>
                              </tr>
                              <tr>
                                <td> 5&nbsp;&nbsp; </td>
                                <td>
                                  Upload SPA/GPA/ Board Resolution to sign
                                  collaboration agreement on behalf of land
                                  owner(s)
                                </td>
                                <td align="center" size="large">
                                  <FileUploadIcon />
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
                  onChange={handleChange}
                  name="Yes"
                  onClick={handleshow}
                />
                <label for="Yes">Yes</label>

                <input
                  type="radio"
                  value="No"
                  id="No"
                  className="mx-2 mt-1"
                  onChange={handleChange}
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
                                  <FileUploadIcon />
                                </td>
                              </tr>
                              <tr>
                                <td> 2&nbsp;&nbsp; </td>
                                <td>
                                  Board resolutions of authorized signatory of
                                  firm/company provided technical assistance
                                </td>
                                <td align="center" size="large">
                                  <FileUploadIcon />
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
                                    <FileUploadIcon />
                                  </td>
                                </tr>

                                <tr>
                                  <td> 2 </td>
                                  <td>
                                    Board resolutions of authorized signatory of
                                    firm/company provided technical assistance
                                  </td>
                                  <td align="center" size="large">
                                    <FileUploadIcon />
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
                                    <FileUploadIcon />
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
                                  <FileUploadIcon />
                                </td>
                              </tr>

                              <tr>
                                <td> 2 </td>
                                <td>
                                  Board resolutions of authorized signatory of
                                  firm/company provided technical assistance
                                </td>
                                <td align="center" size="large">
                                  <FileUploadIcon />
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
                                  <FileUploadIcon />
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
