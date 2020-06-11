import React from 'react';
import { useSelector } from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './App.css';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen';
import SignInScreen from './screens/SignInScreen';
import RegisterScreen from './screens/RegisterScreen';

function App() {

const userSignin = useSelector(state => state.userSignin);
const { userInfo } = userSignin;

  const openMenu = () => {
      document.querySelector(".sidebar").classList.add("open") 
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }


  return (
  <BrowserRouter>

    <div className="grid-container">

    <header className="header">

        <div className="brand">
            <button onClick={openMenu}>
                &#9776;
            </button>
            <Link to="/">amazona</Link>
        </div>

        <div className="header-links">
            <a href="cart.html">Cart</a>
            {
                userInfo ? <Link to="/profile">{userInfo.name}</Link>:
                <Link to="/signin">SignIn</Link>
            }

        </div>
    </header>

    <aside className="sidebar">
        <h3>Shopping Catigories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
            <li>
                <a href="index.html">Shoes</a>
            </li>
            <li>
                <a href="index.html">Jewelry</a>
            </li>
        </ul>
    </aside>

    <main className="main">
        <div className="content">
            <Route path="/products/:id" component={ProductScreen} />
            <Route path="/signin" component={SignInScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/" exact={true} component={HomeScreen} />

           
        </div>
    </main>

    <footer className="footer">
        All rights reserved.
    </footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
