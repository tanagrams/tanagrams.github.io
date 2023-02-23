import React from 'react';

// TODO CHANGE THESE IMAGES TO CUSTOMIZE 
import logo from '../assets/logo.svg';
const Header = () => {
  return <div className='py-3'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/*Logo*/}
        <a href='#'>
          <img src={logo} alt='logo'>

          </img>
        </a>
        {/*bUTTON*/}
        <button className='btn btn-sm'>
          Hire Me
        </button>
      </div>
    </div>
  </div>;
};

export default Header;
