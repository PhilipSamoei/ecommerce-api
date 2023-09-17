import React from 'react'
import { useState } from 'react';

function Login({onLogin}) {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
             },
            body: JSON.stringify({name}),
        })
            .then((r)=> r.json())
            .then((user) =>onLogin(user));
    }
  return (
    <form onSubmit={handleSubmit}>
        <input
                type="text"
                value={name}
                onChange={(e) =>setName(e.target.value)}
                />
                <button type="submit">Login</button>
    </form>
  )
}

export default Login