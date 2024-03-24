"use client"
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import MovieCard from "../Card/MovieCard";
import { useSearchParams } from "next/navigation";

const MoivesQuery = ({title, data, pageNumber}) => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const genreParams = searchParams.get("genre");
  const moviesParams = searchParams.get("movies");
  const pageParams = searchParams.get("page");
  const searchParam = searchParams.get("search");


  const handleClick = ({target}) => {
    router.push(`/movies?${searchParam ? "search="+searchParam : "movies="+title }&page=${target.value}${genreParams && !searchParam ? "&genre="+genreParams: ""}`)
  }


  return (
    <div className="py-2 lg:px-10 px-5">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">{title} Movies</h1>
        {
          genreParams && <span onClick={()=>{
          router.push(`/movies?movies=${title}&page=${pageParams? pageParams : 1}`)
        }} className=" text text-red-600 cursor-pointer text-[8px] mx-[2px] lg:text-sm ">reset <b>Genres</b></span>
        }
        {title != "Trending"&& <div className="join ">
        <button onClick={()=>{
            pageNumber > 1 ? router.push(`/movies?${searchParam ? "search="+searchParam : "movies="+title }&page=${pageNumber - 1}${genreParams && !searchParam ? "&genre="+genreParams: ""}`): false;
          }} className="join-item btn md:text-[16px] md:mx-2 text-red-600"><FontAwesomeIcon icon={faBackward}/></button>
          <button onClick={handleClick} value={pageNumber} className="join-item btn md:text-[16px] md:mx-2">{pageNumber}</button>
          <button onClick={()=>{
            router.push(`/movies?${searchParam ? "search="+searchParam : "movies="+title }&page=${1}${genreParams && !searchParam ? "&genre="+genreParams: ""}`)
          }}  className="join-item btn md:text-[16px] md:mx-2">Reset</button>
          <button onClick={handleClick} value={data.total_pages > 1000 ? 500 : data.total_pages} className="join-item btn md:text-[16px] md:mx-2">{data.total_pages > 1000 ? 500 : data.total_pages}</button>
          <button onClick={()=>{
            pageNumber < 500 ? router.push(`/movies?${searchParam ? "search="+searchParam : "movies="+title }&page=${pageNumber - 1 + 2}${genreParams && !searchParam ? "&genre="+genreParams: ""}`): false;
          }} className="join-item btn md:text-[16px] md:mx-2 text-red-600"><FontAwesomeIcon icon={faForward}/></button>
        </div>}

      </div>
      <div className="flex flex-wrap gap-2 items-center py-5 justify-evenly">
      {data?.results.map((movie,i)=>
      <MovieCard key={i} moiveData={movie}/>
      )}
      </div>
    </div>
  );
};

export default MoivesQuery;
