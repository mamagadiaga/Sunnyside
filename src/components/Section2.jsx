import React from 'react';
import sec2col2 from '../img/isaac-n-c-58l1uegj7YI-unsplash (1).jpg';

const Section2 = () => {
    return (
        <div className='container-fluid' id='section2'>
            <div className="row text-white">
                <div className="col-md-6 text-start p-5 sec2col1 d-flex justify-content-center align-items-center">
                   <div className='p-5'>
                   <h2 className='text-dark'>Transform your <br /> brand</h2>
                    <p className='text-secondary'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Et sint at ad suscipit unde praesentium, in impedit dolorum blanditiis rerum 
                        inventore delectus nulla eos officiis, expedita qui modi quod. Impedit.
                    </p>
                    <a href="#" className='text-decoration-none text-dark border-bottom border-warning'>Learn more</a>
                   </div>
                </div>
                <div className="col-md-6 sec2col2 p-0">
                    <img src={sec2col2} alt="" style={{width:"100%", height:"100%"}}/>
                </div>
            </div>
        </div>
    );
};

export default Section2;