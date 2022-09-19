import React,{useState} from "react";
import Personalinfo from "./Personalinfo/Personalinfo";
import Genarelinfo from "./Generalinfo/Generalinfo";
import Developerinfo from "./Developerinfo/Developerinfo";
import AppliedLandinfo from "./AppliedLand/AppliedLand";

const ScrutitnyForms=()=>{
    const [displayPersonal,setDisplayPersonalInfo] = useState("none");
    const [displayPurpose,setDisplayPurposeInfo] = useState("none");
    const [displayGeneral,setDisplayGeneralInfo] = useState("none");

    const [uncheckedValue,setUncheckedVlue]=useState([]);

    console.log(uncheckedValue);
    return(
       <div>
            <Personalinfo></Personalinfo>
            <Genarelinfo></Genarelinfo>
            <Developerinfo></Developerinfo>
            <AppliedLandinfo></AppliedLandinfo>
       </div>
    )
}



export default ScrutitnyForms;