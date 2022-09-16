import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardScreen from './Screens/DashboardScreen/DashboardScreen';
import AddInfo from '../src/Developer/AddInfo';
import Home from '../src/Developer/Home';

import UploadDocuments from '../src/Developer/UploadDocuments';
import AuthorizedUsers from '../src/Developer/AuthorizedUsers';
import Reports from '../src/Developer/Reports';
import DeveloperCapacity from '../src/Developer/DeveloperCapacity';
import DeveloperCard from '../src/Developer/DeveloperCard';
import CapacityDocuments from '../src/Developer/CapacityDocuments ' ;
import Ext from '../src/Developer/ext';
import Patwari from '../src/patwari';
import UnderTable from '../src/Developer/underTable2';
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    
      <Routes>
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="/" element={<DashboardScreen />} />
        <Route path="/addinfo" element={<AddInfo />} />
        <Route path="/home" element={<Home />} />
        <Route path="/authorized" element={<AuthorizedUsers/>} />
        <Route path="/upload" element={<UploadDocuments/>} />
        <Route path="/report" element={<Reports/>} />
        <Route path="/capacity" element={<CapacityDocuments/>} />
        <Route path="/developercapacity" element={<DeveloperCapacity/>} />
        <Route path="/developercard" element={<DeveloperCard/>} />
        <Route path="/ext" element={<Ext/>} />
        <Route path="/underTable" element={<UnderTable/>} />
        <Route path="/patwari" element={<Patwari/>} />
      </Routes>
    
    
  );
}

export default App;
