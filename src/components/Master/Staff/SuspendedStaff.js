import React from 'react'
import './Staff.css'
import logo from './logo.jpg'
const SuspendedStaff = () => {
    return (
        <div className="SuspendedStaff">
            <h2>Suspended Staff</h2>
            <div className="Display_Details">
                <img src={logo} alt="Logo" />
                <h3>&lt;Suspended Staff_Details&gt;</h3>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}
export default SuspendedStaff