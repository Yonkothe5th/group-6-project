
// Shop.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';


function Shop() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCart } = useCart();

    useEffect(() => {
    
        fetch('https://liquer-world-sdf.onrender.com/Stock')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
        })
            .catch(error => {
            console.error('Error fetching data:', error);
            setError('An error occurred while fetching data.');
            setLoading(false);
        });
    }, []);
