import React from 'react';
import { useNavigate } from 'react-router-dom';


const inputStyle = {
    width: '100%',
    height: '30px',
    marginBottom: '10px'
}

const Login = () => {
    const navigate = useNavigate();
    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })
        .then(res => res.json())
        .then(data =>{
            if(data.success){
                localStorage.setItem('accessToken', data.accessToken);
                navigate('/orders');
            }
            console.log(data);
        })
    }

    return (
        <form onSubmit={handleLogin} style={{ width: '50%', margin: '20px auto' }}>
            <input style={inputStyle} type="email" name="email" placeholder='Email' />
            <br />
            <input style={inputStyle} type="password" name="password" placeholder='Password' />
            <br />
            <input type="submit" value="Login" />
        </form>
    );
};

export default Login;