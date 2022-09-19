import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../Images/Logo.png'
function NavBar() {
    return (
        <div className='NavBar'>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/NewCustomer"><li>New Customer</li></Link>
                <Link to="/Customers"><li>Customers</li></Link>
                <Link to="/Transactions"><li>Transactions</li></Link>
            </ul>
            <img src={Logo} alt="Logo" className='Logo' />
            <h3>Online Banking</h3>


        </div>
    )
}

export default NavBar