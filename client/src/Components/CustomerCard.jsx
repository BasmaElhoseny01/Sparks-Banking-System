import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function CustomerCard({ Customer, index }) {

    const [Customers, setCustomers] = useState([])
    const [Appear, setAppear] = useState(false)
    const [Payee, setPayee] = useState("")
    const [Balance, setBalance] = useState("")

    useEffect(() => {
        axios.get("/AllCustomers").then((response) => {
            if (response.data.status == 200)
                setCustomers(response.data.CustomersCollections)
            else
                alert(response.data.Message)
        })
            .catch((err) => {
                alert(err)
            })
    }, [])


    const Show = () => {
        setAppear(!Appear)
    }

    const Transfer = (event) => {

        if (Payee == "select" || Payee == "" || Balance == "") {
            event.preventDefault();
            alert("Fill All Fields")
        }
        else {
            event.preventDefault();
            axios.put('/Transfer', { Payer: Customer._id, Payee, Amount: Balance })
                .then((response) => {
                    try {
                        console.log(response.data.Message)
                        if (response.data.status != 200) {
                            alert(response.data.Message);
                            return;
                        }
                        else {
                            alert(response.data.Message)
                            window.location.reload(false);
                        }
                    }
                    catch (error) {
                        alert(error)
                    }
                })
        }
    }

    return (
        <div className='CustomerCard'>
            <div className="Title" onClick={() => { Show() }}>
                {Customer.Gender == 'M.' ? <p>👦{Customer.Name}</p> : <p>👧{Customer.Name}</p>}
                <p>{Customer.Current_Balance} $</p>


            </div>

            {Appear ?
                <div className="Body">
                    <hr className='HorizontalLine' />

                    <div className="Info">
                        <p>☎️ {Customer.Mobile}</p>
                        <p>📧 {Customer.Email}</p>
                    </div>

                    <hr className='HorizontalLine' />


                    <form onSubmit={Transfer} className="Transcation">
                        <p className='FormTitle'>Make a Transcation 💸</p>
                        <div className="Inputs">
                            <label>Payee</label>
                            <select defaultValue="select" onChange={(e) => { setPayee(e.target.value) }}>
                                <option value="select" disabled={true}>Select Payee</option>

                                {Customers ? Customers.map((item) => {
                                    return <option value={item._id} key={item._id} disabled={item._id == Customer._id}>{item.Name}</option>
                                }) : null}
                            </select>

                            <label>Amount $</label>
                            <input type="number" min="0" step="0.001" placeholder="25800.85" onChange={(e) => setBalance(e.target.value.trim())} />
                        </div>

                        <button type='submit'>Transfer</button>
                    </form>

                </div>
                :
                null
            }


        </div>
    )
}

export default CustomerCard