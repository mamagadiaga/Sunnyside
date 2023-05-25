import React from 'react';
import sec3col1 from '../img/robert-hrovat-jzHb2uzrHiM-unsplash.jpg';

const Section3 = () => {
    return (
        <div className='container-fluid'>
            <div className="row text-white">
                <div className="col-md-6 sec3col1 p-0">
                    <img src={sec3col1} alt="" style={{width:"100%", height:"100%"}}/>
                </div>
                <div className="col-md-6 text-start p-5 sec3col2 d-flex justify-content-center align-items-center">
                   <div className='p-5'>
                   <h2 className='text-dark'>Stand out to the right <br /> audience</h2>
                    <p className='text-secondary'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Et sint at ad suscipit unde praesentium, in impedit dolorum blanditiis rerum 
                        inventore delectus nulla eos officiis, expedita qui modi quod. Impedit.
                    </p>
                    <a href="#" className='text-decoration-none text-dark border-bottom border-primary'>Learn more</a>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Section3;