import React from 'react'
import { useState } from 'react'
import axios from 'axios'

//Phone input component 
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function NewCustomer() {
    const [Customer, setCustomer] = useState({ Name: "", Gender: "", Mobile: "", Email: "", Current_Balance: "" })
    const [value, setValue] = useState("")



    const AddCustomer = (event) => {
        event.preventDefault();

        if (Customer.Name == "" || value == "" || value == undefined || Customer.Email == "" || Customer.Current_Balance == "") {
            alert("Fill All Fields")
            console.log(Customer)

        }
        else if (document.querySelector('input[name="rate"]:checked')) {
            Customer.Mobile = value
            Customer.Gender = document.querySelector('input[name="rate"]:checked').value;

            axios.post("/AddCustomer", { Customer })
                .then((response) => {
                    if (response.data.status != 200) {
                        alert(response.data.Message)
                    }
                    else {
                        alert(response.data.Message)
                        window.location.reload(false);

                    }
                })
                .catch((err)=>{
                    alert(err)
                })
        }
        else {
            alert("Fill All Fields")
        }
    }
    return (
        <div className="NewCustomer">
            <form className="AddCustomer" onSubmit={AddCustomer}>
                <h1>Welcome back</h1>
                <p className='Note'>Please Enter Customer's details</p>

                <p className='Label'>Name</p>
                <input type="text" pattern="[A-Za-z ]+" title="Use Lower and Upper Letters and Spaces" placeholder="First Middle Last" onChange={(e) => Customer.Name = e.target.value.trim()} />

                <p className='Label'>Gender</p>
                <div className="Gender">
                    <input type="radio" id="r1" name="rate" value="M." /><p className="Label">Male</p>
                    <input type="radio" id="r2" name="rate" value="F." /><p className="Label">Female</p>
                </div>

                <p className='Label'>E-mail</p>
                <input type="email" placeholder="name@mail.com" onChange={(e) => Customer.Email = e.target.value.trim()} />

                <p className='Label'>Phone</p>
                <PhoneInput placeholder="Enter phone number"
                    value={value}
                    onChange={setValue} />

                <p className='Label'>Balance $</p>
                <input type="number" min="0" step="0.001" placeholder="25800.85" onChange={(e) => Customer.Current_Balance = e.target.value.trim()} />

                <button type='submit'>Add</button>
            </form>

            <div className="Background"></div>
        </div>
    )
}

export default NewCustomer