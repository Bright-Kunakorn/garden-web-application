import React, { useState }  from 'react';
import axios from 'axios';
import './App.css';
import Card1 from './item/img/card1.jpg'
import Card2 from './item/img/card2.jpg'
import Card3 from './item/img/card3.jpg'
import Card4 from './item/img/card4.jpg'



function Contact() {
  const [input,setInput] = useState({
    mail : '',
    subject : '',
    message : ''
  })

  function handleChange(event){
    const {name,value} = event.target;
    setInput(prevInput => {
      return {
        ...prevInput,
        [name] :value
      }
    })
  }
  function handleClick(event){
    event.preventDefault();
    console.log(input);
    const newNote = {
      mail : input.mail,
      subject : input.subject,
      message : input.message
    }
    axios.post("http://localhost:3001/contact",newNote)
    .then(res=>{
      console.log(res.newNote)
      console.log("done!!")
    })
  }

  return (
    <div class="home__container grid">
      <div class='contact box'>
      <h2 class="section__title">
        Reach out to us today <br/> via and of the following ways information
      </h2>
      <div class='contact__data'>   
        <div class='contact__information'>
          <h3 class="contact__subtitle">Call us for instant support</h3>
          <span class="contact__desciption">
             +66-9-988-988-988
          </span>
        </div>
        <div class="contact__information">
          <h3 class="contact__subtitle">Write us by E-mail</h3>
          <span class="contact__desciption">
            user@gmail.com
          </span>
        </div>
        <form  class='contact__form'>
          <div class='contact__inputs'>
            <div class="contact__content">
              <input onChange={handleChange} name = "mail" value = {input.mail} autoComplete='off' placeholder="" class="contact__input"/>
              <label for="" class="contact__label">E-mail</label>
            </div>
            <div class="contact__content">
                <input  onChange={handleChange} name = "subject"  value = {input.subject} autoComplete='off' placeholder="" class="contact__input"/>
                <label for="" class="contact__label">Subject</label>
            </div>
            <div class="contact__content">
              <textarea  onChange={handleChange} name = "message"  value = {input.message} autoComplete='off' placeholder="" class="contact__input"></textarea>
              <label for="" class="contact__label">Message</label>
            </div>
          </div>
          <button onClick={handleClick} class="button button--flex">
            Send Message
          </button>  
        </form>
      </div>
      <footer class="footer section">
        <div class="footer__container container grid">
            <div class="footer__content">
                <h3 class="footer__title">Our Address</h3>

                <ul class="footer__data">
                    <li class="footer__information">Chaing Mai 50100</li>
                    <li class="footer__information">Thailand</li>
                    <li class="footer__information">053-xxx-xxx</li>
                </ul>
            </div>

            <div class="footer__content">
                <h3 class="footer__title">We accept all credit cards</h3>

                <div class="footer__cards">
                    <img src={Card1} alt="" class="footer__card"/>
                    <img src={Card2} alt="" class="footer__card"/>
                    <img src={Card3} alt="" class="footer__card"/>
                    <img src={Card4} alt="" class="footer__card"/>
                </div>
            </div>
        </div>
    </footer>
  </div>
</div>
  );
}
export default Contact;
