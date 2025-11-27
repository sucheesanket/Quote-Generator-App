import React from 'react'

const Card = ({quote,author}) => {
  return (
    <div className='h-55 w-120 bg-gray-400 rounded-lg text-black flex flex-col justify-between py-4 px-3 cursor-pointer'>
      <p className='font-semibold text-xl'>{quote}</p>
      <div className='flex flex-row-reverse'>
        <h2>- <i>"{author}"</i></h2>

      </div>
      
    </div>
  )
}

export default Card
