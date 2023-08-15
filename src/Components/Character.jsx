import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';

const Character = () => {

    const { refetch, data: allCharacter = [] } = useQuery({
        queryKey: ['characters'],
        queryFn: async () => {
            const res = await axios.get(`https://rickandmortyapi.com/api/character`)
            return res.data;
        },
    })

    // console.log(allCharacter.results);
    // console.log(allCharacter.results[5]);
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "" }}
            onClick={onClick}
          />
        );
      }
      const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
    
        ],
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    
  return (
    allCharacter &&  <>
      
      <div className='w-[77%] mx-auto flex flex-wrap justify-between mt-20'>
          <h3 className='text-white text-2xl mb-3 md:mb-0 common-heading'>Meet The Cast</h3>
          <button className="view-all-button text-white font-semibold"> View All </button>
      </div>
      
       <div className='flex justify-center align-center mt-5'>
            <Slider {...settings} className='w-[80%]'> 
                    {
                        allCharacter.results?.map((item, index)=>(
                            <div key={index} className=''>
                                <div className='character-card w-[88%] p-4 mx-4 md:mx-5'>
                                    <img className='' src={item.image} alt='' />
                                    <h4 className='font-semibold text-white text-1xl mt-4'>{item.name}</h4>
                                </div>
                            </div>
                        ))
                    }
            </Slider>
        </div>
    </>
  )
}

export default Character