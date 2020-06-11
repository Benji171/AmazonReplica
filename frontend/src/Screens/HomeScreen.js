import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen (props) {

    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();
    console.log("HomeScreen Data" + products);

    useEffect(() => {
        dispatch(listProducts());
       
        return () => {
            
        };
    },  [])


    return loading? <div>Loading...</div> : 
    error? <div>{error}</div> : 
    <ul className="products">
    {
      products.map(product => 
        <li key={product._id}>
            <div className="product">
            <Link to={'/products/' + product._id}>
                <img className="product-image" src={product.image} alt="product"/>
                <div className="product-name">{product.name}</div>
            </Link>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">${product.price}</div>
                <div className="product-rating">{product.rating} Stars({product.numReviews})</div>
            </div>
        </li>)
    }
</ul>
}
export default HomeScreen;