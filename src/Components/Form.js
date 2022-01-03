import React, { useState } from 'react';
import '../App.css';

function Form() {
     const [values, setValues] = useState({
         firstName: "",
         lastName: "",
         email: "",
         phoneNumber: "",
         city: ""
     })

    return (
        <div className="form-wrapper">
            <form>
            <input 
            className="field-form"
            placeholder="First Name"
            value={values.firstName}
            /> <br />
              <input 
            className="field-form"
            placeholder="Last Name"
            value={values.lastName}
            /><br />
              <input 
            className="field-form"
            placeholder="Email"
            value={values.email}
            /><br />
             <input 
            className="field-form"
            placeholder="Phone Number"
            value={values.phoneNumber}
            /><br />
             <input 
            className="field-form"
            placeholder="City"
            value={values.city}
            /><br />
            <button
            className="field-form"
            >Submit</button>
            </form>
            
        </div>
    )
}

export default Form
