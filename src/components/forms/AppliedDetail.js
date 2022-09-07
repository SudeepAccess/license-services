import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useForm } from "react-hook-form";
import { TableRow, TableHead, TableContainer, TableCell, TableBody, Table, Paper } from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button, Form } from "react-bootstrap";
import { Card, Row, Col} from "react-bootstrap";



const AppliedDetailForm =(props)=> {
    const { register, handleSubmit, formState: { errors } } = useForm([{XLongitude:'',YLatitude:''}]);
    const formSubmit = (data) => {
        console.log("data", data);
    };
    const [AppliedDetailFormSubmitted,SetAppliedDetailFormSubmitted] = useState(false);
    const AppliedDetailFormSubmitHandler=(e)=>{
        e.preventDefault();
        SetAppliedDetailFormSubmitted(true);
    };
    useEffect(()=>{
        if (AppliedDetailFormSubmitted) {
            props.AppliedDetailsFormSubmit(true);
        }
    },[AppliedDetailFormSubmitted]);
    const [showhide,setShowhide]=useState("No");
    const [showhide1,setShowhide1]=useState("No");
    const [showhide0,setShowhide0]=useState("No");
    const [showhide2,setShowhide2]=useState("No");
    const [showhide3,setShowhide3]=useState("No");
    const [showhide4,setShowhide4]=useState("No");
    const [showhide5,setShowhide5]=useState("No");
    const [showhide6,setShowhide6]=useState("No");
    const [showhide7,setShowhide7]=useState("No");
    const [showhide8,setShowhide8]=useState("No");
    const [showhide9,setShowhide9]=useState("No");
    const [showhide10,setShowhide10]=useState("No");
    const [showhide11,setShowhide11]=useState("No");
    const [showhide12,setShowhide12]=useState("No");

    const handleshow=e=>{
        const getshow=e.target.value;
        setShowhide(getshow);
    }
    const handleshow0=e=>{
      const getshow=e.target.value;
      setShowhide0(getshow);
  }
  const handleshow1=e=>{
    const getshow=e.target.value;
    setShowhide1(getshow);
}
const handleshow2=e=>{
  const getshow=e.target.value;
  setShowhide2(getshow);
}
const handleshow3=e=>{
  const getshow=e.target.value;
  setShowhide3(getshow);
}
const handleshow4=e=>{
  const getshow=e.target.value;
  setShowhide4(getshow);
}
const handleshow5=e=>{
  const getshow=e.target.value;
  setShowhide5(getshow);
}
const handleshow6=e=>{
  const getshow=e.target.value;
  setShowhide6(getshow);
}
const handleshow7=e=>{
  const getshow=e.target.value;
  setShowhide7(getshow);
}
const handleshow8=e=>{
  const getshow=e.target.value;
  setShowhide8(getshow);
}
const handleshow9=e=>{
  const getshow=e.target.value;
  setShowhide9(getshow);
}
const handleshow10=e=>{
  const getshow=e.target.value;
  setShowhide10(getshow);
}
const handleshow11=e=>{
  const getshow=e.target.value;
  setShowhide11(getshow);
}
const handleshow12=e=>{
  const getshow=e.target.value;
  setShowhide12(getshow);
}
    
   
    const handleChange=(e)=>{
        this.setState({ isRadioSelected: true });
       
     }
     const[noOfRows,setNoOfRows]=useState(1);
     const[noOfRow,setNoOfRow]=useState(1);
     const[noOfRow1,setNoOfRow1]=useState(1);
     
     
     return (
        <Form onSubmit={AppliedDetailFormSubmitHandler}>
         <Form.Group className="justify-content-center" controlId="formBasicEmail">
                <Row className="ml-auto" style={{marginBottom:5}}>
                <Col col-12>
                   
                            <h5 className="text-black">1. DGPS point</h5>
                           
                                    <div className="col col-4">
                                        <label for="pitentialZone" className="font-weight-bold">Number of DGPS point</label>
                                        <input type="number" className="form-control"/>
                                    </div>
                                    <div className="px-2">
                                        <div className="text-black">(i)Add point 1 as Point 1: &nbsp;
                                        <button type="button" style={{ float: 'right'}} className="btn btn-primary" onClick={()=>setNoOfRows(noOfRows-1)}> <DeleteIcon/></button>&nbsp;&nbsp;&nbsp;
                                             <button type="button" style={{ float: 'right'}} className="btn btn-primary" onClick={()=>setNoOfRows(noOfRows+1)}> <AddIcon/></button>
                                            
                                            
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
                                    <div className="px-2">
                                        <div className="text-black">(ii)Add point 2 as Point 2: &nbsp;
                                        <button type="button" style={{ float: 'right'}} className="btn btn-primary" onClick={()=>setNoOfRow(noOfRow-1)}> <DeleteIcon/></button>&nbsp;&nbsp;&nbsp;
                                             <button type="button" style={{ float: 'right'}} className="btn btn-primary" onClick={()=>setNoOfRow(noOfRow+1)}> <AddIcon/></button>
                                             {[...Array(noOfRow)].map((elementInArray,index)=>{
                                       return(
                                        <div className="row">
                                            <div className="col col-4">
                                                <label htmlFor="pitentialZone" className="font-weight-bold">X:Longiude</label>
                                                <input type="number" name="Xlongitude" className="form-control"/>

                                            </div>
                                            <div className="col col-4">
                                                <label htmlFor="pitentialZone" className="font-weight-bold">Y:Latitude</label>
                                                <input type="number" name="Ylatitude" className="form-control"/>

                                            </div>

                                        </div>);
                                })}
                                        
                                    </div>
                                    </div>
                                   
                                    <div className="px-2">
                                        <div className="text-black">(iii)Add point XX as Point XX: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <button type="button" style={{ float: 'right'}} className="btn btn-primary" onClick={()=>setNoOfRow1(noOfRow1-1)}> <DeleteIcon/></button>&nbsp;&nbsp;&nbsp;
                                             <button type="button" style={{ float: 'right'}} className="btn btn-primary" onClick={()=>setNoOfRow1(noOfRow1+1)}> <AddIcon/></button>
                                             {[...Array(noOfRow1)].map((elementInArray,index)=>{
                                       return(
                                        <div className="row">
                                            <div className="col col-4">
                                                <label htmlFor="pitentialZone" className="font-weight-bold">X:Longiude</label>
                                                <input type="number" className="form-control"/>

                                            </div>
                                            <div className="col col-4">
                                                <label htmlFor="pitentialZone" className="font-weight-bold">Y:Latitude</label>
                                                <input type="number" className="form-control"/>

                                            </div>

                                        </div>);
                                })}
                                    </div>
                                    </div>

                                    <hr/>
                                    <h5 className="text-black">2.Details of Plots</h5>
                                    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} className="table table-bordered table-responsive">
        <TableHead>
          <TableRow>
            <TableCell>Type of plots</TableCell>
            <TableCell >Plot No.</TableCell>
            <TableCell >Length in mtr</TableCell>
            <TableCell >Width in mtr</TableCell>
            <TableCell >Area in sqmtr</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell >
                            <div className="px-2">
                                 <p className="mb-2"><b>Residential
                                                            </b></p>
                                                            <div className="row">
                                                                <div className="col col-3">
                                                                <input type="radio" value="Yes" id="Yes"
                                                                    onChange={handleChange} name="Yes" />
                                                                <label for="Yes"></label>
                                                                <label htmlFor="gen">Gen</label>
                                                            </div>
                                                            <div className="col col-3">
                                                                <input type="radio" value="Yes" id="Yes"
                                                                    onChange={handleChange} name="Yes" />
                                                                <label for="Yes"></label>
                                                                <label htmlFor="npnl">NPNL</label>
                                                            </div>
                                                            
                                                            <div className="col col-3">
                                                                <input type="radio" value="Yes" id="Yes"
                                                                    onChange={handleChange} name="Yes" />
                                                                <label for="Yes"></label>
                                                                <label htmlFor="gen">EWS</label>
                                                            </div>
                                                            </div>
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
                                                            <p className="mb-2"><b>Commercial
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
                                                            <p className="mb-2"><b>Community Sites

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
                                                            <p className="mb-2"><b>Parks

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
                                                            <p className="mb-2"><b>Public Utilities
                                                            </b></p>
                                                              
                                                           <div className="row">
                                                                <div className="col col-3">
                                                                <input type="radio" value="Yes" id="Yes"
                                                                    onChange={handleChange} name="Yes" />
                                                                <label for="Yes"></label>
                                                                <label htmlFor="gen">STP</label>
                                                            </div>
                                                            <div className="col col-3">
                                                                <input type="radio" value="Yes" id="Yes"
                                                                    onChange={handleChange} name="Yes" />
                                                                <label for="Yes"></label>
                                                                <label htmlFor="gen">ETP</label>
                                                            </div>
                                                            
                                                            <div className="col col-3">
                                                                <input type="radio" value="Yes" id="Yes"
                                                                    onChange={handleChange} name="Yes" />
                                                                <label for="Yes"></label>
                                                                <label htmlFor="gen">WTP</label>
                                                            </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col col-3">
                                                                <input type="radio" value="Yes" id="Yes"
                                                                    onChange={handleChange} name="Yes" />
                                                                <label for="Yes"></label>
                                                                <label htmlFor="gen">UGT</label>
                                                            </div>
                                                            <div className="col col-3">
                                                                <input type="radio" value="Yes" id="Yes"
                                                                    onChange={handleChange} name="Yes" />
                                                                <label for="Yes"></label>
                                                                <label htmlFor="gen">Milk Booth</label>
                                                            </div>
                                                            
                                                            <div className="col col-3">
                                                                <input type="radio" value="Yes" id="Yes"
                                                                    onChange={handleChange} name="Yes" />
                                                                <label for="Yes"></label>
                                                                <label htmlFor="gen">GSS</label>
                                                            </div>
                                                            </div>
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
                                     </TableContainer>
                                   
                                    <h5 className="text-black">Irregular Plots</h5>
                                    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} className="table table-bordered table-responsive ">
        <TableHead>
          <TableRow>
          <TableCell>Details of Plot</TableCell>
            <TableCell>Dimensions in mtr</TableCell>
            <TableCell >Area manually entered</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2"><b>Irregular Plots
                                                            </b></p>
                                                        </div>
                </TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              </TableRow>
              <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2"><b>Irregular size SCOs
                                                            </b></p>
                                                        </div>
                </TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              </TableRow>
              <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2"><b>Whether any pocket proposed to be transferred less than 1 acre? (Yes/No)
                                                            </b></p>
                                                            <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes"  />
                                                <label for="Yes">Yes</label>

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"/>
                                                <label for="No">No</label>
                                                        </div>
                </TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              </TableRow>
              <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2"><b>Whether the surrendered area is having a minimum of 18 mtr independent access
 (Yes/No)
                                                            </b></p>
                                                            <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes"  />
                                                <label for="Yes">Yes</label>

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"/>
                                                <label for="No">No</label>
                                                        </div>
                </TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              </TableRow>
        </TableBody>
      </Table>
                                     </TableContainer>
                                    <h5 className="text-black">3.Depending on Purpose</h5>
                                    <h6 className="text-black">Residential Plotted :-</h6>
                                    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} className="table table-bordered table-responsive">
        <TableHead>
          <TableRow>
            <TableCell>Detail of plots</TableCell>
            <TableCell >No.</TableCell>
            <TableCell >Area</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2"><b>NPNL
                                                            </b></p>
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2"><b>EWS

                                                            </b></p>
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
                                     </TableContainer>
                                     <hr/>
                                     <h5 className="text-black">3.Deen Dayal Jan Awas Yojna (DDJAY):-</h5>
                                    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} className="table table-bordered table-responsive">
        <TableHead>
          <TableRow>
            <TableCell>Detail of plots</TableCell>
            <TableCell >No.</TableCell>
            <TableCell >Area</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2"><b>Details of frozen plots (50%) 
                                                            </b></p>
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2"><b> Whether one organizes open space/pocket of min area 0.3 acre proposed in the layout plan (Yes/No) </b></p>
                                                            <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes"  />
                                                <label for="Yes">Yes</label>

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"/>
                                                <label for="No">No</label>
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
                                     </TableContainer>
                                     <h5 className="text-black">Industrial Plotted Colony </h5>
                                    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} className="table table-bordered table-responsive">
        <TableHead>
          <TableRow>
            <TableCell>Detail of plots</TableCell>
            <TableCell >No.</TableCell>
            <TableCell >Area in Acres</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2"><b>Area of the colony, Up to 50 acres
                                                            </b></p>
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2"><b>More than 50 to 200 acres </b></p>
                                                           
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2"><b>More than 200 acres </b></p>
                                                           
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2"><b>Proposed plots under residential component DDJAY  </b></p>
                                                           
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2"><b>Proposed plots under community facilities in DDJAY Area  </b></p>
                                                           
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2"><b>Details of plots for Labour dormitories from affordable Industries Housing component  </b></p>
                                                           
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
                                     </TableContainer>
                                     <hr/>
                                     <div className="row">
                                        <div className="col col-12">
                                            <div className="form-group" >
                                                <h6>4.Whether you want to avail permissible commercial components 
(Yes/No):</h6>
                                                <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" onClick={handleshow}/>
                                                <label for="Yes">Yes</label>

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes" checked={showhide==='No'}onClick={handleshow}/>
                                                <label for="No">No</label>
         
                                            </div>
                                           
                                        </div>
                                        {
                                            showhide==="Yes" && (
                                                <div className="row " >
                                                      <h6 className="text-black">Detail of plots </h6>
                                                    <TableContainer component={Paper}>
      <Table  className="table table-bordered table-responsive">
        <TableHead>
          <TableRow>
            <TableCell>Plot No.</TableCell>
            <TableCell >Length in mtr</TableCell>
            <TableCell >Width in mtr</TableCell>
            <TableCell >  Area in sqm</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
            <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
                                     </TableContainer>
                                                        <div className="col col-4">
                                                            <label for="parentLicense" className="font-weight-bold">Commercial Plotted colony </label>
                                                            
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div> 
                                            )
                                        }
                                     </div>
                                     <hr/>
                                     <div className="row">
                                        <div className="col col-12">
                                            <div className="form-group" >
                                                <h6>5.Total FAR has been availed (radio 150% or 175%)

(Yes/No):</h6><input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" checked={true}/>
                                                <label for="Yes">Yes</label>

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"/>
                                                <label for="No">No</label>
         
                                            </div>
                                           
                                        </div>
                                     </div>
                                     <hr/>
                                     <h5 className="text-black">6.Number of Plots/SCOs (saleable area) :-</h5>
                                    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} className="table table-bordered table-responsive">
        <TableHead>
          <TableRow>
            <TableCell>Types of plots</TableCell>
            <TableCell >Plot No.</TableCell>
            <TableCell >Length in mtr</TableCell>
            <TableCell >Width in mtr</TableCell>
            <TableCell >Area in sqm</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2"><b>SCOs
                                                            </b></p>
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2"><b>Booths

                                                            </b></p>
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
            </TableRow>
            {/* <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2"><b>Public Utilities
                                                            </b></p>
                                                            <select className="form-control" id="developer"
                                                        name="developer"
                                                    >
                                                        <option value="" >
                                                        </option>
                                                        <option >STP </option>
                                                        <option >WTP</option>
                                                        <option >UGT</option>
                                                        <option >Milk Booth</option>
                                                        <option >GSS</option>
                                                    </select>
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
            </TableRow> */}
           
        </TableBody>
      </Table>
                                     </TableContainer>
                                     <hr/>
                                     <div className="row">
                                        <div className="col col-12">
                                            <div className="form-group" >
                                                <h6>7.Whether you want to surrender the 10% area of license colony to Govt. the instead of providing 10% under EWS and NPNL plots 

(Yes/No):</h6>
<input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" onClick={handleshow0}/>
                                                <label for="Yes">Yes</label>

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes" onClick={handleshow0}/>
                                                <label for="No">No</label>
                                                 {
                                            showhide0==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-4">
                                                            <label for="areaAcre" className="font-weight-bold">Area in Acres </label>
                                                            
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div> 
                                            )
                                        } 
         
         
                                            </div>
                                           
                                        </div>
                                      
                                     </div>
                                     <hr/>
                                     <div className="row">
                                        <div className="col col-12">
                                            <div className="form-group" >
                                                <h6>8.Whether you want to deposit an amount @ of 3 times of collector rate instead of the surrender 10% land to Govt.  


(Yes/No):</h6>
<input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" onClick={handleshow1}/>
                                                <label for="Yes">Yes</label>

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"onClick={handleshow1}/>
                                                <label for="No">No</label>
                                                {
                                            showhide1==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-4">
                                                            <label for="areaAcre" className="font-weight-bold">Area in Acres </label>
                                                            
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div> 
                                            )
                                        } 
         
         
                                            </div>
                                           
                                        </div>
                                     
                                     </div>
                                     <hr/>
                                     <div className="row">
                                        <div className="col col-12">
                                            <div className="form-group" >
                                                <h6>9.Any other Road



(Yes/No):</h6>
<input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" onClick={handleshow2}/>
                                                <label for="Yes">Yes</label>

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"onClick={handleshow2}/>
                                                <label for="No">No</label>
                                                {
                                            showhide2==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-4">
                                                            <label for="areaAcre" className="font-weight-bold">Width of the road in mtrs </label>
                                                            
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div> 
                                            )
                                        } 
         
         
                                            </div>
                                           
                                        </div>
                                       
                                     </div>
                                     <hr/>
                                     <h5 className="text-black">10.Revision of Layout plan (For in principle approval) :-</h5>
                                     <div className="row">
                                        <div className="col col-4">
                                            <div className="form-group" >
                                                <h6>(a)Whether the license is valid (Yes /No):</h6>
                                                 <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" onClick={handleshow3}/>
                                                <label for="Yes">Yes</label>

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"onClick={handleshow3}/>
                                                <label for="No">No</label>
                                                {
                                            showhide3==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-6">
                                                            <label for="areaAcre" className="font-weight-bold">Validity of the License </label>
                                                            
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div> 
                                            )
                                        } 
                                         {
                                            showhide3==="No" && (
                                                <div className="row " >
                                                        <div className="col col-12">
                                                            <label for="areaAcre" className="font-weight-bold">Whether Applied for renewal?(Yes/No) </label>
                                                            
                                                            <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" />
                                                <label for="Yes">Yes</label>

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"/>
                                                <label for="No">No</label>
                                                        </div>
                                                    </div> 
                                            )
                                        } 
                                            </div>
                                        </div>
                                        <div className="col col-4">
                                            <div className="form-group" >
                                                <h6>(b)Scrutiny fees deposited as per policy dated 11.03.2021 (Yes /No):</h6>
                                                 <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes"onClick={handleshow4} />
                                                <label for="Yes">Yes</label>

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"onClick={handleshow4}/>
                                                <label for="No">No</label>
                                                {
                                            showhide4==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-6">
                                                            <label for="areaAcre" className="font-weight-bold">Transaction number </label>
                                                            
                                                            <input type="number" className="form-control" />
                                                        </div>
                                                    </div> 
                                            )
                                        } 
                                            </div>
                                        </div>
                                        <div className="col col-4">
                                            <div className="form-group" >
                                                <h6>(c)Mention the reasons for revision in the layout plan (in case of revision):</h6>
                                                 <input type="text" className="form-control"/>
                                            </div>
                                        </div>
                                       
                                     </div>
                                     <div className="row">
                                        <div className="col col-4">
                                            <div className="form-group" >
                                                <h6>(d)Upload the copy of the earlier approved layout plan (in case of revision):</h6>
                                                 <input type="file" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="col col-4">
                                            <div className="form-group" >
                                                <h6>(e)Copy of proposed layout plan indicating the changes from approved layout plan (in case of revision):</h6>
                                                 <input type="file" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="col col-4">
                                            <div className="form-group" >
                                                <h6>(f)Undertaking that no change has been made in the phasing (If applicable) (upload document)s:</h6>
                                                 <input type="file" className="form-control"/>
                                            </div>
                                        </div>
                                       
                                     </div>
                                     <div className="row">
                                        <div className="col col-4">
                                            <div className="form-group" >
                                                <h6>(g)Phasing as disclosed with layout plan/site plan (If applicable)(Yes /No):</h6>
                                                 <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" checked={true}/>
                                                <label for="Yes">Yes</label>

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"/>
                                                <label for="No">No</label>
                                            </div>
                                        </div>
                                        <div className="col col-4">
                                            <div className="form-group" >
                                                <h6>(h)Consent of RERA if there is any change in the phasing (If applicable) (in case of revision):</h6>
                                                 <input type="file" className="form-control"/>
                                            </div>
                                        </div>
                                     </div>
                                     <hr/>
                                     <h5 className="text-black">11.Revision of Layout plan (For final approval) :-</h5>
                                     <div className="row">
                                        <div className="col col-12">
                                            <div className="form-group" >
                                                <h6>(a)Whether the advertisement is given in 3 local newspapers (1 Hindi+ 2English) having a wider publication in the area(Yes/No)</h6>
                                                 <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" onClick={handleshow5}/>
                                                <label for="Yes">Yes</label>

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"onClick={handleshow5}/>
                                                <label for="No">No</label>
                                                {
                                            showhide5==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-4">
                                                            <label for="areaAcre" className="font-weight-bold">Date of Publication </label>
                                                            
                                                            <input type="date" className="form-control" />
                                                        </div>
                                                        <div className="col col-4">
                                                            <label for="areaAcre" className="font-weight-bold">Name of Newspaper </label>
                                                            
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div> 
                                            )
                                        } 
                                            </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col col-12">
                                            <div className="form-group" >
                                                <h6>(b)Whether intimated each of the allottees through registered post regarding the proposed changes in the layout plan (Yes/No)</h6>
                                                 <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" onClick={handleshow6}/>
                                                <label for="Yes">Yes</label>

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"onClick={handleshow6}/>
                                                <label for="No">No</label>
                                                {
                                            showhide6==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-4">
                                                            <label for="areaAcre" className="font-weight-bold">Attached Proof</label>
                                                            
                                                            <input type="file" className="form-control" />
                                                        </div>
                                                      
                                                    </div> 
                                            )
                                        } 
                                            </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col col-12">
                                            <div className="form-group" >
                                                <h6>(c)Whether you hosted the existing approved layout plan & in-principle approved layout on the website of your company/organization (Yes/No)</h6>
                                                 <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" checked={true}/>
                                                <label for="Yes">Yes</label>

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"/>
                                                <label for="No">No</label>
                                            </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col col-4">
                                            <div className="form-group" >
                                                <h6>(d)Report any objection from any of the allottees (Upload document):</h6>
                                                 <input type="file" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="col col-4">
                                            <div className="form-group" >
                                                <h6>(e)Whether reply submitted in O/o STP, concerned (Yes/No)(Upload document) :</h6>
                                                 <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" checked={true}/>
                                                <label for="Yes">Yes</label>

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"/>
                                                <label for="No">No</label>
                                            </div>
                                        </div>
                                        <div className="col col-4">
                                            <div className="form-group" >
                                                <h6>(f)Have you given an advertisement for booking/sale of plots as per the in-principle layout plan? (Yes/No) (Upload document):</h6>
                                                <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" checked={true}/>
                                                <label for="Yes">Yes</label>

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"/>
                                                <label for="No">No</label>
                                            </div>
                                        </div>
                                       
                                     </div>
                                     <div className="row">
                                        <div className="col col-4">
                                            <div className="form-group" >
                                                <h6>(g)Any other feature:(Yes/No):</h6>
                                                <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" checked={true}/>
                                                <label for="Yes">Yes</label>

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"/>
                                                <label for="No">No</label>
                                            </div>
                                        </div>
                                        <div className="col col-4">
                                            <div className="form-group" >
                                                <h6>(h) Whether the sites fall under NCZ as per Development Plan (Yes/No) :</h6>
                                                 <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" onClick={handleshow7}/>
                                                <label for="Yes">Yes</label>

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"onClick={handleshow7}/>
                                                <label for="No">No</label>
                                                {
                                            showhide7==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-4">
                                                            <label for="areaAcre" className="font-weight-bold">Remarks</label>
                                                            
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                      
                                                    </div> 
                                            )
                                        } 
                                            </div>
                                        </div>
                                        <div className="col col-4">
                                            <div className="form-group" >
                                                <h6>(i)Whether the sites fall under NCZ as per Sub Regional Plan NCR 2021(Yes/No):</h6>
                                                <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes"onClick={handleshow8}/>
                                                <label for="Yes">Yes</label>

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"onClick={handleshow8}/>
                                                <label for="No">No</label>
                                                {
                                            showhide8==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-4">
                                                            <label for="areaAcre" className="font-weight-bold">Remarks</label>
                                                            
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                      
                                                    </div> 
                                            )
                                        } 
                                            </div>
                                        </div>
                                       
                                     </div>
                                     <div className="row">
                                        <div className="col col-4">
                                            <div className="form-group" >
                                                <h6>(j)Whether the sites fall under NCZ as per the ground truthing report of DLSC(Yes/No):</h6>
                                                <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" onClick={handleshow9}/>
                                                <label for="Yes">Yes</label>

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"onClick={handleshow9}/>
                                                <label for="No">No</label>
                                                {
                                            showhide9==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-4">
                                                            <label for="areaAcre" className="font-weight-bold">Remarks</label>
                                                            
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                      
                                                    </div> 
                                            )
                                        } 
                                            </div>
                                        </div>
                                        <div className="col col-4">
                                            <div className="form-group" >
                                                <h6>(k) Whether the recommendation of DLSC is approved by SLC (Yes/No) :</h6>
                                                 <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" onClick={handleshow10}/>
                                                <label for="Yes">Yes</label>

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"onClick={handleshow10}/>
                                                <label for="No">No</label>
                                                {
                                            showhide10==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-4">
                                                            <label for="areaAcre" className="font-weight-bold">Remarks</label>
                                                            
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                      
                                                    </div> 
                                            )
                                        } 
                                            </div>
                                        </div>
                                        <div className="col col-4">
                                            <div className="form-group" >
                                                <h6>(l)If exemption from any amenity(s)(Yes/No):</h6>
                                                <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes"onClick={handleshow11}/>
                                                <label for="Yes">Yes</label>

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"onClick={handleshow11}/>
                                                <label for="No">No</label>
                                                {
                                            showhide11==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-6">
                                                            <label for="areaAcre" className="font-weight-bold">Name of Amenity</label>
                                                            
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                        <div className="col col-6">
                                                            <label for="areaAcre" className="font-weight-bold">Explanation of Amenity</label>
                                                            
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                      
                                                    </div> 
                                            )
                                        } 
                                            </div>
                                        </div>
                                       
                                     </div>
                                     <Button style={{alignSelf:"center", marginTop:20, marginright:867}} variant="primary" type="submit">
                Save as Draft
            </Button>
            <Button style={{alignSelf:"center", marginTop:20,marginLeft:867}} variant="primary" type="submit">
               Continue
            </Button>
                         
                </Col>
            </Row>
         </Form.Group>
         </Form>)
};
export default AppliedDetailForm;