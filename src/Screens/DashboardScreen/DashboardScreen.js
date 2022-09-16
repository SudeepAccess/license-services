import React,{useState} from "react";
import Navbarcomp from "../../components/common/navbar/navbar";
import SidebarComp from "../../components/common/sidebar/sidebar";
import Dashboardcomp from "../../components/dashboard/dashboardcomp";
import Formcontainer from "../../components/formcontainer/formcontainer";
import Home from "../../Developer/Home";
import JE from "../../JE";


const DashboardScreen=()=>{
    const [IsDispalySidebar,SetDisplaySidebar] = useState(false);
    const [NewLicenceDisplay,SetNewlicenceDisplay] = useState("none");
    const [DashboardLandingDisplay,SetDashboardLandingDisplay] = useState("block");
    const [HomeLandingDisplay, SetHomeDisplay] = useState(false);
    const [JELandingDisplay, SetJEDisplay] = useState(false);
    const Sidebarenabled=(data)=>{
        if (!IsDispalySidebar) {
            SetDisplaySidebar(data);
        }
    }
    const Sidebarclose=()=>{
        if (IsDispalySidebar) {
            SetDisplaySidebar(false);
        }
    };
    const newLicenceCardClicked=()=>{
        SetNewlicenceDisplay("block");
        SetDashboardLandingDisplay("none");
    };
    const NewLicenceClikedSidebar=()=>{
        SetNewlicenceDisplay("block");
        SetDashboardLandingDisplay("none");
    };
    const SidebarDashboardClicked=()=>{
        SetNewlicenceDisplay("none");
        SetDashboardLandingDisplay("block");
    }
    const SidebarHomeClicked=()=>{
        SetHomeDisplay("none");
        SetDashboardLandingDisplay("block");
    }
    const SidebarJEClicked=()=>{
        SetJEDisplay("none");
        SetDashboardLandingDisplay("block");
    }
    
    return(
        <>
            <Navbarcomp SidebarClicked={Sidebarenabled}></Navbarcomp>
            <SidebarComp dasboardClicked={SidebarDashboardClicked} newLicenceClicked={NewLicenceClikedSidebar} Show = {IsDispalySidebar} handleClose={Sidebarclose}></SidebarComp>
            <Dashboardcomp displayDashboardLanding={DashboardLandingDisplay} newLicenceCardClicked={newLicenceCardClicked} sidebarOpen={IsDispalySidebar}></Dashboardcomp>
            <Formcontainer isFormshow={NewLicenceDisplay}></Formcontainer>
            {/* <Home distpalyHomeLandig={HomeLandingDisplay} HomeClicked={HomeClicked} sidebarOpen={IsDispalySidebar}></Home> */}
            <Home distpalyHomeLandig={HomeLandingDisplay}  ></Home>
        </>
        
    )
}

export default DashboardScreen;