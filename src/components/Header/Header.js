import React from 'react';
import keyboard1 from './../../Images/keyboard1.jpg';

function Header() {

  return (
    <section id="Splash">
    <h2>Welcome</h2>
    <div id="splashImage">
        <img src={keyboard1} alt="splash placeholder image"/>
    </div>
    </section>
  );
}

export default Header;