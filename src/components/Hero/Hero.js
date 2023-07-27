import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className='hero-section'>
      <h1>Buy Electricity and simplify payouts for your business</h1>
      <h3>Login to begin!</h3>
      <form className="hero-form" action="submit">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input className="hero-login-btn" type="button" value="Login" />
        </form>
        <h4>Don't have an account yet?</h4>
        <h4>Create an account</h4>
    </section>
  )
}

export default Hero