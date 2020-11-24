import React from 'react'
import './Staff.css'
import logo from './logo.jpg'
const LeaveStaff = () => {
    return (
        <div className="LeaveStaff">
            <h2>Leave Staff</h2>
            <div className="Display_Details">
                <img src={logo} alt="Logo" />
                <h3>&lt;Leave Staff_Details&gt;</h3>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}
export default LeaveStaff