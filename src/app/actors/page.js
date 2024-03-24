
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { popularActors } from "../../data/API/actors";




const ActorCard = ({ actor }) => {
  const src = "https://image.tmdb.org/t/p/original";

  return (
<div className="card card-compact bg-base-100 shadow-xl md:w-[13rem] w-[9rem]  h-full m-1">
    <Link href={{
        pathname: `/actors/${actor.id}`,
    }}>
                <figure>
                  <img
                  className="w-[14rem] rounded-md"
                   src={src + actor.profile_path}
          alt={actor.name} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-base lg:text-xl">{actor.name}</h2>
            <p>{actor.popularity.toFixed(1)}</p>
                </div>
      </Link>
    </div>
  );
};

async function ActorsList() {
  const actorsData = await popularActors();

  return (
    <div className="container mx-4 py-8 ">
      <h2 className="text-2xl font-bold mb-4">Popular Actors</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {actorsData.results.map((actor) => (
          <ActorCard key={actor.id} actor={actor} />
        ))}
      </div>
    </div>
  );
};

export default ActorsList;
