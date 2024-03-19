import { nowPlayingMovies } from "@/data/API/mainApi"

async function NowPlayingMovies (){
    const nowPlayingMoviesData = await nowPlayingMovies();


  return (
    <div>
    
    </div>
  )
}

export default NowPlayingMovies