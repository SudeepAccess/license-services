// import React from "react";
// import Form from "react-bootstrap/Form";
// import Table from "react-bootstrap/Table";
// import { Link } from "react-router-dom";

// import "../Developer/Add1.css";

// function DeveloperCard() {
//   return (
//     <>
//       <div className="container my-5">
//         <div className=" col-12 m-auto">
//           <div className="card">
//             <h5 className="card-h">Developer</h5>
//             <div className="row">
//               <div className="col col-4">
//                 <div className="card-body">
//                   <div className="card-button">
//                     <h5 className="card-hd">
//                       <Link to="/developercapacity">Technical Capacity</Link>
//                     </h5>
//                   </div>
//                 </div>
//               </div>
//               <div className="col col-4">
//                 <div className="card-body">
//                   <div className="card-button">
//                     <h5 className="card-hd">
//                       <Link to="/capacity">Financial Capacity</Link>
//                     </h5>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default DeveloperCard;
import React, { useState } from "react";
// import TabNavItem from "../ui/TabNavItem";
// import TabContent from "../ui/TabContent";
// import AddInfo from "../AddInfo";
// import '../Developer/ui/Tab.css';
//  import UploadDocuments from "../UploadDocuments";
//  import AuthorizedUsers from "../AuthorizedUsers";
 import DeveloperCapacity from "../Developer/DeveloperCapacity";
 import CapacityDocuments from "../Developer/CapacityDocuments ";

 import 'bootstrap/dist/css/bootstrap.css';
 import Tabs from 'react-bootstrap/Tabs';
 import Tab from 'react-bootstrap/Tab';
 import '../Developer/AddInfo.css';
   
 export default function App() {

 
// const Tabs = () => {
//   const [activeTab, setActiveTab] = useState("tab1");
 
  return (
    // <div style={{ display: 'block', width: 900 , padding: 30 , }}>
    <div>
    <Tabs defaultActiveKey="second">
      <Tab eventKey="first" title=" Technical Capacity">
      <DeveloperCapacity/>
      </Tab>
      <Tab eventKey="second" title=" Financial Capacity">
      <CapacityDocuments/>
      </Tab>
      {/* <Tab eventKey="third" title="Step-3">
      <AuthorizedUsers/>   
      </Tab>
      <Tab eventKey="fourth" title="Step-4">
      <Reports/>
      </Tab>
      <Tab eventKey="fifth" title="Step-5">
     <DeveloperCard/>
      </Tab> */}
    </Tabs>
    </div>
  );
};
 
