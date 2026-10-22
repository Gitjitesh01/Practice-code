import React from 'react'

const User = (props) => {
    return (
        <div className='user1'>
            <h2>First Name = {props.FirsName} </h2>
            <h2>Last Name = {props.LastName} </h2>
        </div>
    )
}

export default User