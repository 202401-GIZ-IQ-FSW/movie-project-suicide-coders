"use server"
import Image from "next/image";
import { nowPlayingMovies, popularMovies, topRatedMovies, upComingMovies,trendingNowMovies } from "@/data/API/mainApi";
import { movieDetails } from "@/data/API/movieDetailsApi";
import { popularActors } from "@/data/API/actors";


import Input from "@/components/Input/Input";



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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Input movieDeatils={movieDetails} ret={retrunDataFromClientSide}/>
      <img className="w-5/12" src={`https://image.tmdb.org/t/p/original/g4jSGWknRJhuxbxeWQXbP1yDBvV.jpg`} />
    </main>
  );
}
