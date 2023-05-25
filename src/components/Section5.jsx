import React from 'react';
import profil1 from '../img/cindy-fernandez-qdc2IBIHMdg-unsplash.jpg'

const Section5= () => {
    return (
        <div className='container p-5'>
            <div className="row">
                <h6 className='text-secondary mb-5 mt-5 titre2'>CLIENT TESTIMONIALS</h6>
                <div className="col-md-4">
                    <img src={profil1} alt="Profil 1" className='profil mb-3'/>
                    <p className='text-secondary mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia itaque veniam numquam eveniet consequuntur</p>
                    <h5 className='text-black'>Emily R.</h5>
                    <h6 className='text-secondary'>Marketing Director</h6>
                </div>
                <div className="col-md-4">
                    <img src={profil1} alt="Profil 1" className='profil mb-3'/>
                    <p className='text-secondary mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia itaque veniam numquam eveniet consequuntur</p>
                    <h5 className='text-black'>Thomas S.</h5>
                    <h6 className='text-secondary'>Marketing Director</h6>
                </div>
                <div className="col-md-4">
                    <img src={profil1} alt="Profil 1" className='profil mb-3'/>
                    <p className='text-secondary mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia itaque veniam numquam eveniet consequuntur</p>
                    <h5 className='text-black'>Jenny F.</h5>
                    <h6 className='text-secondary'>Marketing Director</h6>
                </div>
            </div>
        </div>
    );
};

export default Section5;