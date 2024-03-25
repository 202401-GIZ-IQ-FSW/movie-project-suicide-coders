import { movieDetails  } from "@/data/API/movieDetailsApi";
  
async function page({params}) {
    const movieId = params.id;

    const currentMovieDetail = await movieDetails(movieId)
    console.log(currentMovieDetail)
return (
  <div className="overflow-x-hidden  ">
<div className="relative h-[500px] md:h-[800px]  text-center">
  <img className="w-full h-full object-cover     " src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
  <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black  to-transparent"></div>
  <div className="absolute top-0   w-full h-full flex-col  flex items-center  justify-end">
  <div className="text-white text-4xl md:text-6xl font-bold">{currentMovieDetail.title}</div>
    <div className="flex flex-col items-center text-[11px] text-white ">  
  <div className="flex items-center mt-4">
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
</div >
<div className="flex flex-col text-center items-center justify-center mt-4 text-xl space-y-4 md:flex-row md:justify-center md:items-end  md:gap-5 md:my-5">
  <button className="bg-white text-black px-4 py-2 rounded w-[220px] h-[36px] hover:bg-gray-400 transition-colors duration-200 flex items-center justify-center">
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64"><path fill="#FFFFFF" d="M61 18L45 2v10H3v12h42v10zM8 62c-3.3 0-6-2.8-6-6.3h3c0 1.6 1.3 3 3 3s3-1.3 3-3s-1.3-3-3-3c-3.3 0-6-2.8-6-6.3C2 42.8 4.7 40 8 40s6 2.8 6 6.3h-3c0-1.6-1.3-3-3-3s-3 1.3-3 3s1.3 3 3 3c3.3 0 6 2.8 6 6.3c0 3.6-2.7 6.4-6 6.4m16 0c-3.3 0-6-2.8-6-6.3v-9.3c0-3.5 2.7-6.3 6-6.3s6 2.8 6 6.3v9.3c0 3.5-2.7 6.3-6 6.3m0-18.6c-1.7 0-3 1.3-3 3v9.3c0 1.6 1.3 3 3 3s3-1.3 3-3v-9.3c0-1.7-1.3-3-3-3M40 62c-3.3 0-6-2.8-6-6.3v-9.3c0-3.5 2.7-6.3 6-6.3s6 2.8 6 6.3v9.3c0 3.5-2.7 6.3-6 6.3m0-18.6c-1.7 0-3 1.3-3 3v9.3c0 1.6 1.3 3 3 3s3-1.3 3-3v-9.3c0-1.7-1.3-3-3-3m13 4.3L58.8 62H62V40h-3v14.3L53.2 40H50v22h3z"/></svg>
    Watch Now
  </button>
  <button className="bg-white text-black px-4 py-2 rounded w-[220px] h-[36px] hover:bg-gray-400 transition-colors duration-200 flex items-center justify-center">
  <svg xmlns="http://www.w3.org/2000/svg" width="1.43em" height="1em" viewBox="0 0 256 180"><path fill="#f00" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"/><path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"/></svg>
    Trailer 
  </button>
</div>
 


</div>  
     </div>
    

   
</div>
<div className="flex-col md:p-10   mx-4 items-start justify-start h-auto md:w-2/5  ">
  {/* Rest of your code */}
  <div className="mt-4 p-4 border text-black  border-gray-200 rounded-[32px]  bg-gray-200 shadow-xl  md:bg-gray-50 ">
    <h2 className="text-2xl mb-2">Overview</h2>
    <p className="whitespace-pre-line">{currentMovieDetail ? currentMovieDetail.overview : ""}</p>
  </div>
</div>
 <div> 
 
 <div className="flex-col my-4 mx-4 items-start justify-start h-auto">
  {/* Rest of your code */}
  <div className="mt-4 p-4 md:p-10 rounded shadow">
    <h2 className="text-2xl mb-2">Information</h2>
    <div className="border-b border-gray-200 w-3/5 my-2" />

    <div>
      <p className="text-xl">Status</p> <p className="text-[12px] text-gray-400 ">{currentMovieDetail ? currentMovieDetail.status : ""}</p>
      <div className="border-b border-gray-200  w-3/5 my-2" />
    </div>
    <div>
      <p className="text-xl">Release Date</p>  <p  className="text-[12px] text-gray-400">  {currentMovieDetail.release_date}</p>
      <div className="border-b border-gray-200  w-3/5 my-2" />
    </div>
    <div>
      <p className="text-xl">Runtime</p> <p className="text-[12px] text-gray-400 ">  {Math.floor(currentMovieDetail.runtime / 60)} hr {currentMovieDetail.runtime % 60} min </p>
      <div className="border-b border-gray-200  w-3/5 my-2" />
    </div>
        
    <p className="text-xl">Votes</p><p className="text-[12px] text-gray-400"> {currentMovieDetail.vote_count}<sub>Count</sub> | {currentMovieDetail.vote_average}<sub>Average </sub>  </p>
      <div className="border-b border-gray-200 w-3/5 my-2" />
    <div>
      <p className="text-xl">Languages</p><p className="text-[12px]  w-3/5 text-gray-400"> 
        {currentMovieDetail && currentMovieDetail.spoken_languages && currentMovieDetail.spoken_languages.map((language, index) => (
          <span key={index}> {language.name} | </span> 
        ))}
      </p>
      <div className="border-b border-gray-200 w-1/2 my-2" />
    </div>
  </div>
</div>
      {/* <div className="flex-grow">
                  <div className="font-semibold flex relative items-center  ">Synopsis</div>
                  <div className="ml-auto ">{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
              </div> */}
      
      <div className="  flex  justify-center items-center my-6  gap-2 ">
           {
              currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="_blank" style={{textDecoration: "none"}}>
                <p><span className=" flex justify-center items-center rounded-3xl cursor-pointer w-[150px]  text-black bold bg-red-500  ">Homepage <i className="ml-[1.4rem]"></i></span></p></a>
          }
          {
              currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" style={{textDecoration: "none"}}>
                <p><span className=" flex justify-center items-center rounded-3xl cursor-pointer w-[150px]  text-black bold bg-[#f3ce13]">IMDb<i className="ml-[1.4rem]"></i></span></p></a>
          }
      </div>      
        <div className=" text-center text-xl">Production companies</div>

      <div className="flex justify-center items-center ">
      {
        currentMovieDetail.production_companies.map(company => (
              <>
                  {
                      
                      <span className=" flex items-center justify-center ">
                          <img className="w-28 mx-8" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                       </span>
                  }
              </>
          ))
      }
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
  {/*  */}
</div>

 

)
}

 
export default page
