import React from 'react'
import Card from '../Card/Card'

const Portfolio = () => {
  return (
    <section
      id='portfolio'
      className='h-screen max-w-screen flex flex-col items-center'
    >
      <h1 className='text-4xl mt-24 pb-16'>Personal Projects</h1>
      <div className='flex flex-col justify-between'>
        <div className='mb-12'>
          <Card
            name='Project Name'
            img='https://camo.githubusercontent.com/78889a2ff752043bd00ea43b0dc9fb85b8818345e190b2af5ce4d4eff307db64/68747470733a2f2f692e696d6775722e636f6d2f645744334449522e6a7067'
            live='https://www.github.com'
            code='https://www.github.com'
            desc='Project Description'
          />
        </div>
      </div>
    </section>
  )
}

export default Portfolio
