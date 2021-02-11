import React, { Suspense } from 'react'
const Contact = React.lazy(() => import('../components/Contact/Contact'))
const Hero = React.lazy(() => import('../components/Hero/Hero'))
const Portfolio = React.lazy(() => import('../components/Portfolio/Portfolio'))

const Home = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <Portfolio />
        <Contact />
      </Suspense>
    </>
  )
}

export default Home
