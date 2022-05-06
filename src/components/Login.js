import React from 'react';


const inputStyle = {
    width: '100%',
    height: '30px',
    marginBottom: '10px'
}

const Login = () => {

    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password);
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