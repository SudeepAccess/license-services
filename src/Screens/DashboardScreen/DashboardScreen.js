import React,{useState} from "react";
import Navbarcomp from "../../components/common/navbar/navbar";
import SidebarComp from "../../components/common/sidebar/sidebar";
import Dashboardcomp from "../../components/dashboard/dashboardcomp";
import Formcontainer from "../../components/formcontainer/formcontainer";


const DashboardScreen=()=>{
    const [IsDispalySidebar,SetDisplaySidebar] = useState(false);
    const [NewLicenceDisplay,SetNewlicenceDisplay] = useState("none");
    const [DashboardLandingDisplay,SetDashboardLandingDisplay] = useState("block");
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
    return(
        <>
            <Navbarcomp SidebarClicked={Sidebarenabled}></Navbarcomp>
            <SidebarComp dasboardClicked={SidebarDashboardClicked} newLicenceClicked={NewLicenceClikedSidebar} Show = {IsDispalySidebar} handleClose={Sidebarclose}></SidebarComp>
            <Dashboardcomp displayDashboardLanding={DashboardLandingDisplay} newLicenceCardClicked={newLicenceCardClicked} sidebarOpen={IsDispalySidebar}></Dashboardcomp>
            <Formcontainer isFormshow={NewLicenceDisplay}></Formcontainer>
        </>
        
    )
}

export default DashboardScreen;