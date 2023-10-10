import React from 'react';
import './about.css';
import  image from '../Dashboard/venue.png';

function About() {
  return (
    <section className="About">
      <div className="main">
        <img src={image} alt="" />
        <div className="About-text">
          <h2 id="section2">About App</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tenetur consequuntur quidem perspiciatis perferendis provident laboriosam enim ullam ex velit, quo distinctio quibusdam, quisquam molestias autem praesentium? Repellendus, temporibus velit.
          </p>
          
        </div>
      </div>
     
    </section>
  );
}

export default About;
