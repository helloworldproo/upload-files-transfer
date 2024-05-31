import React, { useState } from 'react';
import './Wetransfer.css';
import { ReactComponent as Logo} from './Media/SVG/logo.svg';
import { ReactComponent as Downloadsvg} from './Media/SVG/download.svg';
import { SlideIn } from './Component/SlideIn/SlideIn';
import { Form } from './Component/Form/Form';

function WeTransfer() {
  const [slideState, setSlideState] = useState(false);
  const [formState, setFormState] = useState(false);
  
  const clickToPreviewSlideBar = ()=>{
    setSlideState(slide=> !slide);
  };


  const closeSlide = ()=>{
    setSlideState(false);
  };

  const toggleForm = ()=>{
    setFormState(formElement=> !formElement);
  };

  return (<main className='app'>

    { slideState ? <SlideIn closeSlide={closeSlide} toggleForm={toggleForm} clickToPreviewSlideBar={clickToPreviewSlideBar}/> : null }

    { formState ? <Form toggleForm={toggleForm}/> : null }   
    
    <header className='WeTransfer'>
      
      <div>
        <Logo id='svg_logo' onClick={()=> window.location.reload()} />
      </div>
      
      <div className='nav_list'>
        <ul className='ul_list_'>
          <li>Pricing</li>
          <li>Features</li>
          <li>Company</li>
          <li>Help</li>
          <li>Sign up</li>
          {/* <li>Sign up</li> */}
          <li>Log in</li>
        </ul>
      </div>
    </header>

    <div className='transfer_dock'>

      <div className='wrap_dn_load_'>
        <Downloadsvg className='download_scroll'/>
      </div>

      <div style={{
          // display: 'inline-block',
          marginTop: '-1.39rem'
        }}
          >
          <p className='ppp'>Ready when you are</p>
          <p className='small ppp'>Transfer expires in 7 days</p>
      </div>

      <div className='center'  onClick={clickToPreviewSlideBar}>

        <div className='details'>
          <p className='name'>
            5 files
          </p>

          <p className='size'>
            185.22 MB
          </p>
        </div>

        <div className='action'>
          <button className='preview'>Preview</button>
        </div>

      </div>

      <div className='footer'>
        <button className='dn_ld_iefh' onClick={clickToPreviewSlideBar}>Download</button>
      </div>
      
    </div>

  </main>);
};

export default WeTransfer;