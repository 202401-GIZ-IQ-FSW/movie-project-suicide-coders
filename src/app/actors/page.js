'use client';

import { useEffect, useState } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { popularActors } from "../../data/API/actors";




const ActorCard = ({ actor }) => {
  const src = "https://image.tmdb.org/t/p/original";

  return (
    <div className="mx-1 relative mb-2 md:w-[13rem] w-[6rem]">
      <Link href={`/actors/${actor.id}`}>
        <img
          className="w-[13rem] rounded-lg"
          src={src + actor.profile_path}
          alt={actor.name}
        />
      </Link>
      <div className="text-white absolute bottom-0 flex backdrop-blur-sm w-full">
        <h1 className="sh-text md:text-lg text-sm pl-1 pb-4">{actor.name}</h1>
        <div className="sh-text absolute bottom-1 md:text-sm text-[10px] right-0 flex">
          <span className="text-yellow-400 font-bold mr-1">
            <FontAwesomeIcon className=" " icon={faStar} />
          </span>
          <p>{actor.popularity.toFixed(1)}</p>
        </div>
      </div>
    </div>
  );
};

const ActorsList = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchActors = async () => {
      const data = await popularActors();
      setActors(data);
    };

    fetchActors();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Popular Actors</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {actors.map((actor) => (
          <ActorCard key={actor.id} actor={actor} />
        ))}
      </div>
    </div>
  );
};

export default ActorsList;
