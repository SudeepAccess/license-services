import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useForm } from "react-hook-form";
import { TableRow, TableHead, TableContainer, TableCell, TableBody, Table, Paper } from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button, Form } from "react-bootstrap";
import { Card, Row, Col} from "react-bootstrap";
import CalculateIcon from '@mui/icons-material/Calculate';

const NilpForm =(props)=> {
    
    const { register, handleSubmit, formState: { errors } } = useForm([{XLongitude:'',YLatitude:''}]);
    const formSubmit = (data) => {
        console.log("data", data);
    };
    const [NilpFormSubmitted,SetNilpFormSubmitted] = useState(false);
    const NilpFormSubmitHandler=(e)=>{
        e.preventDefault();
        SetNilpFormSubmitted(true);
    }
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
    const [showhide13,setShowhide13]=useState("No");
    const [showhide14,setShowhide14]=useState("No");
    const [showhide18,setShowhide18]=useState("2");

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
const handleshow13=e=>{
  const getshow=e.target.value;
  setShowhide13(getshow);
}
const handleshow14=e=>{
  const getshow=e.target.value;
  setShowhide14(getshow);
}
const handleshow18=e=>{
  const getshow=e.target.value;
  setShowhide18(getshow);
}
 
const handleChange=(e)=>{
    this.setState({ isRadioSelected: true });
   
 }
    useEffect(()=>{
        if (NilpFormSubmitted) {
            props.NilpFormSubmit(true);
        }
    },[NilpFormSubmitted]);
 
    return (
        <Form onSubmit={NilpFormSubmitHandler}>
         <Form.Group className="justify-content-center" controlId="formBasicEmail">
                <Row className="ml-auto" style={{marginBottom:5}}>
                <Col col-12>
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
                                     </Col>
                                     </Row>
                                     </Form.Group>
                                     </Form>)
};
export default NilpForm;
