import React,{useState} from "react";
import Personalinfo from "./Personalinfo/Personalinfo";
import Genarelinfo from "./Generalinfo/Generalinfo";
import Developerinfo from "./Developerinfo/Developerinfo";
import AppliedLandinfo from "./AppliedLand/AppliedLand";
import DisApprovalList from "./DisApprovalList/DisApprovalList";

const ScrutitnyForms=()=>{
    const [displayPersonal,setDisplayPersonalInfo] = useState([]);
    const [displayPurpose,setDisplayPurposeInfo] = useState("none");
    const [displayGeneral,setDisplayGeneralInfo] = useState("none");

    const [uncheckedValue,setUncheckedVlue]=useState([]);

    
    const getUncheckedPersonalinfos=(data)=>{
        setDisplayPersonalInfo(data.data);
        console.log(data);
    }
    console.log(uncheckedValue);
    return(
       <div>
            <Personalinfo passUncheckedList={getUncheckedPersonalinfos}></Personalinfo>
            <Genarelinfo></Genarelinfo>
            <Developerinfo></Developerinfo>
            <AppliedLandinfo></AppliedLandinfo>
            <DisApprovalList disapprovallist={displayPersonal}></DisApprovalList>
       </div>
    )
}



export default ScrutitnyForms;