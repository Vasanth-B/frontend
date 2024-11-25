import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
    const [savedArticles, setSavedArticles] = useState([]);

    useEffect(() => {
        const fetchSavedArticles = async () => {
            try {
                const response = await axios.get('https://newsapp-dohg.onrender.com/api/articles/saved', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setSavedArticles(response.data.savedArticles);
            } catch (error) {
                console.error(error);
            }
        };
        fetchSavedArticles();
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold">Saved Articles</h2>
            {savedArticles.length === 0 ? (
                <p>No saved articles</p>
            ) : (
                savedArticles.map((article) => (
                    <a href={article?.url} target='_blank'>
                        <div key={article.id} className="border p-4 mb-4">
                            <h3 className="font-bold">{article.title}</h3>
                            <p>{article.description}</p>
                        </div>
                    </a>
                ))
            )}
        </div>
    );
};

export default Profile;
