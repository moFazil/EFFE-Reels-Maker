import React from 'react'
import MenuIndex from './Menu/MenuIndex'
import Topbar from './Menu/Navbar'
import { Route, Routes } from 'react-router-dom';
import VideoPanel from './Panels/VideoPanel';
import AudioPanel from './Panels/AudioPanel';
import FillPanel from './Panels/FillPanel';
import ImagePanel from './Panels/ImagePanel';
import TextPanel from './Panels/TextPanel';
import ShapesPanel from './Panels/ShapesPanel';
import AnimationPanel from './Panels/AnimationPanel';
import FiltersPanel from './Panels/FiltersPanel';
import OpcitiyPanel from './Panels/OpcitiyPanel';
import Canvas from './Canvas/Canvas';
import Elements from './Elements/Elements';

const ReelsMaker = () => {
  return (
      <div>
        <Topbar/>
        <div className=' flex justify-between items-center'>
        <MenuIndex/>
        <Routes>
          <Route path='/' element={<VideoPanel/>}/>
          <Route path='audio' element={<AudioPanel/>}/>
          <Route path='image' element={<ImagePanel/>}/>
          <Route path='text' element={<TextPanel/>}/>
          <Route path='shapes' element={<ShapesPanel/>}/>
          <Route path='animation' element={<AnimationPanel/>}/>
          <Route path='filters' element={<FiltersPanel/>}/>
          <Route path='fill' element={<FillPanel/>}/>
          <Route path='opacity' element={<OpcitiyPanel/>}/>
      </Routes>
      <Canvas/>
      <Elements/>
      </div>
      </div>
  )
}

export default ReelsMaker