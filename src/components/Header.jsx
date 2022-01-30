import React from 'react';
import Logo from '../images/Logo.png'


function Header() {
  return <nav>
      <div className="center">
        <img src= {Logo}/>
      <h4>my travel journal.</h4></div>
  </nav>;
}

export default Header;
