import React from 'react';

function StudentCards({ imgsrc, title, children }) {
    return (
        <div className='cards'>
            <div className="card text-center shadow">
                <div className="overflow">
                    <img src={imgsrc} alt={title} className='card-img-top' />
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text text-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
                        modi possimus maxime quam eum dolor a aut officiis, doloremque
                        incidunt.
                    </p>
                    {children} {/* Render the child component (Link) */}
                </div>
            </div>
        </div>
    );
};

export default StudentCards;
