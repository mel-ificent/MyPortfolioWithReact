import React, { useState } from 'react';
import tablet from './../../Images/tablet.jpg';
import pencils from './../../Images/pencils.jpg';
import keyboard2 from './../../Images/keyboard2.jpg';
import keyboard1 from './../../Images/keyboard1.jpg';
import paint2 from './../../Images/paint2.jpg';
import CSSGradient from './../../Images/CSSGradient.jpg';
import mevsu from './../../Images/mevsu.jpg';
import youluckydog from './../../Images/youluckydog.jpg';
import newpost from './../../Images/newpost.jpg';
import notetaker from './../../Images/notetaker.jpg';
import dailyplanner from './../../Images/dailyplanner.jpg';
import weatherapp from './../../Images/weatherapp.jpg';

function Project() {

  const [showImg, setShowImg] = useState(false);


  return (
<section id="Portfolio">


<div id="portfolioHeader">
    <h2>Portfolio</h2>
    <p>Get to know my style by checking out some of my recent work.</p>
</div>


<div id="portfolioBlock">

<section class="work" 
        onMouseEnter={() => setShowImg(true)}
        onMouseLeave={() => setShowImg(false)}>
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
        {showImg && (
            <a>
            <img id="img-highlight"  src={mevsu} alt="Highlighted Project"/>
            </a>
        )}
        {!showImg && (
            <a>
            <img id="img-highlight"  src={tablet} alt="Highlighted Project"/>
            </a>
        )}

    </section>




    
   
    <section class="work" 
        onMouseEnter={() => setShowImg(true)}
        onMouseLeave={() => setShowImg(false)}>
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
        {showImg && (
            <a>
            <img id="img-highlight"  src={youluckydog} alt="Highlighted Project"/>
            </a>
        )}
        {!showImg && (
            <a>
            <img id="img-highlight"  src={pencils} alt="Highlighted Project"/>
            </a>
        )}

    </section>
    
    <section class="work" 
        onMouseEnter={() => setShowImg(true)}
        onMouseLeave={() => setShowImg(false)}>
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
        {showImg && (
            <a>
            <img id="img-highlight"  src={newpost} alt="Highlighted Project"/>
            </a>
        )}
        {!showImg && (
            <a>
            <img id="img-highlight"  src={keyboard2} alt="Highlighted Project"/>
            </a>
        )}

    </section>
    <section class="work" 
        onMouseEnter={() => setShowImg(true)}
        onMouseLeave={() => setShowImg(false)}>
    <div class="title">
            <h2>Note Taker</h2>
        </div>
        <div class="deployedLink">
            <a href="https://warm-bayou-15489.herokuapp.com/" target="_blank">
                <h3>Link to Deployed Application</h3>
            </a>
        </div>
        <div class="repo">
            <a href="https://github.com/mel-ificent/NoteTaker#deployed-application" target="_blank">
                <h3>Link to GitHub Repository</h3>
            </a>
        </div>

        {showImg && (
            <a>
            <img id="img-highlight"  src={notetaker} alt="Highlighted Project"/>
            </a>
        )}
        {!showImg && (
            <a>
            <img id="img-highlight"  src={paint2} alt="Highlighted Project"/>
            </a>
        )}

    </section>
    <section class="work" 
        onMouseEnter={() => setShowImg(true)}
        onMouseLeave={() => setShowImg(false)}>
    <div class="title">
            <h2>Daily Planner</h2>
        </div>
        <div class="deployedLink">
            <a href="https://mel-ificent.github.io/DailyPlanner/" target="_blank">
                <h3>Link to Deployed Application</h3>
            </a>
        </div>
        <div class="repo">
            <a href="https://github.com/mel-ificent/DailyPlanner" target="_blank">
                <h3>Link to GitHub Repository</h3>
            </a>
        </div>
        {showImg && (
            <a>
            <img id="img-highlight"  src={dailyplanner} alt="Highlighted Project"/>
            </a>
        )}
        {!showImg && (
            <a>
            <img id="img-highlight"  src={CSSGradient} alt="Highlighted Project"/>
            </a>
        )}
    
    </section>
    <section class="work" 
        onMouseEnter={() => setShowImg(true)}
        onMouseLeave={() => setShowImg(false)}>
    <div class="title">
            <h2>Weather App</h2>
        </div>
        <div class="deployedLink">
            <a href="https://mel-ificent.github.io/WeatherApp/" target="_blank">
                <h3>Link to Deployed Application</h3>
            </a>
        </div>
        <div class="repo">
            <a href="https://github.com/mel-ificent/WeatherApp" target="_blank">
                <h3>Link to GitHub Repository</h3>
            </a>
        </div>
        {showImg && (
            <a>
            <img id="img-highlight"  src={weatherapp} alt="Highlighted Project"/>
            </a>
        )}
        {!showImg && (
            <a>
            <img id="img-highlight"  src={keyboard1} alt="Highlighted Project"/>
            </a>
        )}

    </section>
       


</div>

</section>
  );
}

export default Project;