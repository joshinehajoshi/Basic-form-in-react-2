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

     const [submitted, setSubmitted] = useState(false);
     const [valid, setValid] = useState(false);

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

     const submitHandle = (event) => {
        event.preventDefault();
        if(values.firstName, values.lastName, values.email, values.phoneNumber,  values.city){
            setValid(true);
        }

        setSubmitted(true);


     }

    return (
        <div className="form-wrapper">
            <form 
            onSubmit={submitHandle}>
                <h2 className="form-heading">Register Form </h2>
                {submitted && valid ? <h3 className="success-message">Success!!</h3> : null}
            <input 
            className="field-form"
            placeholder="First Name"
            value={values.firstName}
            onChange={firstNameHandle}
            /> <br />
            {submitted && !values.firstName ? <span className="span-field">Please enter First Name</span> : null}<br />
              <input 
            className="field-form"
            placeholder="Last Name"
            value={values.lastName}
            onChange={lastNameHandle}
            /><br />
            {submitted && !values.lastName ? <span className="span-field">Please enter Last Name</span>: null }<br />
              <input 
            className="field-form"
            placeholder="Email"
            value={values.email}
            onChange={emailHandle}
            /><br />
            {submitted && !values.email ? <span className="span-field">Please enter Email</span>: null}<br />
             <input 
            className="field-form"
            placeholder="Phone Number"
            value={values.phoneNumber}
            onChange={phoneNumberHandle}
            /><br />
            {submitted && !values.phoneNumber ?<span className="span-field">Please enter Phone Number</span>: null }<br />
             <input 
            className="field-form"
            placeholder="City"
            value={values.city}
            onChange={cityHandle}
            /><br />
            {submitted && !values.city ?<span className="span-field">Please enter City</span>: null}<br />
            <button
            className="field-form submit-btn"
            >Submit</button>
            </form>
            
        </div>
    )
}

export default Form
