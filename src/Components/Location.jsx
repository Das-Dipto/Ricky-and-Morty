import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';


const Location = () => {

    const { refetch, data: allLocation = [] } = useQuery({
        queryKey: ['locations'],
        queryFn: async () => {
            const res = await axios.get(`https://rickandmortyapi.com/api/location`)
            return res.data;
        },
    })

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
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
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
    allLocation &&  <>
      
    <div className='w-[77%] mx-auto  mt-28 mb-7'>
        <h3 className='text-white text-2xl mb-3 md:mb-0 common-heading'>Locations</h3>
    </div>
    
    <div className='flex justify-center align-center mt-2'>
          <Slider {...settings} className='w-[80%]'> 
                  {
                     allLocation.results?.map((item, index)=>(
                          <div key={index} className=''>
                              <div className='location-card min-h-[120px] flex flex-col justify-center  p-4 mx-4 md:mx-5'>
                                  <p className='text-white'>#{item.id}</p>
                                  <h4 className='font-semibold text-white text-1xl mt-2'>{item.name}</h4>
                              </div>
                          </div>
                      ))
                  }
          </Slider>
      </div>
  </>
  )
}

export default Location