import {
  topRatedMovies,
  upComingMovies,
  nowPlayingMovies,
  popularMovies,
  trendingNowMovies,
  SearchQuery
} from "@/data/API/mainApi";
import MoivesQuery from "@/components/QueryData/MoivesQuery";
import Main from "@/components/landingPage/Main";


async function page({ searchParams }) {
  let pageNumber = searchParams.page ? searchParams.page : 1;
  let moviesParam = searchParams.movies;
  let genresParams = searchParams.genre;
  let searchParam = searchParams.search;
  let TrendParams = searchParams.trendTime ? searchParams.trendTime : "day";

  let topRatedMoviesData = await topRatedMovies(pageNumber);
  let popularMoviesData = await popularMovies(pageNumber);
  let nowPlayingMoviesData = await nowPlayingMovies(pageNumber);
  let upComingMoviesData = await upComingMovies(pageNumber);
  let trendingNowMoviesData = await trendingNowMovies(TrendParams);
  let SearchQueryData =  await SearchQuery(searchParam, pageNumber)
  if (genresParams) {
    topRatedMoviesData.results = topRatedMoviesData.results.filter(movie => movie.genre_ids.includes(genresParams-1+1));
    popularMoviesData.results = popularMoviesData.results.filter(movie => movie.genre_ids.includes(genresParams-1+1));
    nowPlayingMoviesData.results = nowPlayingMoviesData.results.filter(movie => movie.genre_ids.includes(genresParams-1+1));
    upComingMoviesData.results = upComingMoviesData.results.filter(movie => movie.genre_ids.includes(genresParams-1+1));
    trendingNowMoviesData.results = trendingNowMoviesData.results.filter(movie => movie.genre_ids.includes(genresParams-1+1));
  }

  

  return <div>
   {moviesParam == "Top Rate" && <MoivesQuery data={topRatedMoviesData} title="Top Rate" pageNumber={pageNumber}/>}
   {moviesParam == "Popular" && <MoivesQuery data={popularMoviesData} title="Popular" pageNumber={pageNumber}/>}
   {moviesParam == "Now playing" && <MoivesQuery data={nowPlayingMoviesData} title="Now playing" pageNumber={pageNumber}/>}
   {moviesParam == "Upcoming" && <MoivesQuery data={upComingMoviesData} title="Upcoming" pageNumber={pageNumber}/>}
   {moviesParam == "Trending" && <MoivesQuery data={trendingNowMoviesData} title="Trending" pageNumber={pageNumber}/>}
   {searchParam && <MoivesQuery data={SearchQueryData} title={`Search " ${searchParam} "`} pageNumber={pageNumber}/>}

   {!moviesParam && !searchParam && <Main
        trendingNowMoviesData={trendingNowMoviesData}
        popularMoviesData={popularMoviesData}
        topRatedMoviesData={topRatedMoviesData}
        upComingMoviesData={upComingMoviesData}
        nowPlayingMoviesData={nowPlayingMoviesData}
      />}
  </div>;
}

export default page;
