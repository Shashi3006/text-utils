import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import TextForm from './TextForm';



export default function Navbar(props) {
const [mode, setMode] = useState(props.mode);
   
const customMode=(event)=>{
    const customColor= event.target.value;
     setMode(customColor);
     document.body.style.backgroundColor = customColor;
     <TextForm CustomColour={customColor} />
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <h2 className="navbar-brand my-2">{props.title}</h2>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
        </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
             <Link to="/" className="nav-link" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">{props.aboutTitle}</Link>
            </li>
          </ul>
          
            
          <div className={`form-check form-switch mx-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
           <input className="form-check-input rounded-0" type="color" onChange={customMode} style={{height:"20px", width:"21px"}} />
           <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Custom</label>
           </div>

           <div className={`form-check form-switch mx-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
           <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
           <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Darkmode</label>
           </div>
          
          
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {title : PropTypes.string.isRequired,
  aboutTitle : PropTypes.string.isRequired}

Navbar.defaultProps = {title : 'Set Title here', 
aboutTitle : 'About Title here'};