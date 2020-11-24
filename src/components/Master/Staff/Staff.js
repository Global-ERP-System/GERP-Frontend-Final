import React from 'react'
import './Staff.css'
import logo from './logo.jpg'
const Staff = () => {
    return (
        <div className="Staff">
            <h2>Staff</h2>
            <div className="Display_Details">
                <img src={logo} alt="Logo" />
                <h3>&lt;Staff_Details&gt;</h3>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}
export default Staff
