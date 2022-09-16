import React,{useState,useEffect} from "react";
import { Button, Form,Collapse } from "react-bootstrap";
import { Card, Row, Col} from "react-bootstrap";
import PurposeAddform from "./PurposeFormAddmore";
import ParentLicenceAddform from "./PurposeFormAddParentLicence";
import { useForm } from "react-hook-form";
import Typography from '@material-ui/core/Typography'
import Modal from 'react-bootstrap/Modal';
import Box from '@material-ui/core//Box';
import { TableRow, TableHead, TableContainer, TableCell, TableBody, Table, Paper } from '@material-ui/core';
import { blue, grey } from "@material-ui/core/colors";
import TextField from '@mui/material/TextField';



const ApllicantPuropseForm=(props)=>{
    const[form,setForm]=useState([]);
    const [purpose,setPurpose]=useState('');
    const [district2,setDistrict2]=useState('');
    const[revenueName,setRevenueName]=useState('');
    const[khewat,setKhewat]=useState('');
    const[mustil,setMustil]=useState('');
    const[killa,setKilla]=useState('');
    const[sector,setSector]=useState('');
    const[kanal,setKanal]=useState('');
    const[marla,setMarla]=useState('');
    const[village2,setVillage2]=useState('');
    const[Khasra,setKhasra]=useState('');
    const[khatoni,setKhatoni]=useState('');
    const [Rectangle,setRectangle]=useState('');
    const[kanalBigha,setKanalBigha]=useState('');
    const[marlaBiswa,setmarlaBiswa]=useState('');
    const[sarsai,setsarsai]=useState('');
    const[colKhasra,setcolKhasra]=useState('');
    const[developerLlp,setDeveloperLlp]=useState('');
    const[registeringdate,setRegisteringDate]=useState('');
    const[validitydate,setvaliditydate]=useState('');
    const[colirrevocialble,setColIrrevociable]=useState('');
    const[authSignature,setAuthSignature]=useState('');
    const[nameAuthSign,setNameAuthSign]=useState('');
    const[registerAuthority,setRegisterauthority]=useState('');
    const[totalAppliedArea,setTotalAppliedArea]=useState('')
    const[details,setDetails]=useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [PurposeformSubmitted,SetPurposeformSubmitted] =  useState(false);
    const [PurposeAdd,SetPurposeAdd] =useState([<PurposeAddform element="1"></PurposeAddform>]);
    const [EnterdetailsShow,SetEnterdetailsShow] = useState(false);
    const [DisplayEnterdetails,SetDisplayEnterdetails] = useState("none");
    const [ParentAdd,SetParentAdd] =useState([<ParentLicenceAddform element="1"></ParentLicenceAddform>]);
    const HandleEnterDetails=()=>{
        if (EnterdetailsShow) {
            SetEnterdetailsShow(false);
            SetDisplayEnterdetails("none")
        }else{
            SetEnterdetailsShow(true);
            SetDisplayEnterdetails("block");
        }
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 900,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      const styles={
        borderBottom: '0.5px solid',
        borderRight: 0,
       
        borderTop: 0,
        borderLeft: 0,
        bgcolor: 'background.paper',
      }
    
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    const PurposeFormSubmitHandler=(e)=>{
        e.preventDefault();
        SetPurposeformSubmitted(true);
        let forms={
            purpose:purpose,
            district2:district2,
            revenueName:revenueName,
            khewat:khewat,
            mustil:mustil,
            killa:killa,
            sector:sector,
            kanal:kanal,
            marla:marla,
            village2:village2,
            Khasra:Khasra,
            khatoni:khatoni,
        //   "data": {"Rectangle":"","kanalBigha":"","marlaBiswa":"","sarsai":"","colKhasra":"","developerLlp":"","registeringdate":"","validitydate":"","colirrevocialble":"","authSignature":"","nameAuthSign":"","registerAuthority":"","totalAppliedArea":""},
        }
    

      
 
          
            // Rectangle:Rectangle,
            // kanalBigha:kanalBigha,
            // marlaBiswa:marlaBiswa,
            // sarsai:sarsai,
            // colKhasra:colKhasra,
            // developerLlp:developerLlp,
            // registeringdate:registeringdate,
            // validitydate:validitydate,
            // colirrevocialble:colirrevocialble,
            // authSignature:authSignature,
            // nameAuthSign:nameAuthSign,
            // registerAuthority:registerAuthority,
            // totalAppliedArea:totalAppliedArea
            
       
         // console.log("FRMDATA",forms);
         localStorage.setItem('step2',JSON.stringify(forms))
         // form.push(forms)
         let frData = JSON.parse(localStorage.getItem('step2') || "[]")
     
     };
       
    useEffect(()=>{
        if (PurposeformSubmitted) {
            props.PurposeForm(true);
        }
    },[PurposeformSubmitted]);
    const handleKhewatChange = event => {
       
        setKhewat(event.target.value);
      };
   
      const handleKanalChange = event => {
       
        setKanal(event.target.value);
      };
      const handleMarlaChange= event => {
       
        setMarla(event.target.value);
      };
      const handleKhasraChange= event => {
       
        setKhasra(event.target.value);
      };
      const handleKhatoniChange= event => {
       
        setKhatoni(event.target.value);
      };
      const handlerectangleChange=event=>{
        setRectangle(event.target.value);
      }
    const AddMorfield=()=>{
        if (PurposeAdd.length===10) {
            return
        }
        SetPurposeAdd((forms)=>[...forms,<PurposeAddform element={PurposeAdd.length + 1}></PurposeAddform>]);
    };
    const RemoveMorfield=()=>{
        if (PurposeAdd.length===1) {
            return
        };
        
        let indexelm= PurposeAdd.length-1;
        console.log(indexelm);
        PurposeAdd.pop();
        console.log(PurposeAdd);
        SetPurposeAdd(PurposeAdd);

    };

    const AddMorParentfield=()=>{
        if (ParentAdd.length === 10) {
            return
        }
        SetParentAdd((forms)=>[...forms,<ParentLicenceAddform element={ParentAdd.length +1}></ParentLicenceAddform>])
    };
    const RemoveMoreParentfield=()=>{
        if (ParentAdd.length===1) {
            return
        };
        
        let indexelm= ParentAdd.length-1;
        console.log(indexelm);
        ParentAdd.pop();
        console.log(ParentAdd);
    }
    const [open, setOpen] = useState(false);
    const handleChange=(e)=>{
        this.setState({ isRadioSelected: true });
       
     }
     const [showhide,setShowhide]=useState("No");
    const handleshow=e=>{
        const getshow=e.target.value;
        setShowhide(getshow);
    };
   
    return(
        <Form onSubmit={PurposeFormSubmitHandler}>
            <Form.Group className="justify-content-center" controlId="formBasicEmail">
                <Row className="ml-auto" style={{marginBottom:5}}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label><b>Puropse Of License</b> <span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <Form.Select type="text" defaultValue="Select" placeholder="Puropse"  onChange={(e)=>setPurpose(e.target.value)} value={purpose} >
                        <option>Plotted Commercial</option>
                                                        <option>Group Housing Commercial</option>
                                                        <option>AGH </option>
                                                        <option>Commercial Integrated </option>
                                                        <option>Commercial Plotted</option>
                                                        <option>Industrial Colony Commercial</option>
                                                        <option>IT Colony Commercial</option>
                                                        <option>DDJAY Commercial </option>
                                                        <option>NILP (Commercial </option>
                                                        <option>Low density Eco friendly</option>
                                                        <option>TOD Commercial </option>
                                                        <option>TOD Group housing</option>
                        </Form.Select>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label><b>State </b><span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                         <Form.Control type="text" defaultValue="Haryana" disabled  >
                            
                        </Form.Control>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label><b>District</b> <span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <Form.Select type="text" defaultValue="Select" placeholder="District"  onChange={(e)=>setDistrict2(e.target.value)} value={district2}>
                            <option value="1">District 1</option>
                            <option value="2">District 2</option>
                            <option value="3">District 3</option>
                            <option value="3">District 4</option>
                        </Form.Select>
                    </Col>
                
                </Row>
              
                {/* <Row className="ml-auto" style={{marginBottom:5}}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Name of Revenue estate</Form.Label>
                        </div>
                        <Form.Select type="text" defaultValue="Select" onChange={(e)=>setRevenueName(e.target.value)} value={revenueName} >
                        <option>revenuestate 1</option>
                                                        <option>revenuestate 2</option>
                                                        <option>revenuestate 3</option>
                                                        <option>revenuestate 4</option>
                                                        <option>revenuestate 5</option>
                        </Form.Select>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Khewat <span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text"  minLength={1} maxLength={10} pattern="[0-9]*"
                        onChange={(e)=>setKhewat(e.target.value)} value={khewat} onChange1={handleKhewatChange} >
                        {errors.khewat && <p></p>} 
                        </Form.Control>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Mustil /Killa No.<span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <Form.Select type="text" defaultValue="Select" placeholder="Tehshil"   onChange={(e)=>setMustil(e.target.value)} value={mustil} >
                           
                        <option>mustil 1</option>
                                                        <option>mustil 2</option>
                                                        <option>mustil 3</option>
                                                        <option>mustil 4</option>
                                                        <option>mustil 5</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row className="ml-auto" style={{marginBottom:5}}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Killa<span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text"  
                        onChange={(e)=>setKilla(e.target.value)} value={killa} >
                           
                        </Form.Control>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Sector</Form.Label>
                        </div>
                        <Form.Select type="text" defaultValue="Select" placeholder="Developer"  onChange={(e)=>setSector(e.target.value)} value={sector} >
                            <option value="1">12</option>
                            <option value="2">14</option>
                            <option value="3">15</option>
                            <option value="3">16</option>
                        </Form.Select>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Area in Kanal<span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text"   minLength={1} maxLength={10}  pattern="[0-9]*"
                        onChange={(e)=>setKanal(e.target.value)} value={kanal} onChange1={handleKanalChange} >
                        {errors.kanal && <p></p>} 
                           
                        </Form.Control>
                    </Col>
                </Row>
                <Row className="ml-auto" style={{marginBottom:5}}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Area in Marla<span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text" minLength={1} maxLength={10}  pattern="[0-9]*"
                        onChange={(e)=>setMarla(e.target.value)} value={marla} onChange1={handleMarlaChange} >
                        {errors.marla && <p></p>} 
                           
                           
                        </Form.Control>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Name of Land Owner</Form.Label>
                        </div>
                        <Form.Control type="text" disabled >
                           
                        </Form.Control>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Village<span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <Form.Select type="text" defaultValue="Select" placeholder="Tehshil"  onChange={(e)=>setVillage2(e.target.value)} value={village2} >
                           
                        <option>village 1</option>
                                                        <option>village 2</option>
                                                        <option>village 3</option>
                           </Form.Select>
                    </Col>
                </Row>
                <Row className="ml-auto" style={{marginBottom:5}}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Khasra No. / Khewat<span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <Form.Control type="text"  minLength={1} maxLength={20}  pattern="[0-9]*"
                        onChange={(e)=>setKhasra(e.target.value)} value={Khasra} onChange1={handleKhasraChange} >
                        {errors.Khasra && <p></p>} 
                           
                        </Form.Control>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Khatoni No</Form.Label>
                        </div>
                        <Form.Control type="text"  minLength={1} maxLength={20}  pattern="[0-9]*"
                        onChange={(e)=>setKhatoni(e.target.value)} value={khatoni} onChange1={handleKhatoniChange} >
                        {errors.khatoni && <p></p>} 
                           
                           
                        </Form.Control>
                    </Col>
                   
                </Row> */}
               

                {/* <div className="ml-auto" style={{marginTop:20}}>
                    <h2 style={{fontSize:24}}>I. General Information:</h2>
                    <p>1. Name and status of the land owner (individual/ company/ firm/ LLP etc.) be provided in the following table:-</p>
                </div>

                {PurposeAdd.map((el,i)=>el)}
                <Col className="ml-auto" style={{display:"flex"}}>
                <Button onClick={AddMorfield} style={{marginTop:10, marginRight:10}}>Add More</Button>
                <Button variant="danger" onClick={RemoveMorfield} style={{marginTop:10}}>Remove</Button>
                </Col>
                <div className="ml-auto" style={{marginTop:20}}>
                    <h4  style={{fontSize:20}}>(Enclose the following documents as Annexures)</h4>
                </div>

                <Row className="ml-auto" style={{marginBottom:5}}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Land schedule</Form.Label>
                        </div>
                        <Form.Control type="file"></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Copy of Mutation</Form.Label>
                        </div>
                        <Form.Control type="file"></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Copy of Jamabandi</Form.Label>
                        </div>
                        <Form.Control type="file"></Form.Control>
                    </Col>
                </Row>
                <Row className="ml-auto" style={{marginBottom:5}}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Details of lease / patta, if any</Form.Label>
                        </div>
                        <Form.Control type="file"></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Copy of Sajra Plan</Form.Label>
                        </div>
                        <Form.Control type="file"></Form.Control>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Another Copy of Sajra Plan</Form.Label>
                        </div>
                        <Form.Control type="file"></Form.Control>
                    </Col>
                </Row>
                <div className="ml-auto">
                    <h4 style={{fontSize:16, marginTop:10}}>2. Name of Developer</h4>
                </div>
                <Row className="ml-auto" style={{marginBottom:5}}>
                    <Col md={4} xxl lg="4">
                        <Form.Select type="text" defaultValue="Select" placeholder="Tehshil" >
                            <option value="1">Developer 1</option>
                            <option value="2">Developer 2</option>
                            <option value="3">Developer 3</option>
                            <option value="3">Developer 4</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row className="ml-auto" style={{marginBottom:5}}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>(i) Status (please specify whether individual/ company/ firm/ LLP etc.)</Form.Label>
                        </div>
                        <Form.Select type="text" defaultValue="Select" placeholder="Tehshil" >
                            <option value="1">Company</option>
                            <option value="2">Manager</option>
                        </Form.Select>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>(ii) Permanent address in case of individual/ registered office address in case other than individual</Form.Label>
                        </div>
                        <Form.Control type="text" placeholder="Permanent address in case of individual" />
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>(iii) Address for the purpose of communication</Form.Label>
                        </div>
                        <Form.Control type="text" placeholder="Address for the purpose of communication" />
                    </Col>
                    
                </Row>
                <Row className="ml-auto" style={{marginBottom:5}}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>(iv) Name of authorized person to sign the application</Form.Label>
                        </div>
                        <Form.Control type="text" placeholder="Permanent address in case of individual" />
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>(v) Mobile No. for communication</Form.Label>
                        </div>
                        <Form.Control type="text" placeholder="Permanent address in case of individual" />
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>(vi) Email ID for communication</Form.Label>
                        </div>
                        <Form.Control type="text" placeholder="Address for the purpose of communication" />
                    </Col>
                    
                </Row> */}
                  {/* <div class="my-3">
                                            <p style="margin-bottom:0.5rem;">(Enclose the following documents as
                                                Annexures)</p>
                                             <button class="btn btn-primary" data-toggle="modal" data-target="#appPurpose">Upload Documents</button>
                                            <div class="form-row">
                                                <div class="form-group col-md-4 mb-2">
                                                    <label class="font-weight-bold text-black ">Land schedule
                                                    </label>
                                                    <button class="btn btn-primary">View Document</button>
                                                </div>
                                                <div class="form-group col-md-4 mb-2">
                                                    <label class="font-weight-bold text-black ">Copy of Mutation
                                                    </label>
                                                    <button class="btn btn-primary">View Document</button>
                                                </div>
                                                <div class="form-group col-md-4 mb-2">
                                                    <label class="font-weight-bold text-black ">Copy of Jamabandi
                                                    </label>
                                                    <button class="btn btn-primary">View Document</button>
                                                </div>
                                                <div class="form-group col-md-4 mb-2">
                                                    <label class="font-weight-bold text-black ">Details of lease /
                                                        patta, if any </label>
                                                    <button class="btn btn-primary">View Document</button>
                                                </div>
                                                <div class="form-group col-md-4 mb-2">
                                                    <label class="font-weight-bold text-black ">Copy of Sajra
                                                        Plan</label>
                                                    <button class="btn btn-primary">View Document</button>
                                                </div>
                                                <div class="form-group col-md-4 mb-2">
                                                    <label class="font-weight-bold text-black ">Another Copy of
                                                        Sajra Plan</label>
                                                    <button class="btn btn-primary">View Document</button>
                                                </div>
                                            </div>
                                        </div> */}
                <div className="ml-auto" style={{marginTop:20}}>
                    <h2 style={{fontSize:24}}>2. Details of applied land:</h2>
                    <p><b>(i) Khasra-wise information to be provided in the following format:</b></p>
                </div>
                <div className="ml-auto">
                <Button variant="primary" onClick={handleShow}>
                                     Enter Details
                </Button>
                <div >
                <Modal  {...props}
      size="xl"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
       
        <Modal.Header  closeButton>
        
        </Modal.Header>
       
        <Modal.Body>
     
                       <Row className="ml-auto mb-3" >
                         <Col md={4} xxl lg="4">
                            <div>
                                <Form.Label><b>Tehsil</b></Form.Label>
                            </div>
                            <Form.Select type="text" defaultValue="Select"  >
                            <option>Tehsil 1</option>
                                                            <option>Tehsil 2</option>
                                                            <option>Tehsil 3</option>
                                                            <option>Tehsil 4</option>
                                                            <option>Tehsil 5</option>
                            </Form.Select>
                        </Col>
                        <Col md={4} xxl lg="4">
                            <div>
                                <Form.Label><b>Name of Revenue estate</b></Form.Label>
                            </div>
                            <Form.Select type="text" defaultValue="Select" onChange={(e)=>setRevenueName(e.target.value)} value={revenueName} >
                            <option>revenuestate 1</option>
                                                            <option>revenuestate 2</option>
                                                            <option>revenuestate 3</option>
                                                            <option>revenuestate 4</option>
                                                            <option>revenuestate 5</option>
                            </Form.Select>
                        </Col>
                        <Col md={4} xxl lg="4">
                            <div>
                                <Form.Label><b>Rectangle No./Mustil</b><span style={{color:"red"}}>*</span></Form.Label>
                            </div>
                            <Form.Select type="text" defaultValue="Select" placeholder="Tehshil"   onChange={(e)=>setMustil(e.target.value)} value={mustil} >
                            
                            <option>mustil 1</option>
                                                            <option>mustil 2</option>
                                                            <option>mustil 3</option>
                                                            <option>mustil 4</option>
                                                            <option>mustil 5</option>
                            </Form.Select>
                        </Col>
                        
                        {/* <Col md={4} xxl lg="3">
                            <div>
                                <Form.Label><b>Khewat</b> <span style={{color:"red"}}>*</span></Form.Label>
                            </div>
                            <Form.Control type="text"  minLength={1} maxLength={10} pattern="[0-9]*"
                            onChange={(e)=>setKhewat(e.target.value)} value={khewat} onChange1={handleKhewatChange} >
                            {errors.khewat && <p></p>} 
                            </Form.Control>
                        </Col> */}
                        </Row><br></br>
                        <table className="table table-bordered" style={{backgroundColor:"rgb(251 251 253))"}}>
                            <thead>
                               
                                    <tr>
                                        <th>Killa</th>
                                        <th>Khewat</th>
                                        <th>Area in Kanal</th>
                                        <th>Area in Marla</th>
                                    </tr>
                                
                            </thead>
                            <tbody>
                                <tr>
                                    <td>  <TextField id="standard-basic"  variant="standard" /></td>
                                    <td>  <TextField id="standard-basic"  variant="standard" /></td>
                                    <td>  <TextField id="standard-basic"  variant="standard" /></td>
                                    <td>  <TextField id="standard-basic"  variant="standard" /></td>
                                </tr>
                            </tbody>
                        </table>
                        {/* <TableContainer component={Paper}>
      <Table className="table-bordered"  style={{width:"92",marginLeft:"20",backgroundColor:"rgb(247 247 249)"}} >
        <TableHead>
          <TableRow>
            <TableCell><b>Killa</b></TableCell>
            <TableCell ><b>Khewat</b></TableCell>
            <TableCell ><b>Area in Kanal</b></TableCell>
            <TableCell ><b>Area in Marla</b></TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell>
                <TextField id="standard-basic"  variant="standard" />
                </TableCell>
                <TableCell>
                <TextField id="standard-basic"  variant="standard" />
                </TableCell>
                <TableCell>
                <TextField id="standard-basic"  variant="standard" />
                </TableCell>
                <TableCell>
                <TextField id="standard-basic"  variant="standard" />
                </TableCell>
            </TableRow>
            {/* <TableRow>
                <TableCell >
                            <div className="px-2">
                                 <p className="mb-2" onChange={(e)=>setResPlotno(e.target.value)} value={resplotno}><b>Residential
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
             
            </TableRow> */}
            {/* <TableRow>
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
             
            </TableRow> */}
        {/* </TableBody>
      </Table>
                                     </TableContainer> */} 
                                     <br></br>
                        {/* <Row className="ml-auto mb-3" >
                
                        <Col md={4} xxl lg="3">
                            <div>
                                <Form.Label><b>Killa</b><span style={{color:"red"}}>*</span></Form.Label>
                            </div>
                            <Form.Control type="text"  
                            onChange={(e)=>setKilla(e.target.value)} value={killa} >
                            
                            </Form.Control>
                        </Col>
                        <Col md={4} xxl lg="3">
                            <div>
                                <Form.Label><b>Sector</b></Form.Label>
                            </div>
                            <Form.Select type="text" defaultValue="Select" placeholder="Developer"  onChange={(e)=>setSector(e.target.value)} value={sector} >
                                <option value="1">12</option>
                                <option value="2">14</option>
                                <option value="3">15</option>
                                <option value="3">16</option>
                            </Form.Select>
                        </Col>
                        <Col md={4} xxl lg="3">
                                <div>
                                    <Form.Label><b>Name of Land Owner</b></Form.Label>
                                </div>
                                <Form.Control type="text" disabled >
                                
                                </Form.Control>
                            </Col>
                            <Col md={4} xxl lg="3">
                                <div>
                                    <Form.Label><b>Area in Kanal</b><span style={{color:"red"}}>*</span></Form.Label>
                                </div>
                                <Form.Control type="text" minLength={1} maxLength={10}  pattern="[0-9]*"
                            >
                                {errors.marla && <p></p>} 
                                
                                
                                </Form.Control>
                            </Col>
                        </Row>
                        <Row className="ml-auto mb-3" >
                       
                            <Col md={4} xxl lg="3">
                                <div>
                                    <Form.Label><b>Area in Marla</b><span style={{color:"red"}}>*</span></Form.Label>
                                </div>
                                <Form.Control type="text" minLength={1} maxLength={10}  pattern="[0-9]*"
                                onChange={(e)=>setMarla(e.target.value)} value={marla} onChange1={handleMarlaChange} >
                                {errors.marla && <p></p>} 
                                
                                
                                </Form.Control>
                            </Col>
                            <Col md={4} xxl lg="3">
                            <div>
                                <Form.Label><b>Area in Sarsai</b><span style={{color:"red"}}>*</span></Form.Label>
                            </div>
                            <Form.Control type="text" minLength={1} maxLength={10}  pattern="[0-9]*"
                        >
                            {errors.marla && <p></p>} 
                            
                            
                            </Form.Control>
                        </Col>
                        <Col md={4} xxl lg="3">
                            <div>
                                <Form.Label><b>Area in Bigha</b><span style={{color:"red"}}>*</span></Form.Label>
                            </div>
                            <Form.Control type="text" minLength={1} maxLength={10}  pattern="[0-9]*"
                        >
                            {errors.marla && <p></p>} 
                            
                            
                            </Form.Control>
                        </Col>
                        <Col md={4} xxl lg="3">
                            <div>
                                <Form.Label><b>Area in Biswa</b><span style={{color:"red"}}>*</span></Form.Label>
                            </div>
                            <Form.Control type="text" minLength={1} maxLength={10}  pattern="[0-9]*"
                        >
                            {errors.marla && <p></p>} 
                            
                            
                            </Form.Control>
                        </Col>
                        
                        
                        </Row>
                      
                        <Row className="ml-auto mb-3" >
                        <Col md={4} xxl lg="3">
                            <div>
                                <Form.Label><b>Area in Biswansi</b><span style={{color:"red"}}>*</span></Form.Label>
                            </div>
                            <Form.Control type="text" minLength={1} maxLength={10}  pattern="[0-9]*"
                        >
                            {errors.marla && <p></p>} 
                            
                            
                            </Form.Control>
                        </Col>
                        <Col md={4} xxl lg="3">
                            <div>
                                <Form.Label><b>Area (in sqr mtr.)</b><span style={{color:"red"}}>*</span></Form.Label>
                            </div>
                            <Form.Control type="text" minLength={1} maxLength={10}  pattern="[0-9]*"
                        >
                            {errors.marla && <p></p>} 
                            
                            
                            </Form.Control>
                        </Col>
                        <Col md={4} xxl lg="3">
                            <div>
                                <Form.Label><b>Khasra No. / Khewat</b><span style={{color:"red"}}>*</span></Form.Label>
                            </div>
                            <Form.Control type="text"  minLength={1} maxLength={20}  pattern="[0-9]*"
                            onChange={(e)=>setKhasra(e.target.value)} value={Khasra} onChange1={handleKhasraChange} >
                            {errors.Khasra && <p></p>} 
                            
                            </Form.Control>
                        </Col>
                        <Col md={4} xxl lg="3">
                            <div>
                                <Form.Label><b>Khatoni No</b></Form.Label>
                            </div>
                            <Form.Control type="text"  minLength={1} maxLength={20}  pattern="[0-9]*"
                            onChange={(e)=>setKhatoni(e.target.value)} value={khatoni} onChange1={handleKhatoniChange} >
                            {errors.khatoni && <p></p>} 
                            
                            
                            </Form.Control>
                        </Col>
                        </Row> */}
                        <Row className="ml-auto mb-3" >
                      
                        <Col md={4} xxl lg="6">
                            <div>
                                <Form.Label><b>Whether collaboration agreement entered for the Khasra? (Yes/No)</b>&nbsp;&nbsp;&nbsp;
                                </Form.Label>
                            </div>
                        </Col>
                        <Col md={4} xxl lg="6">
                            <input type="radio" value="Yes" id="Yes"
                                        onChange={handleChange} name="Yes" />
                                        <label for="Yes">Yes</label>&nbsp;&nbsp;

                                        <input type="radio" value="No" id="No"
                                        onChange={handleChange} name="Yes"/>
                                        <label for="No">No</label>
                        </Col>
                        </Row>
                        <Row className="ml-auto mb-3" >
                        <Col md={4} xxl lg="6">
                            <div>
                            <label ><b>Name of the developer company / Firm/ LLP etc. with whom collaboration agreement entered</b> </label>
                           
                            </div>
                            </Col>
                            <Col md={4} xxl lg="6">
                            <input type="text" className="form-control" / >
                         
                            </Col>
                        </Row>
                        <Row className="ml-auto mb-3" >
                        <Col md={4} xxl lg="6">
                                <Form.Label><b>Date of registering collaboration agreement</b></Form.Label>
                        </Col>
                        <Col md={4} xxl lg="6">
                            <input type="date" className="form-control" 
                            />
                        </Col>
                        </Row>
                        <Row className="ml-auto mb-3" >
                        <Col md={4} xxl lg="6">
                        <Form.Label><b>Date of validity of collaboration agreement</b></Form.Label>
                                </Col>
                        <Col md={4} xxl lg="6">
                        <input type="date" className="form-control"/>
                        </Col>
                        </Row>
                        <Row className="ml-auto mb-3" >
                        <Col md={4} xxl lg="6">
                        
                                <Form.Label><b>Whether collaboration agreement irrevocable (Yes/No)</b></Form.Label>
                                </Col>
                                <Col md={4} xxl lg="6">
                            <input type="radio" value="Yes" id="Yes1"
                                        onChange={handleChange} name="Yes" />
                                        <label for="Yes">Yes</label>&nbsp;&nbsp;

                                        <input type="radio" value="No" id="No1"
                                        onChange={handleChange} name="Yes"/>
                                        <label for="No">No</label>
                        </Col>
                        </Row>
                        <Row className="ml-auto mb-3" >
                        <Col md={4} xxl lg="6">
                           
                                <Form.Label><b>Name of authorized signatory on behalf of land owner(s)</b></Form.Label>
                                </Col>
                                <Col md={4} xxl lg="6">
                          
                            <input type="text" className="form-control"
                            />
                            
                        </Col></Row>
                        <Row className="ml-auto mb-3" >
                        <Col md={4} xxl lg="6">
                          
                                <Form.Label><b>Name of authorized signatory on behalf of developer to sign Collaboration agreement</b></Form.Label>
                          </Col>
                          <Col md={4} xxl lg="6">
                            <input type="text" className="form-control"
                           / >
                           
                        </Col>
                        </Row>
                        <Row className="ml-auto mb-3" >
                        <Col md={4} xxl lg="6">
                           
                                <Form.Label><b>Registring Authority</b></Form.Label>
                                </Col>
                                <Col md={4} xxl lg="6">
                           
                          
                            <input type="text"  className="form-control"
                            />
                         
                        </Col>
                        </Row>
                    
               
          </Modal.Body>
          <Modal.Footer >
         
          <Button variant="primary">Submit</Button>
        </Modal.Footer>
        
      </Modal>
      </div>
                </div>
                <div className="applt" style={{width:"1037px",overflow:"auto"}}>
                    <table className="table table-bordered  col-12 overflow-auto">
                        <thead>
                            <tr>
                                
                                <th>Tehsil</th>
                                <th>Name of Revenue estate</th>
                                <th>Rectangle/Mustil No.</th>
                                <th>Killa</th>
                                <th>Name of  Land owner</th>
                                <th>Consolidation Type</th>
                                <th>Kanal</th>
                                <th>Marla</th>
                                <th>Sarsai</th>
                                <th>Bigha</th>
                                <th>Biswa</th>
                                <th>Biswansi</th>
                                <th>Area(in sqr. mtr)</th>
                                <th>Whether collaboration agreement entered for the Khasra? (Yes/No)
                                </th>
                                
                                <th>Name of the developer company / Firm/ LLP etc. with whom
                                    collaboration agreement entered</th>
                                <th>Date of registering collaboration agreement</th>
                                <th>Date of validity of collaboration agreement</th>
                                <th>Whether collaboration agreement irrevocable (Yes/No)</th>
                                <th>Name of authorized signatory on behalf of land owner(s)</th>
                                
                                <th>Name of authorized signatory on behalf of developer to sign
                                    Collaboration agreement</th>
                                
                                <th>Registring Authority</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td ><input type="text" className="form-control" /></td>
                                <td ><input type="text" className="form-control"/></td>
                                <td ><input type="text" className="form-control"/></td>
                                <td class="text-center"><input type="text" className="form-control"/></td>
                                <td class="text-center"><input type="text" className="form-control"/></td>
                                <td class="text-center">  <Form.Select type="select" defaultValue="Select"  >
                           
                                                                <option>Consolidated</option>
                                                                <option>Non Consolidated</option>
                                                          
                                                          
                           </Form.Select></td>
                                <td class="text-center"><input type="text" className="form-control"/></td>
                                <td class="text-center"><input type="text" className="form-control"/></td>
                                <td class="text-center"><input type="text" className="form-control"/></td>
                                <td class="text-center"><input type="text" className="form-control"/></td>
                                <td class="text-center"><input type="text" className="form-control"/></td>
                                <td class="text-center"><input type="text" className="form-control"/></td>
                                <td class="text-center"><input type="text" className="form-control"/></td>
                                <td class="text-center"> <input type="radio" value="Yes" id="Yes"
                                    onChange={handleChange} name="Yes" />
                                    <label for="Yes">Yes</label> &nbsp;&nbsp;

                                    <input type="radio" value="No" id="No"
                                    onChange={handleChange} name="Yes"/>
                                    <label for="No">No</label></td>
                                    <td ><input type="text" className="form-control"/></td>
                                <td class="text-center"><input type="date" className="form-control"/></td>
                                <td class="text-center"><input type="date" className="form-control"/></td>
                                <td class="text-center"> <input type="radio" value="Yes" id="Yes"
                                    onChange={handleChange} name="Yes" />
                                    <label for="Yes">Yes</label>&nbsp;&nbsp;

                                    <input type="radio" value="No" id="No"
                                    onChange={handleChange} name="Yes"/>
                                    <label for="No">No</label></td>
                                    <td ><input type="text" className="form-control"/></td>
                                    <td ><input type="text" className="form-control"/></td>
                                    <td ><input type="text" className="form-control"/></td>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
                 {/* <div className="col-md-12 mb-3">
                                        <h4 class="text-black">5. Documents required in Migration:- <span
                                                class="text-danger"><b>*</b></span></h4>
                                        <div class="rounded border shadow-sm p-2 mb-3"> 
                                            <p><b>1. Approved Layout of Plan/ Site plan for(GH)Showing Area(s)/Proposed
                                                    migration</b> &nbsp;&nbsp;&nbsp;

                                                <button class="btn btn-info d-none"><i class="fa fa-eye"></i></button>
                                                <button class="btn btn-info"><i class="fa fa-upload"></i></button>
                                            </p>
                                            <p><b>2. Proposed Layout of Plan /site plan for area applied for
                                                    migration.</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <button class="btn btn-info d-none"><i class="fa fa-eye"></i></button>
                                                <button class="btn btn-info"><i class="fa fa-upload"></i></button>
                                            </p>
                                            <p><b>3. Revised Land Schedule </b>&nbsp;&nbsp;&nbsp;
                                                <button class="btn btn-info d-none"><i class="fa fa-eye"></i></button>
                                                <button class="btn btn-info"><i class="fa fa-upload"></i></button>
                                            </p> 
                    </div>
                    </div> */}
                                
             
             
                {/* {(EnterdetailsShow)?<Enterdetailsform DisplayEnterDetails={DisplayEnterdetails}></Enterdetailsform>:<div></div>}

                <div style={{display:props.DisplayEnterDetails,padding:5, borderWidth:2,borderStyle:"solid",borderColor:"#042042", marginTop:20}}>
                    <Row className="ml-auto" style={{marginBottom:5}}>
                        <Col md={4} xxl lg="4">
                            <div>
                                <Form.Label>Name of individual Land owner/ land owning company/ firm/ LLP etc.</Form.Label>
                            </div>
                            <Form.Control type="text" />
                        </Col>
                        <Col md={4} xxl lg="4">
                            <div>
                                <Form.Label>Type of Revenue </Form.Label>
                            </div>
                            <Form.Control type="text" />
                        </Col>
                        <Col md={4} xxl lg="4">
                            <div>
                                <Form.Label>Name of Revenue estate</Form.Label>
                            </div>
                            <Form.Control type="text" />
                        </Col>
                        
                    </Row>
                    <Row className="ml-auto" style={{marginBottom:5}}>
                        <Col md={4} xxl lg="4">
                            <div>
                                <Form.Label>Rectangle No.</Form.Label>
                            </div>
                            <Form.Control type="text" />
                        </Col>
                        <Col md={4} xxl lg="4">
                            <div>
                                <Form.Label>Khasra No. </Form.Label>
                            </div>
                            <Form.Control type="text" />
                        </Col>
                        <Col md={4} xxl lg="4">
                            <div>
                                <Form.Label>Kanal/ Bigha</Form.Label>
                            </div>
                            <Form.Control type="text" />
                        </Col>
                        
                    </Row>
                    <Row className="ml-auto" style={{marginBottom:5}}>
                        <Col md={4} xxl lg="4">
                            <div>
                                <Form.Label>Marla/ Biswa</Form.Label>
                            </div>
                            <Form.Control type="text" />
                        </Col>
                        <Col md={4} xxl lg="4">
                            <div>
                                <Form.Label>Sarsai/ Biswansi</Form.Label>
                            </div>
                            <Form.Control type="text" />
                        </Col>
                        <Col md={4} xxl lg="4">
                            <div>
                                <Form.Label>Whether collaboration agreement entered for the Khasra? (Yes/No)</Form.Label>
                            </div>
                            <Form.Select type="text" defaultValue="Select" placeholder="Tehshil" >
                            <option value="1">Yes</option>
                            <option value="2">No</option>
                           
                        </Form.Select>
                        </Col>
                        
                    </Row>
                    <Row className="ml-auto" style={{marginBottom:5}}>
                        <Col md={4} xxl lg="4">
                            <div>
                                <Form.Label>Name of the developer company / Firm/ LLP etc. with whom collaboration agreement entered</Form.Label>
                            </div>
                            <Form.Control type="text" />
                        </Col>
                        <Col md={4} xxl lg="4">
                            <div>
                                <Form.Label>Date of registering collaboration agreement</Form.Label>
                            </div>
                            <Form.Control type="date" />
                        </Col>
                        <Col md={4} xxl lg="4">
                            <div>
                                <Form.Label>Date of validity of collaboration agreement</Form.Label>
                            </div>
                            
                            <Form.Control type="date" />
                           
                        </Col>
                        
                    </Row>
                    <Row className="ml-auto" style={{marginBottom:5}}>
                       
                        <Col md={4} xxl lg="4">
                            <div>
                                <Form.Label>Whether collaboration agreement irrevocable (Yes/No)</Form.Label>
                            </div>
                            <Form.Select type="text" defaultValue="Select" placeholder="Tehshil" >
                            <option value="1">Yes</option>
                            <option value="2">No</option>
                           
                        </Form.Select>
                        </Col>
                        <Col md={4} xxl lg="4">
                            <div>
                                <Form.Label>Name of authorized signatory on behalf of land owner(s)</Form.Label>
                            </div>
                            <Form.Control type="text" />
                        </Col>
                        <Col md={4} xxl lg="4">
                            <div>
                                <Form.Label>Name of authorized signatory on behalf of developer to sign Collaboration agreement</Form.Label>
                            </div>
                            <Form.Control type="text" />
                        </Col>
                       
                    </Row>
                    <Row className="ml-auto" style={{marginBottom:5}}>
                       
                        <Col md={4} xxl lg="4">
                            <div>
                                <Form.Label>Registring Authority</Form.Label>
                            </div>
                            <Form.Control type="text" />
                        </Col>
                        <Col md={4} xxl lg="4">
                            <div>
                                <Form.Label>Total Applied Area</Form.Label>
                            </div>
                            <Form.Control type="text" />
                        </Col>
                       
                    </Row>
                </div> */}
                {/* <div className="ml-auto">
                    <h4 style={{fontSize:24, marginTop:20}}>3. Whether licence applied for additional area: <span style={{color:"red"}}>*</span></h4>
                </div>
                <Row className="ml-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="4">
                        <Form.Check type="radio" id = "default-radio" label="Yes" name="group1" inline></Form.Check>
                        <Form.Check type="radio" id = "default-radio" label="No" name="group1" inline></Form.Check>
                    </Col>
                </Row>
                <hr></hr>
                <div className="ml-auto">
                    <h4 style={{fontSize:24, marginTop:20}}>4. Whether licence applied under Migration policy: <span style={{color:"red"}}>*</span></h4>
                </div>
                <Row className="ml-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="4">
                        <Form.Check type="radio" id = "default-radio" label="Yes" name="group1" inline></Form.Check>
                        <Form.Check type="radio" id = "default-radio" label="No" name="group1" inline></Form.Check>
                    </Col>
                </Row>
                <hr></hr>

                <Row className="ml-auto" style={{marginBottom:20}}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Select commercial licence component type <span style={{color:"red"}}>*</span></Form.Label>
                        </div>
                        <Form.Check type="radio" id = "default-radio" label="Commercial licence under 3.5%" name="group1" inline></Form.Check>
                        <Form.Check type="radio" id = "default-radio" label="Commercial licence under left over pocket" name="group1" inline></Form.Check>
                    </Col>
                </Row>
                <Row className="ml-auto" style={{marginBottom:5}}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Potential Zone</Form.Label>
                        </div>
                        <Form.Select type="text" defaultValue="Select" placeholder="Tehshil" >
                            <option value="1">Potential Zone 1</option>
                            <option value="2">Potential Zone 2</option>
                            <option value="3">Potential Zone 3</option>
                            <option value="3">Potential Zone 4</option>
                        </Form.Select>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Site Location Purpose</Form.Label>
                        </div>
                        <Form.Select type="text" defaultValue="Select" placeholder="District" >
                            <option value="1">Location Purpose 1</option>
                            <option value="2">Location Purpose 2</option>
                            <option value="3">Location Purpose 3</option>
                            <option value="3">Location Purpose 4</option>
                        </Form.Select>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>District </Form.Label>
                        </div>
                        <Form.Select type="text" defaultValue="Select" placeholder="Development Plan" >
                            <option value="1">District 1</option>
                            <option value="2">District 2</option>
                            <option value="3">District 3</option>
                            <option value="3">District 4</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row className="ml-auto" style={{marginBottom:5}}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Development Plan</Form.Label>
                        </div>
                        <Form.Select type="text" defaultValue="Select" placeholder="Tehshil" >
                            <option value="1">Development Plan 1</option>
                            <option value="2">Development Plan 2</option>
                            <option value="3">Development Plan 3</option>
                            <option value="3">Development Plan 4</option>
                        </Form.Select>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Approach Type(type of Policy)</Form.Label>
                        </div>
                        <Form.Select type="text" defaultValue="Select" placeholder="District" >
                            <option value="1">Approach Type 1</option>
                            <option value="2">Approach Type 2</option>
                            <option value="3">Approach Type 3</option>
                            <option value="3">Approach Type 4</option>
                        </Form.Select>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Approach Road Width</Form.Label>
                        </div>
                       <div style={{display:"flex"}}>
                        <Form.Control style={{width:"30%", marginRight:5}} type="text"></Form.Control>
                        <Form.Select type="text" defaultValue="Select" placeholder="Development Plan" >
                            <option value="1">Meter</option>
                            <option value="2">Feet</option>
                        </Form.Select>
                       </div>
                    </Col>
                </Row>
                <Row className="ml-auto" style={{marginBottom:5}}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Developer Type</Form.Label>
                        </div>
                        <Form.Select type="text" defaultValue="Select" placeholder="Tehshil" >
                            <option value="1">Limited Libility Pertnership</option>
                            
                        </Form.Select>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Specify Others</Form.Label>
                        </div>
                        <Form.Select type="text" defaultValue="Select" placeholder="District" >
                            <option value="1">Specify Others 1</option>
                            <option value="2">Specify Others 2</option>
                            <option value="3">Specify Others 3</option>
                            <option value="3">Specify Others 4</option>
                        </Form.Select>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Developer Name(if already exist) </Form.Label>
                        </div>
                        <Form.Select type="text" defaultValue="Select" placeholder="Development Plan" >
                            <option value="1">Developer Name 1</option>
                            <option value="2">Developer Name 2</option>
                            <option value="3">Developer Name 3</option>
                            <option value="3">Developer Name 4</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row className="ml-auto" style={{marginBottom:5}}>
                    <Col md={4} xxl lg="4">
                        <div>
                            <Form.Label>Existing Case No.</Form.Label>
                        </div>
                        <Form.Select type="text" defaultValue="Select" placeholder="Tehshil" >
                            <option value="1">Case 1</option>
                            
                        </Form.Select>
                    </Col>
                </Row>
                <hr></hr>
                {ParentAdd.map((el,i)=>el)}
                <Col className="ml-auto" style={{display:"flex"}}>
                <Button onClick={AddMorParentfield} style={{marginTop:10, marginRight:10}}>Add More</Button>
                <Button variant="danger" onClick={RemoveMoreParentfield} style={{marginTop:10}}>Remove</Button>
                </Col>
                <hr></hr>
                
                <div className="ml-auto" >
                    <h4 style={{fontSize:24, marginTop:20}}>5. Documents required in Migration: <span style={{color:"red"}}>*</span></h4>
                </div>
                <div style={{borderStyle:"solid", borderColor:"#042042", borderWidth:2, padding:10}}>
                    <Row className="ml-auto" >
                    
                    <Col md={4} xxl lg="4">
                        <div >
                            <Form.Label>
                            1. Approved Layout of Plan/ Site plan for(GH)Showing Area(s)/Proposed migration 
                            </Form.Label>
                        </div>
                    <Form.Control type="file"/>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div >
                            <Form.Label>
                            2. Proposed Layout of Plan /site plan for area applied for migration. 
                            </Form.Label>
                        </div>
                    <Form.Control type="file"/>
                    </Col>
                    <Col md={4} xxl lg="4">
                        <div >
                            <Form.Label>
                            3. Revised Land Schedule 
                            </Form.Label>
                        </div>
                    <Form.Control type="file"/>
                    </Col>
                    </Row>
                    <Row className="ml-auto" style={{marginTop:20}}>
                        <Col md={4} xxl lg="4">
                            <div>
                                <Form.Label>Whether collaboration agreement entered for the Khasra? (Yes/No)</Form.Label>
                            </div>
                            <Form.Check type="radio" id = "default-radio" label="Yes" name="group1" inline></Form.Check>
                            <Form.Check type="radio" id = "default-radio" label="No" name="group1" inline></Form.Check>
                        </Col>
                    </Row> */}
                {/* </div> */}
               
            </Form.Group>
            <Button style={{alignSelf:"center", marginTop:20}} variant="primary" type="submit">
                Save as Draft
            </Button>
            <Button style={{alignSelf:"center", marginTop:-48,marginLeft:958}} variant="primary" type="submit">
               Continue
            </Button>
        </Form>
       
    )
}

export default ApllicantPuropseForm;