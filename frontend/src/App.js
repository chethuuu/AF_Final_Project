import React, { useState, useEffect } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Navbar from "./Components/Navbar";
import Home from './Components/Home/Home';
import About from './Components/Home/About';
import Contact from './Components/Home/Contact';
import Register from './Components/Register';
import AllAccount from './Components/Allaccount';

//Import Css Files
import './Components/Styles/Student.css'
import './Components/Styles/Home.css'
import './Components/Styles/Supervisor.css'

import PrivateRoute from "./hocs/PrivateRoute"
import UnPrivateRoute from "./hocs/UnPrivateRoute"
import Login from './Components/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Admin from './Components/Admin/Admin';
import supHome from './Components/Supervisor/supHome';
import studentHome from './Components/Student/studentHome';
import cosupHome from './Components/CoSupervisor/cosupHome'
import panelHome from './Components/PanelMember/panelHome';
import MCounterclass from './Components/Admin/MCounterclass';
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
import Group_PannelAssign from './Components/Admin/Group_PannelAssign';
import Group_notAssigned from './Components/Admin/Group_notAssigned';
import Group_viewDetails from './Components/Admin/Group_viewDetails';
import UpdateUser from './Components/Admin/UpdateUser';
import UpdateSupervisorReq from './Components/Supervisor/UpdateSupervisorReq';
import UpdateStatusSup from './Components/Supervisor/UpdateStatusSup';
import SendEmail from './Components/Supervisor/SendEmail';
import SendEmailCo from './Components/CoSupervisor/SendEmailCo';
import ReqCoSupervisorRequest from './Components/Student/ReqCoSupervisorRequest';
import markingSchemas from './Components/PanelMember/markingSchemas';
import Evaluation from './Components/PanelMember/Evaluation';
import PMResearchTopicStatus from './Components/PanelMember/PMResearchTopicStatus';
import StudentProfile from './Components/Student/StudentProfile';
import Messenger from './Components/messenger/Messenger';
import MessengerAdmin from './Components/messenger/MessengerAdmin';
import MessengerSupervisor from './Components/messenger/MessengerSupervisor';
import MessengerCoSupervisor from './Components/messenger/MessengerCoSupervisor';
import AllEvaluationDisplay from './Components/PanelMember/AllEvaluationDisplay';
import EvaluDetailsDisplay from './Components/PanelMember/EvaluDetailsDisplay';

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
      <PrivateRoute path="/data" roles={["admin"]} component={AllAccount}/>
      <PrivateRoute path="/Admin" roles={["admin"]} component={Admin}/>
      <PrivateRoute path="/user/:username" roles={["user"]} component={studentHome}/>
      <PrivateRoute path="/CoSupervisor" roles={["CoSupervisor"]} component={cosupHome}/>
      <PrivateRoute path="/PanelMember" roles={["PanelMember"]} component={panelHome}/>
      <PrivateRoute path="/Supervisor" roles={["Supervisor"]} component={supHome}/>
      <PrivateRoute path="/mcounterclass" roles={["admin"]} component={MCounterclass}/> 
      <PrivateRoute path="/allmarking" roles={["admin"]} component={Allmarking}/>
      <PrivateRoute path="/singlemarking/:id" roles={["admin"]} component={Singlemarking }/> 
      <PrivateRoute path="/viewtopic/:username" roles={["user"]} component={regResearch} />
      <PrivateRoute path="/viewreg" roles={["user"]} component={ViewResearchTopic}/>
      <PrivateRoute path="/viewtopicsup" roles={["Supervisor"]} component={ViewResearchTopicSup}/>
      <PrivateRoute path="/createGrp/:username" roles={["user"]} component={StuGroup_Create}/>
      <PrivateRoute path="/uploadFiles" roles={["user"]} component={UploadFiles}/>
      <PrivateRoute path="/grpDisplays" roles={["admin"]} component={Group_Display}/>
      <PrivateRoute path="/viewco" roles={["CoSupervisor"]} component={ViewCoSupervisorRequests}/>
      <PrivateRoute path="/viewcostu" roles={["user"]} component={ViewCoSupervisor}/>
      <PrivateRoute path="/sendmail/:id" roles={["Supervisor"]} component={SendEmail}/>
      <PrivateRoute path="/sendmailco/:id" roles={["CoSupervisor"]} component={SendEmailCo}/>
      <PrivateRoute path="/panelAssign/:id" roles={["admin"]} component={Group_PannelAssign}/>
      <PrivateRoute path="/grpNotAssignDisplay" roles={["admin"]} component={Group_notAssigned}/>
      <PrivateRoute path="/viewGroup/:id" roles={["admin"]} component={Group_viewDetails}/>
      <PrivateRoute path="/templates" roles={["admin"]} component={Templates}/>
      <PrivateRoute path="/seeDocs" roles={["admin"]} component={SeeDocuments}/>   
      <PrivateRoute path="/grpDisplay" roles={["admin"]} component={Group_Display}/>
      <PrivateRoute path="/UpdateUser/:id" roles={["admin"]} component={UpdateUser}/>
      <PrivateRoute path="/updatereqq/:id" roles={["Supervisor"]} component={UpdateSupervisorReq}/>
      <PrivateRoute path="/updatereqsup/:id" roles={["Supervisor"]} component={UpdateStatusSup}/>
      <PrivateRoute path="/cosupreq/:id" roles={["CoSupervisor"]} component={ReqCoSupervisor}/>
      <PrivateRoute path="/reqsent/:id" roles={["user"]} component={ReqCoSupervisorRequest}/>
      <PrivateRoute path="/markingSchemas" roles={["PanelMember"]} component={markingSchemas}/>
      <PrivateRoute path="/evaluation/:id" roles={["PanelMember"]} component={Evaluation}/>
      <PrivateRoute path="/reseacrhtopic" roles={["PanelMember"]} component={PMResearchTopicStatus} />
      <PrivateRoute path="/profile/:username" roles={["user"]} component={StudentProfile} />

      {/* <PrivateRoute path="/messenger/:id" roles={["user", "Supervisor", "CoSupervisor", "admin"]} component={Messenger}/> */}
      <PrivateRoute path='/messengerU/:id' roles={["user"]} component={Messenger}/>
      <PrivateRoute path="/messengerS/:id" roles={["Supervisor"]} component={MessengerSupervisor}/>
      <PrivateRoute path="/messengerC/:id" roles={["CoSupervisor"]} component={MessengerCoSupervisor}/>
      <PrivateRoute path="/messengerA/:id" roles={["admin"]} component={MessengerAdmin}/>    
      <PrivateRoute path="/allEvaluationList" roles={["PanelMember"]} component={AllEvaluationDisplay} />
      <PrivateRoute path="/viewmarks/:id" roles={["PanelMember"]} component={EvaluDetailsDisplay} />
    </Router>
    </div>
  );
}

export default App;
