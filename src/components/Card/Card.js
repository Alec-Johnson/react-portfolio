import React from 'react'

const Card = () => {
  const cardInfo = [
    {
      img: 'https://images.freejpg.com.ar/900/2201/F100012651.jpg',
      alt: 'Description of the image displayed',
      name: 'Project 1',
      live: 'https://www.github.com',
      code: 'https://www.github.com',
      desc: 'This is a project description',
    },
    {
      img: 'https://images.freejpg.com.ar/900/2201/F100012651.jpg',
      alt: 'Description of the image displayed',
      name: 'Project 2',
      live: 'https://www.github.com',
      code: 'https://www.github.com',
      desc: 'This is a project description',
    },
    {
      img: 'https://images.freejpg.com.ar/900/2201/F100012651.jpg',
      alt: 'Description of the image displayed',
      name: 'Project 3',
      live: 'https://www.github.com',
      code: 'https://www.github.com',
      desc: 'This is a project description',
    },
  ]

  const renderCard = (card, index) => {
    return (
      <div
        className='relative flex flex-col items-center md:flex-row antialiased border-b border-gray-500 mb-8 pb-8'
        key={index}
      >
        <img
          className='relative z-0 h-64 max-w-xs w-64 object-cover object-top hover:bg-opacity-50 transform hover:scale-125 border-gray-600 border border-opacity-50 rounded-xl shadow-lg transition-all duration-150'
          src={card.img}
          alt={card.alt}
        ></img>
        <div className='z-10 p-3 mt-4 max-w-xs w-xs grid grid-cols-1 cursor-default select-none rounded bg-gray-400 shadow-lg'>
          <div className='font-semibold text-xl mb-2 ml-2 text-gray-900'>
            {card.name}
          </div>
          <div className='flex'>
            <a
              href={card.live}
              className='transform cursor-pointer bg-gray-900 text-sm text-white mx-2 py-1 px-2 font-semibold rounded hover:bg-gray-700 hover:scale-90 focus:outline-none'
            >
              Live
            </a>
            <a
              href={card.code}
              className='transform cursor-pointer bg-gray-900 text-sm text-white mx-2 py-1 px-2 font-semibold rounded hover:bg-gray-700 hover:scale-90 focus:outline-none'
            >
              Code
            </a>
          </div>
          <div className='my-2 mx-2 mr-5'>
            <p className='text-gray-900 text-sm'>{card.desc}</p>
          </div>
          <div>
            <div className='font-semibold text-l text-gray-900'>
              Tech Stack:
            </div>
            <div>
              <span className='transform transition-all duration-150 inline-block bg-blue-400 bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-black  hover:shadow-sm  hover:scale-105'>
                ReactJS
              </span>
              <span className='transform transition-all duration-150 inline-block bg-pink-400 bg-opacity-100 rounded px-1 py-1  text-xs font-thin text-black  hover:shadow-sm  hover:scale-105'>
                Tailwind
              </span>
              <span className='transform transition-all duration-150 inline-block bg-yellow-400  bg-opacity-75 rounded px-1 py-1  text-xs font-thin text-black hover:shadow-sm  hover:scale-105'>
                Javascript
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return <>{cardInfo.map(renderCard)}</>
}

export default Card
