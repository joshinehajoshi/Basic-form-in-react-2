import React, { useState } from 'react'

function Form() {
     const [values, setValues] = useState({
         firstName: "",
         lastName: "",
         email: "",

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
            </form>
            
        </div>
    )
}

export default Form
