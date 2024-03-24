"use server";
import {
  nowPlayingMovies,
  popularMovies,
  topRatedMovies,
  upComingMovies,
  trendingNowMovies,
} from "@/data/API/mainApi";
import { popularActors } from "@/data/API/actors";
import Main from "@/components/landingPage/Main";

export default async function Home({searchParams }) {
  const TrendParams = searchParams[Object.keys(searchParams)] ? searchParams[Object.keys(searchParams)] : "day";
  // Bring json data from api functions and assign it to a variable
  // Please if you have any note let me know "Moahmmed Nazar"
  const nowPlayingMoviesData = await nowPlayingMovies();
  const popularMoviesData = await popularMovies();
  const topRatedMoviesData = await topRatedMovies();
  const upComingMoviesData = await upComingMovies();
  const trendingNowMoviesData = await trendingNowMovies(TrendParams);

  // Movies deatils data
  // const movieDetailsData = await movieDetails();

  // Actors data
  const popularActorsData = await popularActors();

  async function retrunDataFromClientSide(data) {
    "use server";
    return await data;
  }

  return (
    <div>
      <Main
        trendingNowMoviesData={trendingNowMoviesData}
        popularMoviesData={popularMoviesData}
        topRatedMoviesData={topRatedMoviesData}
        upComingMoviesData={upComingMoviesData}
        nowPlayingMoviesData={nowPlayingMoviesData}
      />
    </div>
  );
}
