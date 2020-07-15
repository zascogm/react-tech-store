import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Products from './pages/ProductsPage';
import Contact from './pages/ContactPage';
import SingleProduct from './pages/SingleProductPage';
import Cart from './pages/CartPage';
import Default from './pages/Default';

import {Route, Switch} from 'react-router-dom';

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Sidecart from "./components/SideCart";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Sidecart />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/products" exact component={Products}/>
        <Route path="/products/:id" component={SingleProduct}/>
        <Route component={Default}/>
      </Switch>
      <Footer />  
    </>
  );
}

export default App;
