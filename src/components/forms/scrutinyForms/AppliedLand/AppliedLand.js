import React,{useState} from "react";
import { Button, Form } from "react-bootstrap";
import { Card, Row, Col} from "react-bootstrap";
import {AiFillCheckCircle, AiFillCloseCircle} from "react-icons/ai";
import MigrationAppliedTrue from "./UnderMigrationApllied/MigrationAplliedTrue";
import CalculateIcon from '@mui/icons-material/Calculate';
import InfoIcon from '@mui/icons-material/Info';
import { TableRow, TableHead, TableContainer, TableCell, TableBody, Table, Paper } from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

const AppliedLandinfo=(props)=>{
    const [uncheckedValue,setUncheckedVlue]=useState([]);
    console.log(uncheckedValue);
    const [migrationApllied,setMigrationApplied] = useState(true);
    
    const handleChange=(e)=>{
        this.setState({ isRadioSelected: true });
       
     }
     const [showhide18,setShowhide18]=useState("2");
     const handleshow18=e=>{
        const getshow=e.target.value;
        setShowhide18(getshow);
      }
     const[noOfRows,setNoOfRows]=useState(1);
     const[noOfRow,setNoOfRow]=useState(1);
     const[noOfRow1,setNoOfRow1]=useState(1);
    return(
        <Form ref={props.appliedLandInfoRef}>
        
            <Form.Group style={{display:props.displayPurpose}} className="justify-content-center">
            <Row className="ml-auto" style={{marginBottom:5}}>
                <Col col-12>
                   
                            <h5 className="text-black" >1. DGPS points <span className="text-primary"> (Click here for instructions to capture DGPS points)</span>
                            &nbsp;&nbsp;
                            <Form.Check value="Name of the authorized person to sign the application" type="radio" id = "default-radio" label={<AiFillCheckCircle class="fa fa-check text-success" size={18}></AiFillCheckCircle>} name="group39" inline></Form.Check>
                        <Form.Check onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} value="Name of the authorized person to sign the application" type="radio" id = "default-radio" label={<AiFillCloseCircle class="fa fa-times text-danger" size={18}></AiFillCloseCircle>} name="group39" inline></Form.Check></h5>

                                    <div className="px-2">
                                        <div className="text-black">(i)Add point 1 &nbsp;
                                        <div className="row ">
                                            <div className="col col-4">
                                                <label htmlFor="pitentialZone" className="font-weight-bold">X:Longitude</label>
                                                <input type="number" name="XLongitude"className="form-control" />

                                            </div>
                                            <div className="col col-4">
                                                <label htmlFor="pitentialZone" className="font-weight-bold">Y:Latitude</label>
                                                <input type="number" name="YLatitude" className="form-control"/>

                                            </div>
                                            

                                        </div>
                                      
                                            
                                        </div>
                                     
                                    </div>
                                    <div className="px-2">
                                        <div className="text-black">(ii)Add point 2 &nbsp;
                                        <div className="row ">
                                            <div className="col col-4">
                                                <label htmlFor="pitentialZone" className="font-weight-bold">X:Longitude</label>
                                                <input type="number" name="XLongitude"className="form-control" />

                                            </div>
                                            <div className="col col-4">
                                                <label htmlFor="pitentialZone" className="font-weight-bold">Y:Latitude</label>
                                                <input type="number" name="YLatitude" className="form-control"/>

                                            </div>
                                            

                                        </div>
                                      
                                    </div>
                                    </div>
                                   
                                    <div className="px-2">
                                        <div className="text-black">(iii)Add point 3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <div className="row ">
                                            <div className="col col-4">
                                                <label htmlFor="pitentialZone" className="font-weight-bold">X:Longitude</label>
                                                <input type="number" name="XLongitude"className="form-control" />

                                            </div>
                                            <div className="col col-4">
                                                <label htmlFor="pitentialZone" className="font-weight-bold">Y:Latitude</label>
                                                <input type="number" name="YLatitude" className="form-control"/>

                                            </div>
                                            

                                        </div>
                                    </div>
                                    </div>
                                    <div className="px-2">
                                        <div className="text-black">(iv)Add point 4 &nbsp;
                                        <div className="row ">
                                            <div className="col col-4">
                                                <label htmlFor="pitentialZone" className="font-weight-bold">X:Longitude</label>
                                                <input type="number" name="XLongitude"className="form-control" />

                                            </div>
                                            <div className="col col-4">
                                                <label htmlFor="pitentialZone" className="font-weight-bold">Y:Latitude</label>
                                                <input type="number" name="YLatitude" className="form-control"/>

                                            </div>
                                            

                                        </div>
                                         <button type="button" style={{ float: 'right'}} className="btn btn-primary" onClick={()=>setNoOfRows(noOfRows-1)}> <DeleteIcon/></button>&nbsp;&nbsp;&nbsp;
                                             <button type="button" style={{ float: 'right',marginRight:15}} className="btn btn-primary" onClick={()=>setNoOfRows(noOfRows+1)}> <AddIcon/></button> 
                                            
                                            
                                        </div>
                                        {[...Array(noOfRows)].map((elementInArray,index)=>{
                                       return(
                                        <div className="row ">
                                            <div className="col col-4">
                                                <label htmlFor="pitentialZone" className="font-weight-bold">X:Longiude</label>
                                                <input type="number" name="XLongitude"className="form-control" />

                                            </div>
                                            <div className="col col-4">
                                                <label htmlFor="pitentialZone" className="font-weight-bold">Y:Latitude</label>
                                                <input type="number" name="YLatitude" className="form-control"/>

                                            </div>
                                            

                                        </div>);
                                    })}
                                        
                                    </div>

                                    <hr/>
                                    <h5 className="text-black"><b>2.Details of Plots</b>&nbsp;&nbsp;
                                   
                                                                <input type="radio"  id="Yes" value="1"
                                                                    onChange={handleChange} name="Yes"onClick={handleshow18} />&nbsp;&nbsp;
                                                                <label for="Yes"></label>
                                                                <label htmlFor="gen">Regular</label>&nbsp;&nbsp;
                                                           
                                                                <input type="radio"  id="Yes" value="2"
                                                                    onChange={handleChange} name="Yes" onClick={handleshow18}/>&nbsp;&nbsp;
                                                                <label for="Yes"></label>
                                                                <label htmlFor="npnl">Irregular</label></h5>
                                                                {
                                            showhide18==="1" && (
                                                           
                                                                      
                                    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} className="table table-bordered table-responsive">
        <TableHead>
          <TableRow>
            <TableCell><b>Type of plots</b></TableCell>
            <TableCell ><b>Plot No.</b></TableCell>
            <TableCell ><b>Length in mtr</b>&nbsp;&nbsp;<CalculateIcon color="primary"/></TableCell>
            <TableCell ><b>Width in mtr</b>&nbsp;&nbsp;<CalculateIcon color="primary"/></TableCell>
            <TableCell ><b>Area in sqmtr</b>&nbsp;&nbsp;<CalculateIcon color="primary"/></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell >
                            <div className="px-2">
                                 <p className="mb-2" onChange={(e)=>setResPlotno(e.target.value)} value={resplotno}><b>Residential
                                                            </b></p>
                                                          
                                                        </div>
                </TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
             
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
             
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" ><b>Gen
                                                            </b></p>
                                                        </div>
                </TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
             
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
             
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" ><b>NPNL
                                                            </b></p>
                                                        </div>
                </TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
             
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
             
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" ><b>EWS
                                                            </b></p>
                                                        </div>
                </TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
             
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
             
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" onChange={(e)=>setComPlotno(e.target.value)} value={complotno}><b>Commercial
                                                            </b></p>
                                                        </div>
                </TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
             
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
             
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" onChange={(e)=>setSitePlotno(e.target.value)} value={siteplotno}><b>Community Sites

                                                            </b></p>
                                                        </div>
                </TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
             
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
             
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" onChange={(e)=>setParkPlotno(e.target.value)} value={parkplotno}><b>Parks

                                                            </b></p>
                                                        </div>
                </TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
             
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
             
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" onChange={(e)=>setPublicPlotno(e.target.value)} value={publicplotno}><b>Public Utilities
                                                            </b></p>
                                                              
                                                         
                                                        </div>
                </TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
             
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
             
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" ><b>STP
                                                            </b></p>
                                                        </div>
                </TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
             
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
             
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" ><b>ETP
                                                            </b></p>
                                                        </div>
                </TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
             
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
             
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" ><b>WTP
                                                            </b></p>
                                                        </div>
                </TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
             
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
             
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" ><b>UGT
                                                            </b></p>
                                                        </div>
                </TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
             
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
             
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" ><b>Milk Booth
                                                            </b></p>
                                                        </div>
                </TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
             
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
             
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" ><b>GSS
                                                            </b></p>
                                                        </div>
                </TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
             
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
             
            </TableRow>
        </TableBody>
      </Table>
                                     </TableContainer>)}
                                     {
                                            showhide18==="2" && (
                                
                                   
                                    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} className="table table-bordered table-responsive ">
        <TableHead>
          <TableRow>
          <TableCell><b>Details of Plot</b></TableCell>
            <TableCell><b>Dimensions (in mtr)</b>&nbsp;&nbsp;<CalculateIcon color="primary"/></TableCell>
            <TableCell ><b>Entered Area</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" onChange={(e)=>setIrPlotDimen(e.target.value)} value={irPlotDimen}><b>Residential
                                                            </b></p>
                                                        </div>
                </TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              </TableRow>
              <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" onChange={(e)=>setIrSizeDimen(e.target.value)} value={irSizeDimen}><b>Commercial
                                                            </b></p>
                                                        </div>
                </TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              </TableRow>
             
        </TableBody>
      </Table>
      <h5 className="text-black"><b>Area Under</b></h5>
      <Table sx={{ minWidth: 650 }} className="table table-bordered table-responsive">
        <TableHead>
          <TableRow>
            <TableCell><b>Detail of plots</b></TableCell>
            <TableCell ><b> Plot No.</b></TableCell>
            <TableCell ><b>Length (in mtr)</b>&nbsp;&nbsp;<CalculateIcon color="primary"/></TableCell>
            <TableCell ><b>Dimension (in mtr)</b>&nbsp;&nbsp;<CalculateIcon color="primary"/></TableCell>
            <TableCell ><b>Entered Area</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2"onChange={(e)=>setNpnlNo(e.target.value)} value={npnlNo}><b>Sectoral Plan Road
                                                            </b></p>
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" onChange={(e)=>setEwsNo(e.target.value)} value={ewsNo}><b>Green Belt

                                                            </b></p>
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" onChange={(e)=>setEwsNo(e.target.value)} value={ewsNo}><b>24/18 mtr wide internal circulation Plan road

                                                            </b></p>
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" onChange={(e)=>setEwsNo(e.target.value)} value={ewsNo}><b>Other Roads

                                                            </b></p>
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" onChange={(e)=>setEwsNo(e.target.value)} value={ewsNo}><b>Undetermined use(UD)

                                                            </b></p>
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
            </TableRow>
        </TableBody>
      </Table>
                                     </TableContainer> )}
                              
                                        <TableContainer component={Paper}>
      <DDJAYForm displayDdjay={(DdjayFormDisplay===null)?"none":DdjayFormDisplay.displayDdjayForms}></DDJAYForm>
                                     </TableContainer>

                                    <TableContainer component={Paper}>
      <ResidentialPlottedForm displayResidential={(ResidentialFormDisplay===null)?"none":ResidentialFormDisplay.displayResidentialForms}></ResidentialPlottedForm>
                                     </TableContainer>
                                    
                                      <TableContainer component={Paper}>
      <IndustrialPlottedForm displayIndustrial={(IndustrialPlottedFormDisplay===null)?"none":IndustrialPlottedFormDisplay.displayIndustrialPlotted}></IndustrialPlottedForm>
                                     </TableContainer>
                                    
                                      <TableContainer component={Paper}>
      <CommercialPlottedForm displayCommercial={(CommercialPlottedFormDisplay===null)?"none":CommercialPlottedFormDisplay.displayCommercialPlotted}></CommercialPlottedForm>
                                     </TableContainer>
                                     
                                 
                                     <h5 className="text-black"><b>NILP :-</b></h5>
                                      
                                    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} className="table table-bordered table-responsive">
        <TableHead>
          <TableRow>
            <TableCell><b>S.No.</b></TableCell>
            <TableCell ><b>NLP Details</b></TableCell>
            <TableCell ><b>Yes/No</b></TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell >1. </TableCell>
                <TableCell > Whether you want to surrender the 10% area of license colony to Govt. the instead of providing 10% under EWS and NPNL plots  </TableCell>
                 <TableCell component="th" scope="row">
                 <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" onClick={handleshow0}/>
                                                <label for="Yes">Yes</label>

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes" onClick={handleshow0}/>
                                                <label for="No">No</label>
                                                 {
                                            showhide0==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-12">
                                                            <label for="areaAcre" className="font-weight-bold">Area in Acres </label>
                                                            
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div> 
                                            )
                                        } 
         
              </TableCell>
            </TableRow>
            <TableRow>
                <TableCell >2. </TableCell>
                <TableCell >Whether any pocket proposed to be transferred less than 1 acre </TableCell>
                 <TableCell component="th" scope="row">
                 <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" onClick={handleshow13}/>
                                                <label for="Yes">Yes</label>

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes" onClick={handleshow13}/>
                                                <label for="No">No</label>
                                                 {
                                            showhide13==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-6">
                                                            <label for="areaAcre" className="font-weight-bold"> Dimension (in mtr) </label>
                                                            
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                        <div className="col col-6">
                                                            <label for="areaAcre" className="font-weight-bold"> Entered Area </label>
                                                            
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div> 
                                            )
                                        } 
         
              </TableCell>
            </TableRow>
            <TableRow>
                <TableCell >3. </TableCell>
                <TableCell >Whether you want to deposit an amount @ of 3 times of collector rate instead of the surrender 10% land to Govt. </TableCell>
                 <TableCell component="th" scope="row">
                 <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" onClick={handleshow1}/>
                                                <label for="Yes">Yes</label>

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"onClick={handleshow1}/>
                                                <label for="No">No</label>
                                                {
                                            showhide1==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-12">
                                                            <label for="areaAcre" className="font-weight-bold">Area in Acres </label>
                                                            
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div> 
                                            )
                                        } 
         
              </TableCell>
            </TableRow>
            <TableRow>
                <TableCell >4. </TableCell>
                <TableCell >Whether the surrendered area is having a minimum of 18 mtr independent access   </TableCell>
                 <TableCell component="th" scope="row">
                 <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" onClick={handleshow14}/>
                                                <label for="Yes">Yes</label>

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"onClick={handleshow14}/>
                                                <label for="No">No</label>
                                                {
                                            showhide14==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-12">
                                                            <label for="areaAcre" className="font-weight-bold">Dimension(in mtr)</label>
                                                            
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                        <div className="col col-12">
                                                            <label for="areaAcre" className="font-weight-bold">Entered Area</label>
                                                            
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div> 
                                            )
                                        } 
         
              </TableCell>
            </TableRow>
           
        </TableBody>
      </Table>
    </TableContainer>
                                     <hr/>
                                     <div className="row">
                                        <div className="col col-12">
                                            <div className="form-group" >
                                                <h6 ><b>Upload Layout Plan <span className="text-primary"> (Click here for instructions to capture DGPS points)</span></b>
                                                   <input type="file" className="form-control"/></h6>
                                            </div>
                                        </div>
                                     </div>
                                     <hr/>
                                     <h5 className="text-black"><b>Mandatory Documents</b></h5>
                    <div className="row">
                        <div className="col col-3">
                                    <h6 ><b>Site plan.</b></h6>
                                  <input type="file" className="form-control">
                                    </input>
                        </div>
                        <div className="col col-3">
                                    <h6 ><b>Democratic Plan.</b></h6>
                                  <input type="file" className="form-control"></input>
                        </div>
                        <div className="col col-3">
                                    <h6 ><b>Sectoral Plan/Layout Plan.</b></h6>
                                  <input type="file" className="form-control"></input>
                        </div>
                        <div className="col col-3">
                                    <h6 ><b>Development Plan. </b></h6>
                                  <input type="file" className="form-control"></input>
                        </div>
                      
                     </div>
                                    
       
                                     <Button style={{alignSelf:"center", marginTop:20, marginright:867}} variant="primary" type="submit">
                Save as Draft
            </Button>
            <Button style={{alignSelf:"center", marginTop:8,marginLeft:1025}} variant="primary" type="submit">
               Continue
            </Button>
                         
                </Col>
            </Row>


            </Form.Group>
            <div style={{position:"relative", marginBottom:40}}>
             <Button onClick={()=>props.passUncheckedList({"data":uncheckedValue})}>
                 Submit
             </Button>
         </div>
         <hr></hr>
        </Form>
    )
}

export default AppliedLandinfo;