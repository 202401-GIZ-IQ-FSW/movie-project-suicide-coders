import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const MovieCard = ({ moiveData }) => {
  const src = "https://image.tmdb.org/t/p/original";

  return (
    <div className="card card-compact bg-base-100 shadow-xl md:w-[13rem] w-[9rem]  h-full">
    <Link href={{
        pathname: `/movies/${moiveData.id}`,
    }}>
                <figure>
                  <img
                  className="w-[14rem] rounded-md"
                   src={src + moiveData.poster_path} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{moiveData.title.slice(0,12)}</h2>
                  <div className="absolute bottom-2 md:text-sm text-[10px] right-2 flex">
                    <span className="text-yellow-400 font-bold mr-1">
                      <FontAwesomeIcon className=" " icon={faStar} />
                    </span>
                    <p>{moiveData.vote_average.toString().slice(0, 3)}</p>
                  </div>
                </div>
      </Link>
    </div>
  );
};

export default MovieCard;
