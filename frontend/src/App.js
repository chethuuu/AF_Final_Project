import React,{useState,useEffect} from 'react';
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

function App() {
  return (
    <div className="root">
   
   <Router>
      <Navbar/>
      <UnPrivateRoute path="/login" component={Login}/>
      <UnPrivateRoute path="/register"  component={Register}/>
      <PrivateRoute path="/data" roles={["admin"]} component={AllAccount}/>
      <PrivateRoute path="/Admin" roles={["admin"]} component={Admin}/>
      <PrivateRoute path="/user" roles={["user"]} component={studentHome}/>
      <PrivateRoute path="/CoSupervisor" roles={["CoSupervisor"]} component={cosupHome}/>
      <PrivateRoute path="/PanelMember" roles={["PanelMember"]} component={panelHome}/>
      <PrivateRoute path="/Supervisor" roles={["Supervisor"]} component={supHome}/>
    
    </Router>

    </div>
  );
}

export default App;
