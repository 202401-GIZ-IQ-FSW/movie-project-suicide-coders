"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjY0YjA0ZjRmNWIwNjIyM2ViMzc1NTY1YTUyMDUzZSIsInN1YiI6IjY0ZDhjMjgyZDEwMGI2MDBjNWQxZTE5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SJXyr7jQfr88SxA0Y8y9RU0BW48Nuo_wSsrzp_iN5nE",
  },
};

const SingleMovie = ({ currentMovieDetail, movieVideosData }) => {
  const [actorsData, setActorData] = useState();
  const src = "https://image.tmdb.org/t/p/original";

  async function ActorsInMovie(id) {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      options
    );
    const data = await res.json();
    setActorData(data);
  }

  useEffect(() => {
    ActorsInMovie(currentMovieDetail.id);
  }, []);

  const handleCick = () => document.getElementById("my_modal_1").showModal();
  return (
    <div className="overflow-x-hidden  ">
      <div className="relative h-[60vh] md:h-[80vh]  text-center ">
        <img
          className="w-full h-full object-cover rounded-md"
          src={`https://image.tmdb.org/t/p/original${
            currentMovieDetail ? currentMovieDetail.backdrop_path : ""
          }`}
        />
        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black  to-transparent"></div>
        <div className="absolute top-0   w-full h-full flex-col  flex items-center  justify-end">
          <div className="text-white text-4xl md:text-6xl font-bold">
            {currentMovieDetail.title}
          </div>
          <div className="flex flex-col items-center text-[11px] text-white ">
            <div className="flex items-center mt-4">
              <p>
                {Math.floor(currentMovieDetail.runtime / 60)} hr{" "}
                {currentMovieDetail.runtime % 60} min{" "}
              </p>
              <span className="mx-2">|</span>
              <p>{new Date(currentMovieDetail.release_date).getFullYear()}</p>
            </div>
            <div
              onClick={handleCick}
              className="mb-6 mt-5 flex text-xl cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 "
                viewBox="0 0 256 180"
              >
                <path
                  fill="#f00"
                  d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"
                />
                <path
                  fill="#fff"
                  d="m102.421 128.06l66.328-38.418l-66.328-38.418z"
                />
              </svg>
              <button className="dm mx-2">Trailer</button>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of your code */}
      <div className="mt-4 md:p-10 p-8 ">
        <h2 className="md:text-3xl text-xl mb-4 dm">Overview</h2>
        <p className="whitespace-pre-line font-light pt md:text-xl text-base">
          {currentMovieDetail ? currentMovieDetail.overview : ""}
        </p>
      </div>

      <div>
        <div className="flex-col md:px-6 px-4  items-start justify-start h-auto">
          {/* Rest of your code */}
          <div className="mt-4 p-4 md:px-3 px-2">
            <div className="mb-3">
              <p className="text-xl dm mb-1">Status</p>{" "}
              <p className="text-[12px] text-gray-400 ">
                {currentMovieDetail ? currentMovieDetail.status : ""}
              </p>
            </div>
            <div className="mb-3">
              <p className="text-xl dm mb-1">Release Date</p>{" "}
              <p className="text-[12px] text-gray-400">
                {" "}
                {currentMovieDetail.release_date}
              </p>
            </div>
            <div className="mb-3">
              <p className="text-xl dm mb-1">Runtime</p>{" "}
              <p className="text-[12px] text-gray-400 ">
                {" "}
                {Math.floor(currentMovieDetail.runtime / 60)} hr{" "}
                {currentMovieDetail.runtime % 60} min{" "}
              </p>
            </div>
            <div className="mb-3">
              <p className="text-xl dm mb-1">Votes</p>
              <p className="text-[12px] text-gray-400">
                {" "}
                {currentMovieDetail.vote_count}
                <sub>Count</sub> | {currentMovieDetail.vote_average}
                <sub>Average </sub>{" "}
              </p>
            </div>
            <div className="mb-3">
              <p className="text-xl dm mb-1">Genres</p>
              <div className="flex justify-start">
                {currentMovieDetail.genres.map((i) => (
                  <Link
                  key={i.id}
                    href={{
                      pathname: `/movies`,
                      query: { genre: i.id },
                    }}
                  >
                    {" "}
                    <p className="text-[12px] text-gray-400 mr-1">{i.name} |</p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="mb-3">
              <p className="text-xl dm mb-1">Languages</p>
              <p className="text-[12px]  w-3/5 text-gray-400">
                {currentMovieDetail &&
                  currentMovieDetail.spoken_languages &&
                  currentMovieDetail.spoken_languages.map((language, index) => (
                    <span key={index}>
                      {" "}
                      {language.name}{" "}
                      {currentMovieDetail.spoken_languages.length > index
                        ? "|"
                        : ""}{" "}
                    </span>
                  ))}
              </p>
            </div>
          </div>
        </div>
        <div className="md:px-10 px-8 ">
          <h4 className="md:text-2xl text-base">Movie Credits</h4>
          <div className="carousel carousel-center  pt-1 space-x-4 bg-neutral rounded-box my-5 max-w-full ">
            {actorsData?.cast.slice(0, 11).map((actor, i) => (
              <div
                key={i}
                className="carousel-item card card-compact bg-base-100 shadow-xl md:w-[13rem] w-[9rem]  h-full m-1"
              >
                <Link
                  href={{
                    pathname: `/actors/${actor.id}`,
                  }}
                >
                  <figure>
                    <img
                      className="w-[14rem] rounded-md"
                      src={src + actor.profile_path}
                      alt={actor.name}
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-base lg:text-xl">
                      {actor.name}
                    </h2>
                    <p>Popularity: {actor.popularity.toFixed(1)}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h4 className="md:px-10 px-8 text-start md:text-xl text-sm dm">
          Production companies
        </h4>

        <div className="flex md:px-10 px-8">
          {currentMovieDetail.production_companies.map((company) => (
            <div key={company.id}>
              {
                <span className=" flex items-center justify-center py-5">
                  <img
                    className="w-[7rem] h-[7rem] mx-3 object-fill"
                    src={
                      "https://image.tmdb.org/t/p/original" + company.logo_path
                    }
                  />
                </span>
              }
            </div>
          ))}
        </div>
      </div>
      <dialog id="my_modal_1" className="modal ]">
        <div className="modal-box w-full h-full">
          <iframe
            className="w-full h-[40vh] mt-20"
            src={`https://www.youtube.com/embed/${movieVideosData.results[0].key}`}
            title={currentMovieDetail.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default SingleMovie;
