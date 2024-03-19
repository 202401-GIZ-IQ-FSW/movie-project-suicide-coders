"use server"
import Image from "next/image";
import { nowPlayingMovies, popularMovies, topRatedMovies, upComingMovies } from "@/data/API/mainApi";
import { movieDetails } from "@/data/API/movieDetailsApi";

import Input from "@/components/Input/Input";



export default async function Home() {

  // Bring json data from api functions and assign it to a variable
  // Please if you have any note let me know "Moahmmed Nazar"
  const nowPlayingMoviesData = await nowPlayingMovies();
  const popularMoviesData = await popularMovies();
  const topRatedMoviesData = await topRatedMovies();
  const upComingMoviesData = await upComingMovies();
  const movieDetailsData = await movieDetails();

 async function retrunDataFromClientSide(data) {
  "use server";
    return await data;
  }

  
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Input movieDeatils={movieDetails} ret={retrunDataFromClientSide}/>
    </main>
  );
}
