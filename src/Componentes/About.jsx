import React from 'react';
import '../Css/About.css';
import Picture from '../img/Picture.png';

function About () {
    return (
        <div className="about-section">
        <h1>About <span>Me!</span></h1>
        <p className='texto'>Hi, I'm Martin, a web developer based in Aguascalientes, México.</p>
        <p className='texto'>I have experience with a variety of programming languages and web technologies, including HTML, CSS, JavaScript, React, and Node.js.</p>
        <p className='texto'>My passion for web development started when I was in college, and since then, I have been working on various projects to improve my skills and gain experience.</p>
        <p className='texto'>When I'm not coding, I enjoy outside activities.</p>
        <h3>Skills</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Git</li>
        </ul>
      </div>
    );
}

export default About;