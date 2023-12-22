import React from 'react'
import { IoCrop } from "react-icons/io5";
import { MdFormatColorFill,MdOpacity,MdDownload   } from "react-icons/md";
import { TbWashDryShade } from "react-icons/tb";
import { Link } from 'react-router-dom';


const Topbar = () => {
  return (
      <div className=' flex justify-around py-5 border-b-[1px] items-center'>
        <div className=' flex'>
          <div className='cursor-pointer'>
            <IoCrop className=' mx-5 text-2xl ease-in-out duration-200 hover:text-primary'/>  
          </div>

          <Link to={`fill`} className='cursor-pointer'>
            <MdFormatColorFill className=' text-2xl mx-5 ease-in-out duration-200 hover:text-primary '/>
          </Link>

          <Link to={`opacity`} className='cursor-pointer'>
            <MdOpacity className=' text-2xl mx-5 ease-in-out duration-200 hover:text-primary'/>  
          </Link>

          <div className=' flex cursor-pointer shadow-2xl'>
            <TbWashDryShade className=' text-2xl ml-5 ease-in-out duration-200 hover:text-primary'/>
            <p className=' mx-2'>Background Remove</p>
          </div>
        </div>
        <div className=' flex cursor-pointer ease-in-out duration-500 hover:bg-primary rounded-md px-4 py-1'> 
          <MdDownload className=' text-2xl mr-1 '/> 
          <p>Export</p>
        </div>
    </div>
  )
}

export default Topbar