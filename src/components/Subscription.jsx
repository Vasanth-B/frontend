import React, { useState } from 'react';
import axios from 'axios';

const Subscription = () => {
    const [email, setEmail] = useState('');
    const [category, setCategory] = useState('business');

    const handleSubscribe = async (e) => {
        e.preventDefault();
        await axios.post('https://newsapp-dohg.onrender.com/api/subscription/subscribe', { email, category });
        alert('Subscribed successfully!');
    };

    return (
        <form onSubmit={handleSubscribe} className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Subscribe for Notifications</h2>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="border p-2 rounded mr-2"
            />
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border p-2 rounded mr-2"
            >
                <option value="business">Business</option>
                <option value="entertainment">Entertainment</option>
                <option value="health">Health</option>
                <option value="science">Science</option>
                <option value="sports">Sports</option>
            </select>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Subscribe</button>
        </form>
    );
};

export default Subscription;
