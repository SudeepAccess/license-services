import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import "../Developer/AddInfo.css";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Ext from '../Developer/ext';
import UnderTable from '../Developer/underTable2';
// import AddIcon from '@mui/icons-material/Add';
// import DeleteIcon from '@mui/icons-material/Delete';
import { useForm } from "react-hook-form";
import { Container } from 'react-bootstrap';
import {  Col } from "reactstrap";




// function DeveloperCapacity() {
//   const handleChange = (e) => {
//     this.setState({ isRadioSelected: true });
//   };
//   const {
//     register,
//     handleSumit,
//     formState: { error },
//   } = useForm([
//     { Sr: "", Name: "", Mobile: "", Email: "", PAN: "", Aadhar: "" },
//   ]);
//   const formSubmit = (data) => {
//     console.log("data", data);
//   };
//   const [showhide, setShowhide] = useState("No");
//   const handleshow = (e) => {
//     const getshow = e.target.value;
//     setShowhide(getshow);
//   };

// const [noofRows, setNoOfRows] = useState(1);
// const [aoofRows, setAoOfRows] = useState(1);
// const [boofRows, setBoOfRows] = useState(1);

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
    
      // const [noofRows, setNoOfRows] = useState(0);
      // const [aoofRows, setAoOfRows] = useState(1);
    
      
  return (
    <>
    <React.Fragment>
                <Container>
      <div className="container my-5">
        <div className="row mt-4">
          <div className="card">
            <div>
              <h5 className="card-h">
                {" "}
                Capacity of Developer to develop a colony:
              </h5>
            </div>
            {/* <div className="card shadow"> */}
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
             
              <div className="form-group row">
                                {/* <label className="col-sm-3 col-form-label">Full Address</label> */}
                                <div className="col-sm-3 mt-3">
                                    <input type="radio" className="mx-2" name='isyes' value="2" onChange={this.onchange} />Yes
                                </div>
                                <div className="col-sm-3 mt-3">
                                    <input type="radio" className="mx-2 mt-1" name='isyes' value="3" onChange={this.onchange} /> NO
                                </div>
                                {/* <div className="col-sm-3 mt-4">LLP
                                    <input type="radio" className="mx-2 mt-1" name='isyes' value="2" onChange={this.onchange} />
                                </div> */}
                            </div>
              {/* <input
                className="radio"
                type="radio"
                value="yes"
                id="yes"
                onChange={handleChange}
                name="yes"
              />
              <label for="yes">Yes</label>
              &nbsp;&nbsp;&nbsp;
              <input
                className="radio"
                type="radio"
                value="No"
                id="No"
                onChange={handleChange}
                name="yes"
              />

              <label for="No">No</label> */}
              {value === '2' && (

             <Ext/> )}
              
            
              <div className="hl"></div>
              <p>
                &nbsp;&nbsp;&nbsp;(ii) Licences/permissions granted to
                Developer/ group company for development of colony under any
                other law/Act as .
              </p>
              <div >
               <UnderTable/>
              </div>
              <div className="hl"></div>
              <p>
                &nbsp;&nbsp;&nbsp;(iii) Whether any technical expert(s) engaged
              </p>
              
              <div className="form-group row">
                                {/* <label className="col-sm-3 col-form-label">Full Address</label> */}
                                <div className="col-sm-3 mt-3">
                                    <input type="radio" className="mx-2" name='isyes' value="4" onChange={this.onchange} />Yes
                                </div>
                                <div className="col-sm-3 mt-3">
                                    <input type="radio" className="mx-2 mt-1" name='isyes' value="5" onChange={this.onchange} /> NO
                                </div>
                                {/* <div className="col-sm-3 mt-4">LLP
                                    <input type="radio" className="mx-2 mt-1" name='isyes' value="2" onChange={this.onchange} />
                                </div> */}
                            </div>
              {/* <input
                className="radio"
                type="radio"
                value="yes"
                id="yes"
                onChange={handleChange}
                name="yes"
              />
              <label for="yes">Yes</label>
              &nbsp;&nbsp;&nbsp;
              <input
                className="radio"
                type="radio"
                value="No"
                id="No"
                onChange={handleChange}
                name="yes"
              />
              <label for="No">No</label> */}
              {value === '4' && (
                                <div className="form-group row">
                                    {/* <label className="col-sm-3 col-form-label">Company</label> */}
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
                      <td align='center' size="large"><FileUploadIcon /></td>
                    </tr>
                  
                    <tr>
                    
                    <td>2</td>
                    <td>	Name of Architect</td>
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
                    <td align='center' size="large"><FileUploadIcon /></td>
                  </tr>
                
                  <tr>
                    
                      <td>3</td>
                      <td>	Name of Town Planner</td>
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
                      <td align='center' size="large"><FileUploadIcon /></td>
                    </tr>
                  
                  </tbody>
                </Table>
              </div>
</div>
                                </div>

                            )}
              {value === '5' && (
                                <div className="form-group row">
                                    {/* <label className="col-sm-3 col-form-label">Company</label> */}
                                    <div className="col-sm-12">
              <div className="table-bd">
              <Table className="table table-bordered" size="sm">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Professional </th>
          <th>	Annexure</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> 1 &nbsp;&nbsp;</td>
          <td>	Agreement with existing colonizer/developer who has already developed a colony</td>
          <td align='center' size="large"><FileUploadIcon /></td>
          
        </tr>
        <tr>
          <td> 2&nbsp;&nbsp; </td>
          <td>Technical capacity</td>
          <td align='center' size="large"><FileUploadIcon /></td>
          
        </tr>
        <tr>
          <td> 3 &nbsp;&nbsp;</td>
          {/* <td colSpan={2}>Larry the Bird</td> */}
          <td>Name of Engineer</td>
          <td align='center' size="large"><FileUploadIcon /></td>
        </tr>
        <tr>
          <td> 4&nbsp;&nbsp; </td>
          <td>	Name of Architect</td>
          <td align='center' size="large"><FileUploadIcon /></td>
          
        </tr>
        <tr>
          <td> 5&nbsp;&nbsp; </td>
          <td>Upload SPA/GPA/ Board Resolution to sign collaboration agreement on behalf of land owner(s)</td>
          <td align='center' size="large"><FileUploadIcon /></td>
          
        </tr>
      </tbody>
    </Table>
              </div>
              </div>
                                </div>

                            )}
              <div className="hl"></div>
              <p>
                &nbsp;&nbsp;&nbsp;(iv) If director/partner of the proposed
                developer company/firm also holds designation of
                director/partner in any other company/firm who has already
                obtained license(s) under act of 1975:
              </p>
             
              <div className="form-group row">
                                {/* <label className="col-sm-3 col-form-label">Full Address</label> */}
                                <div className="col-sm-3 mt-3">
                                    <input type="radio" className="mx-2" name='isyes' value="6" onChange={this.onchange} />Yes
                                </div>
                                <div className="col-sm-3 mt-3">
                                    <input type="radio" className="mx-2 mt-1" name='isyes' value="7" onChange={this.onchange} /> NO
                                </div>
                               
                            </div>
              {/* <input
                className="radio"
                type="radio"
                value="yes"
                id="yes"
                onChange={handleChange}
                name="yes"
              />
              <label for="yes">Yes</label>
              &nbsp;&nbsp;&nbsp;
              <input
                className="radio"
                type="radio"
                value="No"
                id="No"
                onChange={handleChange}
                name="yes"
              />
              <label for="No">No</label> */}
              {value === '6' && (
                                <div className="form-group row">
                                    {/* <label className="col-sm-3 col-form-label">Company</label> */}
                                    <div className="col-sm-12">
                                    <Col xs="12" md="12" sm="12">
              <Table className="table table-bordered" size="sm">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Professional </th>
          <th>	Annexure</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> 1 &nbsp;&nbsp;</td>
          <td>		Agreement between the entities to provide technical assistance</td>
          <td align='center' size="large"><FileUploadIcon /></td>
          
        </tr>
        <tr>
          <td> 2&nbsp;&nbsp; </td>
          <td>Board resolutions of authorized signatory of firm/company provided technical assistance</td>
          <td align='center' size="large"><FileUploadIcon /></td>
          
        </tr>
       
       
       
      </tbody>
    </Table>
    </Col>
    </div>
    
                                </div>

                            )}
    <div className="hl"></div>
    <p>
              2.  In case of technical capacity sought from another
                company/firm who has already obtained license(s) under act of
                1975 or outside Haryana:
              </p>
              {/* &nbsp;&nbsp;&nbsp; */}
              <div className="form-group row">
                                {/* <label className="col-sm-3 col-form-label">Full Address</label> */}
                                <div className="col-sm-3 mt-3">
                                    <input type="radio" className="mx-2" name='isyes' value="1" onChange={this.onchange} />Yes
                                </div>
                                <div className="col-sm-3 mt-3">
                                    <input type="radio" className="mx-2 mt-1" name='isyes' value="0" onChange={this.onchange} /> NO
                                </div>
                               
                            </div>
              
              {value === '1' && (
                                <div className="form-group row">
                                    {/* <label className="col-sm-3 col-form-label">Company</label> */}
                                    <div className="col-sm-12">
                                     <Col xs="12" md="12" sm="12">
                                        {/* <input type="text" className="form-control" id="Email" placeholder="Enter Email" /> */} 
                                        <div><Table className="table table-bordered" size="sm">
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
          <td>	Registered and Irrevocable Agreement</td>
         <td align='center' size="large"><FileUploadIcon /></td>
      
        </tr>
        
        <tr>
          <td> 2 </td>
          <td>Board resolutions of authorized signatory of firm/company provided technical assistance</td>
          <td align='center' size="large"><FileUploadIcon /></td>
          
        </tr>
        <tr>
          <td> 3 </td>
        
          <td>Auto populate details of earlier license(s) granted to existing developer company/firm to set up a colony under act of 1975.</td>
            <td align='center' size="large"><FileUploadIcon /></td>
        </tr>
      </tbody>
    </Table>
      </div>
      </Col>
                                    </div>
                                </div>

                            )}
                            {value === '0' && (
                                <div className="form-group row">
                                    {/* <label className="col-sm-3 col-form-label">Company</label> */}
                                    <div className="col-sm-12">
                                    <div><Table className="table table-bordered" size="sm">
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
          <td>Agreement between the entities to provide technical assistance</td>
         <td align='center' size="large"><FileUploadIcon /></td>
      
        </tr>
        
        <tr>
          <td> 2 </td>
          <td>Board resolutions of authorized signatory of firm/company provided technical assistance</td>
          <td align='center' size="large"><FileUploadIcon /></td>
          
        </tr>
        <tr>
          <td> 3 </td>
        
          <td>Auto populate details of earlier license(s) granted to existing developer company/firm to set up a colony under act of 1975.</td>
            <td align='center' size="large"><FileUploadIcon /></td>
        </tr>
      </tbody>
    </Table>
      </div>
      </div>
                                </div>

                            )}
            </div>
            {/* <div className="form-group col-md2 mt-4">
              <button className="btn btn-success">Add More</button>
            </div> */}
          </div>
        </div>
      </div>
    
    </Container>
            </React.Fragment>
            </>
        );
    }
}
export default Showhide;
// export default DeveloperCapacity();
