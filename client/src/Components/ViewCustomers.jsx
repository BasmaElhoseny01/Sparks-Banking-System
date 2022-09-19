/*Customers Component*/
import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

//components
import CustomerCard from './CustomerCard'

//images
import Customersimg from '../Images/Customers.png'

function ViewCustomers() {

  const [Customers, setCustomers] = useState([])

  useEffect(() => {
    axios.get("/AllCustomers")
    .then((response) => {
      if (response.data.status == 200)
        setCustomers(response.data.CustomersCollections)
      else
        alert(response.data.Message)
    })
    .catch((err)=>{
      alert(err)
    })
  }, [])

  return (
    <div className='Customers_Conatiner'>
      <div className='TransactionsTitle'>
        <h2>Customers </h2>
        <img src={Customersimg} style={{ width: '50px', marginLeft: '5px' }}></img>
      </div>
      <div className="CustomersTable">
        {Customers ? Customers.map((item) => {
          return <CustomerCard Customer={item} key={item._id} />
        }) : null}
      </div>
    </div>
  )

}

export default ViewCustomers