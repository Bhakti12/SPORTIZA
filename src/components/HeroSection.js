import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection(){
    return(
        <div className='hero-container'>
        <img src='/images/img-3.jpg' width='1500px' height='900px'/>
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
            <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            >
            GET STARTED
            </Button>
        </div>
        </div>
  );
}

export default HeroSection;