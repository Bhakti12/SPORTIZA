import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

    {/*When the screen of the website shrinks it shrinks too like less than 960 sign button will be false*/}
    
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            SPORTS CLUB
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {/* Home */}
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            {/* Sports */}
            <li className='nav-item'>
              <Link to='/sports' className='nav-links' onClick={closeMobileMenu}>
                Sports
              </Link>
            </li>
            {/* News */}
            <li className='nav-item'>
              <Link to='/news' className='nav-links' onClick={closeMobileMenu}>
                News
              </Link>
            </li>
            {/* Tournaments*/}
            <li className='nav-item'>
              <Link to='/tournaments' className='nav-links' onClick={closeMobileMenu}>
                Tournaments
              </Link>
            </li>
            <li>
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;