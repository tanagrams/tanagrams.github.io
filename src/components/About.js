import React from 'react';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView ({
    threshold: 0.5,
  });
  return <section className='section mb-10' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* img*/}
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='hidden lg:flex flex-1 bg-about bg-contain bg-no-repeat h-[640px] bg-top'></motion.div>
        {/* text */}
        <motion.div 
        variants={fadeIn('left', 0.7)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1'>
          <h2 className='h2 text-accent'>
            About Me
          </h2>
          <h3 className='h3 mb-4'>
            I am penultimate Software Engineering student at the University of Auckland
          </h3>
          <p className='mb-6'>I'm someone who loves to stay active and have a good time. Whether it's playing badminton, hitting the gym, or video games, I always strive to keep myself engaged in something that brings me joy. But what I truly value the most is being in the company of great people and having fun with them. Life is too short to not have a good time, and I'm always up for making unforgettable memories with those around me.</p>
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={3} duration={2} /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of <br />
                Experpience
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={343} duration={3} /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Commits on <br />
                GitHub
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={8} duration={2} /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Countries  <br />
                Visited
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </section>;
};

export default About;
