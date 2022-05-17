import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

const Display = (props) => {

    const {id} = useParams();
    const [productData, setProductData] = useState({});
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response => {
                console.log(response.data);
                setProductData(response.data.product);
                console.log(productData.data);
            }).catch(err=>{
                console.log(err);
            })
    },[])

  return (
        <div>
            <h2>{productData.title}</h2>
            <h6>${productData.price}</h6>
            <h6>{productData.description}</h6>
        </div>
    
  )
}

export default Display