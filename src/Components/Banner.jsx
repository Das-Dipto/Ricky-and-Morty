import React from 'react'
import logo from '../assets/Media/Logo.png'
import pill from '../assets/Media/HomePage/HeroElements/pill.png'
import portal from '../assets/Media/HomePage/HeroElements/portal.png'
import bubble from '../assets/Media/HomePage/HeroElements/bubble.png'
import gun from '../assets/Media/HomePage/HeroElements/Gun.png'
import {RiPlayCircleLine} from 'react-icons/ri';
import Character from './Character'
import Episode from './Episode'

const Banner = () => {
  return (
    <>
      <div className="banner pt-10 pb-5">
        <div className='banner-content'>
           <div className='flex justify-center'>
              <img className="w-[200px] md:w-[20%]" src={logo} alt="logo" />
           </div>
           <div className='heading-content mt-20 md:mt-32 flex justify-center  md:w-[100%]'>
              <div className="heading-text">
                <div className='relative'>
                <h1 className='banner-heading-text text-white flex text-3xl md:text-8xl font-bold'> 
                  <span className='italic me-3 relative'>THE <img className='absolute -top-7 right-7 md:-top-24 md:right-24' src={bubble} alt="bubble" /> </span> 
                  <img className=' w-[50px] md:w-[15%] relative -top-3 md:-top-5' src={portal} alt="portal" /> 
                  <span className='ms-3 medium-green'>RIC<span className='medium-blue me-5'>K</span> 
                  <span className='medium-blue relative'>& <img className=' hidden md:flex absolute left-10 -top-4' src={pill} alt="pill" /></span>  </span> 
                 
                </h1>
                </div>
                <div className="relative">
                  <h1 className='banner-heading-text text-white text-3xl md:text-8xl font-bold mt-5'> 
                  <span className='medium-green'>MORTY</span> <span className='italic'>WIKI
                  <img className='absolute -right-2 md:-right-20 -top-2 md:-top-10 w-[30%]' src={gun} alt="gun" />
                  </span> 
                  </h1> 
                </div>
              </div>
           </div>

            <div className=' mt-7 button-&-message flex flex-row flex-wrap-reverse justify-center'>
               <button className="btn watch-now-button text-white font-semibold mt-7 md:mt-0 me-10"> <RiPlayCircleLine style={{fontSize:'20'}}/> Watch Now</button>
               <p className='medium-blue mt-8 w-[90%] mx-auto md:w-[25%] md:mx-0 message'>Brilliant but boozy scientist Rick hijacks his fretful teenage grandson, Morty, for wild escapades in other worlds and alternate dimensions</p>
            </div>        
        </div>
        <Character/>
        <Episode/>
      </div>
    </>
  )
}

export default Banner