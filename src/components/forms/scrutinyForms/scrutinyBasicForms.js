import React,{useState} from "react";
import Personalinfo from "./Personalinfo/Personalinfo";
import Genarelinfo from "./Generalinfo/Generalinfo";
import Developerinfo from "./Developerinfo/Developerinfo";
import AppliedLandinfo from "./AppliedLand/AppliedLand";
import DisApprovalList from "./DisApprovalList/DisApprovalList";
import HistoryList from "./History/History";
import { Button } from "react-bootstrap";
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
           <div style={{position:"absolute",maxWidth:"100%", height:400,display:"flex"}}>
                <div style={{position:"relative",minWidth:"10%",height:400, padding:10, display:"inline-grid"}}>
                    <Button style={{height:50, marginBottom:10}}>Step 1</Button>
                    <Button style={{height:50, marginBottom:10}}>Step 2</Button>
                    <Button style={{height:50, marginBottom:10}}>Step 3</Button>
                    <Button style={{height:50, marginBottom:10}}>Step 4</Button>
                    <Button style={{height:50, marginBottom:10}}>Step 5</Button>
                </div>
                <div style={{position:"relative",width:"88%",padding:5,height:"100%",overflowY:"auto", borderStyle:"solid",borderWidth:1,borderColor:"black"}}>
                    <Personalinfo passUncheckedList={getUncheckedPersonalinfos}></Personalinfo>
                    <Genarelinfo></Genarelinfo>
                    <Developerinfo></Developerinfo>
                    <AppliedLandinfo></AppliedLandinfo>
                </div>
           </div>
            <div style={{position:"relative",marginTop:400,width:"100%", height:"30%",display:"flex"}}>
                <DisApprovalList disapprovallist={displayPersonal}></DisApprovalList>
                <HistoryList></HistoryList>
            </div>
       </div>
    )
}



export default ScrutitnyForms;