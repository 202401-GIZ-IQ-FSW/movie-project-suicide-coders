import SingleMovie from "@/components/MoviesPage/SingleMovie";
import { ActorDetails } from "@/data/API/actors";
import { movieDetails, MovieVideos, ActorsInMovie, MovieSimilar } from "@/data/API/movieDetailsApi";

async function page({ params }) {
  const movieId = params.id;
  const currentMovieDetail = await movieDetails(movieId);
  let movieVideosData = await MovieVideos(movieId);
  let movieSimilarData = await MovieSimilar(movieId)
  
  movieVideosData.results = movieVideosData.results.filter((movie)=> movie.name.toLowerCase().includes("Official Trailer".toLocaleLowerCase()));
  

  return (
    <>
      <SingleMovie currentMovieDetail={currentMovieDetail} movieVideosData={movieVideosData} movieSimilarData={movieSimilarData}/>
    </>
  );
}

export default page;
