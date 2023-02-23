import React from 'react';
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';

const Contact = () => {
  return <section className='py-16 lg:section' id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
        className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
              Get in touch
            </h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
              Send me a message
            </h2>
          </div>
        </motion.div>
        {/* form */}
        <motion.form
        action="https://formsubmit.co/tanishq.ranjith00@gmail.com"
        method="POST" 
        variants={fadeIn('left', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
        className='flex-1 border rounded-2x1 flex flex-col gap-y-6 pb-24 p-6'>
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='text' name='name' required placeholder='Your Name'></input>
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='email' name='email' required placeholder='Your Email'></input>
          <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' type='text' name='messaage' required placeholder='Your Message'></textarea>
          <button className='btn btn-lg'>Send Message</button>
        </motion.form>
        
      </div>
    </div>
  </section>;
};

export default Contact;
