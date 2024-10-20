import React, { useState, useEffect } from 'react';
import './SignUp.css';

export default function SignUp() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [fname, setFname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  useEffect(() => {
    console.log(users);
  }, [users]);

  function handleSignUp() {
    const newUser = {
      name: name,
      fname: fname,
      email: email,
      password: password
    };

    setUsers([...users, newUser]);

    setName('');
    setFname('');
    setEmail('');
    setPassword('');
  }

  function handleSignIn() {
    let login = false;
    for (let i = 0; i < users.length; i++) {
      if (loginEmail === users[i].email && loginPassword === users[i].password) {
        login = true;
        break;
      }
    }

    if (login) {
      console.log('Login successful');
    } else {
      console.log('Invalid Email or Password');
    }
  }

  return (
    <div className="container">
      <div className="container">
        <h2>Sign Up</h2>
        <input 
          type="text" 
          id="1n" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter Name" 
        />
        <input 
          type="text" 
          id="2n" 
          value={fname} 
          onChange={(e) => setFname(e.target.value)} 
          placeholder="Enter Father Name" 
        />
        <input 
          type="email" 
          id="Ema" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Enter Email" 
        />
        <input 
          type="password" 
          id="Pw" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Enter Password" 
        />
        <button onClick={handleSignUp}>Sign Up</button>
      </div>

      <div className="container">
        <h2>Sign In</h2>
        <input 
          type="email" 
          id="Em" 
          value={loginEmail} 
          onChange={(e) => setLoginEmail(e.target.value)} 
          placeholder="Enter Email" 
        />
        <input 
          type="password" 
          id="Pwd" 
          value={loginPassword} 
          onChange={(e) => setLoginPassword(e.target.value)} 
          placeholder="Enter Password" 
        />
        <button onClick={handleSignIn}>Sign In</button>
      </div>
    </div>
  );
}
