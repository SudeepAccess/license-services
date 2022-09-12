// import React, {useState} from 'react';
// import Form from 'react-bootstrap/Form';
// import Table from 'react-bootstrap/Table';
// import "../Developer/AddInfo.css";
// import FileUploadIcon from '@mui/icons-material/FileUpload';
// // import { useState } from 'react';



// // function DocumentsUpload() {
//   export default function DocumentsUpload() {
//     const [isChecked, setIsChecked] = useState(false);
  
//     const handleOnChange = () => {
//       setIsChecked(!isChecked);
//     };
//   return (
//     <>
//     <div className="container my-5">
//       <div className="row mt-4">
     
          
//             <div className="card">
              
                

//                 <div className="card-body">
//                   <h5 className="card-title">(i) Details of following documents</h5>
//                   <div className="App">
  
//       <div className="topping">
//         <input
//           type="checkbox"
//           id="topping"
//           name="topping"
//           value="Paneer"
//           checked={isChecked}
//           onChange={handleOnChange}
//         />
//          <Table striped bordered hover size="sm">
//       <thead>
//         <tr>
//           <th>S.No.</th>
//           <th>Particulars of document</th>
//           <th>Details </th>
//           <th>Annexure </th>
          
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td> 1 </td>
//           <td>Net Worth in case of individual certified by CA</td>
//           <td><input
//                                   type="file"
//                                   name="upload"
//                                   placeholder=""
//                                   class="form-control"
//                                 /></td>
//         <td align='center' size="large"><FileUploadIcon /></td>
      
//         </tr>
//         </tbody>
//     </Table>
//       </div>
//       <div className="result">
//         Above checkbox is {isChecked ? "checked" : "un-checked"}.
//       </div>
//     </div>
    
//       <Table striped bordered hover size="sm">
//       <thead>
//         <tr>
//           <th>S.No.</th>
//           <th>Particulars of document</th>
//           <th>Details </th>
//           <th>Annexure </th>
          
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td> 1 </td>
//           <td>Net Worth in case of individual certified by CA</td>
//           <td><input
//                                   type="file"
//                                   name="upload"
//                                   placeholder=""
//                                   class="form-control"
//                                 /></td>
//         <td align='center' size="large"><FileUploadIcon /></td>
      
//         </tr>
        
//         <tr>
//         <td> or</td>
//         </tr>
//         <tr>
//           <td> 2 </td>
//           <td>Income tax return in case of individual (for last three years)</td>
//           <td><input
//                                   type="file"
//                                   name="upload"
//                                   placeholder=""
//                                   class="form-control"
//                                 /></td>
//                                <td align='center' size="large"><FileUploadIcon /></td>
          
//         </tr>
//         <tr>
//         <td> or</td>
//         </tr>
//         <tr>
//           <td> 3 </td>
        
//           <td>	Bank statement in case of individual (for last three years)(in case of company)</td>
//           <td><input
//                                   type="file"
//                                   name="upload"
//                                   placeholder=""
//                                   class="form-control"
//                                 /></td>
//                                 <td align='center' size="large"><FileUploadIcon /></td>
//         </tr>
//         <tr>
//           <td> 4 </td>
//           <td>Details of convertible Debentures (into equity shares)(in case of company)</td>
//           <td><input
//                                   type="file"
//                                   name="upload"
//                                   placeholder=""
//                                   class="form-control"
//                                 /></td>
//                                 <td align='center' size="large" ><FileUploadIcon /></td>
//         </tr>
//         <tr>
//           <td> 5</td>
//           <td>Any other documents (in case of company)</td>
//           <td><input
//                                   type="file"
//                                   name="upload"
//                                   placeholder=""
//                                   class="form-control"
//                                 /></td>
//                                 <td align='center' size="large" ><FileUploadIcon /></td>
//         </tr>
//         <tr>
//           <td> 6 </td>
//           <td>	Upload reserves & surpluses</td>
//           <td><input
//                                   type="file"
//                                   name="upload"
//                                   placeholder=""
//                                   class="form-control"
//                                 /></td>
//                                 <td align='center' size="large" ><FileUploadIcon /></td>
//         </tr>
//         <tr>
//           <td> 7 </td>
//           <td>Total Paid up capital</td>
//           <td><input
//                                   type="file"
//                                   name="upload"
//                                   placeholder=""
//                                   class="form-control"
//                                 /></td>
//                                 <td align='center' size="large" ><FileUploadIcon /></td>
//         </tr>
//       </tbody>
//     </Table>
//       </div>
//       {/* <div className="form-group col-md2 mt-4">
//                         <button  className="btn btn-success">Add More
//                         </button>
//                       </div> */}
//       </div>
//       </div>
//       </div>
//     </>
//   );
// }
// export default DocumentsUpload;

// export default DocumentsUpload;
// import {useState} from 'react';

// export default function App() {
//   const [isSubscribed, setIsSubscribed] = useState(false);

//   const handleChange = event => {
//     if (event.target.checked) {
//       console.log('✅ Checkbox is checked');
//     } else {
//       console.log('⛔️ Checkbox is NOT checked');
//     }
//     setIsSubscribed(current => !current);
//   };

//   return (
//     <div>
//       <label htmlFor="subscribe">
//         <input
//           type="checkbox"
//           value={isSubscribed}
//           onChange={handleChange}
//           id="subscribe"
//           name="subscribe"
//         />
//         Subscribe
//       </label>
//     </div>
//   );
// }

// }
// import React, { useState } from "react";
// import ReactDOM from "react-dom";

// // import "./styles.css";

// export function translateDate(date) {
//   // State with list of all checked item
//   const [checked, setChecked] = useState([]);
//   const checkList = ["Apple", "Banana", "Tea", "Coffee"];

//   // Add/Remove checked item from list
//   const handleCheck = (event) => {
//     var updatedList = [...checked];
//     if (event.target.checked) {
//       updatedList = [...checked, event.target.value];
//     } else {
//       updatedList.splice(checked.indexOf(event.target.value), 1);
//     }
//     setChecked(updatedList);
//   };

//   // Generate string of checked items
//   const checkedItems = checked.length
//     ? checked.reduce((total, item) => {
//         return total + ", " + item;
//       })
//     : "";

//   // Return classes based on whether item is checked
//   var isChecked = (item) =>
//     checked.includes(item) ? "checked-item" : "not-checked-item";

//   return (
//     <div className="app">
//       <div className="checkList">
//         <div className="title">Your CheckList:</div>
//         <div className="list-container">
//           {checkList.map((item, index) => (
//             <div key={index}>
//               <input value={item} type="checkbox" onChange={handleCheck} />
//               <span className={isChecked(item)}>{item}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div>
//         {`Items checked are: ${checkedItems}`}
//       </div>
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<translateDate />, rootElement);
// import React, { Component } from "react";

// class Demo2 extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "React"
//     };
//     this.onValueChange = this.onValueChange.bind(this);
//     this.formSubmit = this.formSubmit.bind(this);
//   }

//   onValueChange(event) {
//     this.setState({
//       selectedOption: event.target.value
//     });
//   }

//   formSubmit(event) {
//     event.preventDefault();
//     console.log(this.state.selectedOption)
//   }

//   render() {
//     return (
//       <form onSubmit={this.formSubmit}>
//         <div className="radio">
//           <label>
//             <input
//               type="radio"
//               value="Male"
//               checked={this.state.selectedOption === "Male"}
//               onChange={this.onValueChange}
//             />
//             Male
//           </label>
//         </div>
//         <div className="radio">
//           <label>
//             <input
//               type="radio"
//               value=""
//               checked={this.state.selectedOption === "happy"}
//               onChange={this.onValueChange}
//             />
//             Female
//           </label>
//         </div>
//         <div className="radio">
//           <label>
//             <input
//               type="radio"
//               value="Other"
//               checked={this.state.selectedOption === "Other"}
//               onChange={this.onValueChange}
//             />
//             Other
//           </label>
//         </div>
//         <div>
//           Selected option is : {this.state.selectedOption}
//         </div>
//         <button className="btn btn-default" type="submit">
//           Submit
//         </button>
        
//       </form>
//     );
//   }
// }

// export default Demo2;
// import React from "react";
// import { useForm} from "react-hook-form";


// const RadioApp = () => {
//   const{
//     register, handleSubmit, water, formState: { errors } } = useForm();
    
//     const onSubmit = data => alert(JSON.stringify(data));
  
//   return(
//     <React.Fragment >
//       <section>
//         <form on onSubmit={handleSumit(onSubmit)}>
//           <div className='flex item-center h-12 space-x-2 flex space-x-5'>
//           <input 
//           type='radio'
//           value='individual'
//           {...register("tradeType", { required: 'Trade type is required'})}
//           />
//           <p>individual</p>

//           </div>
//           <div className='flex item-center h-12 space-x-2 flex space-x-5'>
//           <input 
//           type='radio'
//           value='company'
//           {...register("tradeType", { required: 'Trade type is required'})}
//           />
//           <p>company</p>

//           </div>
//           <div className='flex item-center h-12 space-x-2'>
//           <input 
//           type='radio'
//           value='LLP'
//           {...register("tradeType", { required: 'Trade type is required'})}
//           />
//           <p>LLP</p>

//           </div>
//           <div className='flex item-center h-12 space-x-2 flex space-x-5'>
//           <input 
//           type='text'
//           placeholder="Company name"
//           className="w-full rounded-lg"
//           {...register("companyName", { required: 'company name is required'})}
//           />
//           <p>individual</p>

//           </div>
//           <div className='flex item-center h-12 space-x-2 flex space-x-5'>
//           <input 
//           type='text'
//           />
//           <p>company</p>

//           </div>
//           <div className='flex item-center h-12 space-x-2'>
//           <input 
//           type='taxt'
//           />
//           <p>LLP</p>

//           </div>
//         </form>
//       </section>
//     </React.Fragment>
//   )
// }
// export default RadioApp
import React from 'react';
import Table from 'react-bootstrap/Table';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Container } from 'react-bootstrap';


class Showhide extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }

    }
    onchange = e => {
        this.setState({ value: e.target.value });

    }

    render() {
        const { value } = this.state;

       
        
        return (
            <React.Fragment>
                <Container>
                <div className="container my-5">
    <div className="row mt-4">
     
          
           <div className="card">
              
                

               <div className="card-body">
                 <h5 className="card-title">(i) Details of following documents</h5>
                    <div className="row">
                        <div className="col-sm-12">
                            {/* <h4 className='mt-3 text-center mb-3'>Output  </h4> */}
                            
                            {/* <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Name</label>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" id="inputPassword" placeholder="Enter Name" />
                                </div>
                            </div> */}

                            <div className="form-group row">
                                {/* <label className="col-sm-3 col-form-label">Full Address</label> */}
                                <div className="col-sm-3 mt-4">Individual
                                    <input type="radio" className="mx-2" name='isyes' value="1" onChange={this.onchange} />
                                </div>
                                <div className="col-sm-3 mt-4">Company
                                    <input type="radio" className="mx-2 mt-1" name='isyes' value="0" onChange={this.onchange} />
                                </div>
                                <div className="col-sm-3 mt-4">LLP
                                    <input type="radio" className="mx-2 mt-1" name='isyes' value="2" onChange={this.onchange} />
                                </div>
                            </div>

                            {value === '1' && (
                                <div className="form-group row mb-12">
                                    {/* <label className="col-sm-3 col-form-label">Individual</label> */}
                                    <div className="col-sm-12">
                                        {/* <textarea type="text" className="form-control" id="details" placeholder="Enter Details" /> */}
                                       <Table className="table table-bordered" size="sm">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Particulars of document</th>
          <th>Details </th>
          <th>Annexure </th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> 1 </td>
          <td>Net Worth in case of individual certified by CA</td>
          <td><input
                                  type="file"
                                  name="upload"
                                  placeholder=""
                                  class="form-control"
                                /></td>
        <td align='center' size="large"><FileUploadIcon /></td>
      
        </tr>
        
        {/* <tr>
        <td> or</td>
        </tr>
        <tr>
          <td> 2 </td>
          <td>Income tax return in case of individual (for last three years)</td>
          <td><input
                                  type="file"
                                  name="upload"
                                  placeholder=""
                                  class="form-control"
                                /></td>
                               <td align='center' size="large"><FileUploadIcon /></td>
          
        </tr>
        <tr>
        <td> or</td>
        </tr>
        <tr>
          <td> 3 </td>
        
          <td>	Bank statement in case of individual (for last three years)(in case of company)</td>
          <td><input
                                  type="file"
                                  name="upload"
                                  placeholder=""
                                  class="form-control"
                                /></td>
                                <td align='center' size="large"><FileUploadIcon /></td>
        </tr>
        <tr>
          <td> 4 </td>
          <td>Details of convertible Debentures (into equity shares)(in case of company)</td>
          <td><input
                                  type="file"
                                  name="upload"
                                  placeholder=""
                                  class="form-control"
                                /></td>
                                <td align='center' size="large" ><FileUploadIcon /></td>
        </tr>
        <tr>
          <td> 5</td>
          <td>Any other documents (in case of company)</td>
          <td><input
                                  type="file"
                                  name="upload"
                                  placeholder=""
                                  class="form-control"
                                /></td>
                                <td align='center' size="large" ><FileUploadIcon /></td>
        </tr>
        <tr>
          <td> 6 </td>
          <td>	Upload reserves & surpluses</td>
          <td><input
                                  type="file"
                                  name="upload"
                                  placeholder=""
                                  class="form-control"
                                /></td>
                                <td align='center' size="large" ><FileUploadIcon /></td>
        </tr>
        <tr>
          <td> 7 </td>
          <td>Total Paid up capital</td>
          <td><input
                                  type="file"
                                  name="upload"
                                  placeholder=""
                                  class="form-control"
                                /></td>
                                <td align='center' size="large" ><FileUploadIcon /></td>
        </tr> */}
      </tbody>
    </Table>
                                    </div>
                                </div>
                            )}

                            {value === '0' && (
                                <div className="form-group row">
                                    {/* <label className="col-sm-3 col-form-label">Company</label> */}
                                    <div className="col-sm-12">
                                        {/* <input type="text" className="form-control" id="Email" placeholder="Enter Email" /> */} 
                                        <Table className="table table-bordered" size="sm">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Particulars of document</th>
          <th>Details </th>
          <th>Annexure </th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> 1 </td>
          <td>Balance sheet of last 3 years </td>
          <td><input
                                  type="file"
                                  name="upload"
                                  placeholder=""
                                  class="form-control"
                                /></td>
        <td align='center' size="large"><FileUploadIcon /></td>
      
        </tr>
        <tr>
          <td> 2 </td>
          <td>Ps-3(Representing Paid-UP capital)</td>
          <td><input
                                  type="file"
                                  name="upload"
                                  placeholder=""
                                  class="form-control"
                                /></td>
        <td align='center' size="large"><FileUploadIcon /></td>
      </tr>
      </tbody>
    </Table>
                                    </div>
                                </div>

                            )}
                            {value === '2' && (
                                <div className="form-group row">
                                    {/* <label className="col-sm-3 col-form-label">LLP</label> */}
                                    <div className="col-sm-12">
                                        {/* <input type="text" className="form-control" id="llp" placeholder="Enter Email" /> */}
                                        <Table className="table table-bordered" size="sm">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Particulars of document</th>
          <th>Details </th>
          <th>Annexure </th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> 1 </td>
          <td>Networth of partners  </td>
          <td><input
                                  type="file"
                                  name="upload"
                                  placeholder=""
                                  class="form-control"
                                /></td>
        <td align='center' size="large"><FileUploadIcon /></td>
      
        </tr>
        <tr>
          <td> 2 </td>
          <td>Net worth of firm</td>
          <td><input
                                  type="file"
                                  name="upload"
                                  placeholder=""
                                  class="form-control"
                                /></td>
        <td align='center' size="large"><FileUploadIcon /></td>
      </tr>
      </tbody>
    </Table>
                                    </div>
                                </div>

                            )}

                            <div className="form-group row mt-5 text-center">
                                <label className="col-sm-2 col-form-label"></label>
                                <div className="col-sm-6 mt-2">
                                    <button name='button' className="btn btn-primary btn-lg"> Submit </button>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                
                </Container>
            </React.Fragment>
        );
    }
}
export default Showhide;