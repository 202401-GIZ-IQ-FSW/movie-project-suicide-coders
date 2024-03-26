import { ActorDetails, ActorHasMovie } from "@/data/API/actors";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

async function page({ params }) {
  const ActorId = params.id;
  const actorDetailsData = await ActorDetails(ActorId);
  const actorHasMovieData = await ActorHasMovie(ActorId);
  const date = new Date();
  const year = date.getFullYear();
  const src = "https://image.tmdb.org/t/p/original";


  const { name, profile_path, gender, popularity, birthday, biography } =
    actorDetailsData;

  return (
    <div className=" md:p-10 flex flex-col">
      <div className="flex flex-col md:flex-row  my-4">
        <img
          src={`https://image.tmdb.org/t/p/original${profile_path}`}
          alt={name}
          className="rounded-md w-[15rem]  self-center md:self-start"
        />
        <div className="flex-col mx-5 mt-5 justify-center w-full">
        <div className="mb-5">
        <h1 className="md:text-4xl text-xl">{name}</h1>
      </div>
          <div className="flex text-xl dm w-full">
            <p className="">
              Age:{" "}
              <span className="dark:text-gray-300 text-gray-700">
                {year - birthday?.slice(0, 4)}
              </span>
            </p>
            <p className="mx-5">
              Gender:{" "}
              <span className="dark:text-gray-300 text-gray-700 ">
                {gender == 2 ? "Male" : "Female"}
              </span>
            </p>
          </div>
          <div className="flex items-center">
            <p className="dm text-xl mr-2 my-2">
            Popularity: 
            </p>
            <p className="dm dark:text-gray-300 text-gray-700">
              {popularity}
            </p>
          </div>
          <div className="my-6 md:justify-end  ">
            <h4 className="text-2xl my-2">
            Biography
            </h4>
            <p className="dm dark:text-gray-300 text-gray-700  text-balance text-justify md:w-auto max-w-80 md:max-w-full">
              {biography}
            </p>
          </div>
        </div>
        
      </div>
      <div className="my-10 p-4">
      <h1 className=" md:p-0 text-3xl mb-5">Credits</h1>
      <div className="carousel carousel-center pt-1 space-x-4 bg-neutral rounded-box  max-w-full ">
        {actorHasMovieData.cast.map((item, i) => (
          <div
            className="card card-compact carousel-item  shadow-xl hover:scale-105 transition-all ease-in duration-200"
            key={i}
          >
            <Link
              href={{
                pathname: `/movies/${item.id}`,
              }}
            >
                <figure>
                  <img
                  className="w-[14rem] rounded-md"
                   src={src + item.poster_path} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-xl lg:text-2xl">{item.title.slice(0,12)}</h2>
                  <div className="absolute bottom-2 md:text-sm text-[10px] right-2 flex">
                    <span className="text-yellow-400 font-bold mr-1">
                      <FontAwesomeIcon className=" " icon={faStar} />
                    </span>
                    <p>{item.vote_average.toString().slice(0, 3)}</p>
                  </div>
                </div>
            </Link>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default page;
