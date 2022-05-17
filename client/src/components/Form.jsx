import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';
const Form = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0.00);
    const [description, setDescription] = useState("");

    const [products, setProducts] = useState([])
    useEffect( () =>{
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => {
                console.log("Something went wrong with axios call:", err)
            })
    }, [])
    // const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        const newProduct = {
            title, price, description
        }
        axios.post("http://localhost:8000/api/products", newProduct)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log("Something went wrong: ", err)
            })
    }

  return (
    <div>
        <h1>Product Manager</h1>
        <h2>Create a New Product</h2>
        <form onSubmit={ submitHandler }>
          <div>
            <label>Title: </label> 
            <input name="title" type="text" onChange={ (e) => setTitle(e.target.value) } value={title}/>
            <label>Price: $</label> 
            <input name="price" type="number" step={0.01} onChange={ (e) => setPrice(e.target.value) } value={price}/>
            <label>Description: $</label> 
            <textarea name="description" onChange={ (e) => setDescription(e.target.value) } value={description}/>
          </div>
          <input type="submit" value="Create" />
          <h2>All Products</h2>
                        {
                            products.map((product, idx) =>{
                                return (
                                    <div>
                                        <Link to={`/${product._id}`} key={product._id}>{product.title}</Link><br></br>
                                    </div>
                                )
                            })
                        }
        </form>
    </div>
  )
}

export default Form