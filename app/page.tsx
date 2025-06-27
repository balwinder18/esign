'use client'


import Navbar from '../app/components/Navbar'
import Whiteboard from './components/Whiteboard'

export default function Home() {
  

  return (
    <div className='' id="homepage">
      <div className='' id="navbar">
        <Navbar />
      </div>

      <div className='w-full' id="main">
        <div className='flex'>
          <div className=' w-full bg-[#dadada] flex items-center flex-col' id="right">
            <div id="board" className='m-5 rounded-lg'>
              <Whiteboard />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
