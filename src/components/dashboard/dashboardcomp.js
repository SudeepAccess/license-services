import React from "react";
import { Card ,Row, Col} from "react-bootstrap";
import { cardcolor, primarycolor } from "../../constants";
import { secondarycolor } from "../../constants";
import { commoncolor } from "../../constants";
import { Container } from "react-bootstrap";

const Dashboardcomp=(props)=>{
    return(
       <Container className="justify-content-center" style={{display:props.displayDashboardLanding,width:"100%", height:"100%", position:"relative"}}>
            <Row style={{position:"relative",marginTop:80}}>
            <Col xs lg="2">
                <Card style={{backgroundcolor:commoncolor, height: '65px', width: '200px', borderleft:primarycolor}}>
                    <Card.Body>
                        <div className="text-center" onClick={()=>props.newLicenceCardClicked(true)}>
                            <h2 style={{color:primarycolor,fontSize:15,marginTop:'8px'}}>Licence Service</h2>
                           
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            {/* <Col xs lg="4">
                <Card style={{backgroundColor:cardcolor, height:150}}>
                    <Card.Body>
                        <div className="text-center">
                            <h2 style={{color:secondarycolor, fontFamily:"Roboto",fontSize:25}}>Approval of Building Plan</h2>
                            <p style={{color:secondarycolor, fontFamily:"Roboto",fontSize:12}}>start approving building plans</p>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs lg="4">
                <Card style={{backgroundColor:cardcolor,height:150}}>
                    <Card.Body>
                        <div className="text-center">
                            <h2 style={{color:secondarycolor, fontFamily:"Roboto",fontSize:25}}>Service plan for Development work</h2>
                            <p style={{color:secondarycolor, fontFamily:"Roboto",fontSize:12}}>create a new plan for development work</p>
                        </div>
                    </Card.Body>
                </Card>
            </Col> */}
            </Row>
       </Container>
    )
}

export default Dashboardcomp;