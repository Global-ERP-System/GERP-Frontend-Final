import React from 'react'
import './Staff.css'
import logo from './logo.jpg'
const TemproryStaff = () => {
    return (
        <div className="TemporaryStaff">
            <h2>Temporary Staff</h2>
            <div className="Display_Details">
                <img src={logo} alt="Logo" />
                <h3>&lt;Temprory Staff_Details&gt;</h3>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}
export default TemproryStaff
