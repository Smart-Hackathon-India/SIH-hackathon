import React from 'react';
import './Nav.css';
import notify from './images/notifiy.png'; 

function Nav() {
  return (
    <div className="top-navbar">
      <div className="logo">Your Logo</div>
      <div className='name'>MEDICO</div>
      <ul className="nav-links">
        <li><a href="/"><img src={notify } width='20px' height='20px' /></a></li>
        <li><a href="/">Login</a></li>
        
      </ul>
    </div>
  );
}

export default Nav;
