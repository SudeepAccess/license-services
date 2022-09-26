import React,{useState} from "react";
import { Button, Form } from "react-bootstrap";
import { Card, Row, Col} from "react-bootstrap";
import {AiFillCheckCircle, AiFillCloseCircle} from "react-icons/ai";
import Box from '@material-ui/core//Box';
import { useForm } from "react-hook-form";
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core//Modal';

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


const Feeandcharges=(props)=>{
    
    const[form,setForm]=useState([]);
    const [feeDetail,setFeeDetail]=useState('');
    const [licenseFee,setLicenseFee]=useState('');
    const[ScrutinyFee,setScrutinyFee]=useState('');
    const[totalFee,setTotalFee]=useState('');
    const[remark,setRemark]=useState('');
    const [aggregator,setAggregator]=useState('');
    const[previousLic,setPreviousLic]=useState('');
    const[amount,setAmount]=useState('');
    const { register, handleSubmit, formState: { errors } } = useForm([{XLongitude:'',YLatitude:''}]);
    const [showhide0,setShowhide0]=useState("No");
    const handleshow0=e=>{
        const getshow=e.target.value;
        setShowhide0(getshow);
    }
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
    const [showhide,setShowhide]=useState("No");
    const handleshow=e=>{
        const getshow=e.target.value;
        setShowhide(getshow);
    }
    const handleFeesChange = event => {

        setFeeDetail(event.target.value);
    };
    const handleLicFeesChange = event => {

        setLicenseFee(event.target.value);
    };
    const handleScrutinyFeesChange = event => {

        setScrutinyFee(event.target.value);
    };
    const handleTotalFeesChange = event => {

        setTotalFee(event.target.value);
    };
    const handleRemarkChange = event => {

        setRemark(event.target.value);
    };
    const handleAggregatorChange = event => {

        setAggregator(event.target.value);
    };
    const handlePrevLicChange = event => {

        setPreviousLic(event.target.value);
    };
    const handleAmountChange = event => {

        setAmount(event.target.value);
    };

   
    const handleChange=(e)=>{
        this.setState({ isRadioSelected: true });
       
     }
     const[noOfRows,setNoOfRows]=useState(1);
     const[noOfRow,setNoOfRow]=useState(1);
     const[noOfRow1,setNoOfRow1]=useState(1);
     
     
    const [uncheckedValue,setUncheckedVlue]=useState([]);
    console.log(uncheckedValue);
    return(
        <Form ref={props.feeandchargesInfoRef}>
              <Form.Group style={{display:props.displayFeeandCharges}} className="justify-content-center">
                <Row className="ml-auto" style={{marginBottom:5}}>
                <Col col-12>
                 
                            <div className="row">
                            <div className="col col-3">
                              
                                        <h6><b>(i)Fees/Charges details Total area</b>&nbsp;&nbsp;
                        <Form.Check value="Fees/Charges" 
                                    type="radio"  onChange1={handleChange} onClick={handleshow}
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group110" inline></Form.Check>
                        <Form.Check 
                            onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                            value="Fees/Charges" 
                            type="radio" id = "default-radio"  onChange1={handleChange} onClick={handleshow}
                            label={<AiFillCloseCircle class="fa fa-times text-danger"  size={18}></AiFillCloseCircle>} 
                            name="group110" inline></Form.Check></h6>
                                        <input type="text" className="form-control"required  minLength={1} maxLength={20} pattern="[0-9]*"
                                         onChange={(e)=>setFeeDetail(e.target.value)} value={feeDetail} onChange1={handleFeesChange} />
                                         {errors.feeDetail && <p>Please check the First Name</p>}
                             </div>
                             <div className="col col-3">
                              
                                        <h6><b>(ii)Licence Fees (25%)</b>&nbsp;&nbsp;
                        <Form.Check value="Licence Fees" 
                                    type="radio"  onChange1={handleChange} onClick={handleshow}
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group111" inline></Form.Check>
                        <Form.Check 
                            onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                            value="Licence Fees" 
                            type="radio" id = "default-radio"  onChange1={handleChange} onClick={handleshow}
                            label={<AiFillCloseCircle class="fa fa-times text-danger"  size={18}></AiFillCloseCircle>} 
                            name="group111" inline></Form.Check></h6>
                                        <input type="text" className="form-control" required  minLength={1} maxLength={20} pattern="[0-9]*"
                                         onChange={(e)=>setLicenseFee(e.target.value)} value={licenseFee} onChange1={handleLicFeesChange} />
                                         {errors.licenseFee && <p>Please check the First Name</p>}
                             </div>
                             <div className="col col-3">
                              
                              <h6><b>(iii)Scrutiny Fees</b>
                              &nbsp;&nbsp;
                        <Form.Check value="Scrutiny Fees" 
                                    type="radio"  onChange1={handleChange} onClick={handleshow}
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group112" inline></Form.Check>
                        <Form.Check 
                            onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                            value="Scrutiny Fees" 
                            type="radio" id = "default-radio"  onChange1={handleChange} onClick={handleshow}
                            label={<AiFillCloseCircle class="fa fa-times text-danger"  size={18}></AiFillCloseCircle>} 
                            name="group112" inline></Form.Check></h6>
                              <input type="text" className="form-control" required  minLength={1} maxLength={20} pattern="[0-9]*"
                               onChange={(e)=>setScrutinyFee(e.target.value)} value={ScrutinyFee} onChange1={handleScrutinyFeesChange} />
                               {errors.ScrutinyFee && <p></p>}
                   </div>
                   <div className="col col-3">
                              
                              <h6><b>(iv)Total Fees (License fee 25% + Scrutiny Fees)</b>
                              &nbsp;&nbsp;
                        <Form.Check value="Total Fees" 
                                    type="radio"  onChange1={handleChange} onClick={handleshow}
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group113" inline></Form.Check>
                        <Form.Check 
                            onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                            value="Total Fees" 
                            type="radio" id = "default-radio"  onChange1={handleChange} onClick={handleshow}
                            label={<AiFillCloseCircle class="fa fa-times text-danger"  size={18}></AiFillCloseCircle>} 
                            name="group113" inline></Form.Check></h6>
                              <input type="text" className="form-control" required  minLength={1} maxLength={20} pattern="[0-9]*"
                               onChange={(e)=>setTotalFee(e.target.value)} value={totalFee}onChange1={handleTotalFeesChange} />
                               {errors.totalFee && <p></p>}
                   </div>
                             </div><br></br>
                             <div className="row">
                            <div className="col col-3">
                              
                                        <h6><b>(v)Remark (If any)</b>&nbsp;&nbsp;
                                        <Form.Check value="Remark" 
                                    type="radio"  onChange1={handleChange} onClick={handleshow}
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group114" inline></Form.Check>
                        <Form.Check 
                            onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                            value="Remark" 
                            type="radio" id = "default-radio"  onChange1={handleChange} onClick={handleshow}
                            label={<AiFillCloseCircle class="fa fa-times text-danger"  size={18}></AiFillCloseCircle>} 
                            name="group114" inline></Form.Check></h6>
                                        <input type="number" className="form-control" minLength={2} maxLength={100}
                                         onChange={(e)=>setRemark(e.target.value)} value={remark} onChange1={handleRemarkChange} />
                                         {errors.remark && <p></p>}
                             </div>
                             <div className="col col-3">
                              
                                        <h6 ><b>(vi)Select Aggregator</b>
                                        &nbsp;&nbsp;
                                        <Form.Check value="Aggregator" 
                                    type="radio"  onChange1={handleChange} onClick={handleshow}
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group115" inline></Form.Check>
                        <Form.Check 
                            onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                            value="Aggregator" 
                            type="radio" id = "default-radio"  onChange1={handleChange} onClick={handleshow}
                            label={<AiFillCloseCircle class="fa fa-times text-danger"  size={18}></AiFillCloseCircle>} 
                            name="group115" inline></Form.Check></h6>
                                        <select className="form-control" id="developer"
                                                        name="developer"  onChange={(e)=>setAggregator(e.target.value)} value={aggregator}
                                                        onChange1={handleAggregatorChange} >
                               {errors.aggregator && <p></p>}
                                                    
                                                        <option value="" >
                                                        </option>
                                                        <option ></option>
                                                        <option ></option>
                                                      
                                                    </select>
                             </div>
                             <div className="col col-3">
                              
                              <h6  required onChange={(e)=>setPreviousLic(e.target.value)} value={previousLic}
                                 onChange1={handlePrevLicChange } >
                                 {errors.previousLic && <p></p>}<b>(vii)Do you want to adjust the fee from any previous license (Yes/No)</b>
                                 &nbsp;&nbsp;
                                        <Form.Check value="adjust" 
                                    type="radio"  onChange1={handleChange} onClick={handleshow}
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group116" inline></Form.Check>
                        <Form.Check 
                            onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                            value="adjust" 
                            type="radio" id = "default-radio"  onChange1={handleChange} onClick={handleshow}
                            label={<AiFillCloseCircle class="fa fa-times text-danger"  size={18}></AiFillCloseCircle>} 
                            name="group116" inline></Form.Check></h6>
                              <input type="radio" value="Yes" id="Yes"
                                                onChange1={handleChange} name="Yes" onClick={handleshow0}
                                              />
                                                <label for="Yes">Yes</label>&nbsp;&nbsp;

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"onClick={handleshow0}/>
                                                <label for="No">No</label>
                                                {
                                            showhide0==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-12">
                                                            <label for="parentLicense" className="font-weight-bold">Enter License Number/LOI number</label>
                                                            <input type="text" className="form-control"/>
                                                        </div>
                                                       
                                                    </div> 

                                            )
                                        }
                   </div>
                   <div className="col col-3">
                              
                              <h6><b>(viii)Amount (previous)</b>
                              &nbsp;&nbsp;
                                        <Form.Check value="Amount" 
                                    type="radio"  onChange1={handleChange} onClick={handleshow}
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group117" inline></Form.Check>
                        <Form.Check 
                            onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                            value="Amount" 
                            type="radio" id = "default-radio"  onChange1={handleChange} onClick={handleshow}
                            label={<AiFillCloseCircle class="fa fa-times text-danger"  size={18}></AiFillCloseCircle>} 
                            name="group117" inline></Form.Check></h6>
                              <input type="number" className="form-control"  required  minLength={1} maxLength={20} pattern="[0-9]*"
                               onChange={(e)=>setAmount(e.target.value)} value={amount}
                               onChange1={handleAmountChange  } />
                               {errors.amount && <p></p>}
                   </div>
                             </div>
                             <hr/>
                             <h5 className="text-black"><b>1.Undertakings:-</b>
                             &nbsp;&nbsp;
                                        <Form.Check value="Undertakings" 
                                    type="radio"  onChange1={handleChange} onClick={handleshow}
                                    id = "default-radio" 
                                    label={<AiFillCheckCircle class="fa fa-check text-success" size={18}></AiFillCheckCircle>} 
                                    name="group118" inline></Form.Check>
                        <Form.Check 
                            onChange={(e)=>setUncheckedVlue((prev)=>[...prev,e.target.value])} 
                            value="Undertakings" 
                            type="radio" id = "default-radio"  onChange1={handleChange} onClick={handleshow}
                            label={<AiFillCloseCircle class="fa fa-times text-danger"  size={18}></AiFillCloseCircle>} 
                            name="group118" inline></Form.Check></h5>
                             <div className="px-2">
                                    <p className="text-black">The following is undertaken: </p>
                                    <ul className="Undertakings">
                                        <li>I, alongwith the expert team have gone through the applicable Acts/ Rules/
                                            Policies/statutory provisions related to development of colony and the
                                            application is being submitted after going through the same.</li>
                                        <li>I/We have not applied for any other licence/ CLU permission for this land
                                            anywhere else.</li>
                                        <li>I understand that execution of External Development Works involves long
                                            gestation period as the same are town level facilities and I / we shall not,
                                            at any point of time, claim any damages against the Department
                                            for non completion of the external development works. </li>
                                        <li>I/We solemnly affirm and declare that the contents of the above application
                                            are correct to the best of my/ our knowledge and belief and no information
                                            has been concealed therein.  <Button onClick={handleOpen}>Read More</Button>
                                            {/* <span class="readMoreLink" data-toggle="modal"
                                                data-target="#licenceAgreement" >Read more</span> */}
                                                </li></ul>
                                               
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography> */}
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <ul>
                                                        <li>Morbi in sem quis dui placerat ornare. Pellentesque odio
                                                            nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.
                                                            Cras consequat.</li>
                                                        <li>Praesent dapibus, neque id cursus faucibus, tortor neque
                                                            egestas augue, eu vulputate magna eros eu erat. Aliquam erat
                                                            volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
                                                            facilisis luctus, metus.</li>
                                                        <li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
                                                            consectetuer ligula vulputate sem tristique cursus. Nam
                                                            nulla quam, gravida non, commodo a, sodales sit amet, nisi.
                                                        </li>
                                                        <li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis
                                                            auctor, ultrices ut, elementum vulputate, nunc.</li>
                                                        <li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
                                                            consectetuer ligula vulputate sem tristique cursus. Nam
                                                            nulla quam, gravida non, commodo a, sodales sit amet, nisi.
                                                        </li>
                                                        <li>Morbi in sem quis dui placerat ornare. Pellentesque odio
                                                            nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.
                                                            Cras consequat.</li>
                                                        <li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis
                                                            auctor, ultrices ut, elementum vulputate, nunc.</li>
                                                        <li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
                                                            consectetuer ligula vulputate sem tristique cursus. Nam
                                                            nulla quam, gravida non, commodo a, sodales sit amet, nisi.
                                                        </li>
                                                        <li>Praesent dapibus, neque id cursus faucibus, tortor neque
                                                            egestas augue, eu vulputate magna eros eu erat. Aliquam erat
                                                            volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
                                                            facilisis luctus, metus.</li>
                                                        <li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis
                                                            auctor, ultrices ut, elementum vulputate, nunc.</li>
                                                        <li>Morbi in sem quis dui placerat ornare. Pellentesque odio
                                                            nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.
                                                            Cras consequat.</li>
                                                        <li>Praesent dapibus, neque id cursus faucibus, tortor neque
                                                            egestas augue, eu vulputate magna eros eu erat. Aliquam erat
                                                            volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
                                                            facilisis luctus, metus.</li>
                                                    </ul>
          </Typography>
        </Box>
      </Modal>
                           
                                    <div className="">
                                        
                                            <div className="form-group">
                                                <div className="form-check">
                                                    <input className="form-check-input" formControlName="agreeCheck"
                                                        type="checkbox" value="" 
                                                        id="flexCheckDefault"/>
                                                    <label className="checkbox" for="flexCheckDefault">
                                                        I agree and accept the terms and conditions.<span
                                                            className="text-danger"><b>*</b></span>
                                                    </label>
                                                </div>
                                                <div class="my-2">
                                                    <button className="btn btn-success" 
                                                        data-toggle="modal" data-target="#payemtModal">Pay Now</button>
                                                </div>
                                           </div>
                             
                                    
                                  
                                   </div>
                             </div>
                           
           
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

export default Feeandcharges;