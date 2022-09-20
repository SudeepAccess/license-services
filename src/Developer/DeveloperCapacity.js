// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Table from "react-bootstrap/Table";
// import "../Developer/AddInfo.css";
// import FileUploadIcon from "@mui/icons-material/FileUpload";
// import Ext from "../Developer/ext";
// import UnderTable from "../Developer/underTable2";
// // import AddIcon from '@mui/icons-material/Add';
// // import DeleteIcon from '@mui/icons-material/Delete';
// import { useForm } from "react-hook-form";
// import { Container } from "react-bootstrap";
// import { Col } from "reactstrap";

// // function DeveloperCapacity() {
// //   const handleChange = (e) => {
// //     this.setState({ isRadioSelected: true });
// //   };
// //   const {
// //     register,
// //     handleSumit,
// //     formState: { error },
// //   } = useForm([
// //     { Sr: "", Name: "", Mobile: "", Email: "", PAN: "", Aadhar: "" },
// //   ]);
// //   const formSubmit = (data) => {
// //     console.log("data", data);
// //   };
// //   const [showhide, setShowhide] = useState("No");
// //   const handleshow = (e) => {
// //     const getshow = e.target.value;
// //     setShowhide(getshow);
// //   };

// // const [noofRows, setNoOfRows] = useState(1);
// // const [aoofRows, setAoOfRows] = useState(1);
// // const [boofRows, setBoOfRows] = useState(1);

// class Showhide extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: "" };
//   }
//   onchange = (e) => {
//     this.setState({ value: e.target.value });
//   };

//   render() {
//     const { value } = this.state;
//     // const {
//     //   register,
//     //   handleSumit,
//     //   formState: { error },
//     // } = useForm([
//     //   { Sr: "", Name: "", Mobile: "", Email: "", PAN: "", Aadhar: "" },
//     // ]);
//     // const formSubmit = (data) => {
//     //   console.log("data", data);
//     // };
//     // const [showhide, setShowhide] = useState("No");
//     // const handleshow = (e) => {
//     //   const getshow = e.target.value;
//     //   setShowhide(getshow);
//     // };

//     // const [noofRows, setNoOfRows] = useState(0);
//     // const [aoofRows, setAoOfRows] = useState(1);

//     return (
//       <>
//         <React.Fragment>
//           <Container>
//             {/* <div className="container my-5">
//               <div className="row mt-4"> */}
//               <div className="bigCard">
//                 <div className="card">
//                   <div>
//                     <h5 className="card-h">
//                       {" "}
//                       Capacity of Developer to develop a colony:
//                     </h5>
//                   </div>
//                   {/* <div className="card shadow"> */}
//                   <div className="card-body">
//                     <p>
//                       1. I/ We hereby submit the following information/ enclose
//                       the relevant documents:-
//                     </p>
//                     <p>
//                       &nbsp;&nbsp;&nbsp; (i) Whether the Developer/ group
//                       company has earlier been granted permission to set up a
//                       colony under HDRU Act, 1975: *{" "}
//                     </p>

//                     <div className="form-group row">
//                       {/* <label className="col-sm-3 col-form-label">Full Address</label> */}
//                       <div className="col-sm-3 mt-3">
//                         <input
//                           type="radio"
//                           className="mx-2"
//                           name="isyes"
//                           value="2"
//                           onChange={this.onchange}
//                         />
//                         Yes
//                       </div>
//                       <div className="col-sm-3 mt-3">
//                         <input
//                           type="radio"
//                           className="mx-2 mt-1"
//                           name="isyes"
//                           value="3"
//                           onChange={this.onchange}
//                         />{" "}
//                         NO
//                       </div>
//                       {/* <div className="col-sm-3 mt-4">LLP
//                                     <input type="radio" className="mx-2 mt-1" name='isyes' value="2" onChange={this.onchange} />
//                                 </div> */}
//                     </div>
//                     {/* <input
//                 className="radio"
//                 type="radio"
//                 value="yes"
//                 id="yes"
//                 onChange={handleChange}
//                 name="yes"
//               />
//               <label for="yes">Yes</label>
//               &nbsp;&nbsp;&nbsp;
//               <input
//                 className="radio"
//                 type="radio"
//                 value="No"
//                 id="No"
//                 onChange={handleChange}
//                 name="yes"
//               />

//               <label for="No">No</label> */}
//                     {value === "2" && <Ext />}

//                     <div className="hl"></div>
//                     <p>
//                       &nbsp;&nbsp;&nbsp;(ii) Licences/permissions granted to
//                       Developer/ group company for development of colony under
//                       any other law/Act as .
//                     </p>
//                     <div>
//                       <UnderTable />
//                     </div>
//                     <div className="hl"></div>
//                     <p>
//                       &nbsp;&nbsp;&nbsp;(iii) Whether any technical expert(s)
//                       engaged
//                     </p>

//                     <div className="form-group row">
//                       {/* <label className="col-sm-3 col-form-label">Full Address</label> */}
//                       <div className="col-sm-3 mt-3">
//                         <input
//                           type="radio"
//                           className="mx-2"
//                           name="isyes"
//                           value="4"
//                           onChange={this.onchange}
//                         />
//                         Yes
//                       </div>
//                       <div className="col-sm-3 mt-3">
//                         <input
//                           type="radio"
//                           className="mx-2 mt-1"
//                           name="isyes"
//                           value="5"
//                           onChange={this.onchange}
//                         />{" "}
//                         NO
//                       </div>
//                       {/* <div className="col-sm-3 mt-4">LLP
//                                     <input type="radio" className="mx-2 mt-1" name='isyes' value="2" onChange={this.onchange} />
//                                 </div> */}
//                     </div>
//                     {/* <input
//                 className="radio"
//                 type="radio"
//                 value="yes"
//                 id="yes"
//                 onChange={handleChange}
//                 name="yes"
//               />
//               <label for="yes">Yes</label>
//               &nbsp;&nbsp;&nbsp;
//               <input
//                 className="radio"
//                 type="radio"
//                 value="No"
//                 id="No"
//                 onChange={handleChange}
//                 name="yes"
//               />
//               <label for="No">No</label> */}
//                     {value === "4" && (
//                       <div className="form-group row">
//                         {/* <label className="col-sm-3 col-form-label">Company</label> */}
//                         <div className="col-sm-12">
//                           <div className="table-bd">
//                             <Table className="table table-bordered">
//                               <thead>
//                                 <tr>
//                                   <th>S.No</th>
//                                   <th>Professional </th>
//                                   <th>Qualification</th>
//                                   <th>Signature</th>
//                                   <th>Annexure</th>
//                                 </tr>
//                               </thead>
//                               <tbody>
//                                 <tr>
//                                   <td>1</td>
//                                   <td>Name of Engineer</td>
//                                   <td>
//                                     <input
//                                       type="text"
//                                       name="name[]"
//                                       placeholder=""
//                                       class="form-control"
//                                     />
//                                   </td>

//                                   <td>
//                                     <input
//                                       type="file"
//                                       name="upload"
//                                       placeholder=""
//                                       class="form-control"
//                                     />
//                                   </td>
//                                   <td align="center" size="large">
//                                     <FileUploadIcon />
//                                   </td>
//                                 </tr>

//                                 <tr>
//                                   <td>2</td>
//                                   <td> Name of Architect</td>
//                                   <td>
//                                     <input
//                                       type="text"
//                                       name="name[]"
//                                       placeholder=""
//                                       class="form-control"
//                                     />
//                                   </td>

//                                   <td>
//                                     <input
//                                       type="file"
//                                       name="upload"
//                                       placeholder=""
//                                       class="form-control"
//                                     />
//                                   </td>
//                                   <td align="center" size="large">
//                                     <FileUploadIcon />
//                                   </td>
//                                 </tr>

//                                 <tr>
//                                   <td>3</td>
//                                   <td> Name of Town Planner</td>
//                                   <td>
//                                     <input
//                                       type="text"
//                                       name="name[]"
//                                       placeholder=""
//                                       class="form-control"
//                                     />
//                                   </td>

//                                   <td>
//                                     <input
//                                       type="file"
//                                       name="upload"
//                                       placeholder=""
//                                       class="form-control"
//                                     />
//                                   </td>
//                                   <td align="center" size="large">
//                                     <FileUploadIcon />
//                                   </td>
//                                 </tr>
//                               </tbody>
//                             </Table>
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                     {value === "5" && (
//                       <div className="form-group row">
//                         {/* <label className="col-sm-3 col-form-label">Company</label> */}
//                         <div className="col-sm-12">
//                           <div className="table-bd">
//                             <Table className="table table-bordered" size="sm">
//                               <thead>
//                                 <tr>
//                                   <th>S.No.</th>
//                                   <th>Professional </th>
//                                   <th> Annexure</th>
//                                 </tr>
//                               </thead>
//                               <tbody>
//                                 <tr>
//                                   <td> 1 &nbsp;&nbsp;</td>
//                                   <td>
//                                     {" "}
//                                     Agreement with existing colonizer/developer
//                                     who has already developed a colony
//                                   </td>
//                                   <td align="center" size="large">
//                                     <FileUploadIcon />
//                                   </td>
//                                 </tr>
//                                 <tr>
//                                   <td> 2&nbsp;&nbsp; </td>
//                                   <td>Technical capacity</td>
//                                   <td align="center" size="large">
//                                     <FileUploadIcon />
//                                   </td>
//                                 </tr>
//                                 <tr>
//                                   <td> 3 &nbsp;&nbsp;</td>
//                                   {/* <td colSpan={2}>Larry the Bird</td> */}
//                                   <td>Name of Engineer</td>
//                                   <td align="center" size="large">
//                                     <FileUploadIcon />
//                                   </td>
//                                 </tr>
//                                 <tr>
//                                   <td> 4&nbsp;&nbsp; </td>
//                                   <td> Name of Architect</td>
//                                   <td align="center" size="large">
//                                     <FileUploadIcon />
//                                   </td>
//                                 </tr>
//                                 <tr>
//                                   <td> 5&nbsp;&nbsp; </td>
//                                   <td>
//                                     Upload SPA/GPA/ Board Resolution to sign
//                                     collaboration agreement on behalf of land
//                                     owner(s)
//                                   </td>
//                                   <td align="center" size="large">
//                                     <FileUploadIcon />
//                                   </td>
//                                 </tr>
//                               </tbody>
//                             </Table>
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                     <div className="hl"></div>
//                     <p>
//                       &nbsp;&nbsp;&nbsp;(iv) If director/partner of the proposed
//                       developer company/firm also holds designation of
//                       director/partner in any other company/firm who has already
//                       obtained license(s) under act of 1975:
//                     </p>

//                     <div className="form-group row">
//                       {/* <label className="col-sm-3 col-form-label">Full Address</label> */}
//                       <div className="col-sm-3 mt-3">
//                         <input
//                           type="radio"
//                           className="mx-2"
//                           name="isyes"
//                           value="6"
//                           onChange={this.onchange}
//                         />
//                         Yes
//                       </div>
//                       <div className="col-sm-3 mt-3">
//                         <input
//                           type="radio"
//                           className="mx-2 mt-1"
//                           name="isyes"
//                           value="7"
//                           onChange={this.onchange}
//                         />{" "}
//                         NO
//                       </div>
//                     </div>
//                     {/* <input
//                 className="radio"
//                 type="radio"
//                 value="yes"
//                 id="yes"
//                 onChange={handleChange}
//                 name="yes"
//               />
//               <label for="yes">Yes</label>
//               &nbsp;&nbsp;&nbsp;
//               <input
//                 className="radio"
//                 type="radio"
//                 value="No"
//                 id="No"
//                 onChange={handleChange}
//                 name="yes"
//               />
//               <label for="No">No</label> */}
//                     {value === "6" && (
//                       <div className="form-group row">
//                         {/* <label className="col-sm-3 col-form-label">Company</label> */}
//                         <div className="col-sm-12">
//                           <Col xs="12" md="12" sm="12">
//                             <Table className="table table-bordered" size="sm">
//                               <thead>
//                                 <tr>
//                                   <th>S.No.</th>
//                                   <th>Professional </th>
//                                   <th> Annexure</th>
//                                 </tr>
//                               </thead>
//                               <tbody>
//                                 <tr>
//                                   <td> 1 &nbsp;&nbsp;</td>
//                                   <td>
//                                     {" "}
//                                     Agreement between the entities to provide
//                                     technical assistance
//                                   </td>
//                                   <td align="center" size="large">
//                                     <FileUploadIcon />
//                                   </td>
//                                 </tr>
//                                 <tr>
//                                   <td> 2&nbsp;&nbsp; </td>
//                                   <td>
//                                     Board resolutions of authorized signatory of
//                                     firm/company provided technical assistance
//                                   </td>
//                                   <td align="center" size="large">
//                                     <FileUploadIcon />
//                                   </td>
//                                 </tr>
//                               </tbody>
//                             </Table>
//                           </Col>
//                         </div>
//                       </div>
//                     )}
//                     <div className="hl"></div>
//                     <p>
//                       2. In case of technical capacity sought from another
//                       company/firm who has already obtained license(s) under act
//                       of 1975 or outside Haryana:
//                     </p>
//                     {/* &nbsp;&nbsp;&nbsp; */}
//                     <div className="form-group row">
//                       {/* <label className="col-sm-3 col-form-label">Full Address</label> */}
//                       <div className="col-sm-3 mt-3">
//                         <input
//                           type="radio"
//                           className="mx-2"
//                           name="isyes"
//                           value="1"
//                           id="HDRU"
//                           onChange={this.onchange}
//                         />
//                         Yes
//                       </div>
//                       <div className="col-sm-3 mt-3">
//                         <input
//                           type="radio"
//                           className="mx-2 mt-1"
//                           name="isyes"
//                           value="0"
//                           id="HDRU"
//                           onChange={this.onchange}
//                         />{" "}
//                         NO
//                       </div>
//                     </div>

//                     {value === "1" && (
//                       <div className="form-group row">
//                         {/* <label className="col-sm-3 col-form-label">Company</label> */}
//                         <div className="col-sm-12">
//                           <Col xs="12" md="12" sm="12">

//                             <div>
//                               <Table className="table table-bordered" size="sm">
//                                 <thead>
//                                   <tr>
//                                     <th>S.No.</th>
//                                     <th>Agreement*</th>
//                                     <th>Annexure </th>
//                                   </tr>
//                                 </thead>
//                                 <tbody>
//                                   <tr>
//                                     <td> 1 </td>
//                                     <td>
//                                       {" "}
//                                       Registered and Irrevocable Agreement
//                                     </td>
//                                     <td align="center" size="large">
//                                       <FileUploadIcon />
//                                     </td>
//                                   </tr>

//                                   <tr>
//                                     <td> 2 </td>
//                                     <td>
//                                       Board resolutions of authorized signatory
//                                       of firm/company provided technical
//                                       assistance
//                                     </td>
//                                     <td align="center" size="large">
//                                       <FileUploadIcon />
//                                     </td>
//                                   </tr>
//                                   <tr>
//                                     <td> 3 </td>

//                                     <td>
//                                       Auto populate details of earlier
//                                       license(s) granted to existing developer
//                                       company/firm to set up a colony under act
//                                       of 1975.
//                                     </td>
//                                     <td align="center" size="large">
//                                       <FileUploadIcon />
//                                     </td>
//                                   </tr>
//                                 </tbody>
//                               </Table>
//                             </div>
//                           </Col>
//                         </div>
//                       </div>
//                     )}
//                     {value === "0" && (
//                       <div className="form-group row">
//                         {/* <label className="col-sm-3 col-form-label">Company</label> */}
//                         <div className="col-sm-12">
//                           <div>
//                             <Table className="table table-bordered" size="sm">
//                               <thead>
//                                 <tr>
//                                   <th>S.No.</th>
//                                   <th>Agreement*</th>
//                                   <th>Annexure </th>
//                                 </tr>
//                               </thead>
//                               <tbody>
//                                 <tr>
//                                   <td> 1 </td>
//                                   <td>
//                                     Agreement between the entities to provide
//                                     technical assistance
//                                   </td>
//                                   <td align="center" size="large">
//                                     <FileUploadIcon />
//                                   </td>
//                                 </tr>

//                                 <tr>
//                                   <td> 2 </td>
//                                   <td>
//                                     Board resolutions of authorized signatory of
//                                     firm/company provided technical assistance
//                                   </td>
//                                   <td align="center" size="large">
//                                     <FileUploadIcon />
//                                   </td>
//                                 </tr>
//                                 <tr>
//                                   <td> 3 </td>

//                                   <td>
//                                     Auto populate details of earlier license(s)
//                                     granted to existing developer company/firm
//                                     to set up a colony under act of 1975.
//                                   </td>
//                                   <td align="center" size="large">
//                                     <FileUploadIcon />
//                                   </td>
//                                 </tr>
//                               </tbody>
//                             </Table>
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                   {/* <div className="form-group col-md2 mt-4">
//               <button className="btn btn-success">Add More</button>
//             </div> */}
//                 </div>
//                 </div>
//               {/* </div>
//             </div> */}
//           </Container>
//         </React.Fragment>
//       </>
//     );
//   }
// }
// export default Showhide;
// // export default DeveloperCapacity();

//..........................................................................................................

// import React, { useState } from "react";
// import {Form, Col} from "react-bootstrap/Form";
// import { Card, Row, Col , Form} from "react-bootstrap";
// import Table from "react-bootstrap/Table";
// import "../src/Developer/AddInfo.css";

// import DashboardScreen from "../../src/Screens/DashboardScreen/DashboardScreen";
// import { useForm } from "react-hook-form";

// import AddIcon from '@material-ui/icons/Add';
// import AddIcon from "@mui/icons-material/Add";
// import DeleteIcon from "@mui/icons-material/Delete";

// function UploadDocuments() {
//     const handleChange=(e)=>{
//         this.setState({ isRadioSelected: true });

//      }
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
// const {
//   register,
//   handleSumit,
//   formState: { error },
// } = useForm([
//   { Sr: "", Name: "", Mobile: "", Email: "", PAN: "", Aadhar: "" },
// ]);
// const formSubmit = (data) => {
//   console.log("data", data);
// };
// const [showhide, setShowhide] = useState("No");
// const handleshow = (e) => {
//   const getshow = e.target.value;
//   setShowhide(getshow);
// };

// const [noofRows, setNoOfRows] = useState(1);
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

const AppliedDetailForm = (props) => {
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
                  <div className="row ">
                    <Ext />
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
          </div>
        </div>
      </div>
    </>
  );
};
export default AppliedDetailForm;
// export default UploadDocuments;
