import React from 'react';
import linkedIn from './../../Images/linkedInlogo.png';
import github from './../../Images/githublogo.png';

function Contact() {

  return (
    <section id="Contact">
    <h2>Let's Connect!</h2>
    <p><span>&#9742;</span> 678-744-6020</p>
    <p><span>&#9993;</span> melissadonato11@gmail.com</p>

    <div id="social">
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/melissaldonato/" target="_blank" rel="noreferrer" >
                    <img src={linkedIn} alt="LinkedIn"/>
                </a>
            </li>
            <li>
                <a href="https://github.com/mel-ificent" target="_blank" rel="noreferrer" >
                    <img src={github} alt="GitHub"/>
                </a>
            </li>
        </ul>
      </div>
</section>
  );
}

export default Contact;