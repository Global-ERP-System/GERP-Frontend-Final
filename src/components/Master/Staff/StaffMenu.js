import React from 'react'
import './Staff.css'
// import Staff from './Staff'
import {Link} from 'react-router-dom'


const Menu = () => {
    return (
        <div className="Container">
            <div className="staffMenu">
                <ul>
                    <li><Link to="/">All</Link></li>
                    <li><Link to="/TemproryStaff">Temprory Staff </Link></li>
                    <li><Link to="/PermanentStaff">Permanent Staff</Link></li>
                    <li><Link to="/SuspendedStaff">Suspended Staff</Link></li>
                    <li><Link to="/LeaveStaff">Leave Staff</Link></li>
                </ul>
            </div>
        </div>

    )
}
export default Menu