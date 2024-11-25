import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(()=>{
        if (localStorage.getItem('token')) {
            window.location.href='/';
        }
    })

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://newsapp-dohg.onrender.com/api/auth/login', { email, password });
            const token = response.data.token;

            localStorage.setItem('token', token); // Store token
            // setIsAuthenticated(true); // Set user as authenticated
            window.location.href = '/';
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="w-full h-screen realtive">
            <div className='flex justify-center items-center relative top-32 '>
                <div>
                    <h2 className="text-3xl font-bold mb-4">Login</h2>
                    <form onSubmit={handleLogin}>
                        {error && <p className="text-red-500">{error}</p>}
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="border p-2 rounded mb-2"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="border p-2 rounded mb-2"
                            />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
