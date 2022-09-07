import React,{useState} from "react";
import { Offcanvas } from "react-bootstrap";
import {FaBuilding, FaCogs, FaCopy, FaFile, FaHome, FaTree} from "react-icons/fa"

import {useNavigate} from "react-router-dom"

import { secondarycolor } from "../../../constants";
import { commoncolor } from "../../../constants";
import { Dropdown } from "react-bootstrap";


const WindowWidth  = (typeof window !== undefined)? window.innerWidth:null;
const Logo = require("../../../static/images/logo-white.png");
const Image = require("../../../static/images/tcp-haryana.jpg");
const SidebarComp=(props)=>{

    const nav = useNavigate();
    const [subMenu,SetShowSubmenu] = useState(false);

    const ShowSubmenu =()=>{
        if (subMenu) {
            SetShowSubmenu(false);
        }else{
            SetShowSubmenu(true);
            console.log("submenu")
        }
    }
    return(
        <Offcanvas show={props.Show} scroll onHide={()=>props.handleClose(true)} style={{width:350,backgroundColor:commoncolor}} >
            <Offcanvas.Header closeButton style={{backgroundColor:"#046DB5"}} >
                <div className="justify-content-center" style={{display:"flex"}}>
                    <img width="230px" height={60} src={Logo} ></img>
                </div>
            </Offcanvas.Header>
            <Offcanvas.Body > 
                <div className="justify-content-center" style={{marginTop:'15px'}}>
                    <div className="ml-auto"  style={{display:"flex",marginLeft:10,marginBottom:5}}>
                        
                        <h2 style={{color:secondarycolor, marginLeft:30,fontSize:"20px", cursor:"pointer"}}>Authorized Applicant</h2>
                    </div>
                    <br/>

                    <div className="ml-auto" onClick={()=>props.dasboardClicked(true)} style={{display:"flex",marginLeft:10,marginBottom:5,marginTop:'5px'}}>
                        <FaHome ></FaHome>
                        <h2 style={{color:secondarycolor, marginLeft:10,fontSize:"20px", cursor:"pointer"}}>Dashboard</h2>
                    </div>
                  
                    <div className="ml-auto" aria-expanded={false} onClick={ShowSubmenu} style={{display:"flex",marginLeft:10,marginBottom:5}}>
                        <FaFile></FaFile>
                        <h2 style={{color:secondarycolor, marginLeft:10,fontSize:"20px",cursor:"pointer"}}>Licence Services</h2>
                        {(subMenu)? 
                        <Dropdown.Menu show style={{left:350}}>
                            <Dropdown.Item style={{fontSize:14}} onClick={()=>props.newLicenceClicked(true)} href="#">New Licence</Dropdown.Item>
                            <hr style={{color:secondarycolor}}></hr>
                            <Dropdown.Item style={{fontSize:14}} href="#">Approval of Building Plan</Dropdown.Item>
                            <hr style={{color:secondarycolor}}></hr>
                            <Dropdown.Item style={{fontSize:14}} href="#">Service plan for Development work</Dropdown.Item>
                            <hr style={{color:secondarycolor}}></hr>
                            <Dropdown.Item style={{fontSize:14}} href="#">Service plan for Electric work</Dropdown.Item>
                            <hr style={{color:secondarycolor}}></hr>
                        </Dropdown.Menu>
                   :<div></div>}
                    </div>
                  
                   
                    <div className="ml-auto" onClick={()=>nav("/picks")} style={{display:"flex",marginLeft:10,marginBottom:5}}>
                        <FaBuilding ></FaBuilding>
                        <h2 style={{color:secondarycolor, marginLeft:10,fontSize:"20px",cursor:"pointer"}}>Bank Guarantee</h2>
                    </div>
                
                    <div className="ml-auto" onClick={()=>nav("/shop")} style={{display:"flex",marginLeft:10,marginBottom:5}}>
                        <FaCopy></FaCopy>
                        <h2 style={{color:secondarycolor, marginLeft:10,fontSize:"20px",cursor:"pointer"}}>Tranferable Development Rights</h2>
                    </div>
                    {/* <hr style={{color:secondarycolor}}></hr> */}
                    <div className="ml-auto" onClick={()=>nav("/FAQ")} style={{display:"flex",marginLeft:10,marginBottom:5}}>
                        <FaTree ></FaTree>
                        <h2 style={{color:secondarycolor, marginLeft:10,fontSize:"20px",cursor:"pointer"}}>Change of Land Use (CLU)</h2>
                    </div>
                
                    <div className="ml-auto" onClick={()=>nav("/FAQ")} style={{display:"flex",marginLeft:10,marginBottom:5}}>
                        <FaCogs></FaCogs>
                        <h2 style={{color:secondarycolor, marginLeft:10,fontSize:"20px",cursor:"pointer"}}>Other Services</h2>
                    </div>

                    <div className="justify-content-center" style={{display:"flex"}}>
                    <img width="230px" height={250} src={Image} ></img>
                </div>
                    


                 
                    
                </div>
            </Offcanvas.Body>
            
        </Offcanvas>
    )
}

export default SidebarComp;