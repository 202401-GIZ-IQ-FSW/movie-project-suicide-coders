import SingleMovie from "@/components/MoviesPage/SingleMovie";
import { ActorDetails } from "@/data/API/actors";
import { movieDetails, MovieVideos, ActorsInMovie } from "@/data/API/movieDetailsApi";

async function page({ params }) {
  const movieId = params.id;
  const currentMovieDetail = await movieDetails(movieId);
  let movieVideosData = await MovieVideos(movieId);
  let actorsInMovieData = await ActorsInMovie(movieId);
   const data = [];

  
movieVideosData.results = movieVideosData.results.filter((movie)=> movie.name.toLowerCase().includes("Official Trailer".toLocaleLowerCase()));
  

  return (
    <>
      <SingleMovie currentMovieDetail={currentMovieDetail} movieVideosData={movieVideosData}/>
    </>
  );
}

export default page;
