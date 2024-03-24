import { movieDetails  } from "@/data/API/movieDetailsApi";
  
async function page({params}) {
    const movieId = params.id;

    const currentMovieDetail = await movieDetails(movieId)
    
return (
  <div className="">
<div className="relative h-[500px] md:h-[700px] text-center">
  <img className="w-full h-full object-cover object-center" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
  <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black  to-transparent"></div>
  <div className="absolute top-0   w-full h-full flex-col  flex items-center  justify-end">
    <span  className="text-white  text-4xl font-bold ">{currentMovieDetail.title}</span>
    <div className="flex flex-col items-center text-[11px] text-white ">  
  <span className="flex items-center">
    <p>{Math.floor(currentMovieDetail.runtime / 60)} hr {currentMovieDetail.runtime % 60} min  </p>  
    <span className="mx-2">|</span>
    <p>{new Date(currentMovieDetail.release_date).getFullYear() }</p>
    <span className="mx-1">|</span>
   <span> 
     {
      currentMovieDetail.genres.map((genre , index ) => (
       
           
          <span  key={genre.id}>{genre.name}
          {index<  currentMovieDetail.genres.length-1 && <span className="mx-2 ">|</span>}
        
        </span>
    ))
     }
  </span>
</span >
<div className="flex flex-col text-center items-center justify-center mt-4 text-xl space-y-4">
  <button className="bg-white text-black px-4 py-2 rounded w-[220px] h-[36px] hover:bg-gray-400 transition-colors duration-200">Watch Now</button>
  <button className="bg-white text-black px-4 py-2 rounded w-[220px] h-[36px] hover:bg-gray-400 transition-colors duration-200"> Trailer</button>
</div>
<span> 
   {currentMovieDetail.overview}
</span>


</div>
      </div>
</div>

  {/* <div className="relative flex justify-between w-9/12 bottom-[120px]">
      <div className=" ">Useful Links</div>
      {
          currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="_blank" style={{textDecoration: "none"}}>
            <p><span className="bg-red-700 p-2 md:p-4 lg:p-6 xl:p-8 rounded-lg flex justify-center items-center cursor-pointer w-40 text-black font-bold">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
      }
      {
          currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" style={{textDecoration: "none"}}>
            <p><span className="bg-yellow-500 p-2 md:p-4 lg:p-6 xl:p-8 rounded-lg flex justify-center items-center cursor-pointer w-40 text-black font-bold">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
      }
  </div> */}
  {/* <div className="text-4xl">Production companies</div>
  <div className="flex justify-center items-end mb-16 w-[85%] ">
      {
          currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map(company => (
              <>
                  {
                      company.logo_path 
                      && 
                      <span className="flex flex-col items-center justify-center">
                          <img className="w-48 m-8" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                          <span>{company.name}</span>
                      </span>
                  }
              </>
          ))
      }
  </div> */}
</div>

 

)
}

 
export default page
