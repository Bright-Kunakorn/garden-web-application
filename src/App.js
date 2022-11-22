import React  from 'react';
import './App.css';
import Nav from './Nav';
import AppAbout from './AppAbout';
import Contact from './Contact';
import PageHome from './PageHome';
import Product from './Product';
import Service from './Service'

import Faqs from './FAQ';
import { Route } from "react-router-dom";

function App() {
  return (

      <div className='App'> 
        <header className="header"> 
          <Nav/>
        </header>
        <Route path="/home"><PageHome/></Route>
        <Route path="/contact"><Contact/></Route>
        <Route path="/product"><Product/></Route>
        <Route path="/service"><Service/></Route>
        <Route path="/about"><AppAbout/></Route>
        <Route path="/faqs"><Faqs/></Route>
    </div>

  );
}

export default App;
