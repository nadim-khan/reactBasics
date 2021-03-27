import React ,{ useState}from 'react'

const  UseStateObject = ()=> {
    const initialDetail = {
        firstName:'',
        lastName:'',
        phoneNumber:'000000'
    }
    const [details,setDetails] = useState(initialDetail);
    const handleChange = (e)=>{
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitForm = (e)=>{
        e.preventDefault();
        alert('Submitted : ',details.firstName)
        // setDetails({
        //     initialDetail
        // })
    }
    return (
        <div>
                <h3>Example 2 -  useState, State as object</h3>
            <form onSubmit={onSubmitForm}>
                <div>
                    <label>First Name</label>
                    <input name="firstName" type="text" value={details.firstName} onChange={handleChange}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input name="lastName" type="text" value={details.lastName} onChange={handleChange}/>
                </div>
                <div>
                    <label>Phone Number</label>
                    <input name="phoneNumber" type="text" value={details.phoneNumber} onChange={handleChange}/>
                </div>
                <button type="submit">Submit </button>
            </form>
        </div>
    )
}

export default UseStateObject
