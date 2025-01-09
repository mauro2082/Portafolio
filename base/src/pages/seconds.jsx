import React from 'react'
import {programador1, python, react, next, git, datos, api, js } from '../assets/img/images';

export default function Seconds() {
  return (
    <div className='h-[500px] flex  '>
      <div className='w-1/3 flex flex-col justify-between items-center' >
        <img className='logos' src={python} alt="Python" />
        <img className='logos mr-44' src={react} alt="react" />
        <img className='logos'src={next} alt="next" />
      </div>
      <div className='w-1/3 flex-col justify-center items-center'>
          <p className=' text-6xl xl:text-7xl 2xl:text-8xl font-rubik text-gray-400'>Tecnologias</p>
          <img src={programador1} alt="Programador" />
          {/* <img className='logos' src={api} alt="api" /> */}
      </div>
      <div className='w-1/3 flex flex-col justify-between items-center'>
        <img className='logos' src={git} alt="git" />
        <img className='logos ml-44' src={datos} alt="datos" />
        <img className='logos' src={js} alt="js" />
      </div>
    </div>
  )
}
