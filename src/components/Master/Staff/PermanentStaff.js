import React from 'react'
import './Staff.css'
import logo from './logo.jpg'
const PermanentStaff = () => {
    return (
        <div className="PermanentStaff">
            <h2>Permanent Staff</h2>
            <div className="Display_Details">
                <img src={logo} alt="Logo" />
                <h3>&lt;Permamnent Staff_Details&gt;</h3>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}
export default PermanentStaff