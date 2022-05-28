import React from 'react'
import {Dropdown} from 'react-bootstrap'

function SupStatus() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success mx-auto" id="dropdown-basic">
                Choose Topic Status
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/accept">Accept Topic</Dropdown.Item>
                <Dropdown.Item href="#/reject">Reject Topic</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default SupStatus