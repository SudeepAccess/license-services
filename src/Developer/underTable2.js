import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import "../Developer/AddInfo.css";
// import DashboardScreen from "../../src/Screens/DashboardScreen/DashboardScreen";
import { useForm } from "react-hook-form";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  ModalFooter,
} from "reactstrap";

// import AddIcon from '@material-ui/icons/Add';
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

function UploadDocuments() {
  const [modal, setmodal] = useState(false);
  //   const [inputFields, setInputFields] = useState([{
  //     fullName:'',

  // } ]);

  // const addInputField = ()=>{

  //     setInputFields([...inputFields, {
  //         fullName:'',
  //     } ])

  // }
  // const removeInputFields = (index)=>{
  //     const rows = [...inputFields];
  //     rows.splice(index, 1);
  //     setInputFields(rows);
  // }
  // const handleChange = (index, evnt)=>{

  // const { name, value } = evnt.target;
  // const list = [...inputFields];
  // list[index][name] = value;
  // setInputFields(list);
  const {
    register,
    handleSumit,
    formState: { error },
  } = useForm([
    { Sr: "", Name: "", Mobile: "", Email: "", PAN: "", Aadhar: "" },
  ]);
  const formSubmit = (data) => {
    console.log("data", data);
  };
  const [showhide, setShowhide] = useState("No");
  const handleshow = (e) => {
    const getshow = e.target.value;
    setShowhide(getshow);
  };

  const [noofRows, setNoOfRows] = useState(1);

  return (
    <>
      {/* <DashboardScreen /> */}
      {/* <div className="container my-5">
      <div className="row mt-4"> */}

      {/* <div className="card"> */}
      {/* <div>
                <h5 className="card-h"> Developer</h5>
              </div> */}

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
              {[...Array(noofRows)].map((elementInArray, input) => {
                return (
                  <tr>
                    {/* <td>
                      <button
                        type="button"
                        style={{ float: "left" }}
                        className="btn btn-primary"
                        onClick={() => setNoOfRows(noofRows + 1)}
                      >
                        <AddIcon />
                      </button>
                    </td> */}

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
                );
              })}
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
                                  <Col md={4} xxl lg="4">
                                    <label htmlFor="name" className="text">Colonies developed</label>
                                    <input
                                      type="text"
                                      name="name[]"
                                      placeholder=""
                                      class="form-control"
                                    />
                                  </Col>
                                  <Col md={4} xxl lg="4">
                                    <label htmlFor="name" className="text">Area</label>
                                    <input
                                      type="number"
                                      name="name[]"
                                      placeholder=""
                                      class="form-control"
                                    />
                                  </Col>
                                  <Col md={4} xxl lg="4">
                                    <label htmlFor="name" className="text">Purpose</label>
                                    <input
                                      type="text"
                                      name="name[]"
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
                                      name="name[]"
                                      placeholder=""
                                      class="form-control"
                                    />
                                  </Col>
                                  <Col md={4} xxl lg="4">
                                    <label htmlFor="name" className="text">Outstanding Dues</label>
                                    <input
                                      type="file"
                                      name="name[]"
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
      {/* <div className="form-group col-md6 mt-6">
                        <button type="button" style={{ float:'right'}}  className="btn btn-success">Submit
                        </button>
                      </div> */}
      {/* </div> */}

      {/* </div>

      </div> */}
    </>
  );
}

export default UploadDocuments;
