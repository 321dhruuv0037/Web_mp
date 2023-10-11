import React from 'react';
import './card-style.css';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const path = `/${props.title.toLowerCase().replace(/\s/g, '-')}`;
  
  return (
    <div className='cards'>
           <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="Image1" className='card-img-top' />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          modi possimus maxime quam eum dolor a aut officiis, doloremque
          incidunt.
        </p>
        <Link to={path}>
          <button className='btn btn-outline-success'>Book Now</button>
        </Link>
      </div>
    </div>
    </div>
   
  );
};

export default Card;
