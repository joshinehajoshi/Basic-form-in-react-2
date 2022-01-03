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
            <span className="span-field">Please enter First Name</span><br />
              <input 
            className="field-form"
            placeholder="Last Name"
            value={values.lastName}
            /><br />
            <span className="span-field">Please enter Last Name</span><br />
              <input 
            className="field-form"
            placeholder="Email"
            value={values.email}
            /><br />
            <span className="span-field">Please enter Email</span><br />
             <input 
            className="field-form"
            placeholder="Phone Number"
            value={values.phoneNumber}
            /><br />
            <span className="span-field">Please enter Phone Number</span><br />
             <input 
            className="field-form"
            placeholder="City"
            value={values.city}
            /><br />
            <span className="span-field">Please enter City</span><br />
            <button
            className="field-form"
            style={{width: 100}}
            >Submit</button>
            </form>
            
        </div>
    )
}

export default Form
