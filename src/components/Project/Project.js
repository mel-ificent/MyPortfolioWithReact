import React from 'react';
import tablet from './../../Images/tablet.jpg';
import pencils from './../../Images/pencils.jpg';
import keyboard2 from './../../Images/keyboard2.jpg';
import paint2 from './../../Images/paint2.jpg';
import CSSGradient from './../../Images/CSSGradient.jpg';

function Project() {

  return (
<section id="Portfolio">


<div id="portfolioHeader">
    <h2>Portfolio</h2>
    <p>Get to know my style by checking out some of my recent work.</p>
</div>


<div id="portfolioBlock">


   
    <section class="work" onmouseover="projTwoImg()" onmouseout="projTwoImgReset()" >
        <div class="title">
            <h2>You Lucky Dog</h2>
        </div>
        <div class="deployedLink">
            <a href="https://jddlwlr.github.io/You-Lucky-Dog/" target="_blank">
                <h3>Link to Deployed Application</h3>
            </a>
        </div>
        <div class="repo">
            <a href="https://github.com/jddlwlr/You-Lucky-Dog" target="_blank">
                <h3>Link to GitHub Repository</h3>
            </a>
        </div>
        <a>
            <img id="img-proj-two" src={pencils} alt="Project Two"/>
        </a>

    </section>
    
    <section class="work" onmouseover="projOneImg()" onmouseout="projOneImgReset()" >
        <div class="title">
            <h2>Tech Blog</h2>
        </div>
        <div class="deployedLink">
            <a href="https://warm-plateau-22528.herokuapp.com/" target="_blank">
                <h3>Link to Deployed Application</h3>
            </a>
        </div>
        <div class="repo">
            <a href="https://github.com/mel-ificent/TechBlog" target="_blank">
                <h3>Link to GitHub Repository</h3>
            </a>
        </div>
        <a>
            <img id="img-proj-one" src={keyboard2} alt="Project One"/>
        </a>

    </section>
    <section class="work">
    <div class="title">
            <h2>Future Work</h2>
        </div>
        <div class="deployedLink">
            <a href="https://github.com/mel-ificent" target="_blank">
                <h3>Link to Deployed Application</h3>
            </a>
        </div>
        <div class="repo">
            <a href="https://github.com/mel-ificent" target="_blank">
                <h3>Link to GitHub Repository</h3>
            </a>
        </div>

        <a>
            <img src={paint2} alt="placeholder image1"/>
        </a>

    </section>
    <section class="work">
    <div class="title">
            <h2>Future Work</h2>
        </div>
        <div class="deployedLink">
            <a href="https://github.com/mel-ificent" target="_blank">
                <h3>Link to Deployed Application</h3>
            </a>
        </div>
        <div class="repo">
            <a href="https://github.com/mel-ificent" target="_blank">
                <h3>Link to GitHub Repository</h3>
            </a>
        </div>
        <a>
            <img src={CSSGradient} alt="placeholder image1"/>
        </a>
    
    </section>
        <section class="work" onmouseover="highlightImg()" onmouseout="highlightImgReset()">
       <div class="title">
            <h2>Me vs. U</h2>
        </div>
        <div class="deployedLink">
            <a href="https://fast-beach-60601.herokuapp.com/" target="_blank">
                <h3>Link to Deployed Application</h3>
            </a>
        </div>
        <div class="repo">
            <a href="https://github.com/jgarner828/ME-vs-U" target="_blank">
                <h3>Link to GitHub Repository</h3>
            </a>
        </div>
            <a>
                <img id="img-highlight"  src={tablet} alt="Highlighted Project"/>
           </a>

    </section>


</div>

</section>
  );
}

export default Project;