import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Cast = () => {
  const { refetch, data: allCast = [] } = useQuery({
    queryKey: ["cast"],
    queryFn: async () => {
      const res = await axios.get(`https://rickandmortyapi.com/api/character`);
      return res.data;
    },
  });

  return (
    <div className="w-[80%] md:w-[85%] mx-auto">
      <h1 className="font-bold medium-blue mt-40 cast-heading text-4xl md:text-6xl">
        The Cast
      </h1>
      <div className="flex flex-wrap justify-between align-center">
        {allCast && (
          <>
            {allCast.results?.map((item, index) => (
              <div key={index} className="">
                <div className="character-card w-full md:w-[200px] p-4 mt-10">
                  <img className="" src={item.image} alt="" />
                  <h4 className="font-semibold text-white text-1xl mt-4">
                    {item.name}
                  </h4>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Cast;
