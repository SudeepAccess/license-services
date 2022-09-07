import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import {BiMenu, BiHome, BiRegistered} from "react-icons/bi"
import {BsCart2} from "react-icons/bs";
import {ImEnter} from "react-icons/im";
import {MdOutlineCardMembership} from "react-icons/md";

import {FaEnvelopeOpen} from "react-icons/fa";
import {IoIosNotifications} from "react-icons/io";
import {AiFillSetting} from "react-icons/ai";
import React,{useState} from "react";


const Logo = require("../../../static/images/logo-white.png");
const Navbarcomp=(props)=>{

    const WindowWidth  = (typeof window !== undefined)? window.innerWidth:null
    console.log(WindowWidth);
   if (WindowWidth>=1024) {
    return(
        <Navbar bg="primary" expand="lg" variant="dark" style={{backgroundImage:"#0084C6"}}>
            <Container className="container-fluid">
                <Navbar.Brand style={{zIndex:40}} onClick={()=>props.SidebarClicked(true)} className="justify-content-center"><BiMenu></BiMenu></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-center">
                    <Nav.Item style={{zIndex:40}}>
                        <h2 style={{fontSize:20, color:"#fff"}}>Department of Town and Country Planning | Government of Haryana</h2>
                    </Nav.Item>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Item style={{zIndex:40, marginRight:10}}>
                        <FaEnvelopeOpen fontSize={18} color="#fff"></FaEnvelopeOpen>
                    </Nav.Item> 
                    <Nav.Item style={{zIndex:40, marginRight:10}}>
                        <IoIosNotifications fontSize={22} color="#fff"></IoIosNotifications>
                    </Nav.Item> 
                    <Nav.Item style={{zIndex:40}}>
                        <AiFillSetting fontSize={22} color="#fff"></AiFillSetting>
                    </Nav.Item>
                </Navbar.Collapse>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                {/* <Navbar.Collapse className="justify-content-end">
                    <Nav.Item style={{zIndex:40}}>
                        <Navbar.Brand><CgProfile></CgProfile></Navbar.Brand>
                    </Nav.Item>
                </Navbar.Collapse> */}
            </Container>
        </Navbar>
    )
   }else{
    return(
        <Navbar bg="primary" expand="lg" variant="dark" style={{backgroundImage:"#0084C6"}}>
            <Container>
                <Navbar.Brand className="justify-content-center" href="/">
                        <img width={100} height={40} src={Logo} ></img>
                </Navbar.Brand>
                {/* <NavDropdownProps></NavDropdownProps> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-center">
                        <Nav.Item className="ms-auto p-1">
                            <BiHome fontSize={18} color="#fff"></BiHome><span style={{color:"#fff", marginLeft:10}}>Home</span>
                        </Nav.Item>
                        <Nav.Item className="ms-auto p-1">
                            <MdOutlineCardMembership fontSize={18} color="#fff"></MdOutlineCardMembership><span style={{color:"#fff",marginLeft:10}}>Membarship</span>
                        </Nav.Item>
                        <Nav.Item className="ms-auto p-1">
                            <BiRegistered fontSize={18} color="#fff"></BiRegistered><span style={{color:"#fff",marginLeft:10}}>Register</span>
                        </Nav.Item>
                        <Nav.Item className="ms-auto p-1">
                            <ImEnter fontSize={18} color="#fff"></ImEnter><span style={{color:"#fff",marginLeft:10}}>Login</span>
                        </Nav.Item>
                        <Nav.Item className="ms-auto p-1">
                            <BsCart2 fontSize={18} color="#fff"></BsCart2><span style={{color:"#fff",marginLeft:10}}>Cart</span>
                        </Nav.Item>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
   }
}

export default Navbarcomp;