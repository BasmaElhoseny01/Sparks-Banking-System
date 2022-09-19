import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

//images
import welcome from '../Images/welcome.png'
import newCustomer from '../Images/NewCustomer.png'
import Customers from '../Images/Customerslist.png'
import Transfers from '../Images/Transfers.png'

function Home() {

    const [dateState, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000);
    }, []);

    return (
        <div className='Home'>
            <div className="Bar">
                <h1>Welcome Back</h1>
                <img src={welcome} style={{ width: '50px' }} />
                {dateState.toLocaleDateString('en-BG', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    hour12: true
                })}
            </div>

            <div className="Inner">
                <Link to='/NewCustomer'>
                    <div className='Icon' id="C1">
                        Add Customer
                        <img src={newCustomer} style={{ width: '50px', marginTop: '5px' }} />
                    </div>
                </Link>

                <Link to='/Customers'>
                    <div className='Icon' id="C2">
                        Customers
                        <img src={Customers} style={{ width: '50px', marginTop: '5px' }} />
                    </div>
                </Link>

                <Link to='/Transactions'>
                    <div className='Icon' id="C3">
                        Transactions
                        <img src={Transfers} style={{ width: '50px', marginTop: '5px' }} />
                    </div>
                </Link>

            </div >
        </div >
    )
}

export default Home