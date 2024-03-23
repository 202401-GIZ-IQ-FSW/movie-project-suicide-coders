"use client";
import { getRandomNumber } from "../../../functions/RandomNumber";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import SectionsMovie from "../../components/sections/SectionsMovie"

const Main = ({ trendingNowMoviesData,nowPlayingMoviesData,popularMoviesData,upComingMoviesData,topRatedMoviesData }) => {
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
      <SectionsMovie title="Trending" moviesData={trendingNowMoviesData}/>
      <SectionsMovie title="Now Playing" moviesData={nowPlayingMoviesData}/>
      <SectionsMovie title="Coming Soon" moviesData={upComingMoviesData}/> 
      <SectionsMovie title="Top Rated" moviesData={topRatedMoviesData}/>
      <SectionsMovie title="Popular" moviesData={popularMoviesData}/>

      </div>
    </>
  );
};

export default Main;
