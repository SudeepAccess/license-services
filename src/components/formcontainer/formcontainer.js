import React,{useState, useEffect} from "react";
import { Container } from "react-bootstrap";
import { Card, Row, Col} from "react-bootstrap";
import { commoncolor, primarycolor } from "../../constants";
import ApllicantForm from "../forms/Applicantform";
import ApllicantPuropseForm from "../forms/ApplicationPurpose";
import AppliedDetailForm from "../forms/AppliedDetail";
import LandScheduleForm from "../forms/LandSchedule";
import FeesChargesForm from "../forms/FeesCharges";

const Formcontainer=(props)=>{
    const [ApplicantFormshow,SetApplicantForm] = useState(true);
    const [PurposeFormshow,SetPurposeForm] = useState(false);
    const [LandScheduleFormshow,SetLandScheduleForm] = useState(false);
    const [AppliedDetailsFormshow,SetAppliedDetailsForm] = useState(false);
    const [FeesChargesFormshow,SetFeesChargesForm] = useState(false);

    const PuposeformHandler=(data)=>{

        SetLandScheduleForm(data);
        SetPurposeForm(false);
    };

    const ApllicantFormHandler=(data)=>{
        
        SetPurposeForm(data);
        SetApplicantForm(false);
    }
    const LandFormHandler=(data)=>{
        
        SetAppliedDetailsForm(data);
        SetLandScheduleForm(false);
    }
    const AppliedDetailFormHandler=(data)=>{
        
        SetFeesChargesForm(data);
        SetAppliedDetailsForm(false);
    }
    const FeesChargesFormHandler=(data)=>{
        
        
        SetFeesChargesForm(false);
    }
    
    
    return(
        <>
        <Container className="justify-content-center" style={{display:props.isFormshow,minHeight:"100%",width:"100%",position:"relative", marginBottom:50,marginTop:50,backgroundColor:commoncolor}}>
            <Row >
                <Col lg="2" >
                    <h5 style={{width:"87%",height:40,color:"#fff",backgroundColor:primarycolor,textAlign:"center",fontSize:15,borderRadius:5,padding:9,marginLeft:69}}>
                       Step-1
                    </h5>
                </Col><br></br>
                <Col  lg="2">
                    <h5 style={{width:"97%",height:40,color:"#fff",backgroundColor:primarycolor,textAlign:"center",fontSize:15,borderRadius:5,padding:9,marginLeft:60}}>
                       Step-2
                    </h5>
                </Col>
                <Col lg="2">
                <h5 style={{width:"100%",height:40,color:"#fff",backgroundColor:primarycolor,textAlign:"center",fontSize:15,borderRadius:5,padding:9,marginLeft:74}}>
                       Step-3
                    </h5>
                </Col>
                <Col  lg="2">
                <h5 style={{width:"103%",height:40,color:"#fff",backgroundColor:primarycolor,textAlign:"center",fontSize:15,borderRadius:5,padding:9,marginLeft:100}}>
                       Step-4
                    </h5>
                </Col>
                <Col lg="2" >
                <h5 style={{width:"91%",height:40,color:"#fff",backgroundColor:primarycolor,textAlign:"center",fontSize:15,borderRadius:5,padding:9,marginLeft:135}}>
                       Step-5
                    </h5>
                </Col>
                {/* <Col lg="3">
                <h5 style={{width:"67%",height:40,color:"#fff",backgroundColor:primarycolor,textAlign:"center",fontSize:15,borderRadius:5,padding:9,marginLeft:-68}}>
                       Step-5
                    </h5>
                </Col> */}
                {/* <Col md={4} xxl lg="3">
                    <h5 style={{width:"80%",height:40,color:"#fff",backgroundColor:"#0E5198",textAlign:"center",fontSize:15,borderRadius:5,padding:5}}>
                        Fees & Charges
                    </h5>
                </Col> */}
            </Row>
            <Row className="ml-auto" style={{top:30,padding:10,borderWidth:10,borderColor:primarycolor,borderStyle:"solid"}}>
                {(ApplicantFormshow)?
                    <ApllicantForm ApplicantFormSubmit={ApllicantFormHandler}></ApllicantForm>:
                (PurposeFormshow)?<ApllicantPuropseForm PurposeForm={PuposeformHandler}></ApllicantPuropseForm>:
                (LandScheduleFormshow)?<LandScheduleForm landFormSubmit={LandFormHandler} ></LandScheduleForm>:
                (AppliedDetailsFormshow)?<AppliedDetailForm AppliedDetailsFormSubmit={AppliedDetailFormHandler}></AppliedDetailForm>:
                (FeesChargesFormshow)?<FeesChargesForm FeesChrgesFormSubmit={FeesChargesFormHandler}></FeesChargesForm>:
                <div></div>
                }
                
            </Row>
        </Container>
        </>
    );
}

export default Formcontainer;