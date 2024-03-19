"use server"
import Image from "next/image";
import { nowPlayingMovies, popularMovies, topRatedMovies, upComingMovies,trendingNowMovies } from "@/data/API/mainApi";
import { movieDetails } from "@/data/API/movieDetailsApi";
import { popularActors } from "@/data/API/actors";


import Input from "@/components/Input/Input";
import NowPlayingMovies from "@/components/sections/NowPlayingMovies";



export default async function Home() {

  // Bring json data from api functions and assign it to a variable
  // Please if you have any note let me know "Moahmmed Nazar"
  const nowPlayingMoviesData = await nowPlayingMovies();
  const popularMoviesData = await popularMovies();
  const topRatedMoviesData = await topRatedMovies();
  const upComingMoviesData = await upComingMovies();
  const trendingNowMoviesData = await trendingNowMovies();

  // Movies deatils data
  const movieDetailsData = await movieDetails();

  // Actors data
  const popularActorsData = await popularActors();

  

 async function retrunDataFromClientSide(data) {
  "use server";
    return await data;
  }


  
  
  return (
    <>
    <h1>Lap Lap La</h1>
    </>
  );
}
