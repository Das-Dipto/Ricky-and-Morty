import React from 'react'
import logo from '../assets/Media/Logo.png'
import pill from '../assets/Media/HomePage/HeroElements/pill.png'
import portal from '../assets/Media/HomePage/HeroElements/portal.png'
import bubble from '../assets/Media/HomePage/HeroElements/bubble.png'
import gun from '../assets/Media/HomePage/HeroElements/Gun.png'

const Banner = () => {
  return (
    <>
      <div className="banner py-10">
        <div className='banner-content'>
           <div className='flex justify-center'>
              <img className="w-[200px] md:w-[20%]" src={logo} alt="logo" />
           </div>
           <div className='heading-content mt-20 md:mt-32 flex justify-center  md:w-[100%]'>
              <div className="heading-text">
                <div className='relative'>
                <h1 className='banner-heading-text text-white flex text-3xl md:text-8xl font-bold'> 
                  <span className='italic me-3 relative'>THE <img className='absolute -top-7 right-7 md:-top-24 md:right-24' src={bubble} alt="" /> </span> 
                  <img className=' w-[50px] md:w-[15%] relative -top-3 md:-top-5' src={portal} alt="" /> 
                  <span className='ms-3 medium-green'>RIC<span className='medium-blue me-5'>K</span> 
                  <span className='medium-blue relative'>& <img className=' hidden md:flex absolute left-10 -top-4' src={pill} alt="pill" /></span>  </span> 
                 
                </h1>
                </div>
                <div className="relative">
                  <h1 className='banner-heading-text text-white text-3xl md:text-8xl font-bold mt-5'> 
                  <span className='medium-green'>MORTY</span> <span className='italic'>WIKI
                  <img className='absolute -right-2 md:-right-20 -top-2 md:-top-10 w-[30%]' src={gun} alt="pill" />
                  </span> 
                  </h1> 
                </div>
              </div>
           </div>
                        
            {/* <div className='button-&-message'>
               <button class="btn btn-outline">Default</button>
            </div> */}
        </div>
      </div>
    </>
  )
}

export default Banner