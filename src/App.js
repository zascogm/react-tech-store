import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import About from './pages/AboutPage'
import Cart from './pages/CartPage'
import Contact from './pages/ContactPage'
import Default from './pages/Default'
import Home from './pages/HomePage'
import Products from './pages/ProductsPage'
import SingleProduct from './pages/SingleProductPage'

import Sidebar from '../src/components/Sidebar'
import Sidecart from './components/SideCart'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <>
      {/* navbar, sidebar, cart, footer */}
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
