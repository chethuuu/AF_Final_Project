import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Navbar from "./Components/Navbar";
import Home from './Components/Home';
import All from './Components/All';
import Register from './Components/Register';
import AllAccount from './Components/Allaccount';

import PrivateRoute from "./hocs/PrivateRoute"
import UnPrivateRoute from "./hocs/UnPrivateRoute"
import Login from './Components/Login';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Admin from './Components/Admin/Admin';
import supHome from './Components/Supervisor/supHome';
import studentHome from './Components/Student/studentHome';
import cosupHome from './Components/CoSupervisor/cosupHome'
import panelHome from './Components/PanelMember/panelHome';


import regResearch from './Components/Student/regResearch';
import Todos from './Components/Todos';
import MainPage from './Components/Home/MainPage';
import ViewResearchTopic from './Components/Student/ViewResearchTopic';
import ViewResearchTopicSup from './Components/Supervisor/ViewResearchTopicSup';
import SupStatus from './Components/Supervisor/SupStatus';
function App() {
  return (
    <div className="root">
   
   <Router>
      <Navbar/>
      {/* <Route path="/" component={MainPage}/> */}
      <UnPrivateRoute path="/login" component={Login}/>
      <UnPrivateRoute path="/register"  component={Register}/>
      <PrivateRoute path="/data" roles={["admin"]} component={AllAccount}/>
      <PrivateRoute path="/Admin" roles={["admin"]} component={Admin}/>
      <PrivateRoute path="/user" roles={["user"]} component={studentHome}/>
      <PrivateRoute path="/CoSupervisor" roles={["CoSupervisor"]} component={cosupHome}/>
      <PrivateRoute path="/PanelMember" roles={["PanelMember"]} component={panelHome}/>
      <PrivateRoute path="/Supervisor" roles={["Supervisor"]} component={supHome}/>
      <PrivateRoute path="/viewtopic" roles={["user"]} component={regResearch}/>
      <PrivateRoute path="/viewtopicsup" roles={["Supervisor"]} component={ViewResearchTopicSup}/>
      <PrivateRoute path="/supstatus" roles={["Supervisor"]} component={SupStatus}/>
      <PrivateRoute path="/viewreg" roles={["user"]} component={ViewResearchTopic}/>
    
    </Router>

    </div>
  );
}

export default App;
