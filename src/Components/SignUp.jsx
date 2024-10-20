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
    <div className="container1">
      <div className="container cont1 bg-success w-100 border border-2 border-solid border-dark">
        <center>
        <h2 className='text-light'>Sign Up</h2>
        <input className='d-block mt-3'
          type="text" 
          id="1n" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter Name" 
        />
        <input className='d-block mt-3'
          type="text" 
          id="2n" 
          value={fname} 
          onChange={(e) => setFname(e.target.value)} 
          placeholder="Enter Father Name" 
        />
        <input className='d-block mt-3'
          type="email" 
          id="Ema" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Enter Email" 
        />
        <input className='d-block mt-3'
          type="password" 
          id="Pw" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Enter Password" 
        />
        <button onClick={handleSignUp} className='btn-outline-success mt-3 mb-3'>Sign Up</button>
        </center>
      </div>

      <div className="container mt-5 cont2 bg-success w-100 border border-2 border-solid border-dark">
      <center>
      <h2 className='text-light'>Sign In</h2>
        <input className='d-block mt-3'
          type="email" 
          id="Em" 
          value={loginEmail} 
          onChange={(e) => setLoginEmail(e.target.value)} 
          placeholder="Enter Email" 
        />
        <input className='d-block mt-3'
          type="password" 
          id="Pwd" 
          value={loginPassword} 
          onChange={(e) => setLoginPassword(e.target.value)} 
          placeholder="Enter Password" 
        />
        <button onClick={handleSignIn} className='btn-outline-success mt-3 mb-3'>Sign In</button>
      </center>
      </div>
    </div>
  );
}
