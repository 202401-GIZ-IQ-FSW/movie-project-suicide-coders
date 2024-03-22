"use client";
import { getRandomNumber } from "../../../functions/RandomNumber";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Main = ({ trendingNowMoviesData }) => {
  const [heroMovieData, setHeroMovieData] = useState();

  useEffect(() => {
    setHeroMovieData(trendingNowMoviesData.results[getRandomNumber(10)]);
  }, []);
  const src = "https://image.tmdb.org/t/p/original";

  return (
    <>
      {heroMovieData ? (
        <div key={1} className="relative mb-3 md:hidden h-[50vh] flex justify-center items-center p-2 ">
          <img
            className="absolute blur-sm w-screen h-full opacity-60 clip"
            src={src + heroMovieData.backdrop_path}
          />
          <Link
            href={{
              pathname: `/movies/${heroMovieData.id}`,
            }}
          >
            <h4 className=" absolute top-1 left-3">Trending</h4>
            <div className=" absolute bottom-3 right-3 flex">
              <p>{heroMovieData.vote_average.toString().slice(0, 3)}</p>
              <span className="text-yellow-400 font-bold ml-2">
                <FontAwesomeIcon className=" " icon={faStar} />
              </span>
            </div>
            <div className="card  flex flex-row p-3 text-white">
              <figure>
                <img
                  style={{
                    width: "10rem",
                    height: "13rem",
                  }}
                  className="h-full rounded-md"
                  src={src + heroMovieData.poster_path}
                  alt="!"
                />
              </figure>
              <div className="card-body self-center text-slate-700 dark:text-white">
                <h2 className="card-title font-bold rounded-md">
                  {heroMovieData.original_title}
                </h2>
                <p className="text-wrap ti w-32">
                  {heroMovieData.overview.slice(0, 50)}...
                </p>
                <p className="font-bold">
                  {heroMovieData.release_date.slice(0, 4)}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ) : (
        ""
      )}
      {heroMovieData ? (
        <div className="relative mb-3 h-[70vh] md:flex justify-center items-center hidden  ">
          <img
            className="absolute blur-sm w-screen h-full opacity-60 clip-lg"
            src={src + heroMovieData.backdrop_path}
          />
          <Link
            href={{
              pathname: `/movies/${heroMovieData.id}`,
            }}
          >
            <h4 className=" absolute top-1 left-3">Trending</h4>
            <div className=" absolute bottom-3 right-3 flex">
              <p>{heroMovieData.vote_average.toString().slice(0, 3)}</p>
              <span className="text-yellow-400 font-bold ml-2">
                <FontAwesomeIcon className=" " icon={faStar} />
              </span>
            </div>
            <div className="card  flex flex-row p-3 text-white">
              <figure>
                <img
                  style={{
                    width: "15rem",
                    height: "20rem",
                  }}
                  className="h-full rounded-md"
                  src={src + heroMovieData.poster_path}
                  alt="!"
                />
              </figure>
              <div className="card-body self-center text-slate-900 dark:text-white">
                <h2 className="card-title font-bold rounded-md text-4xl  w-72">
                  {heroMovieData.original_title}
                </h2>
                <p className="text-wrap ti w-64">
                  {heroMovieData.overview.slice(0, 120)}...
                </p>
                <p className="font-bold">
                  {heroMovieData.release_date.slice(0, 4)}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ) : (
        ""
      )}
      <div>
      <div className="px-4 pt-5">
        <h1 className="text-3xl">
            Trending
        </h1>
        <span className=""></span>
      </div>
        <div className="carousel carousel-center   p-4 pt-1 space-x-4 bg-neutral rounded-box my-5 max-w-full">
          {trendingNowMoviesData.results.map((item, i) => (
            <div className="carousel-item "  key={i}>
              <Link
                href={{
                  pathname: `/movies/${item.id}`,
                }}
               
              >
                <img
                  style={{
                    width: "15rem",
                  }}
                  className=" rounded-md"
                  src={src + item.poster_path}
                  alt="!"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
