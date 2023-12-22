
import React from 'react'
import { MdAudiotrack, MdAnimation  } from "react-icons/md";
import { PiVideoBold } from "react-icons/pi";
import { TbTextSize, TbFilters } from "react-icons/tb";
import { IoShapes } from "react-icons/io5";
import { BiSolidImage } from "react-icons/bi";
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade'

const MenuIndex = () => {
  return (
    <div className='mx-2 px-1 w-10'>
      <Link to={`/`}>
        <Tooltip title='Video' placement="right" TransitionComponent={Fade} TransitionProps={{ timeout: 500 }} arrow>
          <div>
            <PiVideoBold className='text-3xl my-8 ease-in-out duration-200 cursor-pointer hover:text-primary' />
          </div>
        </Tooltip>
      </Link>
      <Link to={`image`}> 
        <Tooltip title='Image' placement="right" TransitionComponent={Fade} TransitionProps={{ timeout: 500 }} arrow>
          <div>
            <BiSolidImage className='text-3xl my-8 ease-in-out duration-200 cursor-pointer hover:text-primary' />
          </div>
        </Tooltip>
      </Link>
      <Link to={`audio`}>
        <Tooltip title='Audio' placement="right" TransitionComponent={Fade} TransitionProps={{ timeout: 500 }} arrow>
          <div>
            <MdAudiotrack className='text-3xl my-8 ease-in-out duration-200 cursor-pointer hover:text-primary' />
          </div>
        </Tooltip>
      </Link>
      <Link to={`text`}>
        <Tooltip title='Text' placement="right" TransitionComponent={Fade} TransitionProps={{ timeout: 500 }} arrow>
          <div>
            <TbTextSize className='text-3xl my-8 ease-in-out duration-200 cursor-pointer hover:text-primary' />
          </div>
        </Tooltip>
      </Link>
      <Link to={`shapes`}>
        <Tooltip title='Shapes' placement="right" TransitionComponent={Fade} TransitionProps={{ timeout: 500 }} arrow>
          <div>
            <IoShapes className='text-3xl my-8 ease-in-out duration-200 cursor-pointer hover:text-primary' />
          </div>
        </Tooltip>
      </Link>
      <Link to={`animation`}>
        <Tooltip title='Animation' placement="right" TransitionComponent={Fade} TransitionProps={{ timeout: 500 }} arrow>
          <div>
            <MdAnimation className='text-3xl my-8 ease-in-out duration-200 cursor-pointer hover:text-primary' />
          </div>
        </Tooltip>
      </Link>
      <Link to={`filters`}>
        <Tooltip title='Filters' placement="right" TransitionComponent={Fade} TransitionProps={{ timeout: 500 }} arrow>
          <div>
            <TbFilters className='text-3xl my-8 ease-in-out duration-200 cursor-pointer hover:text-primary' />
          </div>
        </Tooltip>
      </Link>
    </div>
  )
}

export default MenuIndex;
