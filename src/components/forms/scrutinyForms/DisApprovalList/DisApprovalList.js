import React from "react";
import {Row, Col, Card, Container,Form, Button} from "react-bootstrap"


const windowHeight =(window!==undefined)? window.innerHeight:null
const DisApprovalList=(props)=>{

    const Listlist = props.disapprovallist
    console.log("disapprovals",Listlist)
    return(
        <Container className="justify-content-center"  style={{
                            position:"fixed",
                            top:windowHeight*0.3,
                            minWidth:400,
                            maxWidth:600}}>
            <Row>
                <Card>
                    <Card.Header>
                        <Card.Title style={{fontFamily:"Roboto", fontSize:30, fontWeight:"bold"}}>
                            Disapproval List
                        </Card.Title>
                    </Card.Header>
                    <Card.Body style={{overflowY:"auto", height:250,backgroundColor:"#C6C6C6"}}>
                        <Form>
                           {(Listlist!==undefined && Listlist!==null && Listlist.length>0)?
                           (Listlist.map((el,i)=>
                           <Row key={i} style={{marginBottom:10}}>
                           <Col>
                               <h4 style={{fontSize:16,fontFamily:"Roboto", fontWeight:"lighter"}}>
                                    {el}
                                </h4>
                           </Col>
                           <Col>
                               <Form.Control type="text" placeholder="Reason for Disapprove">

                               </Form.Control>
                           </Col>
                       </Row>)):
                       <div>
                        <h2>No Disapproval list to show right now</h2>
                        </div>}
                            
                            
                        </Form>
                    </Card.Body>
                    <Card.Footer>
                        <div style={{position:"relative",float:"right"}}>
                            <Button>Submit</Button>
                        </div>
                    </Card.Footer>
                </Card>
            </Row>

        </Container>
    )
}

export default DisApprovalList;