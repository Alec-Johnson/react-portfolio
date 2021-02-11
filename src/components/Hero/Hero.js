import React from 'react'
import { motion } from 'framer-motion'
import { Link as LinkScroll } from 'react-scroll'
import Background from '../../images/Background.svg'
import { FaArrowRight } from 'react-icons/fa'

const Hero = () => {
  return (
    <div
      id='hero'
      className='h-screen max-w-screen flex items-center justify-center antialiased md:ml-8 '
    >
      <motion.div
        initial={{ opacity: 0, x: -600 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className='flex flex-col items-start justify-center h-30 w-26 pb-28'
      >
        <h1 className='text-8xl font-nav'>
          <strong>Hello!</strong>
        </h1>
        <h2 className='text-5xl  font-light'>
          Welcome to my web development portfolio.
        </h2>
        <div className='cursor-pointer flex flex-row items-center justify-center pt-4'>
          <LinkScroll
            to='portfolio'
            offset={-120}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
          >
            <motion.div
              initial={{ opacity: 0, y: 600 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className='flex items-center text-2xl pb-0.5 mr-8 border-b border-black font-light'
            >
              See my projects <FaArrowRight className='arrow-right' />
            </motion.div>
          </LinkScroll>{' '}
          <LinkScroll
            to='contact'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
          >
            <motion.div
              initial={{ opacity: 0, y: 600 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className='flex items-center pb-0.5 border-b border-black text-2xl font-light'
            >
              Resume
              <FaArrowRight className='arrow-right' />
            </motion.div>
          </LinkScroll>
        </div>
      </motion.div>
      <div className='relative h-full w-auto md:flex hidden items-end pb-32'>
        <motion.img
          initial={{ opacity: 0, x: 600 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className='h-80'
          src={Background}
          alt='Cartoon of a person programming'
        />
      </div>
    </div>
  )
}

export default Hero
