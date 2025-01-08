import React from 'react';

export default function Main() {
  return (
    <div>

<div className='flex bg-[#232833] h-[400px]'>
      <div className='w-1/2 flex flex-col justify-center items-center'>
        <div>
          <p className='h-1/2 text-8xl font-rubik text-gray-400'>Freelance</p>
        </div>
        <div className='h-1/2 text-sm font-mono text-gray-400 px-10'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Ipsa numquam cum doloribus accusamus iusto odio placeat ducimus, soluta 
            repellendus quae. Libero eligendi dolorum eaque consectetur,
            doloribus ab repellat quisquam atque?
          </p>
        </div>
      </div>

     
    </div>
     {/* SVG con la onda */}
     <div >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path
            fill="#232833"
            fillOpacity="1"
            d="M0,192L24,181.3C48,171,96,149,144,165.3C192,181,240,235,288,245.3C336,256,384,224,432,202.7C480,181,528,171,576,186.7C624,203,672,245,720,272C768,299,816,309,864,309.3C912,309,960,299,1008,282.7C1056,267,1104,245,1152,213.3C1200,181,1248,139,1296,117.3C1344,96,1392,96,1416,96L1440,96L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
    
  );
}
