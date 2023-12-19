import { useState, useEffect } from 'react';

const Productgenerate = () => {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        // Fetch product data from the Flask API
        fetch('/product/products')  // Replace with your Flask API URL
        .then(res => res.json())
        .then(data => {
            setProductData(data)
        })
        .catch(err => console.log(err))
    }, []);

    return productData;
  
}

export default Productgenerate
