import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaPinterestSquare, FaArrowAltCircleUp } from 'react-icons/fa';

const Footer= () => {
    return (
        <div className='p-5' id='footer'>            
              <div className="row">
                <div className="col-md-12">
                        <h6 className='text-white mb-3 titre2'>Sunnyside</h6>
                    </div>
                    <div className="col-md-12">
                        <a href="#" className='text-white text-decoration-none'>About</a> <br />
                        <a href="#" className='text-white text-decoration-none'>Services</a> <br />
                        <a href="#" className='text-white text-decoration-none'>Projects</a>
                    </div>
                    <div className="col-md-12 text-white fs-4">                 
                        <FaFacebookSquare /> 
                        <FaInstagramSquare />
                        <FaTwitterSquare /> 
                        <FaPinterestSquare />
                    </div>
              </div>
            <a href="#section1" className='fs-3 text-warning'><FaArrowAltCircleUp /></a>
        </div>
    );
};

export default Footer;