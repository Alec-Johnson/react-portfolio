import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import Logo from '../../images/Logo.svg'
import { useScroll } from '../../hooks/useScroll'

const Navbar = () => {
  const { isScrolled } = useScroll()

  return (
    <motion.div
      initial={{ opacity: 0, y: -600 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className={
        'z-50 -mt-20 sticky top-0 frosted tracking-tighter flex flex-row justify-between items-center text-black font-nav ' +
        (isScrolled
          ? 'shadow-sm h-16 transition-all ease-in-out duration-700 '
          : 'h-32 transition-all ease-in-out duration-700')
      }
      isScrolled={isScrolled}
      role='navigation'
    >
      <Link
        smooth={true}
        duration={500}
        spy={true}
        offset={-80}
        exact='true'
        to='hero'
        className='flex flex-row items-center lg:ml-60 md:ml-32 sm:ml-16'
      >
        <div className='pr-4 cursor-pointer'>
          <img className='h-12 w-12' src={Logo} alt='Website Logo' />
        </div>
        <div className='flex-col'>
          <div className='text-xl cursor-pointer'>
            <strong>Alec Johnson.</strong>
          </div>
          <div
            className={
              'transition-all ease-in-out duration-700 text-xl cursor-pointer font-light ' +
              (isScrolled ? 'hidden' : '')
            }
            isScrolled={isScrolled}
          >
            Front end web developer
          </div>
        </div>
      </Link>
      <div className='flex wrap cursor-pointer lg:mr-60 md:mr-32 sm:mr-16'>
        <Link
          to='contact'
          smooth={true}
          duration={500}
          spy={true}
          offset={80}
          exact='true'
          className='text-xl pb-0.5 border-b border-black font-light'
        >
          Contact me
        </Link>
      </div>
    </motion.div>
  )
}

export default Navbar
