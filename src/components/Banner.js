import React from 'react';

import { Link } from 'react-scroll';

import image from '../assets/avatar.svg';

import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';

import { TypeAnimation } from 'react-type-animation';

import { motion } from 'framer-motion';

import {fadeIn} from '../variants'

const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center py-20 mb-10' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        {/* writing */}
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
            TANISHQ <span>RANJITH</span>
          </motion.h1>
          <motion.div
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>I AM A</span>
            <TypeAnimation sequence={
              [
                'DEVELOPER', 2000,
                'ENGINEER', 2000,
                'GAMER', 2000
              ]
            }
            speed={50}
            className="text-accent"
            wrapper='span'
            repeat={Infinity}
             />
          </motion.div>
          <motion.p
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}} 
          className='mb-8 max-w-lg mx-auto lg:mx-0'>
            DEBUGGING THE WORLD, ONE LINE OF CODE AT A TIME
          </motion.p>
          <motion.div
          variants={fadeIn('up', 0.7)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}} 
          className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <Link to='contact' smooth={true} spy={true}>
              <button className='btn btn-lg'>Contact Me </button>
            </Link>
            <Link to='work' smooth={true} spy={true}>
              <a href='#' className='text-gradient btn-link'>My Projects</a>
            </Link>
          </motion.div>
          <motion.div 
          variants={fadeIn('up', 0.8)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-36'>
            <a href='https://www.linkedin.com/in/tanishqranjith' target='_blank'>
              <FaLinkedin />
            </a>
            <a href='https://github.com/tanagrams' target='_blank'>
              <FaGithub />
            </a>
            <a href='https://instagram.com/tanishq_ranjith?igshid=YmMyMTA2M2Y=' target='_blank'>
              <FaInstagram />
            </a>
          </motion.div>
        </div>
        {/* image */}
        <motion.div
        variants={fadeIn('down', 0.6)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}} 
        className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[450px]'>
          <img src={image} alt='me'>
        
          </img>
        </motion.div>
      </div>
    </div>

    </section>;
};

export default Banner;
