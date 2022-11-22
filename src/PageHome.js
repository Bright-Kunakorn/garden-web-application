import React from 'react';
import './App.css';
import Home from './item/img/Home1.jpg'


function PageHome() {
  return (
    <div className="home__container container grid">
      <div className='home__data'>
        <h1 className="home__title">
          Plants will make your life better
        </h1>
        <p className="home__description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus in nemo consectetur quibusdam tempore enim nisi voluptate tempora neque harum. 
        </p>
        <a href="/about" className="button button--flex">
          Explore
        </a>
      </div>
      <img src ={Home} width = "1000" ></img>
    </div>
  );
}

export default PageHome;
