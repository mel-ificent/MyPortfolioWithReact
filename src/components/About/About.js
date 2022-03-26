import React from 'react';
import profile from './../../Images/profile1.jpg';


function About() {
    return (
        <section id="About">
            <div id="aboutImage">
                <img src={profile} alt="splash placeholder image"/>
            </div>
            <div id="aboutContent">
                <h2>About Me</h2>
                <p>Hi, I'm Melissa 👋</p>
                <p>For the better part of the last 10 years, I have worked with businesses to build better enterprise processes.  Breaking down complex problems, simplifying every day tasks, and bringing user experience to a whole new level for my customers has been some of the most gratifying experiences throughout my career.  However, I found that I had a creative itch I just could not scratch. </p>
               <p>So, I've taken a dive into web development, an area that I have always had a passion for, but never had an opportunity to deeply explore.  Tying together my technical background and my artistic spirit, I've begun my journey as a full-stack web developer.</p>
                <p>I hope you enjoy some of my work that I've shared here.  Thanks for visiting!</p>
                <p>-Melissa</p>
            </div>
        </section>
    );
}
export default About;