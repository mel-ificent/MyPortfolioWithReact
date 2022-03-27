import React from 'react';

import github from './../../Images/github.jpg';
import linkedin from './../../Images/linkedin.jpg';
import stack from './../../Images/stack.jpg';

function Footer() {

  return (
    <footer>
        <h4>&copy; 2022 Melissa Donato</h4>
        <div id="social">
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/melissaldonato/" target="_blank" rel="noreferrer" >
                <img src={linkedin} alt="GitHub"/>
                </a>
            </li>
            <li>
                <a href="https://github.com/mel-ificent" target="_blank" rel="noreferrer" >
                    <img src={github} alt="GitHub"/>
                </a>
            </li>
            <li>
                <a href="https://stackoverflow.com/users/16960407/melissa" target="_blank" rel="noreferrer" >
                    <img src={stack} alt="Stack Overflow"/>
                </a>
            </li>
        </ul>
      </div>

    </footer>
  );
}

export default Footer;