import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const SectionsMovie = ({ title, moviesData }) => {
  const src = "https://image.tmdb.org/t/p/original";

  return (
    <>
      <div className="px-4 pt-5 flex justify-between items-center">
        <h1 className="text-3xl">{title}</h1>
        <Link
          href={{
            pathname: `/movies`,
            query: { movies: title },
          }}
        >
          <span className=" text-red-600 ">See All +</span>
        </Link>
      </div>
      <div className="carousel carousel-center   p-4 pt-1 space-x-4 bg-neutral rounded-box my-5 max-w-full ">
        {moviesData.results.slice(0, 8).map((item, i) => (
          <div
            className="carousel-item hover:scale-105 transition-all ease-in duration-200"
            key={i}
          >
            <Link
              href={{
                pathname: `/movies/${item.id}`,
              }}
            >
              <div className="card w-[15rem] bg-base-100 shadow-xl image-full flex">
                <figure>
                  <img
                    src={src + item.poster_path}
                    alt={item.title}
                    className="w-full"
                  />
                </figure>
                <div className="flex justify-end flex-col">
                  <div className=" text-white pb-10 pl-3  rounded-b-2xl pt-2 backdrop-blur-sm">
                    <h2 className="card-title sh-text">{item.title}</h2>
                    <div className="sh-text absolute bottom-3 right-3 flex">
                      <p>{item.vote_average.toString().slice(0, 3)}</p>
                      <span className="text-yellow-400 font-bold ml-2">
                        <FontAwesomeIcon className=" " icon={faStar} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionsMovie;
