import React, { useState, handleClick, useEffect } from 'react'
import axios from 'axios'
import User from './User'

const Demo = () => {
    const [name, setName] = useState('Khushi')
    const [count, setCount] = useState(0)
    const [names, setNames] = useState('')
    const [firstNames, setFirstNames] = useState('')

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const [users, setUsers] = useState([]);
    const [use, setUse] = useState([]);
    const [member, setMember] = useState()


    const handleClick = () => {
        console.log('hello this is console')
    }

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }

    // const handleSubmit = (event) => {
    //     console.log(firstNames)
    //     // event.preventDafault();
    //     alert(`Your Name is, ${firstNames}!`)
    // }

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                console.log(res)

            })
    }, [])

    // Get methods
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setUsers(data)
                console.log(users)
                console.log("users", users);
                console.log(Array.isArray(users));
            })
            .catch((error) => {
                console.log("Error:", error)
            })
    }, [])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                console.log(res)
                setUse(res.data)
            })
    }, [])

    const getUser = async () => {
        try {
            const reponse = await axios.get(
                "https://jsonplaceholder.typicode.com/users/1"
            );
            setMember(reponse.data)
            console.log(reponse.data)
        } catch (error) {
            console.log(error)
        }
    };


    // post Method
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "https://jsonplaceholder.typicode.com/posts",
                {
                    title: title,
                    body: body,
                }

            );
            console.log(response.data)
            alert("Data Post done")
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <>
            {/* <div className='Ai'><h1 className='Ai'>This Is Demo Page</h1></div>
            <div><p style={{ color: "red" }}>This is the demo subtitle</p></div>
            <h1 style={{ backgroundColor: 'white', color: 'black', padding: '15px' }}>Style css</h1> */}

            {/* <div>
                <h1>Examples of State </h1>
                <h3>{name}</h3>
                <p>Count : {count}</p>
                <button onClick={() => setCount(count + 10)}>Increase</button>
                <button onClick={increment}>Increase</button>
                <button onClick={decrement}>Decrease</button>
            </div> */}
            {/* <div>
                <h1>Event Examples</h1>
                handleClick, onClick, Handle Submit ,Onchange
                <button onClick={handleClick}>Click Me</button>
            </div> */}
            {/* <div>
                <h1> Forms and Input with Onchange or handle Submit</h1>
                <div>
                    <input type='text' value={names}
                        onChange={(e) => setNames(e.target.value)}
                        placeholder='Please enter your name'
                    />
                    <h2>Your Name is : {names}</h2>
                </div>

                <div>
                    <h3>Student Form</h3>
                    <form onSubmit={handleSubmit}
                        onReset={() => setFirstNames('')}
                    >
                        <label>First Name = </label>
                        <input type='text' placeholder='First Name' value={firstNames} onChange={(event) => setFirstNames(event.target.value)} />
                        <button type="submit">Submit</button>
                        <button type='reset'>Reset</button>
                    </form>
                </div>

            </div> */}

            {/* <div>
                <h2>Example of props</h2>
                <User FirsName="Jitesh" LastName="Ranjan" />

            </div> */}

            {/* Task
            Form Create Student profile.
            First Name
            Last Name
            Age
            Address */}

            {/* Api Integration */}

            {/* Crud Opertion */}
            {/* GET, POST ,PUT , DELETE */}
            {/* fetch
            .catch */}
            {/* Axios
            npm i axios */}

            {/* hooks (1) useState (2) useEffect */}
            <h2>Api Integration</h2>
            <h3>User List</h3>
            {/* {users.map((users) => (
                <div key={users.id}>
                    <h3>{users.name}</h3>
                    <h3>{users.email}</h3>
                </div>
            ))
            } */}

            {use.map((use) => (
                <div key={use.id}>
                    <h3>{use.name}</h3>
                    <h3>{use.email}</h3>
                </div>
            ))
            }

            <button onClick={getUser}>Get User</button>
            <div>
                {member && (
                    <div>
                        <h2>{member.name}</h2>
                        <h2>{member.email}</h2>
                    </div>
                )}
            </div>


            {/* && => Logical opearator */}

            <div>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                    <br />
                    <textarea type='text' placeholder='Body' value={body} onChange={(e) => setBody(e.target.value)} />
                    <button type='submit'> Submit Data</button>

                </form>
            </div>












        </>
    )
}

export default Demo