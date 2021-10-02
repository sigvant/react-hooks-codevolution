import React from 'react'
import useInput from '../hooks/useInput'

function UserForm() {
    // ok this is just genius actually
    const [firstName, bindFirstName, resetFirstName] = useInput(``)
    const [lastName, bindLastName, resetLastName] = useInput(``)

    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

    return (
        <div>
            <form action="" onSubmit={submitHandler}>
                <div>
                    <label htmlFor="">First Name</label>
                    <input
                        {...bindFirstName}
                        type="text"
                    />
                </div>
                <div>
                    <label htmlFor="">Last Name</label>
                    <input
                        {...bindLastName}
                        type="text"
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default UserForm
