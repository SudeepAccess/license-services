
// // import React, { useState } from "react";
// // import TabNavItem from "../ui/TabNavItem";
// // import TabContent from "../ui/TabContent";
// // import '../ui/Tab.css';
// // // import { Link } from "react-router-dom";
// // import AddInfo from "../AddInfo";
// // // import UploadDocuments from "../UploadDocuments";
// // import AuthorizedUsers from "../AuthorizedUsers";
// // // import Reports from "../Reports";
// // import DeveloperCard from "../DeveloperCard";

 
// // const Tabs = () => {
// //   const [activeTab, setActiveTab] = useState("tab1");
 
// //   return (
// //     <div className="Tabs">
// //       <ul className="nav">
// //         <TabNavItem title="Tab 1" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
// //         <TabNavItem title="Tab 2" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
// //         <TabNavItem title="Tab 3" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
// //       </ul>
 
// //       <div className="outlet">
// //         <TabContent id="tab1" activeTab={activeTab}>
// //                     <AddInfo/>
// //         </TabContent>
// //         <TabContent id="tab2" activeTab={activeTab}>
// //         <DeveloperCard/>
// //         </TabContent>
// //         <TabContent id="tab3" activeTab={activeTab}>
// //         <AuthorizedUsers/>
// //         </TabContent>
// //       </div>
// //     </div>
// //   );
// // };
 
// // export default Tabs;

import React, { useState } from "react";
// import TabNavItem from "../ui/TabNavItem";
// import TabContent from "../ui/TabContent";
import AddInfo from "../AddInfo";
import '../ui/Tab.css';
 import UploadDocuments from "../UploadDocuments";
 import AuthorizedUsers from "../AuthorizedUsers";
 import Reports from "../Reports";
 import DeveloperCard from "../DeveloperCard";

 import 'bootstrap/dist/css/bootstrap.css';
 import Tabs from 'react-bootstrap/Tabs';
 import Tab from 'react-bootstrap/Tab';
   
 export default function App() {

 
// const Tabs = () => {
//   const [activeTab, setActiveTab] = useState("tab1");
 
  return (
    // <div style={{ display: 'block', width: 900 , padding: 30 , }}>
    <div className="container my-5">
        <div className="row mt-4">
          {/* <div className=" col-12 m-auto"> */}
    <div className="tabs">
    <Tabs defaultActiveKey="first" >
    
      <Tab eventKey="first" title="AddInfo" aria-selected="false" className="nav-link">
      <AddInfo/> 
      </Tab>
      <Tab eventKey="second" title="UploadDocuments" aria-selected="false" className="nav-link" >
      <UploadDocuments/>
      </Tab>
      <Tab eventKey="third" title="AuthorizedUsers" aria-selected="false" className="nav-link">
      <AuthorizedUsers/>   
      </Tab>
      <Tab eventKey="fourth" title="Reports" aria-selected="false" className="nav-link">
      <Reports/>
      </Tab>
      <Tab eventKey="fifth" title="DeveloperCard" aria-selected="false" className="nav-link">
     <DeveloperCard/>
      </Tab>
    </Tabs>
    {/* </div> */}
    </div>
    </div>
    </div>
    
  );
};

// export default App;
