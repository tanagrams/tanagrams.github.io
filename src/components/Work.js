import React from 'react';
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';
import IMG1 from '../assets/portfolio-img1.png';
import IMG2 from '../assets/portfolio-img2.png';
import IMG3 from '../assets/portfolio-img3.png';
import IMG4 from '../assets/portfolio-img4.png';

const Work = () => {
  return <section className='section mb-20' id='work'>
    <div className='container mx-auto'>
      <div className='h-40'>

      </div>
        {/* text */}
        <div>
          <h2 className='h2 leading-tight text-accent'>
            My Latest Projects
          </h2>
        </div>
      <motion.div 
      variants={fadeIn('right', 0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.7}}
      className='flex flex-col lg:flex-row gap-x-10'>
        <div className='flex flex-col lg:flex-row gap-y-10 gap-x-10 mb-10 lg:mb-0'>
            {/* img */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* actual image */}
            <img className='group-hover:scale-125 transition-all duration-500' src={IMG1} alt="image1"></img>
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-44 transition-all duration-500 z-50'>
              <span className='text-gradient'>
                AI LIVE STREAMER
              </span>
              </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3x1 text-white'>Built using Python, scrapes data from various sources then uses language models like GPT-3 and T5 to generate a scrpt. Soul Machines Digital People then present the script in a live streaming format</span>
            </div>
            </div>
            {/* img */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* actual image */}
              <img className='group-hover:scale-125 transition-all duration-500' src={IMG2} alt="image1"></img>
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-44 transition-all duration-500 z-50'>
                <span className='text-gradient'>
                  QUICK, DRAW!
                </span>
                </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>Built using Java, is a fully functioning game based off of Googles Quick, Draw! Targetted for a younger audience my Quick, Draw! keeps children engaged and encourages learning through art</span>
              </div>
            </div>
        </div>
      </motion.div>
      <motion.div 
      variants={fadeIn('left', 0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.7}}
      className='flex flex-col lg:flex-row gap-x-10 py-10'>
        <div className='flex flex-col lg:flex-row gap-y-10 gap-x-10 mb-10 lg:mb-0'>
            {/* img */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* actual image */}
            <img className='group-hover:scale-125 transition-all duration-500' src={IMG3} alt="image1"></img>
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-44 transition-all duration-500 z-50'>
              <span className='text-gradient'>
                CELLULAR AUTOMATA
              </span>
              </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3x1 text-white'>Built in Python, one of my first ever projects. When I first started learning programming I love simulations, I was especially fascinated by Conways Game of Life and how the game could be recreated WITHIN THE GAME. This was my reindition of the iconic game of life</span>
            </div>
            </div>
            {/* img */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* actual image */}
              <img className='group-hover:scale-125 transition-all duration-500' src={IMG4} alt="image1"></img>
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-44 transition-all duration-500 z-50'>
                <span className='text-gradient'>
                  ASPA WEBSITE
                </span>
                </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>Worked in a team of 10 as a back-end developer to revamp the existing Auckland Student Pool Associate website using MERN stack. This was also my first time experiencing working in a agile environment</span>
              </div>
            </div>
        </div>
      </motion.div>
    </div>
  </section>;
};

export default Work;
