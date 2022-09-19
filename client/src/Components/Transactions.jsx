/*Transactions table Component*/
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

//Images
import TransferImg from '../Images/Transfer.png'

function Transactions() {

    const [Transactions, setTransactions] = useState([])
    const [Customers, setCustomers] = useState([])

    useEffect(() => {
        axios.get("/AllTransactions")
            .then((response) => {
                if (response.data.status == 200) {
                    setTransactions(response.data.TransactionsCollections)
                }
                else
                    alert(response.data.Message)
            })
            .catch((err) => {
                alert(err)
            })


        axios.get("/AllCustomers")
            .then((response) => {
                if (response.data.status == 200)
                    setCustomers(response.data.CustomersCollections)
                else
                    alert(response.data.Message)
            })
            .catch((err) => {
                alert(err)
            })
    }, []);

    let obj1, obj2;
    return (
        <div className='Transactions_Conatiner'>
            <div className='TransactionsTitle'>
                <h2>Transactions</h2>
                <img src={TransferImg} style={{ width: '50px', marginLeft: '5px' }}></img>
            </div>
            <table className='TransactionsTable'>
                <tbody>
                    <tr>
                        <th>Payer</th>
                        <th>Payee</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </tbody>
                <tbody>
                    {Transactions ? Transactions.map((item) => {


                        obj1 = Customers.find(o => o._id == item.Sender)
                        if (obj1)
                            item.Sender = obj1.Name

                        obj2 = Customers.find(o => o._id == item.Reciever)
                        if (obj2)
                            item.Reciever = obj2.Name

                        return (
                            <tr key={item._id}>
                                <th>{item.Sender}</th>
                                <th>{item.Reciever}</th>
                                <th>{item.Amount} $</th>
                                <th>{item.Transfer_Date}</th>
                                <th>{item.Status}</th>
                            </tr>
                        )
                    }) : null}
                </tbody>
            </table>
        </div>
    )
}
export default Transactions