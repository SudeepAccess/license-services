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

import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import "../Developer/AddInfo.css";
// import DashboardScreen from "../../src/Screens/DashboardScreen/DashboardScreen"; 
import { useForm } from "react-hook-form";


import AddIcon from '@material-ui/icons/Add';

function UploadDocuments() {

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
  register, handleSumit, formState: { error }} = useForm([{Sr:'',Name:'',Mobile:'',Email:'',PAN:'' ,Aadhar:''}]);
  const formSubmit = (data) =>{
      console.log("data", data);
  };
  const [showhide,setShowhide]=useState("No");
  const handleshow=e=>{
    const getshow=e.target.value;
    setShowhide(getshow);
  }
  
  const[noofRows,setNoOfRows]=useState(1);
  




  return (
    <>
    {/* <DashboardScreen /> */}
    <div className="container my-5">
      <div className="row mt-4">
     
          
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
                          {[...Array(noofRows)].map((elementInArray,input)=>{
                            return(

                         
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
                                <input
                                  type="file"
                                  name="upload"
                                  placeholder=""
                                  class="form-control"
                                />
                              </td>
                            </tr>
                            )
                          })}
                          </tbody>
                        </Table>

                      </div>
                      <button type="button"  style={{ float:'left'}} className="btn btn-primary" onClick={()=>setNoOfRows(noofRows+1)}>Add More</button>
                      <button type="button"  style={{ float:'right'}} className="btn btn-danger" onClick={()=>setNoOfRows(noofRows-1)}>Remove</button>
      
      </div>
      <div className="form-group col-md6 mt-6">
                        <button type="button" style={{ float:'right'}}  className="btn btn-success">Submit
                        </button>
                      </div>
      </div>
      </div>
      </div>
      
    </>
  );
}

export default UploadDocuments;