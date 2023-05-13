import React from 'react'
import ReactPlayer from 'react-player';
import video from '../img/video.mp4';
import '../Css/Video.css'
function Video () {
    return (
        <section className="videoSection">
            <div className='texto-portfolio'>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ut animi dolore eum beatae dolor quibusdam porro quia repudiandae qui!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae animi incidunt autem similique!</p>
            </div>
            <div className='player-wrapper'>
            <ReactPlayer
            controls
            className='react-player'
            url={video}
            width='100%'
            height='100%'
            />
            </div>
        </section>
    )
}

export default Video;