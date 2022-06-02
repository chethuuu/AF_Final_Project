import React from 'react';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const panelHome = ()=>(
   
    <div className="container">
        <br></br><br></br>

    <Link to={`/markingSchemas`}><Button>View marking Schemas</Button></Link>    <br/><br/>

    </div>
)

export default panelHome;
