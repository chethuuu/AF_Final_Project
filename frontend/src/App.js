import React,{useState,useEffect} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Navbar from "./Components/Navbar";
import Home from './Components/Home/Home';
import About from './Components/Home/About';
import Contact from './Components/Home/Contact';
import Register from './Components/Register';
import AllAccount from './Components/Allaccount';
import './Components/Styles/Student.css'
import './Components/Styles/Home.css'
import PrivateRoute from "./hocs/PrivateRoute"
import UnPrivateRoute from "./hocs/UnPrivateRoute"
import Login from './Components/Login';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Admin from './Components/Admin/Admin';
import supHome from './Components/Supervisor/supHome';
import studentHome from './Components/Student/studentHome';
import cosupHome from './Components/CoSupervisor/cosupHome'
import panelHome from './Components/PanelMember/panelHome';
import MCounterclass from'./Components/Admin/MCounterclass';
import Singlemarking from './Components/Admin/Singlemarking';
import Allmarking from './Components/Admin/Allmarking';
import ViewResearchTopicSup from './Components/Supervisor/ViewResearchTopicSup'
import ViewResearchTopic from './Components/Student/ViewResearchTopic';
import regResearch from './Components/Student/regResearch';
import StuGroup_Create from './Components/Student/Groups/StuGroup_Create';
import UploadFiles from './Components/Student/UploadFiles';
import Templates from './Components/Admin/Templates';
import SeeDocuments from './Components/Admin/SeeDocuments';
import Group_Display from './Components/Admin/Group_Display';
import ViewCoSupervisorRequests from './Components/CoSupervisor/ViewCoSupervisorRequests';
import ReqCoSupervisor from './Components/CoSupervisor/ReqCoSupervisor';
import ViewCoSupervisor from './Components/Student/ViewCoSupervisor';
import UpdateSupervisorReq from './Components/Supervisor/UpdateSupervisorReq';
import UpdateStatusSup from './Components/Supervisor/UpdateStatusSup';
import SendEmail from './Components/Supervisor/SendEmail';
import SendEmailCo from './Components/CoSupervisor/SendEmailCo';

function App() {
  return (
    <div className="root">
   
   <Router>
      <Navbar/>
      <UnPrivateRoute path="/home" component={Home}/>
      <UnPrivateRoute path="/about" component={About}/>
      <UnPrivateRoute path="/contact" component={Contact}/>
      <UnPrivateRoute path="/login" component={Login}/>
      <UnPrivateRoute path="/register"  component={Register}/>
      <PrivateRoute path="/userhome" roles={["user"]} component={Home}/>
      <PrivateRoute path="/data" roles={[""]} component={AllAccount}/>
      <PrivateRoute path="/Admin" roles={["admin"]} component={Admin}/>
      <PrivateRoute path="/user/:username" roles={["user"]} component={studentHome}/>
      <PrivateRoute path="/CoSupervisor" roles={["CoSupervisor"]} component={cosupHome}/>
      <PrivateRoute path="/PanelMember" roles={["PanelMember"]} component={panelHome}/>
      <PrivateRoute path="/Supervisor" roles={["Supervisor"]} component={supHome}/>
      <PrivateRoute path="/mcounterclass" roles={["admin"]} component={MCounterclass}/>
      <PrivateRoute path="/allmarking" roles={["admin"]} component={Allmarking}/>
      <PrivateRoute path="/singlemarking" roles={["admin"]} component={Singlemarking }/> 
      <PrivateRoute path="/viewtopic" roles={["user"]} component={regResearch}/>
      <PrivateRoute path="/viewreg" roles={["user"]} component={ViewResearchTopic}/>
      <PrivateRoute path="/viewtopicsup" roles={["Supervisor"]} component={ViewResearchTopicSup}/>
      <PrivateRoute path="/createGrp/:username" roles={["user"]} component={StuGroup_Create}/>
      <PrivateRoute path="/uploadFiles" roles={["user"]} component={UploadFiles}/>
      <PrivateRoute path="/templates" roles={["admin"]} component={Templates}/>
      <PrivateRoute path="/seeDocs" roles={["admin"]} component={SeeDocuments}/>
      <PrivateRoute path="/grpDisplay" roles={["admin"]} component={Group_Display}/>
      <PrivateRoute path="/viewco" roles={["CoSupervisor"]} component={ViewCoSupervisorRequests}/>
      <PrivateRoute path="/viewcostu" roles={["user"]} component={ViewCoSupervisor}/>
      <PrivateRoute path="/updatereqq/:id" roles={["Supervisor"]} component={UpdateSupervisorReq}/>
      <PrivateRoute path="/updatereqsup/:id" roles={["Supervisor"]} component={UpdateStatusSup}/>
      <PrivateRoute path="/sendmail/:id" roles={["Supervisor"]} component={SendEmail}/>
      <PrivateRoute path="/sendmailco/:id" roles={["CoSupervisor"]} component={SendEmailCo}/>
      <PrivateRoute path="/cosupreq/:id" roles={["CoSupervisor"]} component={ReqCoSupervisor}/>
    </Router>
    </div>
  );
}

export default App;
