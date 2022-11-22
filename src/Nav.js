import React  from 'react';
import './App.css';
import logo from './item/img/favicon.png'

function Nav() {
  return (
    <nav class="nav container">
        <a class="nav__logo">
            <img src ={logo} width = "50" ></img><h3 classname =" nav__logo-icon">plantex</h3>
        </a>
            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list">
                    <li class="nav__item">
                        <a href="/home" class="nav__link">Home</a>
                    </li>
                    <li class="nav__item">
                        <a href="/about" class="nav__link">About us</a>
                    </li>

                    <li class="nav__item">
                        <a href="/product" class="nav__link">Product</a>
                    </li>
                    <li class="nav__item">
                        <a href="/service" class="nav__link">Service</a>
                    </li>
                    <li class="nav__item">
                        <a href="/faqs" class="nav__link">FAQs</a>
                    </li>
                    <li class="nav__item">
                        <a href="/contact" class="nav__link">Contact us</a>
                    </li>
                </ul>
            </div>
        </nav>
  );
}

export default Nav;
