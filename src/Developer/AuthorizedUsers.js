// import React from "react";
// import "../Developer/AddInfo.css";
// import { Container, Paper, Box, Typography } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import { ThemeProvider } from "react-bootstrap";

// const useStyles =makeStyles( (theme)  => ({
//     root:{
//         width: "100vw",
//         height: "100vh",
//         backgroundColor: theme.palette.g[300],
//         paddingTop: theme.spacing(5),
//     },
// }));

// function Add1() {
//     const
// }

// import React from "react";
// import "../Developer/Add1.css";
// import "../Developer/AddInfo.css";

// class Add1 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//        formValues: [{ name: "", email : "" }]
//      };
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }
//   handleChange(i, e) {
//     let formValues = this.state.formValues;
//     formValues[i][e.target.name] = e.target.value;
//     this.setState({ formValues });
//   }

//   addFormFields() {
//     this.setState(({
//       formValues: [...this.state.formValues, { name: "", email: "" }]
//     }))
//   }

//   removeFormFields(i) {
//     let formValues = this.state.formValues;
//     formValues.splice(i, 1);
//     this.setState({ formValues });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     alert(JSON.stringify(this.state.formValues));
//   }

//   render() {

//     return (
//         <form  onSubmit={this.handleSubmit}>
//           {this.state.formValues.map((element, index) => (
//             <div className="form-inline" key={index}>
//               <label>Name</label>
//               <input type="text" name="name" value={element.name || ""} onChange={e => this.handleChange(index, e)} />
//               <label>Email</label>
//               <input type="text" name="email" value={element.email || ""} onChange={e => this.handleChange(index, e)} />
//               {
//                 index ?
//                   <button type="button"  className="button remove" onClick={() => this.removeFormFields(index)}>Remove</button>
//                 : null
//               }
//             </div>
//           ))}
//           <div className="button-section">
//               <button className="button add" type="button" onClick={() => this.addFormFields()}>Add</button>
//               <button className="button submit" type="submit">Submit</button>
//           </div>
//       </form>
//     );
//   }
// }
// export default Add1;

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import "../Developer/AddInfo.css";
// import DashboardScreen from "../../src/Screens/DashboardScreen/DashboardScreen";
import { useForm } from "react-hook-form";
import Popup from "reactjs-popup";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  ModalFooter,
} from "reactstrap";

import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@mui/icons-material/Delete";

export default function PopupGfg() {
  const [modal, setmodal] = useState(false);
  const [modalValuesArray,setModalValuesArray]= useState([]);
  // const Modal = () => (
  //   <Popup trigger={<button className="button"> Open Modal </button>} modal>
  //     <span> Modal content </span>
  //   </Popup>
  // );

  // function UploadDocuments() {
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
  const [modalNAme,setModalNAme]=useState("");
  const [modalMobile,setModalMobile]=useState("");
  const [modalEmail,setModalEmail]=useState("");
  const [uploadPan,setModalUploadPan]=useState("");
  const [uploadAdhaar,setModalUploadAhaar]=useState("");
  const [uploadSign,setModalUploadSign]=useState("");

  const handleArrayValues=()=>{
  
    if (modalNAme!=="" && modalMobile!=="" && modalEmail!=="") {
      
      const values ={
        "name":modalNAme,
        "mobile":modalMobile,
        "email":modalEmail,
        "uploadPan":uploadPan,
        "uploadAdhaar":uploadAdhaar,
        "uploadSign":uploadSign
      }
      setModalValuesArray((prev)=>[...prev,values]);
      setmodal(!modal)
    }
  }
  console.log("FORMARRAYVAL",modalValuesArray);
  
  return (
    <>
      {/* <DashboardScreen /> */}
      {/* <div className="container my-5">
        <div className="row mt-4"> */}
        <div className="bigCard">
          <div className="card">
            <div>
              <h5 className="card-h"> Developer</h5>
            </div>
            {/* <div className="card shadow"> */}

            <div className="card-body">
              <h5 className="card-h">Add/Remove Authorized Users</h5>
              <div className="table-bd">
                {/* { inputFields.map((data, index)=>{
                    const {}
                  })
                  } */}
                <Table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Sr. No</th>
                      <th>Name</th>
                      <th>Mobile Number</th>
                      <th>Email</th>
                      <th>Upload PAN PDF</th>
                      <th>Upload Aadhar PDF</th>
                      <th>Upload Digital Signature PDF</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                          (modalValuesArray.length>0)?
                          modalValuesArray.map((elementInArray, input) => {
                            return (
                        <tr>
                          <td>{input+1}</td>
                          <td>
                            <input
                              type="text"
                              value={elementInArray.name}
                              placeholder={elementInArray.name}
                              readOnly
                              class="form-control"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              value={elementInArray.mobile}
                              placeholder={elementInArray.mobile}
                              readOnly
                              class="form-control"
                            />
                          </td>
                          <td>
                            <input
                              type="email"
                              value={elementInArray.email}
                              placeholder={elementInArray.email}
                              readOnly
                              class="form-control"
                            />
                          </td>
                          <td>
                            <input
                              type="file"
                              value={elementInArray.uploadPan}
                              placeholder={elementInArray.uploadPan}
                              readOnly
                              class="form-control"
                            />
                          </td>
                          <td>
                            <input
                              type="file"
                              value={elementInArray.uploadAdhaar}
                              placeholder={elementInArray.uploadAdhaar}
                              readOnly
                              class="form-control"
                            />
                          </td>
                          <td>
                            <input
                              type="file"
                              value={elementInArray.uploadSign}
                              placeholder={elementInArray.uploadSign}
                              readOnly
                              class="form-control"
                            />
                          </td>
                        </tr>
                      );
                    }) : <p>Click Add more button</p>
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
                                    <label htmlFor="name" className="text">Name</label>
                                    <input
                                      type="text"
                                      onChange={(e)=>setModalNAme(e.target.value)}
                                      placeholder=""
                                      class="form-control"
                                    />
                                  </Col>
                                  <Col md={4} xxl lg="4">
                                    <label htmlFor="name" className="text">Mobile Number</label>
                                    <input
                                      type="number"
                                      onChange={(e)=>setModalMobile(e.target.value)}
                                      placeholder=""
                                      class="form-control"
                                    />
                                  </Col>
                                  <Col md={4} xxl lg="4">
                                    <label htmlFor="name" className="text">Email</label>
                                    <input
                                      type="email"
                                      onChange={(e)=>setModalEmail(e.target.value)}
                                      placeholder=""
                                      class="form-control"
                                    />
                                  </Col>
                              </Row>
                                <Row>
                                  <Col md={4} xxl lg="4">
                                    <label htmlFor="name" className="text">Upload PAN PDF</label>
                                    <input
                                      type="file"
                                      value={uploadPan}
                                      placeholder=""
                                      class="form-control"
                                    />
                                  </Col>
                                  <Col md={4} xxl lg="4">
                                    <label htmlFor="name" className="text">Upload Aadhar PDF</label>
                                    <input
                                      type="file"
                                      value={uploadAdhaar}
                                      placeholder=""
                                      class="form-control"
                                    />
                                  </Col>
                                  <Col md={4} xxl lg="4">
                                    <label htmlFor="name" className="text">Upload Digital Signature PDF</label>
                                    <input
                                      type="file"
                                      value={uploadSign}
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
                onClick={handleArrayValues}
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
              </div>
              {/* <button
                type="button"
                style={{ float: "left" }}
                className="btn btn-primary"
                onClick={() => setNoOfRows(noofRows + 1)}
              >
                Add More
              </button> */}
              <button
                type="button"
                style={{ float: "right" }}
                className="btn btn-danger"
                onClick={() => setNoOfRows(noofRows - 1)}
              >
                Remove
              </button>
            </div>
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
          {/* <div>
            <Popup
  trigger={<button className="button"> Open Modal </button>}
  modal
  nested
>
{close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Modal Title </div>
        <div className="content">
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
          Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
          delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
          commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
          explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
        </div>
        <div className="actions">
          <Popup
            trigger={<button className="button"> Trigger </button>}
            position="top center"
            nested
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              magni omnis delectus nemo, maxime molestiae dolorem numquam
              mollitia, voluptate ea, accusamus excepturi deleniti ratione
              sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
          </Popup>
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            close modal
          </button>
        </div> */}
          {/* </div>
    )}
  </Popup>
            </div> */}
        {/* </div>
      </div> */}
      </div>
    </>
  );
}

// export default UploadDocuments;
