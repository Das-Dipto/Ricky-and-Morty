import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Status from "../assets/Media/CastDetails/Icons/PNG/Status.png";
import Species from "../assets/Media/CastDetails/Icons/PNG/Species.png";
import Gender from "../assets/Media/CastDetails/Icons/PNG/Gender.png";
import Origin from "../assets/Media/CastDetails/Icons/PNG/Origin.png";
import Location from "../assets/Media/CastDetails/Icons/PNG/Location.png";
import Episode from "../assets/Media/CastDetails/Icons/PNG/Episode.png";
import Redirect from "../assets/Media/CastDetails/Icons/PNG/Redirect.png";
import { redirect } from "react-router-dom";
const Castdetails = ({ cast }) => {
  const { refetch, data: allCastDetails = [] } = useQuery({
    queryKey: ["castDetails"],
    queryFn: async () => {
      const res = await axios.get(`https://rickandmortyapi.com/api/character`);
      return res.data;
    },
  });

  return (
    allCastDetails && (
      <>
        <h1 className="font-bold medium-blue mt-40 cast-heading text-4xl md:text-6xl w-[90%] mx-auto">
          Character Details
        </h1>
        {allCastDetails.results?.slice(0, 1).map((item, index) => (
          <div key={index} className="w-[90%] mx-auto details-container mt-32 ">
            <div className="flex justify-center md:justify-between items-center flex-wrap">
              <div className="name-and-picture mb-10">
                <h1 className="text-white text-center text-4xl font-bold mb-7 cast-name">
                  {item.name}
                </h1>
                <div className="p-5 common-container">
                  <img src={item.image} alt="" />
                </div>
              </div>

              <div className="details w-full md:w-[55%]">
                <div className="status-species-gender flex flex-wrap justify-between">
                  <div className="status mb-7 p-4 w-full md:w-[30%] common-container">
                    <img src={Status} alt="" />
                    <h3 className="text-white text-1xl my-2">Status</h3>
                    <h1 className="text-white text-4xl">{item.status}</h1>
                  </div>
                  <div className="species mb-7 p-4 w-full md:w-[30%] common-container">
                    <img src={Species} alt="" />
                    <h3 className="text-white text-1xl my-2">Species</h3>
                    <h1 className="text-white text-4xl">{item.species}</h1>
                  </div>
                  <div className="gender mb-7 p-4 w-full md:w-[30%] common-container">
                    <img src={Gender} alt="" />
                    <h3 className="text-white text-1xl my-2">Gender</h3>
                    <h1 className="text-white text-4xl">{item.gender}</h1>
                  </div>
                </div>
                <div className="origin my-16 p-4 common-container">
                  <img src={Origin} alt="" />
                  <h3 className="text-white text-1xl my-2">Origin</h3>
                  <div className="flex justify-between items-center">
                    <h1 className="text-white text-4xl">{item.origin.name}</h1>
                    <img src={Redirect} alt="" />
                  </div>
                </div>
                <div className="location my-16 p-4 common-container">
                  <img src={Location} alt="" />
                  <h3 className="text-white text-1xl my-2">
                    Last Known Location
                  </h3>
                  <div className="flex justify-between items-center">
                    <h1 className="text-white text-4xl">
                      {item.location.name}
                    </h1>
                    <img src={Redirect} alt="" />
                  </div>
                </div>
                <div className="episodes mt-16 p-4 common-container">
                  <img src={Episode} alt="" />
                  <h3>EpisodeS</h3>
                  <ul>
                    <li className="text-white">Pilot</li>
                    <li className="text-white">Pilot</li>
                    <li className="text-white">Pilot</li>
                    <li className="text-white">Pilot</li>
                    <li className="text-white">Pilot</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    )
  );
};
export default Castdetails;
