import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const MovieCard = ({ moiveData }) => {
  const src = "https://image.tmdb.org/t/p/original";

  return (
    <div className="mx-1 relative mb-2 md:w-[13rem] w-[6rem]">
    <Link href={{
        pathname: `/movies/${moiveData.id}`,
    }}>
      <img
        className="w-[13rem] rounded-lg "
        src={src + moiveData.poster_path}
      />
      <div className="text-white absolute bottom-0 flex backdrop-blur-sm w-full">
        <h1 className="sh-text md:text-lg text-sm pl-1 pb-4">{moiveData.title}</h1>
        <div className="sh-text absolute bottom-1 md:text-sm text-[10px] right-0 flex">
          <p>{moiveData.vote_average.toString().slice(0, 3)}</p>
          <span className="text-yellow-400 font-bold ml-2">
            <FontAwesomeIcon className=" " icon={faStar} />
          </span>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default MovieCard;
