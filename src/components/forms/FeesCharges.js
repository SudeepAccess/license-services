import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useForm } from "react-hook-form";
import Box from '@material-ui/core//Box';
import { Button, Form } from "react-bootstrap";
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core//Modal';
import { Card, Row, Col} from "react-bootstrap";
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


const FeesChargesForm=(props)=> {
    const [FeesChargesFormSubmitted,SetFeesChargesFormSubmitted] = useState(false);
    const FeesChrgesFormSubmitHandler=(e)=>{
        e.preventDefault();
        SetFeesChargesFormSubmitted(true);
    };
    useEffect(()=>{
        if (FeesChargesFormSubmitted) {
            props.FeesChrgesFormSubmit(true);
        }
    },[FeesChargesFormSubmitted]);
    const { register, handleSubmit, formState: { errors } } = useForm([{XLongitude:'',YLatitude:''}]);
    const formSubmit = (data) => {
        console.log("data", data);
    };
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
   
    const handleChange=(e)=>{
        this.setState({ isRadioSelected: true });
       
     }
     const[noOfRows,setNoOfRows]=useState(1);
     const[noOfRow,setNoOfRow]=useState(1);
     const[noOfRow1,setNoOfRow1]=useState(1);
     
     
     return (
        <Form onSubmit={FeesChrgesFormSubmitHandler}>

<Form.Group className="justify-content-center" controlId="formBasicEmail">
                <Row className="ml-auto" style={{marginBottom:5}}>
                <Col col-12>
                 
                            <div className="row">
                            <div className="col col-3">
                              
                                        <h6>(i)Fees/Charges details Total area</h6>
                                        <input type="number" className="form-control"/>
                             </div>
                             <div className="col col-3">
                              
                                        <h6>(ii)Licence Fees (25%)</h6>
                                        <input type="number" className="form-control"/>
                             </div>
                             <div className="col col-3">
                              
                              <h6>(iii)Scrutiny Fees</h6>
                              <input type="number" className="form-control"/>
                   </div>
                   <div className="col col-3">
                              
                              <h6>(iv)Total Fees (License fee 25% + Scrutiny Fees)</h6>
                              <input type="number" className="form-control"/>
                   </div>
                             </div>
                             <div className="row">
                            <div className="col col-3">
                              
                                        <h6>(v)Remark (If any)</h6>
                                        <input type="number" className="form-control"/>
                             </div>
                             <div className="col col-3">
                              
                                        <h6>(vi)Select Aggregator</h6>
                                        <select className="form-control" id="developer"
                                                        name="developer"
                                                    >
                                                        <option value="" >
                                                        </option>
                                                        <option ></option>
                                                        <option ></option>
                                                      
                                                    </select>
                             </div>
                             <div className="col col-3">
                              
                              <h6>(vii)Do you want to adjust the fee from any previous license (Yes/No)</h6>
                              <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" onClick={handleshow0}/>
                                                <label for="Yes">Yes</label>

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
                              
                              <h6>(viii)Amount (previous)</h6>
                              <input type="number" className="form-control"/>
                   </div>
                             </div>
                             <hr/>
                             <h5 className="text-black">1.Undertakings:-</h5>
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
                                    {/* <div class="modal" tabindex="-1" id="licenceAgreement" role="modal">
                                        <div class="modal-dialog modal-lg">
                                            <div class="modal-content">
                                                <div class="modal-header text-right">
                                                    <!-- <h5 class="modal-title">Modal title</h5> -->
                                                    <i class="fa fa-close"
                                                        style="font-size: 24px; cursor:pointer;font-weight: 800;"
                                                        data-dismiss="modal" aria-label="Close">&times;</i>
                                                </div>
                                                <div class="modal-body ">
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="">
                                        <form [formGroup]="agreeForm">
                                            <div class="form-group">
                                                <div class="form-check">
                                                    <input class="form-check-input" formControlName="agreeCheck"
                                                        type="checkbox" value="" (change)="agreeChange($event)"
                                                        id="flexCheckDefault">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        I agree and accept the terms and conditions.<span
                                                            class="text-danger"><b>*</b></span>
                                                    </label>
                                                </div>
                                                <div class="my-2">
                                                    <button class="btn btn-success" [disabled]="!marked"
                                                        data-toggle="modal" data-target="#payemtModal">Pay Now</button>
                                                </div>
                                            </div>
                                      

                                        <div class="modal" tabindex="-1" id="payemtModal" role="modal">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <!-- <h5 class="modal-title">Modal title</h5> -->
                                                        <i class="fa fa-close"
                                                            style="font-size: 24px; cursor:pointer;font-weight: 800;"
                                                            data-dismiss="modal" aria-label="Close">&times;</i>
                                                    </div>
                                                    <div class="modal-body text-center p-3">
                                                        <img src="assets/img/Razorpay-logo.png" width="45%">
                                                        <div class="icon-success"><i class="fa fa-check-circle"></i>
                                                        </div>
                                                        <p class="text-success font-weight-bold"
                                                            style="font-size: 20px;">Congratulations, Payment
                                                            Successful!!</p>
                                                        <p class="font-weight-bold" style="font-size: 18px;">Your
                                                            Application No. : <strong>2547893</strong></p>
                                                        <p class="font-weight-bold" style="font-size: 18px;">Your Diary
                                                            No. : <strong>5984785</strong></p>
                                                        <p class="font-weight-bold" style="font-size: 18px;">The same
                                                            has been sent to your mobile and email as well.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    
                                  
                                   </div>
                             </div>
                             <Button style={{alignSelf:"center", marginTop:20, marginright:867}} variant="primary" type="submit">
                Save 
            </Button>
            <Button style={{alignSelf:"center", marginTop:20,marginLeft:867}} variant="primary" type="submit">
               Submit
            </Button>
                       
                       
                    
             
        </Col>
        </Row>
        </Form.Group>
        </Form>)
};
 export default FeesChargesForm;