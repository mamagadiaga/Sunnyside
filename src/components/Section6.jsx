import React from 'react';
import img1 from '../img/domino-G1wtv0HyhgA-unsplash.jpg'
import img2 from '../img/la-albuquerque--xq5BTa2vSk-unsplash.jpg'
import img3 from '../img/mae-mu-yLvmu_oqiZQ-unsplash.jpg'
import img4 from '../img/tangerine-newt-TN09yTRftZ8-unsplash.jpg'

const Section6= () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-3 p-0">
                    <img src={img1} className='w-100 h-100' />
                </div>
                <div className="col-md-3  p-0">
                    <img src={img2} className='w-100 h-100' />
                </div>
                <div className="col-md-3  p-0">
                    <img src={img3} className='w-100 h-100' />
                </div>
                <div className="col-md-3  p-0">
                    <img src={img4} className='w-100 h-100' />
                </div>
            </div>
        </div>
    );
};

export default Section6;