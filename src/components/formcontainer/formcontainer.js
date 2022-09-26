import React,{useState, useEffect} from "react";
import { Container } from "react-bootstrap";
import { Card, Row, Col} from "react-bootstrap";
import { cardcolor, commoncolor, primarycolor } from "../../constants";
import ApllicantForm from "../forms/Applicantform";
import ApllicantPuropseForm from "../forms/ApplicationPurpose";
import AppliedDetailForm from "../forms/AppliedDetail";
import LandScheduleForm from "../forms/LandSchedule";
import FeesChargesForm from "../forms/FeesCharges";
// import homeF from "../../Developer/Home";
// import AddInfo from "../../Developer/AddInfo";


const Formcontainer=(props)=>{
    const [ApplicantFormshow,SetApplicantForm] = useState(true);
    const [PurposeFormshow,SetPurposeForm] = useState(false);
    const [LandScheduleFormshow,SetLandScheduleForm] = useState(false);
    const [AppliedDetailsFormshow,SetAppliedDetailsForm] = useState(false);
    const [FeesChargesFormshow,SetFeesChargesForm] = useState(false);
    const [ActiveKey,SetActiveKey] = useState(1);

    // const [Home,SetHome] = useState(false);
    // const [AddInfo,SetAddInfo] = useState(false);

    const PuposeformHandler=(data)=>{
        SetActiveKey(3)
        // SetLandScheduleForm(data);
        // SetPurposeForm(false);
    };

    const ApllicantFormHandler=(data)=>{
        SetActiveKey(2)
        // SetPurposeForm(data);
        // SetApplicantForm(false);
    }
    const LandFormHandler=(data)=>{
        SetActiveKey(4)
        // SetAppliedDetailsForm(data);
        // SetLandScheduleForm(false);
    }
    const AppliedDetailFormHandler=(data)=>{
        SetActiveKey(5)
        // SetFeesChargesForm(data);
        // SetAppliedDetailsForm(false);
    }
    const FeesChargesFormHandler=(data)=>{
        
        
        SetFeesChargesForm(false);
    }
    // const HomeHandler=(data)=>{
        
        
    //     SetHome(true);
    // }
    // const AddInfoHandler=(data)=>{
        
        
    //     SetAddInfo(true);
    // }
    
    return(
        <>
        <Container className="justify-content-center" style={{display:props.isFormshow,minHeight:"100%",width:"100%",position:"relative", marginBottom:50,marginTop:50,backgroundColor:commoncolor}} >
            <Row >
                <Col lg="2" >
                    <h5 style={{width:"87%",height:40,color:ActiveKey==1?cardcolor:"#fff",backgroundColor:ActiveKey==1 ?primarycolor:cardcolor,textAlign:"center",fontSize:15,borderRadius:5,padding:9,marginLeft:69}} onClick={()=>SetActiveKey(1)}>
                       Step-1
                    </h5>
                </Col><br></br>
                <Col  lg="2">
                    <h5 style={{width:"97%",height:40,color:ActiveKey==2?cardcolor:"#fff",backgroundColor:ActiveKey==2 ?primarycolor:cardcolor,textAlign:"center",fontSize:15,borderRadius:5,padding:9,marginLeft:60}} onClick={()=>SetActiveKey(2)}>
                       Step-2
                    </h5>
                </Col>
                <Col lg="2">
                <h5 style={{width:"100%",height:40,color:ActiveKey==3?cardcolor:"#fff",backgroundColor:ActiveKey==3 ?primarycolor:cardcolor,textAlign:"center",fontSize:15,borderRadius:5,padding:9,marginLeft:74}} onClick={()=>SetActiveKey(3)}>
                       Step-3
                    </h5>
                </Col>
                <Col  lg="2">
                <h5 style={{width:"103%",height:40,color:ActiveKey==4?cardcolor:"#fff",backgroundColor:ActiveKey==4 ?primarycolor:cardcolor,textAlign:"center",fontSize:15,borderRadius:5,padding:9,marginLeft:100}} onClick={()=>SetActiveKey(4)}>
                       Step-4
                    </h5>
                </Col>
                <Col lg="2" >
                <h5 style={{width:"91%",height:40,color:ActiveKey==5?cardcolor:"#fff",backgroundColor:ActiveKey==5 ?primarycolor:cardcolor,textAlign:"center",fontSize:15,borderRadius:5,padding:9,marginLeft:135}} onClick={()=>SetActiveKey(5)}>
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
                {
                    (ActiveKey==1)?(
                        <ApllicantForm ApplicantFormSubmit={ApllicantFormHandler}></ApllicantForm>
                    ):
                    (ActiveKey==2)?(
                        <ApllicantPuropseForm PurposeForm={PuposeformHandler}></ApllicantPuropseForm>
                    ):
                    (ActiveKey==3)?(
                        <LandScheduleForm landFormSubmit={LandFormHandler} ></LandScheduleForm>
                    ):
                    (ActiveKey==4)?(
                        <AppliedDetailForm AppliedDetailsFormSubmit={AppliedDetailFormHandler}></AppliedDetailForm>
                    ):
                    (ActiveKey==5)?(
                        <FeesChargesForm FeesChrgesFormSubmit={FeesChargesFormHandler}></FeesChargesForm>
                    ):
                    <div></div>
                }
                {/* {(ApplicantFormshow)?
                    <ApllicantForm ApplicantFormSubmit={ApllicantFormHandler}></ApllicantForm>:
                (PurposeFormshow)?<ApllicantPuropseForm PurposeForm={PuposeformHandler}></ApllicantPuropseForm>:
                (LandScheduleFormshow)?<LandScheduleForm landFormSubmit={LandFormHandler} ></LandScheduleForm>:
                (AppliedDetailsFormshow)?<AppliedDetailForm AppliedDetailsFormSubmit={AppliedDetailFormHandler}></AppliedDetailForm>:
                (FeesChargesFormshow)?<FeesChargesForm FeesChrgesFormSubmit={FeesChargesFormHandler}></FeesChargesForm>:
                <div></div>
                } */}
                
            </Row>
        </Container>
        </>
    );
}

export default Formcontainer;