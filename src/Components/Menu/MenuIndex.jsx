"use client";
import React from 'react'
import { MdAudiotrack, MdAnimation  } from "react-icons/md";
import { PiVideoBold } from "react-icons/pi";
import { TbTextSize, TbFilters } from "react-icons/tb";
import { IoShapes } from "react-icons/io5";
import { BiSolidImage } from "react-icons/bi";
import { Link } from 'react-router-dom';

const MenuIndex = () => {

  return (
    <div className='mx-2 w-16'>
      <Link to={`/`}>
        <PiVideoBold className='text-3xl my-8 ease-in-out duration-200 cursor-pointer hover:text-primary' />
      </Link>
      <Link to={`image`}> 
        <BiSolidImage className='text-3xl my-8 ease-in-out duration-200 cursor-pointer hover:text-primary' />
        </Link>
      <Link to={`audio`}>
        <MdAudiotrack className='text-3xl my-8 ease-in-out duration-200 cursor-pointer hover:text-primary' />
      </Link>
      <Link to={`text`}>
        <TbTextSize className='text-3xl my-8 ease-in-out duration-200 cursor-pointer hover:text-primary' />
      </Link>
      <Link to={`shapes`}>
       <IoShapes className='text-3xl my-8 ease-in-out duration-200 cursor-pointer hover:text-primary' />
      </Link>
      <Link to={`animation`}>
        <MdAnimation className='text-3xl my-8 ease-in-out duration-200 cursor-pointer hover:text-primary' />
      </Link>
      <Link to={`filters`}>
        <TbFilters className='text-3xl my-8 ease-in-out duration-200 cursor-pointer hover:text-primary' />
      </Link>
    </div>
  )
}

export default MenuIndex