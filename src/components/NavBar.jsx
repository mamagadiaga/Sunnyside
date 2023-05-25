import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const NavBar = () => {
  return (
    <section id="section1" className="text-white">
        <nav className="navbar navbar-expand-lg bg-transparent">
      <div className="container-fluid">
        <a className="navbar-brand text-white fw-bold fs-4" href="#">
          Sunnyside
        </a>
        <button
        className="navbar-toggler bg-white"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-white" aria-current="page" href="#section2">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#section2">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#section4">Projects</a>
            </li>
          </ul>
          <a className="btn btncontact text-white border border-white ms-3 " type="button" href="#footer">
            Contacts
          </a>
        </div>
      </div>
    </nav>
    <div className="d-flex justify-content-center align-items-center mt-5 p-5">
         <h1 className="mt-5 titres1">WE ARE CREATIVES</h1>
    </div>
    </section>
  );
};

export default NavBar;


// import React from 'react';
// import Form from 'react-bootstrap/Form';
// import Bakeli from '../../image/Bakeli.png';
// import Input from '../input/Input';
// import Row from 'react-bootstrap/Row';
// import { Link } from 'react-router-dom';
// import Bienvenue from '../bienvenue/Bienvenue';

// class Connexion extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//       connexion: false
//     };
//   }

//   EmailChange = (event) => {
//     this.setState({ email: event.target.value });
//   };

//   PasswordChange = (event) => {
//     this.setState({ password: event.target.value });
//   };

//   Submit = (event) => {
//     event.preventDefault();
//     this.setState({ connexion: true });
//   };

//   render() {
//     const { email, password, connexion } = this.state;

//     return (
//       <div className='container text-start d-flex justify-content-center p-5'>
//         {connexion ? (
//           <Bienvenue email={email} password={password} />
//         ) : (
//           <Form className='w-50 formulaire' onSubmit={this.Submit}>
//             <div className='text-center'>
//               <img src={Bakeli} height={100} width={100} />
//               <h4 className='text-primary mb-3'>CONNEXION</h4>
//             </div>
//             <Form.Group className='mb-3' controlId='formBasicEmail'>
//               <Input
//                 type='email'
//                 label=' Adresse email'
//                 value={email}
//                 onChange={this.EmailChange}
//               />
//             </Form.Group>
//             <Form.Group className='mb-3' controlId='formBasicPassword'>
//               <Input
//                 type='password'
//                 label='Mot de passe'
//                 value={password}
//                 onChange={this.PasswordChange}
//               />
//             </Form.Group>
//             <Link to='/lost' className='text-decoration-none text-secondary'>
//               Mot de passe oublié
//             </Link>
//             <button className='mt-3 btn btn-primary text-white w-100'>
//               Se connecter
//             </button>
//             <Row className='mt-3 float-end'>
//               <Link to='/inscription' className=''>
//                 S'inscrire
//               </Link>
//             </Row>
//           </Form>
//         )}
//       </div>
//     );
//   }
// }

// export default Connexion;

