import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useForm } from "react-hook-form";
import { TableRow, TableHead, TableContainer, TableCell, TableBody, Table, Paper } from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button, Form } from "react-bootstrap";
import { Card, Row, Col} from "react-bootstrap";
import CalculateIcon from '@mui/icons-material/Calculate';

const CommercialPlottedForm =(props)=> {
    
    const { register, handleSubmit, formState: { errors } } = useForm([{XLongitude:'',YLatitude:''}]);
    const formSubmit = (data) => {
        console.log("data", data);
    };
    const [CommercialPlottedFormSubmitted,SetCommercialPlottedFormSubmitted] = useState(false);
    const CommercialPlottedFormSubmitHandler=(e)=>{
        e.preventDefault();
        SetCommercialPlottedFormSubmitted(true);
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
        if (CommercialPlottedFormSubmitted) {
            props.CommercialPlottedFormSubmit(true);
        }
    },[CommercialPlottedFormSubmitted]);
 
    return (
        <Form onSubmit={CommercialPlottedFormSubmitHandler}>
         <Form.Group className="justify-content-center" controlId="formBasicEmail">
                <Row className="ml-auto" style={{marginBottom:5}}>
                <Col col-12>
                <div className="row">
                                        <div className="col col-6">
                                            <div className="form-group" >
                                                <h6 ><b>Total FAR has been availed 

</b>&nbsp;&nbsp;
<input type="radio" value="Yes" id="Yes"
                                                                    onChange={handleChange} name="Yes" />&nbsp;&nbsp;
                                                                <label for="Yes"></label>
                                                                <label htmlFor="gen">150%</label>&nbsp;&nbsp;
                                                           
                                                                <input type="radio" value="Yes" id="Yes"
                                                                    onChange={handleChange} name="Yes" />&nbsp;&nbsp;
                                                                <label for="Yes"></label>
                                                                <label htmlFor="npnl">175%</label>
                                                                </h6>
</div>
                                           
                                        </div>
                                        
                                     </div>
                                    
                                     <h5 className="text-black"><b>Number of Plots/SCOs (saleable area) :-</b></h5>
                                    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} className="table table-bordered table-responsive">
        <TableHead>
          <TableRow>
            <TableCell><b>Types of plots</b></TableCell>
            <TableCell ><b>Plot No.</b></TableCell>
            <TableCell ><b>Length in mtr</b>&nbsp;&nbsp;<CalculateIcon color="primary"/></TableCell>
            <TableCell ><b>Width in mtr</b>&nbsp;&nbsp;<CalculateIcon color="primary"/></TableCell>
            <TableCell ><b>Area in sqm</b>&nbsp;&nbsp;<CalculateIcon color="primary"/></TableCell>
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
                                                            <p className="mb-2" ><b>Booths

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
                                                            <p className="mb-2" ><b>Public utilities

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
                                                            <p className="mb-2" ><b>STP

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
                                                            <p className="mb-2" ><b>WTP

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
                                                            <p className="mb-2" ><b>UGT

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
                                                            <p className="mb-2" ><b>Milk Booth

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
                                                            <p className="mb-2" ><b>GSS

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
         
           
        </TableBody>
      </Table>
                                     </TableContainer>
                                    
                                    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} className="table table-bordered table-responsive">
        <TableHead>
          <TableRow>
            <TableCell><b>Types of plots</b></TableCell>
            <TableCell ><b>Dimension(in mtr)</b>&nbsp;&nbsp;<CalculateIcon color="primary"/></TableCell>
            <TableCell ><b>Entered Area</b></TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2"><b>Irregular Size SCOs
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
                                                            <p className="mb-2" ><b> SCOs,Booths etc.

                                                            </b></p>
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
                                     </Col>
                                     </Row>
                                     </Form.Group>
                                     </Form>)
};
export default CommercialPlottedForm;
