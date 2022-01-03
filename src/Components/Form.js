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

     const firstNameHandle = (event) => {
         setValues({...values, firstName: event.target.value})
     }

     const lastNameHandle = (event) => {
         setValues({...values, lastName:event.target.value})
     }

     const emailHandle = (event) => {
         setValues({...values, email: event.target.value})
     }

     const phoneNumberHandle = (event) => {
         setValues({...values, phoneNumber: event.target.value})
     }

     const cityHandle = (event) => {
         setValues({...values, city: event.target.value})
     }

    return (
        <div className="form-wrapper">
            <form>
                <h2 className="form-heading">Register Form </h2>
            <input 
            className="field-form"
            placeholder="First Name"
            value={values.firstName}
            onChange={firstNameHandle}
            /> <br />
            <span className="span-field">Please enter First Name</span><br />
              <input 
            className="field-form"
            placeholder="Last Name"
            value={values.lastName}
            onChange={lastNameHandle}
            /><br />
            <span className="span-field">Please enter Last Name</span><br />
              <input 
            className="field-form"
            placeholder="Email"
            value={values.email}
            onChange={emailHandle}
            /><br />
            <span className="span-field">Please enter Email</span><br />
             <input 
            className="field-form"
            placeholder="Phone Number"
            value={values.phoneNumber}
            onChange={phoneNumberHandle}
            /><br />
            <span className="span-field">Please enter Phone Number</span><br />
             <input 
            className="field-form"
            placeholder="City"
            value={values.city}
            onChange={cityHandle}
            /><br />
            <span className="span-field">Please enter City</span><br />
            <button
            className="field-form submit-btn"
            >Submit</button>
            </form>
            
        </div>
    )
}

export default Form
